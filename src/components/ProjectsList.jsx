import FadeInSection from './FadeInSection';
import ProjectCard from './ProjectCard';
import { useTranslation } from 'react-i18next';

const ProjectsList = () => {
  const { t } = useTranslation();
  
  // CMS READY: Replace with API call or CMS integration
  const portfolioData = [
    {
      id: 1,
      title: t('project.envatex.title'),
      excerpt: t('project.envatex.description'),
      tags: ['React', 'JavaScript', 'Python', "Flask", "sendGrid", "Tailwind CSS", "JWT"],
      imageUrl: '2.png',
      projectLink: 'https://envatex-web-frontend.onrender.com',
      inDevelopment: true, // Mark as project in development
    },
    {
      id: 2,
      title: t('project.antoja.title'),
      excerpt: t('project.antoja.description'),
      tags: ['Next.js', 'JavaScript', 'PostgreSQL', 'SqlAlchemy', 'Flask', "Python", "Bootstrap", "CSS3", "JWT"],
      imageUrl: 'LogoCeleste.png',
      projectLink: 'https://github.com/Antonio-Capra/Antoja-Proyecto-Final',
    },
    {
      id: 3,
      title: t('project.starwars.title'),
      excerpt: t('project.starwars.description'),
      tags: ['React', 'Fetch', 'Bootstrap', 'HTML5', 'CSS3'],
      imageUrl: 'starwars.png',
      projectLink: 'https://antonio-capra.github.io/ToninoJoya_SWAPIBlog/',
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            {t('projects.title')}
          </h3>

          <p className="text-gray-600 text-center mb-16 text-base sm:text-lg max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {portfolioData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default ProjectsList;
