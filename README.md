# Queen's Personal Finance (QPF) Website

A modern, mobile-first website for Queen's Personal Finance club built with Next.js, React, and Tailwind CSS.

## 🚀 Tech Stack

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Vercel (Deployment)

## 📁 Project Structure

```
src/
├── app/                    # App router pages
├── components/             # Reusable components
│   ├── layout/            # Layout components
│   ├── shared/            # Shared UI components
│   └── sections/          # Page-specific sections
├── styles/                # Global styles
├── lib/                   # Utility functions
└── types/                 # TypeScript types
```

## 🛠️ Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000)

## 📝 Features

- Mobile-first responsive design
- Clean, minimalist interface
- Serif typography
- Gold and white color palette
- Instagram feed integration
- Contact form
- Team member showcase
- Membership registration

## 🎨 Brand Colors

- Primary Gold: #B39B57
- White: #FFFFFF
- Text Dark: #333333

## 📱 Pages

- Home
- About Us
- Team
- Membership
- Join Us
- Contact 

## 📸 Required Background Images

Place the following images in the `/public/images/` directory:

1. `hero-bg.jpg` - A high-quality image of Goodes Hall or a finance-related scene
   - Recommended size: 1920x1080px
   - Used in: Hero section full-screen background

2. `mission-bg.jpg` - An image of students collaborating or studying
   - Recommended size: 1200x800px
   - Used in: Mission section side background

3. `pattern.png` - A subtle financial or geometric pattern
   - Recommended size: 60x60px (will be tiled)
   - Used in: Three Pillars section background pattern

4. `stats-bg.jpg` - An image of Queen's University campus
   - Recommended size: 1920x600px
   - Used in: Statistics section background

5. `quote-bg.jpg` - A subtle texture or pattern
   - Recommended size: 1920x800px
   - Used in: Quote section diagonal background

Image Guidelines:
- Use high-quality, well-lit images
- Ensure good contrast for overlaid text
- Compress images for web use
- Consider mobile responsiveness
- Maintain consistent color scheme with brand colors 