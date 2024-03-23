"use client";
import React from "react";
import Image from "next/image";
import ImageCard from "./ImgCard";
import ImageGrid from "./ImgGrid";

function Event() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div
          className="flex justify-center text-white w-3/4 h-3/5 bg-white"
          style={{
            backgroundImage: `url(/pictures/pic1.avif)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bottom-28 left-60 text-white leading-tight">
            <p className="text-6xl font-extrabold">Our Stargazers Spectacle</p>
            <p className="text-3xl font-bold">A Journey through the Cosmos</p>
          </div>
        </div>
      </div>
      <div className="ml-64 mb-36">
        <div className="relative">
          <Image
            className="absolute top-0 left-0"
            src="/pictures/moon.jpg"
            alt="Description of image"
            width={200}
            height={200}
          />
          <Image
            src="/pictures/pic 2.avif"
            alt="Description of other image"
            width={800}
            height={200}
          />
          <Image
            src="/pictures/pic4.avif"
            alt="Description of other image"
            width={800}
            height={200}
          />
        </div>
      </div>
      <div className="flex space-x-4 m-4 justify-center ">
        <ImageCard src={"/pictures/pic1.avif"} />
        <ImageCard src={"/pictures/milky-way.jpg"} />
        <ImageCard src={"/pictures/pic4.avif"} />
        <ImageCard src={"/pictures/milky-way.jpg"} />
        <ImageCard src={"/pictures/pic1.avif"} />
        <ImageCard src={"/pictures/pic4.avif"} />
      </div>
      <div className="text-center font-bold text-white text-2xl m-8">
        “Astronomy compels the soul to look upwards and leads us from this world
        to another”
      </div>
      <div className="text-center font-bold text-white text-3xl m-8 p-4 mb-1 pb-0">
        Let’s check out our socials
      </div>
      <div className="flex space-x-4 m-4 pt-20  pb-20  justify-center ">
        <ImageGrid />
      </div>
    </div>
  );
}

export default Event;
