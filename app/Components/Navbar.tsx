import Link from "next/link";
import React from "react";
import Image from "next/image";

function Navbar() {
    // THis navbar is a placeholder untill the actual navbar is submited
	return (
		<div className="lg:h-[80px] bg-transparent flex justify-between items-center px-16 text-white">
			<Link href='/' className="mt-5">
				<Image
					src="/pictures/ahamenesLogo.png"
					alt="logo"
					width={100}
					height={100}
				/>
			</Link>
			<div className="flex gap-8 text-sm">
				<Link href="/event">EVENTS</Link>
				<Link href="/about_us">ABOUT US</Link>
				<Link href="#">GALLERY & MEDIA</Link>
				<Link href="#">CLUB WEBSITE</Link>
				<Link href="#">TEAM</Link>
			</div>
			<div>
				<button className="bg-red-500 px-5 py-1 text-white text-sm rounded-full ">
					Explore
				</button>
			</div>
		</div>
	);
}

export default Navbar;
