"use client";
import React, { useState } from "react";

interface ImageCardProps {
  src: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src }) => {
  const [expanded, setExpanded] = useState(false);

  const handleTouch = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="max-w-xs overflow-hidden rounded-lg shadow-lg">
      <div
        className='bg-cover bg-center h-56 w-44 transition-transform duration-500 ease-in-out'
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  );
};

export default ImageCard;
