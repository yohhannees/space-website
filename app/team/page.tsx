"use client";
import cn from "@/utils/cn";
import { EmblaOptionsType } from "embla-carousel";
import { Alfa_Slab_One } from "next/font/google";
import Image from "next/image";
import React from "react";
import EmblaCarousel from "../Components/EmblaCarousel/EmblaCarousel";
import { leaders } from "./dummy";
import Link from "next/link";
import TeamMemberCard from "../Components/TeamMemberCard";

const alfa = Alfa_Slab_One({
	weight: "400",
	subsets: ["latin"],
});

function page() {
	const OPTIONS: EmblaOptionsType = { loop: true };
	return (
		<div className="flex flex-col items-center">
			{/* Title Section */}
			<div className="flex flex-col items-center my-20">
				<div
					className={cn(
						"text-[70px] text-white w-[48%] leading-tight font-extrabold"
					)}
				>
					This is Our Team Here at <span className="text-[#8E93BF]"> Ahamenes </span>
					Space Club
				</div>
				<div className="w-full flex justify-center -mt-5">
					<div className="w-[50%] flex justify-end">
						<div className="flex items-end gap-3 w-full justify-end pb-10 pr-24">
							<div className="w-[70px] h-[60px] relative rotate-180">
								<Image src="/pictures/team/quotation.png" fill alt="arrow" />
							</div>
							<div className="w-[70px] h-[60px] relative">
								<Image src="/pictures/team/quotation.png" fill alt="arrow" />
							</div>
						</div>
						<div className="w-[250px] h-[180px] relative mr-10">
							<Image src="/pictures/team/arrowDown.png" fill alt="arrow" />
						</div>
					</div>
				</div>
			</div>

			{/* Leaders */}
			<div className="flex flex-col items-center mt-10">
				<div className="font-extrabold text-4xl text-white">Leaders</div>
				<div className="py-14 flex space-x-10">
					{leaders.map((el) => {
						return (
							<div key={el.imageURL}>
								<div className="relative w-[200px] h-[200px]">
									<Image src={el.imageURL} fill alt="leader image" />
								</div>
								<div className="text-white text-center font-bold pt-3 tracking-wide">
									{el.leaderName}
								</div>
								<div className="flex justify-center space-x-1">
									{el.socials?.map((social) => {
										return (
											<Link
												key={social.short}
												className="h-[30px] w-[30px] rounded-full flex justify-center items-center px-1 text-sm text-gray-300"
												href={social.link}
											>
												{social.short}
											</Link>
										);
									})}
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* Coordinators section */}
			<div className="mt-10">
				<div className="font-extrabold text-4xl text-center text-white mb-10">Coordinators</div>
				<div className="grid grid-cols-5 gap-2">
					{[...Array(10)].map((_, i) => (
						<TeamMemberCard key={i} />
					))}
				</div>
			</div>

			{/* CFounding team section */}
			<div className="mt-20">
				<div className="font-extrabold text-4xl text-center text-white mb-10">Founding Team</div>
				<div className="grid grid-cols-5 gap-2">
					{[...Array(10)].map((_, i) => (
						<TeamMemberCard key={i} />
					))}
				</div>
			</div>

			{/* Lets talk section */}
			<div className="flex space-x-10">
				<div className="flex flex-col justify-center items-center space-y-5">
					<div className="text-white font-bold text-6xl">Let’s Talk</div>
					<Link
						href="#"
						className="text-purple-700 border-[0.5px] border-purple-700 px-3 rounded-full py-1 w-[100px] font-semibold text-sm flex justify-center"
					>
						Contact Us
					</Link>
				</div>
				<div className="relative w-[400px] h-[400px]">
					<Image src="/pictures/team/letsTalk.png" fill alt="lets talk" />
				</div>
			</div>
		</div>
	);
}

export default page;
