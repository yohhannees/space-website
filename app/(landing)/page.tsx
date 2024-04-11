"use client";
import "@mantine/carousel/styles.css";
import { motion, scroll, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import EmblaCarousel from "../Components/EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { Alfa_Slab_One, Inter } from "next/font/google";
import cn from "@/utils/cn";
import { Carousel } from "@mantine/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import eventData, { eventDataType } from "../event/dummy";
import Link from "next/link";

const alfa = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

const TravelSection = () => {
  return (
    <div className="py-10 px-40 h-screen-minus-80 snap-always snap-center relative">
      <div className={cn("text-white text-[65px]  text-left", alfa.className)}>
        LET’S TRAVEL TO THE EDGE OF SPACE
      </div>
      <div className="text-white text-left w-full font-bold text-[23px]">
        We are a group that love to explore and learn new information <br />{" "}
        related to our universe. Join us and Explore
      </div>
      <div className="text-white text-left mt-5 w-full">
        <span className="border-white border-2 p-5 py-2 hover:cursor-pointer hover:py-3 transition-all delay-150">
          DISCOVER MORE
        </span>
      </div>
      <motion.div
        initial={{ rotateZ: 0 }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute right-28 bottom-0"
      >
        <Image width={350} height={350} src="/pictures/moon_.png" alt="moon" />
      </motion.div>
    </div>
  );
};
const RocketSection = () => {
  return (
    <div className="h-screen-minus-80 snap-always snap-center relative">
      <div className="text-[75px] tracking-[20px] mt-8 font-bold text-white">
        AHAMENES
      </div>
      <div className="text-2xl tracking-[20px] text-red-500 font-bold mb-5">
        SPACE CLUB
      </div>
      <div className="w-full flex justify-center">
        <div className="absolute bottom-0 flex gap-4 pl-1">
          <Image
            src="/assets/Fire.svg"
            width={90}
            height={90}
            alt="rocket parts"
          />
          <Image
            src="/assets/Fire.svg"
            width={90}
            height={90}
            alt="rocket parts"
          />
        </div>
        <div className="absolute">
          <Image
            src="/assets/Rocket.svg"
            width={200}
            height={200}
            alt="rocket parts"
          />
        </div>
        <div className="absolute bottom-0 flex gap-20">
          <Image
            src="/assets/smokeLeft.svg"
            width={440}
            height={440}
            alt="rocket parts"
          />
          <Image
            src="/assets/smokeRight.svg"
            width={440}
            height={440}
            alt="rocket parts"
          />
        </div>
      </div>
    </div>
  );
};
const Introduction = () => {
  return (
    <div className="snap-always snap-center pb-[280px]">
      <div className="px-48 pt-[80px] relative">
        <div
          className={cn(
            "text-white text-[90px] font-bold text-left leading-tight",
            inter.className
          )}
        >
          We’re <span className="text-[#8E93BF]">AHAMENES</span> <br /> Space
          club.
        </div>
        <motion.div
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-64 -bottom-[260px]"
        >
          <Image
            width={350}
            height={350}
            src="/pictures/moon_.png"
            alt="moon"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default function Home() {
  const { scrollYProgress, scrollY } = useScroll();
  const OPTIONS: EmblaOptionsType = { loop: true };
  // useMotionValueEvent(scrollY, "change", (latest) => {
  // 	console.log("Page scroll: ", latest);
  // });

  const autoplay = useRef(Autoplay({ delay: 8000 }));
  const recentEvent: eventDataType = eventData[0];
  // snap-y snap-mandatory h-screen
  return (
    <div className=" text-center content-center overflow-y-scroll z-0 no-scrollbar">
      {/* Top Carousel section */}
      <div className="h-screen-minus-80 snap-always snap-center text-white ">
        <Carousel
          withIndicators
          loop
          withControls={false}
          height="100%"
          plugins={[autoplay.current]}
        >
          <Carousel.Slide>
            <RocketSection />
          </Carousel.Slide>
          <Carousel.Slide>
            <TravelSection />
          </Carousel.Slide>
          <Carousel.Slide>
            <Introduction />
          </Carousel.Slide>
        </Carousel>
      </div>

      {/* About us section */}
      <div className="snap-always snap-start pb-[100px] mt-10">
        <div className="h-[200px]  text-2xl flex-row items-center text-center justify-center text-white">
          <div className="leading-[0px] pt-36">About Ahamenes</div>
          <motion.hr
            style={{ scaleX: scrollYProgress }}
            className={`w-[10%] inline-block`}
          />
        </div>
        <div className="px-60 text-white text-[30px]">
          The society aims at enhancing the much-required leadership qualities
          as well as interpersonal communication skills by encouraging students
          to participate in and organize various inter and intra college
          literary events.
        </div>
        <div className="flex justify-between px-[450px] mt-32 text-white">
          <div className="flex-row justify-center items-center">
            <div className="text-lg">Member</div>
            <div className="text-[60px] pl-6">24+</div>
          </div>
          <div className="flex-row justify-center items-center">
            <div className="text-lg">Awards</div>
            <div className="text-[60px] pl-6">10+</div>
          </div>
          <div className="flex-row justify-center items-center">
            <div className="text-lg">Events</div>
            <div className="text-[60px] pl-6">31+</div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="snap-always snap-start pt-10 pb-10">
        <div className="text-center tracking-widest text-white">
          WHAT’S IT LIKE WHEN WE HAVE EVENTS
        </div>
        <div className="py-14 flex justify-center">
          <div className="text-white overflow-hidden w-[85%]">
            <EmblaCarousel
              slides={[
                "/pictures/homeCarousel/event1.jpg",
                "/pictures/homeCarousel/event2.jpg",
                "/pictures/homeCarousel/event3.jpg",
                "/pictures/homeCarousel/event4.jpg",
                "/pictures/homeCarousel/event5.jpg",
              ]}
              options={OPTIONS}
            />
          </div>
        </div>
      </div>

      {/* Recent Events Section */}
      <div className="snap-always snap-start flex flex-col justify-center items-center py-20 relative">
        <div className="text-white py-3 px-1 w-[65%] flex text-lg">
          <div>Recent Events</div>
        </div>
        <div className="relative w-[65%] h-[400px]">
          <Image
            src={recentEvent.imageURL}
            fill
            objectFit="cover"
            alt="recent event image"
            className="rounded-lg"
          />
        </div>
        <div className="w-[430px] text-white bg-black p-5 bg-opacity-85 space-y-1 bottom-60 right-[300px] absolute rounded-lg flex flex-col items-start">
          <div className="text-[10px]">{recentEvent.date}</div>
          <div className="text-sm">{recentEvent.title}</div>
          <p className="text-xs text-start">{recentEvent.text}</p>
          <Link href="/event">
            <div className="bg-white p-2 text-black inline-block rounded-sm text-sm mt-5 hover:cursor-pointer">
              {recentEvent.buttonText}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
