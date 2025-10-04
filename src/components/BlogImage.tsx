import React from 'react';

interface BlogImageProps {
  src: string;
  alt: string;
  title?: string;
}

const BlogImage: React.FC<BlogImageProps> = ({ src, alt, title }) => {
  // Handle relative paths in markdown
  const getImageSrc = (originalSrc: string): string => {
    // If it's a relative path starting with ./, convert to absolute path
    if (originalSrc.startsWith('./')) {
      // Remove the ./ and prepend with the blog images path
      const imagePath = originalSrc.replace('./', '');
      return `/blog-images/${imagePath}`;
    }
    
    // If it's already an absolute path or external URL, return as is
    return originalSrc;
  };

  const imageSrc = getImageSrc(src);

  return (
    <>
      <img
        src={imageSrc}
        alt={alt}
        title={title || alt}
        className="blog-image"
        loading="lazy"
      />
      {title && (
        <figcaption className="blog-image-caption">
          {title}
        </figcaption>
      )}
    </>
  );
};

export default BlogImage;