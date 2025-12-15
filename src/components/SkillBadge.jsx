import { motion } from 'motion/react';
import { useState } from 'react';

const SkillBadge = ({ skill, featured = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse Glow Effect for Featured Skills */}
      <motion.div
        className="absolute inset-0 rounded-full blur-md pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        }}
        animate={featured ? {
          opacity: [0, 0.3, 0.6, 0.3],
          scale: [1, 1.05, 1.1, 1.05],
        } : {
          opacity: 0,
          scale: 1,
        }}
        transition={featured ? {
          opacity: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
          scale: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        } : {
          duration: 0.8,
          ease: 'easeOut',
        }}
      />

      {/* Animated Gradient Border on Hover */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0"
        style={{
          background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f97316, #3b82f6)',
          backgroundSize: '400% 100%',
          padding: '2px',
        }}
        animate={isHovered ? {
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          opacity: 1,
        } : {
          opacity: 0,
        }}
        transition={{
          backgroundPosition: {
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          },
          opacity: {
            duration: 0.3,
          },
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>

      {/* Content */}
      <motion.span 
        className="relative z-10 px-4 py-2 bg-white rounded-full text-sm sm:text-base inline-block cursor-pointer border hover:text-gray-900"
        animate={{
          color: featured ? '#111827' : '#374151',
          fontWeight: featured ? 600 : 400,
          borderColor: featured ? '#93c5fd' : '#e5e7eb',
          boxShadow: featured ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : '0 0 0 0 rgba(0, 0, 0, 0)',
        }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      >
        {skill}
      </motion.span>
    </motion.div>
  );
};

export default SkillBadge;
