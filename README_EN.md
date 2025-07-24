# 🏗️ Buildness Landing Page Prototype Project

A landing page prototype for the Buildness project developed with React + Vite, following semantic HTML principles and modern component architecture.

## 🚀 Technologies Used

- **React 19.1.0** - JavaScript library for user interfaces
- **Vite 7.0.4** - Fast build tool and development server
- **TailwindCSS 4.1.11** - Utility-first CSS framework
- **DaisyUI 5.0.46** - Component library for Tailwind
- **React Icons 5.5.0** - Icon library for React
- **ESLint** - JavaScript/React linter

## 📁 Project Structure

```
Prototipe_landing_buildness_project/
├── 📁 public/                     # Static public files
├── 📁 src/                        # Main source code
│   ├── 📄 App.jsx                 # Application root component
│   ├── 📄 main.jsx                # React entry point
│   ├── 📄 index.css               # Global styles
│   └── 📁 components/             # React components
│       ├── 🏗️ MAIN COMPONENTS (Primary semantic tags)
│       ├── 📄 Header.jsx          # <header> - Main header
│       ├── 📄 Navigation.jsx      # <nav> - Site navigation
│       ├── 📄 MainContent.jsx     # <main> - Main content
│       ├── 📄 Banner.jsx          # <section> + <article> - Hero banner
│       ├── 📄 VideoSection.jsx    # <section> + <figure> - Multimedia section
│       ├── 📄 IntendedForSection.jsx # <section> - "Who is it intended for"
│       ├── 📄 Footer.jsx          # <footer> - Page footer
│       └── 📁 UI/                 # Reusable interface elements
│           ├── 📄 Button.jsx      # <button> - Interactive buttons
│           ├── 📄 IconList.jsx    # <ul> - Icon lists
│           ├── 📄 IconItem.jsx    # <li> - Individual icon element
│           ├── 📄 Video.jsx       # <video> - Video component
│           ├── 📄 Figure.jsx      # <figure> - Multimedia grouper
│           ├── 📄 Caption.jsx     # <figcaption> - Multimedia description
│           ├── 📄 Text.jsx        # <p> - Text paragraphs
│           └── 📄 Title.jsx       # <h1-h6> - Dynamic titles
├── 📄 semantica.md                # Semantic HTML structure documentation
├── 📄 package.json                # Project dependencies and scripts
├── 📄 vite.config.js              # Vite configuration
├── 📄 eslint.config.js            # ESLint configuration
├── 📄 index.html                  # Main HTML file
└── 📄 README.md                   # Project documentation
```

## 🏛️ Component Architecture

### 🎯 Design Principles

1. **Semantic HTML**: Each component uses appropriate semantic HTML tags
2. **Separation of Concerns**: Main components vs UI elements
3. **Reusability**: UI elements can be used across multiple sections
4. **Accessibility**: Semantic structure that improves web accessibility
5. **SEO Friendly**: HTML markup that favors search engine optimization

### 🏗️ Main Components
> Located in `src/components/`

| Component | HTML Tag | Purpose |
|-----------|----------|---------|
| `Header.jsx` | `<header>` | Main site header |
| `Navigation.jsx` | `<nav>` | Navigation system (Documentation, Login) |
| `MainContent.jsx` | `<main>` | Main content container |
| `Banner.jsx` | `<section>` + `<article>` | Hero section with main information |
| `VideoSection.jsx` | `<section>` + `<figure>` | Multimedia section with video/animation |
| `IntendedForSection.jsx` | `<section>` + `<article>` | "Who is it intended for?" section |
| `Footer.jsx` | `<footer>` | Page footer with additional information |

### 🎨 UI Components
> Located in `src/components/UI/`

| Component | HTML Tag | Purpose |
|-----------|----------|---------|
| `Button.jsx` | `<button>` | Interactive buttons (e.g., "Learn more") |
| `IconList.jsx` | `<ul>` | List of icons with descriptions |
| `IconItem.jsx` | `<li>` | Individual icon list element |
| `Video.jsx` | `<video>` | Video player |
| `Figure.jsx` | `<figure>` | Multimedia content grouper |
| `Caption.jsx` | `<figcaption>` | Multimedia content description |
| `Text.jsx` | `<p>` | Descriptive text paragraphs |
| `Title.jsx` | `<h1>-<h6>` | Dynamic titles with `level` prop |

