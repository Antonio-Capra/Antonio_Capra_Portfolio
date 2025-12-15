import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import React from 'react';
import SkillBadge from './SkillBadge';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Next.js',
    'PostgreSQL',
    'Git',
    'REST APIs',
    'GraphQL',
    "Python",
    "Flask",
    "Bootstrap",
    "Google Cloud Platform",
    "HTML5",
    "CSS3",
  ];

  // Random pulse effect state
  const [activeSkills, setActiveSkills] = React.useState([]);

  React.useEffect(() => {
    if (!isInView) return;

    const activateRandomSkills = () => {
      // Select 2-4 random skills
      const count = Math.floor(Math.random() * 3) + 2; // 2-4 skills
      const shuffled = [...skills].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, count);
      setActiveSkills(selected);
    };

    // Initial activation
    activateRandomSkills();

    // Change active skills every 3 seconds
    const interval = setInterval(activateRandomSkills, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
            variants={itemVariants}
          >
            {t('about.title')}
          </motion.h2>

          <motion.div className="mb-16" variants={itemVariants}>
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-200">
              <p className="text-base sm:text-lg leading-relaxed text-center max-w-3xl mx-auto text-gray-700 mb-6">
                {t('about.description')}
              </p>
              <motion.div
                className="flex justify-center gap-8 mt-8 text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">1+</div>
                  <div className="text-sm">{t('about.yearsExperience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{skills.length}+</div>
                  <div className="text-sm">{t('about.technologies')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">7+</div>
                  <div className="text-sm">{t('about.projects')}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 text-center">
              {t('about.skillsTitle')}
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
              style={{ perspective: "1000px" }}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={skillVariants}
                >
                  <SkillBadge 
                    skill={skill} 
                    featured={activeSkills.includes(skill)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
