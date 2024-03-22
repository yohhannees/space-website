import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";

function AboutUs() {
  return (
    <div className="">
      <div className="text-white font-extrabold text-7xl ml-52 ">About Us</div>

      <div className="flex flex-row">
        <div>
          <Image
            src="/pictures/logo.jpg"
            alt="Description of image"
            width={500}
            height={300}
          />
        </div>
        <div className="text-white font-semibold ml-20 mt-8">
          consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas
          <br />
          est leo malesuada massa quisque vitae at. Aliquet scelerisque magna
          <br />
          nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus
          <br />
          consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas
          <br />
          est leo malesuada massa quisque vitae at. Aliquet scelerisque magna
          <br />
          nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus
          <br />
          consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas
          <br />
          est leo malesuada massa quisque vitae at. Aliquet scelerisque magna
          <br />
          nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus
          <br />
          consequat.Lorem ipsum dolor sit amet consectetur. Diam donec egestas
          <br />
          est leo malesuada massa quisque vitae at. Aliquet scelerisque magna
          <br />
          nulla aenean euismod sed. Adipiscing placerat quisque eu rhoncus
          <br />
          consequat.
        </div>
      </div>

      <div className="ml-64 mb-36">
        <div className="relative">
          <Image
            className="absolute top-0 right-0"
            src="/pictures/moon.jpg"
            alt="Description of image"
            width={200}
            height={200}
          />
          <Image
            src="/pictures/team.jpg"
            alt="Description of other image"
            width={800}
            height={400}
          />
        </div>
      </div>
      <div>
        <div className="text-white font-bold text-4xl  text-center mb-7 ">
          TEAM LEADERS OF OUR CLUB
        </div>
        <div className="flex justify-around flex-wrap mr-20 ml-20">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col bg-transparent rounded-lg">
              <Image
                className="w-56 h-64 object-cover rounded-t-lg"
                src="/pictures/team.jpg"
                alt="Description of other image"
                width={70}
                height={90}
              />
              <h2 className="mt-2 text-xl font-bold text-center text-white">
                Name
              </h2>
              <h3 className="mt-2 text-l font-bold text-center text-white">
                Title
              </h3>
            </div>
          ))}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col bg-transparent rounded-lg">
              <Image
                className="w-56 h-64 object-cover rounded-t-lg"
                src="/pictures/team.jpg"
                alt="Description of other image"
                width={70}
                height={90}
              />
              <h2 className="mt-2 text-xl font-bold text-center text-white">
                Name
              </h2>
              <h3 className="mt-2 text-l font-bold text-center text-white">
                Title
              </h3>
            </div>
          ))}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col bg-transparent rounded-lg">
              <Image
                className="w-56 h-64 object-cover rounded-t-lg"
                src="/pictures/team.jpg"
                alt="Description of other image"
                width={70}
                height={90}
              />
              <h2 className="mt-2 text-xl font-bold text-center text-white">
                Name
              </h2>
              <h3 className="mt-2 text-l font-bold text-center text-white">
                Title
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          <Button> More Team Members</Button>
          <Button variant="light" color="blue">
            Visit gallery
          </Button>
        </div>
        <div className="text-center font-bold text-white text-xl m-8 border-2 border-white bg-purple-500 w-96 p-2 mx-auto">
          <Button color="purple">More Team Members</Button>
        </div>
        <div className="text-center font-bold text-white text-2xl m-8">
          “Astronomy compels the soul to look upwards and leads us from this
          world to another”
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AboutUs;
