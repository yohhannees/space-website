import React from "react";
import Image from "next/image";

function TeamMemberCard({
// 	name,
// 	subtitle,
// }: {
// 	name: string;
// 	subtitile: string;
}) {
	return (
		<div className="flex flex-col bg-transparent rounded-lg mb-5">
			<Image
				className="object-cover rounded-t-lg"
				src="/pictures/woman.png"
				alt="Description of other image"
				width={150}
				height={150}
			/>
			<h2 className="mt-2 text-xl font-bold text-center text-white">Name</h2>
			<h3 className="mt-2 text-l font-bold text-center text-white">Title</h3>
		</div>
	);
}

export default TeamMemberCard;
