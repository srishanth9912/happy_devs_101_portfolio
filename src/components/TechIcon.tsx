import React, { useState } from 'react';

interface TechIconProps {
  name: string;
  className?: string;
}

const ImageWithFallback: React.FC<{
  src: string;
  alt: string;
  className: string;
  fallbackText: string;
}> = ({ src, alt, className, fallbackText }) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  if (error) {
    return (
      <div className={`${className} flex items-center justify-center rounded bg-white/10 text-white font-mono text-[10px] font-bold`}>
        {fallbackText.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return (
    <div className={`relative ${className} shrink-0`}>
      {!loaded && (
        <div className="absolute inset-0 bg-white/5 animate-pulse rounded" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} object-contain transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
    </div>
  );
};

// Tech vector icons from devicon
export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-6 h-6' }) => {
  const normalized = name.toLowerCase();

  if (normalized === 'c') {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        alt="C Language"
        className={className}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('java') && !normalized.includes('javascript')) {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        alt="Java"
        className={className}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('python')) {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className={className}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        className={`${className} rounded-[4px]`}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('typescript') || normalized === 'ts') {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        className={`${className} rounded-[4px]`}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('react')) {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        className={className}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('html')) {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="HTML5"
        className={className}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('css')) {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="CSS3"
        className={className}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('tailwind')) {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        alt="Tailwind CSS"
        className={className}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('linux')) {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        alt="Linux"
        className={className}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('git') || normalized.includes('github')) {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="Git & GitHub"
        className={className}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('vscode') || normalized.includes('vs code')) {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        alt="VS Code"
        className={className}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('database') || normalized.includes('mongodb') || normalized.includes('sql')) {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        alt="Database / MongoDB"
        className={className}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('node')) {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        className={className}
        fallbackText={name}
      />
    );
  }

  if (normalized.includes('next')) {
    return (
      <ImageWithFallback
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        alt="Next.js"
        className={`${className} bg-white rounded-full p-0.5`}
        fallbackText={name}
      />
    );
  }

  return (
    <div className={`${className} flex items-center justify-center rounded bg-white/10 text-white font-mono text-xs font-bold`}>
      {name.slice(0, 2).toUpperCase()}
    </div>
  );
};
