# Doctor+ Medical Landing Page

A modern, responsive medical landing page built with React, Tailwind CSS, and Framer Motion.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations with Framer Motion
- 🎯 Single-page application
- 🚀 Fast and optimized
- 💙 Beautiful UI with Tailwind CSS
- 🎭 Interactive components

## Sections

1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About Section** - Information about the medical services
3. **Services Section** - Comprehensive medical services showcase
4. **Appointment Section** - Easy-to-use booking form
5. **Testimonials Section** - Patient reviews and feedback
6. **Footer** - Contact information and social links

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
07-Doctor/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Appointment.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#4A90E2',
      secondary: '#5B9FED',
      accent: '#3B82F6',
    },
  },
}
```

### Content

Update the content in each component file located in `src/components/`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Credits

Design inspired by modern medical landing pages.
Built with ❤️ using React and Tailwind CSS.
