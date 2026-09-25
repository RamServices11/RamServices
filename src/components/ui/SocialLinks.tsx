interface SocialLink {
  name: string;
  url: string;
  ariaLabel: string;
  icon: (props: { size?: number; className?: string }) => React.JSX.Element;
}

export const YouTubeIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const LinkedInIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
  </svg>
);

export const InstagramIcon = ({ size = 18, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ram-services-enterprises-8571b6341',
    ariaLabel: 'RAM Services Enterprises on LinkedIn',
    icon: LinkedInIcon,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ramserviceenterprises',
    ariaLabel: 'RAM Services Enterprises on Instagram',
    icon: InstagramIcon,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@mayankprakash5291',
    ariaLabel: 'RAM Services Enterprises on YouTube',
    icon: YouTubeIcon,
  },
];

interface SocialLinksProps {
  variant?: 'dark' | 'light';
  className?: string;
}

export const SocialLinks = ({ variant = 'dark', className = '' }: SocialLinksProps) => {
  const linkClasses =
    variant === 'dark'
      ? 'w-9 h-9 rounded-sm bg-gray-800/80 hover:bg-[#00B4D8] text-gray-300 hover:text-[#0B192C] flex items-center justify-center transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00B4D8] focus-visible:outline-offset-2'
      : 'w-10 h-10 rounded-sm bg-[#F7FAFC] border border-gray-200 hover:border-[#00B4D8] hover:bg-[#00B4D8] text-[#1A365D] hover:text-[#0B192C] flex items-center justify-center transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00B4D8] focus-visible:outline-offset-2 shadow-xs';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIAL_LINKS.map(({ name, url, ariaLabel, icon: Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={linkClasses}
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