## 🚦 Available Scripts

```bash
# Development - Start development server
npm run dev

# Build - Generate production build
npm run build

# Linting - Run ESLint to check code
npm run lint

# Preview - Preview production build
npm run preview
```

## 🔧 Installation and Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone [REPOSITORY_URL]
   cd Prototipe_landing_buildness_project
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
   ```
   http://localhost:5173
   ```

## 📋 Semantic Structure

The project follows the semantic HTML structure documented in `semantica.md`, which defines:

- **Tag hierarchy** correctly nested
- **Semantic order** that improves accessibility
- **Structural markup** that favors SEO
- **Clear separation** between content and presentation

### Content Flow
```
<header> (Header.jsx)
  └── <nav> (Navigation.jsx)

<main> (MainContent.jsx)
  ├── <section> (Banner.jsx)
  │   └── <article>
  │       ├── <h1>
  │       └── <p>
  ├── <section> (VideoSection.jsx)
  │   └── <article>
  │       └── <figure>
  │           ├── <video>
  │           └── <figcaption>
  └── <section> (IntendedForSection.jsx)
      └── <article>
          ├── <h2>
          └── <ul> (IconList.jsx)
              └── <li> (IconItem.jsx)

<footer> (Footer.jsx)
```

## 🎨 Styling System

- **TailwindCSS**: CSS utility framework
- **DaisyUI**: Pre-built components compatible with Tailwind
- **Responsive Design**: Adaptive design for multiple devices
- **Modern Theme**: Clean and professional interface

## 🌟 Key Features

### ✅ **Semantic Architecture**
- Each component uses semantic HTML tags
- Improved accessibility and SEO
- Clear content structure

### ✅ **Modern Development Stack**
- React 19 with latest features
- Vite for fast development and builds
- TailwindCSS for efficient styling
- ESLint for code quality

### ✅ **Component Organization**
- Clear separation between structural and UI components
- Reusable UI elements
- Scalable architecture

### ✅ **Development Experience**
- Hot module replacement with Vite
- Modern JavaScript/React features
- Comprehensive linting setup

## 🎯 Component Usage Examples

### Main Components
```jsx
// Page structure
<Header />
<MainContent>
  <Banner />
  <VideoSection />
  <IntendedForSection />
</MainContent>
<Footer />
```

### UI Components
```jsx
// Reusable elements
<Title level={1}>Main Heading</Title>
<Text>Descriptive paragraph</Text>
<Button>Learn More</Button>
<IconList>
  <IconItem>Feature 1</IconItem>
  <IconItem>Feature 2</IconItem>
</IconList>
```

## 🚀 Development Workflow

1. **Start development server**: `npm run dev`
2. **Create/modify components** in appropriate directories
3. **Follow semantic HTML principles**
4. **Use TailwindCSS for styling**
5. **Test responsiveness** across devices
6. **Run linting**: `npm run lint`
7. **Build for production**: `npm run build`

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow semantic HTML principles
- Use appropriate component directory (main vs UI)
- Maintain consistent code style
- Add comments for complex logic
- Test across different devices/browsers

## 📚 Documentation

- **semantica.md**: Complete semantic HTML structure documentation
- **README.md**: Spanish documentation
- **README_EN.md**: English documentation (this file)

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change port in `vite.config.js` or kill existing process
2. **Module not found**: Run `npm install` to ensure all dependencies are installed
3. **Build errors**: Check ESLint output for code issues
4. **Styling issues**: Verify TailwindCSS configuration

## 📄 License

This project is a prototype for Buildness Project.

## 📞 Support

For questions or issues, please refer to the project documentation or create an issue in the repository.

---

**Developed with ❤️ using React + Vite + TailwindCSS** 