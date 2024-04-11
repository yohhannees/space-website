"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div>
      {" "}
      <footer className="w-full  bg-black bg-opacity-50 pt-10">
        <div className=" pt-[300px] md:pt-0 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className=" md:flex md:justify-between">
            <div className="hidden md:block relative mb-6 md:mb-0">
              <div className="absolute -bottom-6 left-32  h-32 w-32 rounded-full bg-[#47C2C2]"></div>
              <div className="absolute top-8 -left-3 text-white text-center h-52 w-52  rounded-full bg-[#6480ff] flex items-center justify-center ">
                GET IN TOUCH
              </div>
              <div className="absolute -top-6 -left-16  h-32 w-32 rounded-full bg-blend-lighten bg-black">
                {" "}
                <Image
                  src="/pictures/ahamenesLogo.png"
                  alt="Logo"
                  width={200}
                  height={200}
                  className="me-3"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 ">
              <div className="flex items-center justify-start">
                <Image
                  src="/pictures/ahamenesLogo.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="w-20"
                />
                <div className=" text-white font-bold text-3xl font-sans">
                  <span className="tracking-widest">AHAMENES</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-10 text-xs sm:gap-20 sm:grid-cols-2">
                <div>
                  <h2 className="font-sans mb-6 text-sm font-semibold text-slate-400 uppercase dark:text-white">
                    Website Links
                  </h2>
                  <ul className="font-sans text-gray-500 dark:text-gray-400 font-medium">
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
                    <li className="mb-4 text-slate-400">
                      <a
                        href="https://www.w3.org/Provider/Style/dummy.html"
                        className="font-sans hover:underline"
                      >
                        <div className=" text-slate-400">Services</div>
                        
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.w3.org/Provider/Style/dummy.html"
                        className="font-sans hover:underline"
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
                        3d maps
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.w3.org/Provider/Style/dummy.html"
                        className="hover:underline"
                      >
                        Structure Design
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
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.w3.org/Provider/Style/dummy.html"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.w3.org/Provider/Style/dummy.html"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
            <div className="flex   justify-center ">
              <span className="text-sm  text-white sm:text-center ">
                © {currentYear} Ahamenes Club
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
