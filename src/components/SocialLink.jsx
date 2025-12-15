const SocialLink = ({ social }) => (
  <a
    href={social.url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-gray-900 transition-colors"
    aria-label={social.name}
  >
    {social.icon}
  </a>
);

export default SocialLink;
