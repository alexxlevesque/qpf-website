# Queen's Personal Finance (QPF) Website

A modern, mobile-first website for Queen's Personal Finance club built with Next.js, React, and Tailwind CSS.

## 🚀 Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Vercel (Deployment)
- Resend (Email Service)

## 📧 Email Setup

This project uses Resend for sending contact form emails. To set up email functionality:

### Local Development
1. Sign up for a free account at [Resend](https://resend.com)
2. Create an API key in your Resend dashboard
3. Create a `.env.local` file in the project root
4. Add your Resend API key:
   ```
   RESEND_API_KEY=your_resend_api_key_here
   ```

### Production Deployment (Vercel)
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add a new environment variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `your_resend_api_key_here`
4. Redeploy your project

## License

This code is licensed under the BSD 2-Clause License.  
**However, it is shared for display purposes only as part of a freelance portfolio.**  
Please do not reuse or deploy this code without permission.