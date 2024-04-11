"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="lg:h-[80px] bg-transparent flex justify-between items-center px-16 text-white">
      <div className="mt-5">
        <Link href="/">
          <Image
            src="/pictures/ahamenesLogo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <div className="flex gap-8 text-sm">
        <a href="/event">EVENTS</a>
        <a href="/about_us">ABOUT US</a>
        <a href="/team">TEAM</a>
        <a href="/contact">CONTACT US</a>
        <a href="/faq">FAQ</a>
        <a href="/gallery">GALLERY & MEDIA</a>
      </div>
      <div>
        <button className="bg-red-500 px-5 py-1 text-white text-sm rounded-full ">
          Space Wiki
        </button>
      </div>
    </div>
  );
}

export default Navbar;
