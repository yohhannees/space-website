import React from 'react'
import Image from 'next/image';
import { Alfa_Slab_One } from 'next/font/google';
import cn from '@/utils/cn';
import { eventDataType } from '../event/dummy';
import Link from 'next/link';
const alfa = Alfa_Slab_One({
	weight: "400",
	subsets: ["latin"],
});
function EventDisplay({...props}:eventDataType) {
  return (
			<div className="relative flex justify-center">
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
							src={props.imageURL}
							alt="Description of other image"
							fill
							objectFit="cover"
						/>
					</div>

					<div className="w-[430px] text-white bg-white p-5 bg-opacity-50 space-y-1 absolute bottom-10 left-[320px]">
						<div className="text-[10px]">{props.date}</div>
						<div className="text-sm">{props.title}</div>
						<p className="text-xs ">{props.text}</p>
						<Link href={props.buttonURL}>
							<div className="bg-white p-2 text-black inline-block rounded-sm text-sm mt-5 hover:cursor-pointer">
								{props.buttonText}
							</div>
						</Link>
					</div>
				</div>
			</div>
		);
}

export default EventDisplay