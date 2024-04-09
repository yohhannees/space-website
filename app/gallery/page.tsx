import Image from "next/image";
import Link from "next/link";
import React from "react";

const App = () => {
const data = [
  {
    link: "add link here",
    image: "/pictures/events/3Astronauts.png",
    comment: `Three astronauts exploring the space.`,
  },
  {
    link: "add link here",
    image: "/pictures/events/Galaxy.png",
    comment: `A beautiful view of the galaxy.`,
  },
  {
    link: "add link here",
    image: "/pictures/events/AstronautFloating.png",
    comment: `An astronaut floating in space.`,
  },
  {
    link: "add link here",
    image: "/pictures/pic4.avif",
    comment: `An astronaut Landing on moon`,
  },
  {
    link: "add link here",
    image: "/pictures/pic 2.avif",
    comment: `Red Moon.`,
  },
  {
    link: "add link here",
    image: "/pictures/pic1.avif",
    comment: `Interstellar explorer.`,
  },
];
  return (
    <>
    <div className="">
      <div className="p-6 container mx-auto">
        <div className="py-2">
          <h1 className="text-center text-4xl">My App</h1>
        </div>
        <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {data.map((x) => {
            return (
              <>
                <article
                  key={x.comment}
                  className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                >
                  <Link
                    href={x.link}
                    className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                  />
                  <div className="relative mb-4 rounded-2xl">
                    <Image
                      width={400}
                      height={400}
                      className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                      src={x.image}
                      alt=""
                    />
                    <Link
                      className="flex justify-center items-center bg-purple-300 bg-opacity-80  absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                      href={x.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit 
                    </Link>
                  </div>
                  <h3 className="font-medium text-xl leading-8 text-white">
                    <Link
                      href="https://animeflyx.vercel.app/"
                      className="block relative group-hover:text-purple-200 transition-colors duration-200 text-white"
                    >
                      <span dangerouslySetInnerHTML={{ __html: x.comment }} />
                    </Link>
                  </h3>
                </article>
              </>
            );
          })}
        </div>
      </div>
    </div>
  </>
  );
};

export default App;