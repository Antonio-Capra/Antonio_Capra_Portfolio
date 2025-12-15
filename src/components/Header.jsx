import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const navItems = [
    { href: '#about', label: t('nav.about') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <a
            href="#hero"
            className="text-lg sm:text-xl font-semibold text-gray-900 hover:text-gray-600 transition-colors"
          >
            Antonio Capra
          </a>

          <div className="flex items-center gap-4 sm:gap-6">
            <ul className="flex space-x-4 sm:space-x-8 text-sm sm:text-base">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Language Switcher */}
            <motion.button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-300 hover:border-gray-900 transition-colors text-sm font-medium text-gray-700 hover:text-gray-900"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {i18n.language === 'en' ? (
                <>
                  <svg className="w-5 h-4" viewBox="0 0 900 600" fill="none">
                    <rect width="900" height="600" fill="#c60b1e"/>
                    <rect y="200" width="900" height="200" fill="#ffc400"/>
                  </svg>
                  <span>Español</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-4" viewBox="0 0 7410 3900" fill="none">
                    <rect width="7410" height="3900" fill="#b22234"/>
                    <path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" strokeWidth="300"/>
                    <rect width="2964" height="2100" fill="#3c3b6e"/>
                  </svg>
                  <span>English</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
