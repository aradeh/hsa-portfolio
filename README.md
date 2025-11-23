# HSA Photography Portfolio

A modern, responsive photography portfolio web application built with **Next.js 14+**, **React**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

- **Fully Responsive Design** - Mobile-first approach with adaptive layouts
  - Mobile breakpoint: < 640px
  - Tablet breakpoint: 640px - 1024px
  - Desktop breakpoint: ≥ 1024px

- **Modern Tech Stack**
  - ⚡ Next.js 14+ with App Router
  - ⚛️ React 18
  - 📘 TypeScript for type safety
  - 🎨 Tailwind CSS for styling
  - 🖼️ Built-in image optimization

- **Key Sections**
  - **Header** - Sticky navigation with mobile menu
  - **Hero** - Eye-catching landing section
  - **Gallery** - Responsive image grid with hover effects
  - **About** - Personal introduction with stats
  - **Contact** - Professional contact form
  - **Footer** - Social links and quick navigation

- **Performance Optimized**
  - Server-side rendering (SSR)
  - Static site generation (SSG)
  - Automatic code splitting
  - Image optimization
  - Fast load times

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository** (or navigate to project directory)
   ```bash
   cd hsa_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit: `http://localhost:3000`
   - The page will auto-refresh on changes

## 📁 Project Structure

```
hsa_portfolio/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts        # Contact form API endpoint
│   │   ├── layout.tsx              # Root layout with metadata
│   │   └── page.tsx                # Home page
│   ├── components/
│   │   ├── Header.tsx              # Navigation header
│   │   ├── Hero.tsx                # Hero section
│   │   ├── Gallery.tsx             # Photo gallery
│   │   ├── About.tsx               # About photographer
│   │   ├── Contact.tsx             # Contact form
│   │   └── Footer.tsx              # Footer
│   └── styles/
│       └── globals.css             # Global styles with Tailwind
├── public/                          # Static assets
├── package.json                     # Dependencies and scripts
├── tailwind.config.js               # Tailwind configuration
├── next.config.js                   # Next.js configuration
└── tsconfig.json                    # TypeScript configuration
```

## 🎨 Tailwind CSS Configuration

The project includes custom Tailwind configuration:

```javascript
// Colors
- primary: #1f2937 (dark gray)
- secondary: #6b7280 (medium gray)
- accent: #3b82f6 (blue)

// Additional spacing
- 128: 32rem
- 144: 36rem
```

## 🔌 API Routes

### POST `/api/contact`

Submit contact form inquiries.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Photography Inquiry",
  "message": "I would like to book a session..."
}
```

**Response (Success):**
```json
{
  "message": "Message received successfully"
}
```

**Response (Error):**
```json
{
  "error": "All fields are required"
}
```

## 📱 Responsive Design

The portfolio uses Tailwind CSS breakpoints for responsive design:

- **Mobile (sm)**: < 640px
  - Single column layouts
  - Optimized touch interactions
  - Simplified navigation

- **Tablet (md)**: 640px - 1024px
  - 2-column layouts
  - Balanced spacing

- **Desktop (lg)**: ≥ 1024px
  - 3-column layouts
  - Full feature experience

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm start            # Start production server

# Quality
npm run lint         # Run ESLint checks
```

## 🌐 Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# Example (optional)
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

## 📸 Gallery Configuration

Edit the gallery in `src/components/Gallery.tsx`:

```typescript
const photos = [
  {
    id: 1,
    title: 'Photo Title',
    category: 'Category',
    image: 'https://example.com/image.jpg',
  },
  // Add more photos...
];
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-deploys on push

### Deploy to Other Platforms

The app can be deployed to:
- AWS Amplify
- Netlify
- DigitalOcean
- Any Node.js hosting

```bash
npm run build  # Build production-ready app
npm start      # Start server
```

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      accent: '#your-color',
    },
  },
},
```

### Update Content

- **Gallery**: Edit `src/components/Gallery.tsx`
- **About**: Edit `src/components/About.tsx`
- **Contact**: Edit `src/components/Contact.tsx`

### Add New Pages

1. Create file in `src/app/[page]/page.tsx`
2. Add route to `src/components/Header.tsx`

## 📞 Contact Form Integration

The contact form currently logs submissions. To send emails:

1. Choose email service (SendGrid, Nodemailer, AWS SES, etc.)
2. Install package: `npm install package-name`
3. Update `src/app/api/contact/route.ts`

## 🔒 Best Practices

- ✅ Type-safe with TypeScript
- ✅ Optimized images
- ✅ Mobile-first design
- ✅ Accessible components
- ✅ SEO-friendly metadata
- ✅ Performance optimized
- ✅ Clean code structure

## 🐛 Troubleshooting

**Dev server won't start:**
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

**Build fails:**
```bash
npm run lint  # Check for errors
npm run build # Try again
```

## 📄 License

MIT License - feel free to use this portfolio template

## 🤝 Contributing

Feel free to fork and submit pull requests for any improvements.

---

**Built with ❤️ using Next.js and Tailwind CSS**
