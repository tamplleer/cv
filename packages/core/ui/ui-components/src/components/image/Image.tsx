import React, { useState } from "react";

export const Image = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-50 animate-pulse rounded-md" />
      )}
      <img
        src={src}
        loading="lazy"
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)} // чтобы скрыть skeleton, даже если картинка не загрузилась
        className={`w-full h-auto transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
};

export const ImageWebP = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-neutral-50 animate-pulse rounded-md" />
      )}
      <picture>
        <source srcSet={`${src}.webp`} type="image/webp" />
        <source srcSet={`${src}.png`} type="image/png" />
        <img
          src={`${src}.png`}
          loading="lazy"
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
          className={`w-full h-auto transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      </picture>
    </div>
  );
};
