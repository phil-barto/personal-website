"use client";

import { useState } from "react";
import Image from "next/image";
import TypingText from "@/components/animata/text/typing-text";

export default function About() {
  const [photoAnimationStarted, setPhotoAnimationStarted] = useState(false);

  // Calculate typing duration: "Hi! I'm Phil." = 12 characters * 100ms = 1200ms
  const handleTypingComplete = () => {
    setPhotoAnimationStarted(true);
  };

  return (
    <section id="about" className="py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-fira-code text-[#FFA500]">
            <TypingText
              text="Hi! I'm Phil."
              repeat={false}
              grow={true}
              delay={100}
              hideCursorOnComplete={true}
              onComplete={handleTypingComplete}
            />
          </h2>
          <p className="text-white text-base sm:text-lg leading-relaxed">
            I'm a software developer based in NYC. Been all over the stack but
            recently I've been doing a-lot of backend and data engineering work.
          </p>
          <br />
          <p className="text-white text-base sm:text-lg leading-relaxed">
            I currently work at Chime (the banking app not the doorbell), where
            I support paid marketing engineering. I previously worked at Capital
            One, where I supported a credit card processing platform and managed
            enterprise supplier data.
          </p>
          <br />
          <p className="text-white text-base sm:text-lg leading-relaxed">
            Outside of work, I thoroughly enjoy endurance sports, lifting,
            skiing, and all things fitness. Also a MASSIVE sci-fi nerd, if
            you're a star wars or marvel fan... let's talk.
          </p>
        </div>

        <div
          className={`max-w-full md:max-w-md aspect-square relative md:ml-auto flex justify-center md:justify-end mt-6 md:mt-0 ${photoAnimationStarted ? "animate-blur-to-focus" : "photo-blurred"}`}
        >
          <Image
            src="/profile_pic.jpg"
            alt="Phil Barto"
            width={400}
            height={400}
            className="w-full h-full object-contain object-center md:object-right"
            priority
          />
        </div>
      </div>
    </section>
  );
}
