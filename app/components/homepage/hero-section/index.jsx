// @flow strict

import * as React from 'react';
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaReddit } from 'react-icons/fa';
import { MdDownload } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { SiLeetcode } from 'react-icons/si';
import './styles.css';

function MyLogo({ size = 30 }) {
  return (
      <Image
          src="/flymile.ico"
          alt="Flymile Logo"
          width={size}
          height={size}
          layout="intrinsic" 
      />
  );
}

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className="text-pink-500">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
                href={personalData.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={30} />
            </Link>
            <Link
              href={personalData.reddit}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaReddit size={30} />
            </Link>
            <Link
                href={personalData.flymile} // assuming you have a URL for your startup in personalData
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <MyLogo size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div
            className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <div class="user-comments">
              <h3>User Reviews:</h3>
              <ul>
                <li>
                  <strong>u/Prestigious-Deer640:</strong> "Wow, I just found my dream flight using points with this Calendar View tool in just a few minutes. Thanks a ton for sharing it!💕💕"
                  <a href="https://www.reddit.com/r/churningcanada/comments/1c8kjd8/comment/l0gmit4/" target="_blank" rel="noopener noreferrer">Read
                    more</a>
                </li>
                <li>
                  <strong>u/CommunicationProud82:</strong> "This and seats.aero (for Star Alliance) are my go-tos now"
                  <a href="https://www.reddit.com/r/churningcanada/comments/1befz81/comment/kuui2ar/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" rel="noopener noreferrer">Read
                    more</a>
                </li>
                <li>
                  <strong>u/dotCOM16:</strong> "Great to hear, I love the platform and had posted several reviews myself."
                  <a href="https://www.reddit.com/r/Concordia/comments/1cto9o9/comment/l4jbipb/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" rel="noopener noreferrer">Read
                    more</a>
                </li>
                <li>
                  <strong>u/Swimming_Statement69:</strong> "This flymile.pro was very helpful, I even found 1 business 60K and 1 First to Tokyo next month , booked for my mom and dad. My mom said why not first for me 🥲🤣"
                  <a href="https://www.reddit.com/r/awardtravel/comments/1csikpb/comment/l46u7ha/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button" target="_blank" rel="noopener noreferrer">Read
                    more</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
