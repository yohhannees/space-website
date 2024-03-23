"use client";
import { motion, scroll, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
// import EmblaCarousel from "../Components/EmblaCarousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
// import Autoplay from "embla-carousel-autoplay";
import { Alfa_Slab_One, Inter } from "next/font/google";
import cn from "@/utils/cn";
// import { cn } from "@/lib/utils";

const alfa = Alfa_Slab_One({
	weight: "400",
	subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });
const TravelSection = () => {
	return (
		<div className="px-40 pt-[100px]">
			<div
				// className={[ alfa.className ,"text-red-600 text-[80px] font-bold"].join("")}
				className={cn("text-white text-[65px] font-bold text-left", alfa.className)}
			>
				LET’S TRAVEL TO THE EDGE OF SPACE
			</div>
			<div className="text-white text-left">
				We are a group that love to explore and learn new information related to our
				universe. <br /> Join us and Explore
			</div>
			<div className="text-white text-left mt-5">
				<span className="border-white border-2 p-5 py-2 hover:cursor-pointer hover:py-3 transition-all delay-150">
					DISCOVER MORE
				</span>
			</div>
			<motion.div
				// initial={{ rotateZ: 0 }}
				// animate={{ rotateZ: 360 }}
				transition={{ duration: 2, repeat: Infinity }}
				className="absolute right-28 -bottom-40"
			>
				<Image width={600} height={600} src="/pictures/moon.png" alt="moon" />
			</motion.div>
		</div>
	);
}
const RocketSection = () => {
	return (
		<>
			<div className="text-[75px] tracking-[20px] mt-8 font-bold text-white">
				AHAMENES
			</div>
			<div className="text-2xl tracking-[20px] text-red-500 font-bold mb-5">
				SPACE CLUB
			</div>
			<div className="w-full flex justify-center">
				<div className="absolute bottom-0 flex gap-4 pl-1">
					<Image src="/assets/Fire.svg" width={90} height={90} alt="rocket parts" />
					<Image src="/assets/Fire.svg" width={90} height={90} alt="rocket parts" />
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
		</>
	);
};

export default function Home() {
	const { scrollYProgress, scrollY } = useScroll();
	const OPTIONS: EmblaOptionsType = { loop: true };
	// useMotionValueEvent(scrollY, "change", (latest) => {
	// 	console.log("Page scroll: ", latest);
	// });

	return (
		<div className=" text-center content-center snap-y snap-mandatory overflow-y-scroll h-screen flex-grow z-0 no-scrollbar">
		{/* <div className="text-center content-center"> */}
			<div className="snap-always snap-center pb-[387px]">
				<div className="px-48 pt-[80px]">
					<div
						// className={[ alfa.className ,"text-red-600 text-[80px] font-bold"].join("")}
						className={cn(
							"text-white text-[90px] font-bold text-left leading-tight",
							inter.className
						)}
					>
						We’re <span className="text-[#8E93BF]">AHAMENES</span> <br /> Space club.
					</div>
					{/* <Image
						width={350}
						height={350}
						src="/pictures/moonShadow.png"
						alt="moon"
						className="absolute right-64 bottom-10 z-10 rotate-180 opacity-60"
					/> */}
					<motion.div
						initial={{ rotateZ: 0 }}
						animate={{ rotateZ: 360 }}
						transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
						className="absolute right-64 bottom-10"
					>
						<Image width={350} height={350} src="/pictures/moon_.png" alt="moon" />
					</motion.div>
				</div>
			</div>

			{/* <RocketSection/> */}

			{/* About us section */}
			<div className="snap-always snap-center pt-[100px] pb-[100px]">
				<div className="h-[200px]  text-2xl flex-row items-center text-center justify-center text-white">
					<div className="leading-[0px] pt-36">About Ahamenes</div>
					<motion.hr
						style={{ scaleX: scrollYProgress }}
						className={`w-[10%] inline-block`}
					/>
				</div>
				<div className="px-80 text-white">
					The society aims at enhancing the much-required leadership qualities as
					well as interpersonal communication skills by encouraging students to
					participate in and organize various inter and intra college literary
					events.
				</div>
				<div className="flex justify-between px-[450px] mt-32 text-white">
					<div className="flex-row justify-center items-center">
						<div className="text-sm">Member</div>
						<div className="text-[50px] pl-4">24+</div>
					</div>
					<div className="flex-row justify-center items-center">
						<div className="text-sm">Awards</div>
						<div className="text-[50px] pl-4">10+</div>
					</div>
					<div className="flex-row justify-center items-center">
						<div className="text-sm">Events</div>
						<div className="text-[50px] pl-4">31+</div>
					</div>
				</div>
			</div>

			{/* Carousel Section */}
			<div className="snap-always snap-center pt-[67px]">
				<div className="text-center tracking-widest text-white">
					WHAT’S IT LIKE WHEN WE HAVE EVENTS
				</div>
				<div className="py-14">
					<div className="text-white">
						{/* <EmblaCarousel
							slides={[
								"/pictures/carouselPictures/event1.jpg",
								"/pictures/carouselPictures/event2.jpg",
								"/pictures/carouselPictures/event3.jpg",
								"/pictures/carouselPictures/event4.jpg",
								"/pictures/carouselPictures/event5.jpg",
							]}
							options={OPTIONS}
						/> */}
					</div>
				</div>
			</div>
		</div>
	);
}
