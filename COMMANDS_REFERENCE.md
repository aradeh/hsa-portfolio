# Next.js Command Reference

Complete guide to all available commands for the HSA Portfolio project.

## 📦 Installation

```bash
# Install all dependencies
npm install

# Install with legacy peer deps (recommended)
npm install --legacy-peer-deps

# Install specific package
npm install package-name

# Install dev dependency
npm install -D package-name
```

## 🚀 Development Commands

### Start Development Server

```bash
# Default (port 3000)
npm run dev

# Custom port
npm run dev -- -p 3001

# Open in browser
npm run dev -- -o

# Dev with hostname
npm run dev -- -H 0.0.0.0
```

**Output:**
```
  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local

  ✓ Ready in 2.1s
```

**Features:**
- Hot module replacement (HMR)
- Auto-reload on file changes
- Fast refresh of components
- Error overlays with hints

## 🏗️ Build Commands

### Build for Production

```bash
npm run build
```

Creates optimized production build:
- Minified JavaScript
- Optimized images
- CSS minification
- Code splitting

**Output:**
```
  ▲ Next.js 14.0.0

  Route (app)                    Size     First Load JS
  ┌ ○ /                          2.1 kB        85 kB
  ├ ○ /api/contact               1.2 kB        80 kB
  └ ○ 404                        2.3 kB        82 kB
```

### Start Production Server

```bash
npm start
```

Runs the production build locally:
- No hot reload
- Optimized performance
- Production settings
- Useful for testing before deployment

## 🔍 Code Quality

### Run ESLint

```bash
# Check for errors
npm run lint

# Fix auto-fixable errors
npm run lint -- --fix
```

Checks for:
- React best practices
- TypeScript errors
- Import order
- Unused variables
- Code style issues

### Format Code

```bash
# Using Prettier (if installed)
npm run format

# Or with ESLint
npm run lint -- --fix
```

## 🧪 Testing Commands

```bash
# Run unit tests (if configured)
npm test

# Watch mode
npm test -- --watch

# Coverage report
npm test -- --coverage
```

## 🗑️ Cleanup Commands

### Remove Build Files

```bash
# Remove .next directory
rm -rf .next

# Remove node_modules
rm -rf node_modules

# Remove lockfile
rm package-lock.json
```

### Full Clean Installation

```bash
rm -rf node_modules package-lock.json .next
npm install --legacy-peer-deps
npm run dev
```

## 📦 NPM Registry Commands

```bash
# Check installed versions
npm list

# Check outdated packages
npm outdated

# Update packages
npm update

# Audit for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

## 🚀 Deployment Commands

### Build and Deploy

```bash
# Build
npm run build

# Test production build
npm start

# Deploy (platform specific)
# Vercel
vercel

# Netlify
netlify deploy

# AWS Amplify
amplify publish
```

## 🔐 Git Commands

```bash
# Initialize git
git init

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to remote
git push origin main

# Clone repository
git clone <repo-url>
```

## 🌐 Environment Variables

### Create .env.local

```bash
# Public variables (accessible in browser)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Secret variables (server-only)
SECRET_API_KEY=your-secret-key
```

### Access in Code

```typescript
// Public variable
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

// Server-only (API routes)
const apiKey = process.env.SECRET_API_KEY;
```

## 📊 Performance Testing

```bash
# Analyze bundle
npm run build -- --analyze

# Lighthouse audit
npm run build && npm start
# Then use Chrome DevTools
```

## 🔗 Useful Aliases

Create shortcuts in your shell profile:

```bash
# Add to ~/.zshrc or ~/.bash_profile

alias npd="npm run dev"
alias npb="npm run build"
alias nps="npm start"
alias npm-audit="npm audit && npm audit fix"

# Usage
npd  # Runs: npm run dev
```

## 📱 Testing Commands

### Test Responsive Design

```bash
# Start dev server
npm run dev

# Open DevTools (Chrome/Edge)
Ctrl + Shift + I  # Windows/Linux
Cmd + Option + I  # Mac

# Toggle device toolbar
Ctrl + Shift + M  # Windows/Linux
Cmd + Shift + M   # Mac
```

### Test on Different Devices

```bash
# Create tunnel for mobile testing
npm run dev -- -H 0.0.0.0

# Access from other device
http://YOUR_IP:3000
```

## 🚢 Docker Commands (if using Docker)

```bash
# Build Docker image
docker build -t hsa-portfolio .

# Run container
docker run -p 3000:3000 hsa-portfolio

# Stop container
docker stop <container-id>
```

## 💾 Backup Commands

```bash
# Backup project
tar -czf hsa-portfolio-backup.tar.gz hsa_portfolio/

# Create git backup
git bundle create backup.bundle --all
```

## 📋 Complete Command Cheat Sheet

| Command | Action |
|---------|--------|
| `npm run dev` | Start development |
| `npm run build` | Production build |
| `npm start` | Start production |
| `npm run lint` | Check code quality |
| `npm install` | Install dependencies |
| `npm update` | Update packages |
| `npm audit` | Check vulnerabilities |
| `npm run format` | Format code |

## 🆘 Getting Help

```bash
# Next.js help
npm run dev -- --help

# NPM help
npm help <command>

# Check Node version
node --version

# Check npm version
npm --version
```

## 🎯 Troubleshooting Commands

### Clear Everything and Reinstall

```bash
# Full reset
rm -rf node_modules .next package-lock.json
npm install --legacy-peer-deps
npm run dev
```

### Check Port Usage

```bash
# macOS/Linux
lsof -i :3000

# Windows
netstat -ano | findstr :3000

# Kill process on port 3000
# macOS/Linux
kill -9 $(lsof -ti:3000)

# Windows
taskkill /PID <PID> /F
```

### Debug Mode

```bash
# Enable debug logging
DEBUG=* npm run dev

# Debug specific module
DEBUG=next:* npm run dev
```

## 📚 Further Reading

- [Next.js Docs](https://nextjs.org/docs)
- [NPM Docs](https://docs.npmjs.com/)
- [Node.js Docs](https://nodejs.org/docs/)

---

**Last Updated:** November 2025
**Next.js Version:** 14+
**Node.js Version:** 18+
