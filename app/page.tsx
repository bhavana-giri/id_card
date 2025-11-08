"use client";

import { Youtube, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 lg:p-16">
      <div className="w-full max-w-md flex flex-col items-center gap-8">
        {/* ID Card */}
        <div className="relative w-full">
          {/* Backing Card (Red) */}
          <div className="absolute -left-2 -top-2 w-full h-full bg-[#DC382D] rounded-lg transform rotate-[-2deg] z-0"></div>
          
          {/* Main Card (White) */}
          <div className="relative bg-white rounded-lg p-6 shadow-2xl z-10">
            {/* Lanyard Clip */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-12 h-8 bg-gray-300 rounded-t-lg flex items-center justify-center">
                <div className="w-8 h-6 bg-gray-400 rounded-t-sm"></div>
              </div>
              <div className="w-1 h-4 bg-[#DC382D] mx-auto"></div>
            </div>

            {/* Card Content */}
            <div className="pt-2">
              {/* Logo - Top Left */}
              <div className="mb-4 flex items-start">
                <div className="w-10 h-6 flex items-center">
                  {/* Simple logo placeholder - two wavy lines */}
                  <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 8C4 6 6 10 8 8C10 6 12 10 14 8C16 6 18 10 20 8C22 6 24 10 26 8C28 6 30 10 30 8" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M2 12C4 10 6 14 8 12C10 10 12 14 14 12C16 10 18 14 20 12C22 10 24 14 26 12C28 10 30 14 30 12" stroke="black" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Photo - Upper Half */}
              <div className="mb-4 flex justify-center">
                <div className="w-36 h-36 rounded-full overflow-hidden relative">
                  <Image
                    src="/image_bhav.jpeg"
                    alt="Bhavana Giri"
                    width={144}
                    height={144}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Name */}
              <h1 className="text-2xl font-bold text-black mb-1 text-center">
                Bhavana Giri
              </h1>

              {/* Title */}
              <p className="text-gray-500 text-sm mb-6 text-center font-normal">
                Developer Advocate
              </p>

              {/* Bottom Info */}
              {/* <div className="flex justify-between items-center text-xs text-black">
                <div className="flex items-center gap-1.5">
                  <span className="font-medium">WEBSITE</span>
                  <span className="w-1.5 h-1.5 bg-[#DC382D] rounded-full"></span>
                  <span className="font-medium">REDIS.IO</span>
                </div>
                <div>
                  <span className="font-medium">ID #00000000</span>
                </div>
              </div> */}
              
              {/* Social Media Links */}
              <div className="flex gap-4 justify-center mt-6">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-[#FF0000]" fill="#FFFFFF" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-[#0077B5]" fill="#0077B5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-[#181717]" fill="#181717" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
