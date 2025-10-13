# Portfolio Website

A modern, animated portfolio website built with React, TypeScript, and the latest animation libraries.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **TypeScript**: Built with TypeScript for type safety and better development experience
- **Animations**: Smooth animations using Framer Motion, GSAP, and Lottie
- **Performance**: Optimized for performance with lazy loading and code splitting
- **SEO Friendly**: Built with SEO best practices in mind
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

### Frontend
- **React 18** - Latest version of React with concurrent features
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework

### Animation Libraries
- **Framer Motion** - Production-ready motion library for React
- **GSAP** - High-performance animation library
- **Lottie React** - After Effects animations in React
- **React Spring** - Spring-physics based animation library
- **Lenis** - Smooth scrolling library

### Additional Libraries
- **React Icons** - Popular icon library
- **React Scroll** - Smooth scrolling navigation
- **React Intersection Observer** - Intersection observer hook
- **React Typed** - Typewriter effect component

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/raghoothama-reddy/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  bio: "Your bio...",
  // ... other fields
};
```

### Projects
Add your projects in the `projects` array in `src/data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project",
    description: "Project description...",
    technologies: ["React", "TypeScript"],
    // ... other fields
  }
];
```

### Skills
Update your skills in the `skills` array in `src/data/portfolio.ts`:

```typescript
export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend", icon: "react" },
  // ... other skills
];
```

### Colors
Customize the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      secondary: {
        // Your secondary colors
      }
    }
  }
}
```

## 📱 Sections

- **Hero**: Introduction with animated typewriter effect
- **About**: Personal information and statistics
- **Skills**: Technical skills with animated progress bars
- **Projects**: Portfolio projects with filtering
- **Experience**: Work experience and education timeline
- **Contact**: Contact form and information

## 🎭 Animations

The website includes various animations:

- **Page Transitions**: Smooth page transitions with Framer Motion
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover animations on buttons and cards
- **Loading Screen**: Animated loading screen with custom animations
- **Typewriter Effect**: Animated text typing in the hero section
- **Floating Elements**: Subtle floating animations for visual interest

## 🚀 Performance Optimizations

- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Images and components are lazy loaded
- **Tree Shaking**: Unused code is automatically removed
- **Minification**: CSS and JavaScript are minified in production
- **Image Optimization**: Images are optimized for web delivery

## 📊 SEO Features

- **Meta Tags**: Proper meta tags for social sharing
- **Structured Data**: JSON-LD structured data for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Proper robots.txt configuration
- **Open Graph**: Open Graph tags for social media sharing

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # React components
├── data/               # Static data and content
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main App component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🌐 Deployment

The website can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist folder to GitHub Pages
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: raghoothama.reddy@example.com
- **LinkedIn**: [linkedin.com/in/raghoothama-reddy](https://linkedin.com/in/raghoothama-reddy)
- **GitHub**: [github.com/raghoothama-reddy](https://github.com/raghoothama-reddy)

---

Made with ❤️ by Raghoothama Reddy
