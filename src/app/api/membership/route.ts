import { NextRequest, NextResponse } from 'next/server'
import * as XLSX from 'xlsx'
import { promises as fs } from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, year, faculty } = body

    // Validate required fields
    if (!name || !email || !year || !faculty) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate Queen's email format
    const queensEmailRegex = /^[a-zA-Z0-9._%+-]+@queensu\.ca$/
    if (!queensEmailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please use your Queen\'s email address (@queensu.ca)' },
        { status: 400 }
      )
    }

    // Add timestamp
    const submissionData = {
      name,
      email,
      year,
      faculty,
      submittedAt: new Date().toISOString(),
    }

    // Path to the Excel file
    const excelFilePath = '/Users/alexlevesque/Library/CloudStorage/OneDrive-Queen\'sUniversity/!Queen\'s Engineering/Miscellaneous/membership-applications.xlsx'
    
    // Ensure the data directory exists
    const dataDir = path.dirname(excelFilePath)
    await fs.mkdir(dataDir, { recursive: true })

    let workbook: XLSX.WorkBook
    let worksheet: XLSX.WorkSheet

    try {
      // Try to read existing file
      const existingData = await fs.readFile(excelFilePath)
      workbook = XLSX.read(existingData, { type: 'buffer' })
      worksheet = workbook.Sheets[workbook.SheetNames[0]]
    } catch (error) {
      // Create new workbook if file doesn't exist
      workbook = XLSX.utils.book_new()
      worksheet = XLSX.utils.json_to_sheet([])
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Membership Applications')
    }

    // Get existing data
    const existingRows = XLSX.utils.sheet_to_json(worksheet)
    
    // Add new row
    const updatedRows = [...existingRows, submissionData]
    
    // Convert back to worksheet
    const newWorksheet = XLSX.utils.json_to_sheet(updatedRows)
    
    // Update workbook
    workbook.Sheets[workbook.SheetNames[0]] = newWorksheet

    // Write to file
    const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' })
    await fs.writeFile(excelFilePath, buffer)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully!',
        data: submissionData
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing membership application:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 