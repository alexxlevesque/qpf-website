import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }

    // Check if Resend is configured
    if (!resend) {
      console.error('Resend API key not configured')
      return NextResponse.json(
        { error: 'Email service not configured. Please try again later.' },
        { status: 500 }
      )
    }

    // Create email content
    const emailContent = `
New Contact Form Submission from QPF Website

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This message was sent from the QPF website contact form.
    `.trim()

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'QPF Website <noreply@qpf-website.com>',
      to: ['e.madruga@queensu.ca'],
      subject: `QPF Contact: ${subject}`,
      text: emailContent,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! We\'ll get back to you soon.'
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 