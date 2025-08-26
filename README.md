# Jasleen Minhas - Portfolio Website 

DEMO LINK : [jasleen-minhas.vercel.app](https://jasleen-minhas.vercel.app/)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases my professional experience, projects, skills, and personal interests in a clean and interactive design.

## 🌟 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Built with shadcn/ui components and Tailwind CSS
- **Interactive Elements**: Smooth animations and scroll effects
- **Contact Form**: Integrated with EmailJS for seamless communication
- **Dark/Light Mode**: Theme support with next-themes
- **Performance Optimized**: Built with Vite for fast development and production builds

## 📋 Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal background and story
- **Work Experience**: Professional journey and achievements
- **Projects**: Showcase of technical projects
- **Skills**: Technical skills and competencies
- **Education**: Academic background and certifications
- **Beyond The Code**: Personal interests and hobbies
- **Contact**: Get in touch form and social links
- **Navigation**: Smooth scrolling navigation
- **Footer**: Additional links and information

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Radix UI** - Headless UI primitives

### Additional Libraries
- **React Router DOM** - Client-side routing
- **React Hook Form** - Form handling with validation
- **EmailJS** - Email service integration
- **Lucide React** - Beautiful icons
- **Framer Motion** - Animation library
- **React Query** - Data fetching and caching

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/jasleen-minhas-portfolio.git
   cd jasleen-minhas-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Skills section
│   ├── Contact.tsx     # Contact form
│   └── ...             # Other components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets
└── App.tsx             # Main app component
```

## 🎨 Customization

### Personal Information
Update your personal information in `JasleenData.json` to customize:
- Personal details
- Work experience
- Projects
- Skills
- Education
- Contact information

### Styling
- Modify Tailwind classes in component files
- Update color scheme in `tailwind.config.ts`
- Customize shadcn/ui theme in `components.json`

### Content
- Replace images in `src/assets/` and `public/`
- Update resume PDF in `public/`
- Modify component content directly

## 📧 Contact Form Setup

The contact form uses EmailJS. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service
3. Create an email template
4. Update the EmailJS configuration in the Contact component

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages
1. Add GitHub Pages action to `.github/workflows/`
2. Configure repository settings
3. Deploy automatically on push to main branch

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.

## 🔗 Links

- **LinkedIn**: [https://www.linkedin.com/in/jasleen-minhas07/](https://www.linkedin.com/in/jasleen-minhas07/)
- **GitHub**: [https://github.com/JasleenMinhas578](https://github.com/JasleenMinhas578)
- **Email**: [Jasleen.minhas07@gmail.com](mailto:Jasleen.minhas07@gmail.com)
  
---

Built with ❤️ by Jasleen Minhas
