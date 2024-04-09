"use client";
import Image from "next/image";
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
   
    <div className="relative w-[200px] h-[150px] hover:cursor-pointer">
      <Image
        src={src}
        fill
        objectFit="cover"
        alt="event image"
      />
    </div>
  );
};

export default ImageCard;
