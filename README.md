# Modern Personal Portfolio

Minimalist and professional personal portfolio built with React and Tailwind CSS. Mobile-First design with subtle animations and CMS-ready structure.

## 🚀 Features

- **Minimalist Design**: Clean aesthetics driven by whitespace
- **Responsive**: Mobile-First approach with Tailwind CSS
- **Subtle Animations**: Optimized transitions and fade-in effects
- **SEO Optimized**: Semantic HTML and meta tags
- **CMS Ready**: Structure prepared for Headless CMS integration
- **High Performance**: Optimized components and clean code

## 📦 Technologies

- React 18
- Tailwind CSS 3
- Vite
- JavaScript (ES6+)

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

### 1. Personal Branding
Update your personal information in the respective component files located in `src/components/`:

**Header Component** (`src/components/Header.jsx`)
- Update the logo/name text (currently "YourName")

**Hero Component** (`src/components/Hero.jsx`)
- Change your name in the main heading
- Update the professional title/description
- Customize CTA button labels and links

**About Component** (`src/components/About.jsx`)
- Edit your biography text
- Update the `skills` array with your technical skills

**Footer Component** (`src/components/Footer.jsx`)
- Update email address
- Change social media URLs (GitHub, LinkedIn, Twitter)
- Update copyright name

### 2. Projects
Edit the `portfolioData` array in `src/components/ProjectsList.jsx`:
```javascript
const portfolioData = [
  {
    id: 1,
    title: 'Project Name',
    excerpt: 'Brief description',
    tags: ['React', 'Node.js'],
    imageUrl: 'CLOUDINARY_URL',
    projectLink: 'https://github.com/username/project'
  }
];
```

### 3. Images
Replace the `imageUrl` URLs with your own images from:
- Cloudinary
- Your own CDN
- `/public` folder of the project

### 4. Colors
Customize the color scheme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Your custom colors
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

## 🎨 Component Structure

```
src/
├── App.jsx (Main orchestrator)
├── main.jsx (Entry point)
├── index.css (Tailwind directives)
└── components/
    ├── FadeInSection.jsx (Scroll animation utility)
    ├── Header.jsx (Sticky navigation)
    ├── Hero.jsx (Landing section)
    ├── About.jsx (Biography and skills)
    ├── SkillBadge.jsx (Individual skill badge)
    ├── ProjectsList.jsx (Projects grid)
    ├── ProjectCard.jsx (Individual project card)
    ├── Footer.jsx (Contact and social links)
    └── SocialLink.jsx (Individual social link)
```

### Component Architecture
- **Modular Design**: Each component in its own file for better maintainability
- **Reusable Components**: SkillBadge, ProjectCard, SocialLink are designed for reuse
- **Separation of Concerns**: Clear separation between layout, content, and utility components
- **Easy Testing**: Isolated components facilitate unit testing

## 🔌 CMS Integration

The `ProjectsList` component (`src/components/ProjectsList.jsx`) is designed to facilitate integration with any CMS or API.

### Headless CMS (Strapi, Contentful, Sanity)
Replace the static `portfolioData` array with a dynamic API call:

```javascript
import { useState, useEffect } from 'react';

const ProjectsList = () => {
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://your-cms.com/api/projects')
      .then(res => res.json())
      .then(data => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading projects...</div>;

  // Rest of component code...
};
```

### WordPress REST API
```javascript
useEffect(() => {
  fetch('https://your-wordpress.com/wp-json/wp/v2/projects')
    .then(res => res.json())
    .then(data => setPortfolioData(data));
}, []);
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚡ Optimization

- Lazy loading of images
- Smooth scroll
- GPU-accelerated animations (transform, opacity)
- Minified code in production

## 📄 License

MIT

## 👤 Author

**Your Name**
- GitHub: [@Antonio-Capra](https://github.com/Antonio-Capra)

---

⭐ If you like this project, give it a star on GitHub!