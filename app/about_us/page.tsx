"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import TeamMemberCard from "../Components/TeamMemberCard";
import Link from "next/link";

function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="text-white font-extrabold text-7xl mt-10 mb-16 self-start pl-36">
        ABOUT US.
      </div>

      <div className="flex px-5 w-[85%]">
        <div className="w-[40%] flex justify-center">
          <Image
            src="/pictures/ahamenesLogo.png"
            alt="logo"
            width={400}
            height={400}
          />
        </div>

        <div className="text-white text-left w-[60%]">
		Ahemanes Space Club is driven by a deep dedication to the science of astronomy and space technology. Our passion extends far beyond personal interest, as we actively engage in educational outreach, public engagement, and collaboration with space agencies and organizations. Through captivating events like star-gazing parties and educational workshops, we aim to instill a sense of wonder and curiosity about the cosmos while fostering a tight-knit community of like-minded individuals. By actively participating in citizen science initiatives and forming partnerships with space advocacy groups, we contribute to real scientific research and amplify our impact in the field. Furthermore, we emphasize the practical benefits of space exploration, such as technological advancements and environmental monitoring, underlining its crucial relevance to humanitys well-being and the health of our planet. Through storytelling and hands-on activities like experiments and DIY projects, we inspire and motivate others to join us in our journey of exploration, playing a pivotal role in nurturing the next generation of space enthusiasts and scientists. Welcome to Ahemanes Space Club, where the stars are just the beginning of our boundless adventures.
        </div>
      </div>
      <div className="relative w-[80%]">
        <Image
          className="absolute right-0 top-0"
          src="/pictures/moonBottomShadow.png"
          alt="Description of image"
          width={400}
          height={400}
        />
        <motion.div
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute right-0 -top-5"
        >
          <Image
            className=""
            src="/pictures/moon_.png"
            alt="Description of image"
            width={240}
            height={240}
          />
        </motion.div>
      </div>
      <div className="mt-28">
        <Image
          src="/pictures/space/aboutus.jpg"
          alt="Description of other image"
          width={800}
          height={400}
        />
      </div>
      <div className="mt-[100px] w-[72%]">
        <div className="text-white font-bold text-4xl  text-center mb-7 ">
          TEAM LEADERS OF OUR CLUB
        </div>
        <div className="grid grid-cols-6">
          {[...Array(12)].map((_, i) => (
            <TeamMemberCard key={i} />
          ))}
        </div>
        <Link href="/team" passHref>
          <Button className="my-10">More Team Members</Button>
        </Link>
      </div>
      {/* <div>
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
					“Astronomy compels the soul to look upwards and leads us from this world to
					another”
				</div>
				<div></div>
			</div> */}
    </div>
  );
}

export default AboutUs;
