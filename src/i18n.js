import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation files
const resources = {
  en: {
    translation: {
      // Header
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      
      // Hero
      "hero.greeting": "Hi, I'm",
      "hero.name": "Antonio Capra",
      "hero.title": "Full Stack Developer specialized in creating exceptional web experiences",
      "hero.viewProjects": "View Projects",
      "hero.contact": "Contact",
      
      // About
      "about.title": "About Me",
      "about.description": "I'm a Full Stack Developer passionate about creating innovative and scalable web solutions. With experience in modern technologies, I focus on designing intuitive interfaces and robust systems that solve real problems.",
      "about.yearsExperience": "Years Experience",
      "about.technologies": "Technologies",
      "about.projects": "Projects",
      "about.skillsTitle": "Technical Skills",
      
      // Projects
      "projects.title": "Featured Projects",
      "projects.subtitle": "A selection of projects that showcase my technical skills and creative approach",
      "projects.viewProject": "View Project",
      "projects.inDevelopment": "In Development",
      
      // Project Data
      "project.envatex.title": "Envatex",
      "project.envatex.description": "Business quotation platform where customers request quotes for products. Features an admin dashboard to manage inquiries, create and organize products, and respond to customer requests via automated email notifications.",
      
      "project.antoja.title": "Antoja App",
      "project.antoja.description": "Project developed in collaboration with colleagues from the academy, in which we created a management application for a restaurant, featuring both administrator and user roles.",
      
      "project.starwars.title": "API Star Wars CMS",
      "project.starwars.description": "This is an academic project developed as a functional Star Wars blog. It demonstrates API integration skills by effectively consuming and displaying data from the Star Wars API (SWAPI).",
      
      // Footer
      "footer.rights": "All rights reserved",
    }
  },
  es: {
    translation: {
      // Header
      "nav.about": "Sobre mí",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",
      
      // Hero
      "hero.greeting": "Hola, soy",
      "hero.name": "Antonio Capra",
      "hero.title": "Desarrollador Full Stack especializado en crear experiencias web excepcionales",
      "hero.viewProjects": "Ver Proyectos",
      "hero.contact": "Contacto",
      
      // About
      "about.title": "Sobre Mí",
      "about.description": "Soy un Desarrollador Full Stack apasionado por crear soluciones web innovadoras y escalables. Con experiencia en tecnologías modernas, me enfoco en diseñar interfaces intuitivas y sistemas robustos que resuelven problemas reales.",
      "about.yearsExperience": "Años de Experiencia",
      "about.technologies": "Tecnologías",
      "about.projects": "Proyectos",
      "about.skillsTitle": "Habilidades Técnicas",
      
      // Projects
      "projects.title": "Proyectos Destacados",
      "projects.subtitle": "Una selección de proyectos que muestran mis habilidades técnicas y enfoque creativo",
      "projects.viewProject": "Ver Proyecto",
      "projects.inDevelopment": "En Desarrollo",
      
      // Project Data
      "project.envatex.title": "Envatex",
      "project.envatex.description": "Plataforma de cotización empresarial donde los clientes solicitan presupuestos de productos. Incluye un panel de administración para gestionar consultas, crear y organizar productos, y responder a solicitudes de clientes mediante notificaciones automáticas por correo.",
      
      "project.antoja.title": "Antoja App",
      "project.antoja.description": "Proyecto desarrollado en colaboración con compañeros de la academia, en el que creamos una aplicación de gestión para un restaurante, con roles de administrador y usuario.",
      
      "project.starwars.title": "API Star Wars CMS",
      "project.starwars.description": "Este es un proyecto académico desarrollado como un blog funcional de Star Wars. Demuestra habilidades de integración de API al consumir y mostrar efectivamente datos de la API de Star Wars (SWAPI).",
      
      // Footer
      "footer.rights": "Todos los derechos reservados",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
