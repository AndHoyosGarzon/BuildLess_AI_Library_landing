# 🚀 BuildLess - Landing Page

A modern, responsive landing page for **BuildLess**, a revolutionary platform that enables developers and non-developers to build complete web applications using just JSON and JavaScript—no build tools, no complex frameworks required.

## ✨ About BuildLess

BuildLess simplifies web development by allowing users to:
- **Define UI with JSON** - Describe your interface structure declaratively
- **Add behavior with JavaScript** - Implement functionality without complex setups
- **Build instantly** - No waiting for builds, bundlers, or compilation
- **Collaborate in real-time** - Changes appear instantly with live collaboration

### Key Features

🔒 **Secure & Private**
- Sign in with Google for instant authentication
- Secure data storage with no setup required
- User auth and real-time storage work out of the box

⚡ **Fast & Efficient**
- AI-powered UI and logic generation
- Describe what you want and get instant results
- Optimized for productivity and performance

🎯 **Easy to Use**
- Real-time changes with no refresh needed
- Intuitive interface for all skill levels
- Perfect for both developers and non-developers

## 🛠️ Tech Stack

- **React 19.1.0** - Modern React with latest features
- **Vite 7.0.4** - Lightning-fast build tool and dev server
- **TailwindCSS 4.1.11** - Utility-first CSS framework
- **DaisyUI 5.0.46** - Beautiful component library for Tailwind
- **React Icons 5.5.0** - Comprehensive icon library
- **ESLint** - Code quality and consistency

## 📁 Project Structure

```
BuildLess-Landing/
├── 📁 public/
│   ├── 📁 fonts/                  # Custom BitcountSingle font family
│   ├── 🖼️ icon.svg               # BuildLess logo/icon
│   ├── 🖼️ image6.jpg             # Hero banner background
│   └── 🖼️ jsonImage.png          # JSON visualization image
├── 📁 src/
│   ├── 📄 App.jsx                 # Main application component
│   ├── 📄 main.jsx                # React entry point
│   ├── 📄 index.css               # Global styles and Tailwind imports
│   └── 📁 components/
│       ├── 📄 Header.jsx          # Navigation header
│       ├── 📄 Banner.jsx          # Hero section with CTA
│       ├── 📄 MainContent.jsx     # Feature showcase and testimonials
│       ├── 📄 Footer.jsx          # Site footer with links
│       └── 📁 UI/                 # Reusable UI components
│           ├── 📄 Button.jsx      # Interactive buttons
│           ├── 📄 Card.jsx        # Feature cards
│           ├── 📄 Navigation.jsx  # Navigation menu
│           ├── 📄 Text.jsx        # Typography component
│           ├── 📄 Title.jsx       # Heading component
│           ├── 📄 Video.jsx       # Video player component
│           └── 📄 Caption.jsx     # Image/video captions
├── 📄 package.json
├── 📄 vite.config.js
├── 📄 eslint.config.js
└── 📄 index.html
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BuildLess-Landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the landing page

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint for code quality
npm run lint
```

## 🎨 Design System

### Color Palette
- **Primary Red**: `#f24e3f` - Call-to-action buttons and accents
- **JavaScript Yellow**: `#f7de1e` - JavaScript syntax highlighting
- **Dark Theme**: Optimized for dark mode with proper contrast ratios

### Typography
- **BitcountSingle Font Family** - Custom font for brand consistency
  - Regular, Medium, and Bold weights
- **Responsive Text Scaling** - Mobile-first approach with breakpoint-specific sizing

### Responsive Breakpoints
- **xs**: Mobile devices (default)
- **md**: Tablets and small laptops
- **lg**: Desktop and larger screens

## 🌟 Features Implemented

### Hero Section
- Full-screen banner with gradient overlay
- Animated JSON and JavaScript syntax highlighting
- Clear value proposition messaging
- Prominent call-to-action button

### Feature Showcase
- Interactive cards highlighting key benefits
- Visual JSON example with syntax highlighting
- Responsive grid layout for all screen sizes

### Social Proof
- Testimonial carousel with smooth navigation
- User feedback highlighting productivity and safety benefits

### Navigation
- Responsive mobile menu with hamburger toggle
- Google OAuth integration ready
- Documentation and login buttons

### Footer
- Social media links (GitHub, Discord, LinkedIn)
- Feature and resource navigation
- Brand consistency with logo and tagline

## 🔧 Configuration

### Vite Configuration
The project uses Vite with React and TailwindCSS plugins for optimal development experience and build performance.

### ESLint Setup
Configured with React-specific rules and hooks validation for code quality.

### TailwindCSS
- Custom color scheme matching BuildLess branding
- DaisyUI components for consistent UI patterns
- Responsive utilities for mobile-first design

## 📱 Browser Support

- **Modern browsers** with ES6+ support
- **Mobile responsive** design tested on various devices
- **Dark theme** optimized for user preference

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is part of the BuildLess ecosystem. Please refer to the main BuildLess repository for licensing information.

## 🔗 Related Links

- **BuildLess Platform**: Coming soon
- **Documentation**: In development
- **Community Discord**: Join our developer community

---

**BuildLess** - Accelerating how software is built ⚡ 