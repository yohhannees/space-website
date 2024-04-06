"use client";
import React, { useState } from "react";
import Image from "next/image";
import {moonVid} from "@/public/pictures/moonVid.mp4"
import ImageCard from "./ImgCard";
import ImageGrid from "./ImgGrid";
import EventCard from "./EventCard";
import { Alfa_Slab_One } from "next/font/google";
import cn from "@/utils/cn";
import { Button } from "@mantine/core";
import EventDisplay from "../Components/EventDisplay";
import eventData from "./dummy";
import { motion } from "framer-motion";

const alfa = Alfa_Slab_One({
	weight: "400",
	subsets: ["latin"],
});

function Event() {
	const [currentEvent, setCurrentEvent] = useState(eventData[0]);
	return (
		<div>
			<div className="flex items-center justify-center h-screen">
				<div
					className="flex justify-center text-white w-3/4 h-3/5"
					style={{
						backgroundImage: `url(/pictures/pic1.avif)`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				>
					<div className="flex items-end justify-start w-full text-white leading-tight pl-5 pb-10">
						<div>
							<p className={cn("text-6xl font-extrabold", alfa.className)}>
								Our Stargazers Spectacle
							</p>
							<p className="text-3xl font-bold">A Journey through the Cosmos</p>
						</div>
					</div>
				</div>
			</div>

			{/* !!!!  NOT WORKING  !!!! */}
			{/* <div className="bg-red-600">
				<video width="320" height="320" preload="none" loop>
					<source src="/pictures/moonVid.mp4" type="video/mp4" />
				</video>
			</div> */}

			<div className="space-y-10">
				{/* Moon Image */}
				<div className="relative flex justify-center">
					<div
						className={cn(
							"text-white text-center text-xl tracking-[6px] leading-[0px] absolute top-0 mt-14",
							alfa.className
						)}
					>
						Recent Events
					</div>
					<motion.div
						initial={{ rotateZ: 0 }}
						animate={{ rotateZ: 360 }}
						transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
						className="absolute top-0 left-[170px] z-10 inline"
					>
						<Image
							// className="absolute top-0 left-[170px] z-10"
							src="/pictures/moon_.png"
							alt="Description of image"
							width={200}
							height={200}
						/>
					</motion.div>
					<div className="flex">
						<Image
							src="/pictures/redMoon.png"
							alt="Description of other image"
							width={600}
							height={300}
							className="mt-24 opacity-60"
						/>
						<div
							className={cn(
								"text-white w-[300px] flex justify-end text-xl pt-16",
								alfa.className
							)}
						>
							#1
						</div>
						<div className="w-[430px] text-white bg-white p-5 bg-opacity-50 space-y-1 absolute bottom-10 right-[320px]">
							<div className="text-[10px]">18/06/2023</div>
							<div className="text-sm">TALK ON DARK MATTER</div>
							<p className="text-xs ">
								Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo
								malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean
								euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem
								ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada
								massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod
								sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor
								sit amet
							</p>
							<div className="bg-white p-2 text-black inline-block rounded-sm text-sm mt-5 hover:cursor-pointer">
								Learn More
							</div>
						</div>
					</div>
				</div>

				{/* ASTRONAUT IMAGE */}
				{/* <div className="relative flex justify-center">
					<div className="flex">
						<div
							className={cn(
								"text-white w-[300px] flex justify-start text-xl pt-16 ml-[100px]",
								alfa.className
							)}
						>
							#2
						</div>
						<div className="w-[600px] h-[500px] relative mt-16 mr-[200px]">
							<Image
								src="/pictures/pic4.avif"
								alt="Description of other image"
								// width={400}
								// height={300}
								fill
								objectFit="cover"
							/>
						</div>

						<div className="w-[430px] text-white bg-white p-5 bg-opacity-50 space-y-1 absolute bottom-10 left-[320px]">
							<div className="text-[10px]">18/06/2023</div>
							<div className="text-sm">ASTRONAUTS WE KNOW</div>
							<p className="text-xs ">
								Lorem ipsum dolor sit amet consectetur. Diam donec egestas est leo
								malesuada massa quisque vitae at. Aliquet scelerisque magna nulla aenean
								euismod sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem
								ipsum dolor sit amet consectetur. Diam donec egestas est leo malesuada
								massa quisque vitae at. Aliquet scelerisque magna nulla aenean euismod
								sed. Adipiscing placerat quisque eu rhoncus consequat.Lorem ipsum dolor
								sit amet
							</p>
							<div className="bg-white p-2 text-black inline-block rounded-sm text-sm mt-5 hover:cursor-pointer">
								Learn More
							</div>
						</div>
					</div>
				</div> */}
				<EventDisplay {...currentEvent} />
			</div>

			<div className="flex space-x-4 m-4 justify-center mt-10">
				{eventData.map((el) => {
					return (
						<div key={el.title} onClick={() => setCurrentEvent(el)}>
							<ImageCard src={el.imageURL} />
						</div>
					);
				})}
			</div>
			<div className="text-center font-bold text-white text-2xl m-8">
				“Astronomy compels the soul to look upwards and leads us from this world to
				another”
			</div>
			<div className="text-center font-bold text-white text-3xl m-8 p-4 mb-1 pb-0">
				Let’s check out our socials
			</div>
			<div className="flex space-x-4 m-4 pt-20  pb-20  justify-center ">
				<ImageGrid />
			</div>
			<div className="text-center font-extrabold text-white text-6xl ">
				Upcoming Events
			</div>
			<div className="flex space-x-4 m-4 pt-20  pb-20  justify-center ">
				<EventCard />
			</div>
		</div>
	);
}

export default Event;
