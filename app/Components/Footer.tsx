import React from "react";
import Circle from "../assets/images/Ellipse.png";

import Logo from "../assets/svg/logoSpace.svg";
import Image from "next/image";
const Footer = () => {
	return (
		<div>
			{" "}
			<footer className="  w-full">
				<div className=" pt-[300px] md:pt-0 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
					<div className=" md:flex md:justify-between">
						<div className="hidden md:block relative mb-6 md:mb-0">
							div
							<div className="absolute top-20 left-20 text-white text-center flex items-center justify-center ">
								Get in touch
							</div>
							<div className="absolute -bottom-6 left-32  h-32 w-32 rounded-full bg-[#47C2C2]"></div>
							<div className="absolute -top-6 -left-16  h-32 w-32 rounded-full bg-[#1717174b]"></div>
						</div>

						<div className="flex flex-col gap-2 ">
							<div className="flex items-center justify-start">
								<div className="w-20 h-20">
									<Image src="/pictures/ahamenesLogo.png" alt="" fill />
								</div>
								<div className=" text-white font-bold tracking-widest text-3xl">
									AHAMENES
								</div>
							</div>

							<div className="grid grid-cols-2 md:grid-cols-2 gap-10 text-xs sm:gap-20 sm:grid-cols-2">
								<div>
									<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
										Website Links
									</h2>
									<ul className="text-gray-500 dark:text-gray-400 font-medium">
										<li className="mb-4">
											<a
												href="https://www.w3.org/Provider/Style/dummy.html"
												className="hover:underline"
											>
												Home
											</a>
										</li>
										<li className="mb-4">
											<a
												href="https://www.w3.org/Provider/Style/dummy.html"
												className="hover:underline"
											>
												About
											</a>
										</li>
										<li className="mb-4">
											<a
												href="https://www.w3.org/Provider/Style/dummy.html"
												className="hover:underline"
											>
												Services
											</a>
										</li>
										<li>
											<a
												href="https://www.w3.org/Provider/Style/dummy.html"
												className="hover:underline"
											>
												FAQs
											</a>
										</li>
									</ul>
								</div>

								<div>
									<h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
										Services
									</h2>
									<ul className="text-gray-500 dark:text-gray-400 font-medium">
										<li className="mb-4">
											<a
												href="https://www.w3.org/Provider/Style/dummy.html"
												className="hover:underline"
											>
												Architecture
											</a>
										</li>
										<li className="mb-4">
											<a
												href="https://www.w3.org/Provider/Style/dummy.html"
												className="hover:underline"
											>
												Buildings{" "}
											</a>
										</li>
										<li className="mb-4">
											<a
												href="https://www.w3.org/Provider/Style/dummy.html"
												className="hover:underline"
											>
												Buildings
											</a>
										</li>
										<li>
											<a
												href="https://www.w3.org/Provider/Style/dummy.html"
												className="hover:underline"
											>
												Buildings
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<hr className="my-6 border-white sm:mx-auto  lg:my-8" />
					<div className="w-full flex items-center justify-between">
						{" "}
						<div className="flex justify-start ">
							<a
								href="https://www.w3.org/Provider/Style/dummy.html"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								{/* <BiLogoFacebookCircle /> */}
							</a>
							<a
								href="https://www.w3.org/Provider/Style/dummy.html"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
							>
								{/* <PiInstagramLogoFill /> */}
							</a>
							<a
								href="https://www.w3.org/Provider/Style/dummy.html"
								className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
							>
								{/* <BiLogoLinkedinSquare /> */}
							</a>
						</div>
						<div className="flex   justify-center ">
							<span className="text-sm  text-white sm:text-center ">
								© 2024 Non Copyrighted
							</span>
						</div>
						<div></div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
