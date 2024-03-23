import React from "react";

interface ImageData {
  src: string;
  alt: string;
  text: string;
  link: string;
}

const ImageGrid: React.FC = () => {
  const images: ImageData[] = [
    {
      src: "/pictures/pic1.avif",
      alt: "Image 1",
      text: "Facebook",
      link: "https://www.facebook.com",
    },
    {
      src: "/pictures/milky-way.jpg",
      alt: "Image 2",
      text: "Twitter",
      link: "https://www.twitter.com",
    },
    {
      src: "/pictures/pic3.avif",
      alt: "Image 3",
      text: "Instagram",
      link: "https://www.instagram.com",
    },

    {
      src: "/pictures/milky-way.jpg",
      alt: "Image 2",
      text: "Twitter",
      link: "https://www.twitter.com",
    },
    {
      src: "/pictures/pic3.avif",
      alt: "Image 3",
      text: "Instagram",
      link: "https://www.instagram.com",
    },
    {
      src: "/pictures/pic1.avif",
      alt: "Image 1",
      text: "Facebook",
      link: "https://www.facebook.com",
    },
    {
      src: "/pictures/pic1.avif",
      alt: "Image 1",
      text: "Facebook",
      link: "https://www.facebook.com",
    },
    {
      src: "/pictures/milky-way.jpg",
      alt: "Image 2",
      text: "Twitter",
      link: "https://www.twitter.com",
    },
    {
      src: "/pictures/pic3.avif",
      alt: "Image 3",
      text: "Instagram",
      link: "https://www.instagram.com",
    },
  ];

  const handleImageClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-44 w-72 cursor-pointer bg-cover bg-center border-2 border-gray-700 rounded"
          style={{ backgroundImage: `url(${image.src})` }}
          onClick={() => handleImageClick(image.link)}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black bg-opacity-50">
            <span className="text-white text-lg font-bold">{image.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
