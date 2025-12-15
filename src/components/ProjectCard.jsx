import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ project, index = 0 }) => {
  const { t } = useTranslation();
  const { title, excerpt, tags, imageUrl, projectLink, inDevelopment } = project;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article 
      ref={ref}
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: "easeOut"
      }}
    >
      <div className="relative h-48 sm:h-56 bg-gray-100 overflow-hidden">
        {/* In Development Badge */}
        {inDevelopment && (
          <motion.div
            className="absolute top-4 right-4 z-20"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.span
              className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg flex items-center gap-1.5"
              animate={{
                boxShadow: [
                  '0 4px 14px 0 rgba(16, 185, 129, 0.4)',
                  '0 4px 20px 0 rgba(6, 182, 212, 0.6)',
                  '0 4px 14px 0 rgba(16, 185, 129, 0.4)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.span
                className="inline-block w-2 h-2 bg-white rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              {t('projects.inDevelopment')}
            </motion.span>
          </motion.div>
        )}

        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
          {title}
        </h3>

        <p className="text-gray-600 mb-5 text-sm leading-relaxed">
          {excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-md border border-gray-200 hover:border-gray-300 hover:bg-gray-100 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-900 font-semibold hover:text-gray-600 transition-colors text-sm"
        >
          {t('projects.viewProject')}
          <svg
            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
