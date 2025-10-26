"use client";

import Image from "next/image";
import { useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import Navbar from "./components/Navbar";

export default function Home() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <main
      className="min-h-screen text-white flex flex-col items-center justify-center px-6 py-12 relative bg-cover bg-center bg-no-repeat bg-[url('/fotonaruto.jpg')]"
    >
      {/* Overlay biar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10">
        <Navbar />

        {/* FOTO */}
        <div className="relative flex justify-center">
          <Image
            src="/foto.jpg"
            alt="Profile"
            width={120}
            height={120}
            onClick={() => setIsZoomed(true)}
            className="rounded-full mb-6 border-4 border-white shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* HERO */}
        <h1 className="text-4xl font-bold mb-2 text-center">
          Hi, I am M. Khoirul Anwar 👋
        </h1>
        <p className="text-gray-300 text-center max-w-md mb-12">
          Informatics student at Universitas Nahdlatul Ulama Yogyakarta
        </p>

        {/* ABOUT */}
        <h2 className="text-2xl font-semibold mb-2 text-center">About Me</h2>
        <p className="text-gray-400 text-center max-w-md mb-12">
          have a passion in programming using HTML, CSS, JavaScript, Next.JS, React.JS, besides that I use vercel and github in managing repositories and deployments.
        </p>

        {/* SKILLS */}
        <h2 className="text-2xl font-semibold mb-6 text-center">Skills</h2>
        <div className="flex gap-6 text-4xl mb-16 justify-center">
          {[
            <SiHtml5 color="#F97316" key="html" />,
            <SiCss3 color="#2563EB" key="css" />,
            <SiJavascript color="#FACC15" key="js" />,
            <SiReact color="#22D3EE" key="react" />,
            <SiNextdotjs color="#FFFFFF" key="next" />,
            <SiTailwindcss color="#38BDF8" key="tw" />,
          ].map((Icon, i) => (
            <div
              key={i}
              className="hover:scale-125 transition-transform duration-300 cursor-pointer"
            >
              {Icon}
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <h2 className="text-2xl font-semibold mb-3 text-center">Contact Me</h2>
        <p className="text-gray-400 mb-4 text-center">
          Keep Strong Coders!
        </p>
        <div className="flex justify-center">
          <a
            href="mailto:example@email.com"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-medium hover:opacity-90 transition"
          >
            Email Me
          </a>
        </div>
      </div>

      {/* ZOOM OVERLAY */}
      {isZoomed && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-red-500 transition"
          >
            ✕
          </button>
          <Image
            src="/foto.jpg"
            alt="Zoomed Profile"
            width={400}
            height={400}
            className="rounded-2xl border-4 border-white shadow-2xl transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      )}
    </main>
  );
}
