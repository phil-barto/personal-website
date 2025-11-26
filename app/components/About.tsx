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
		<section id="about" className="py-12">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
				<div>
					<h2 className="text-5xl md:text-5xl font-bold text-red-500 mb-6 font-fira-code">
						<TypingText
							text="Hi! I'm Phil."
							repeat={false}
							grow={true}
							delay={100}
							hideCursorOnComplete={true}
							onComplete={handleTypingComplete}
						/>
					</h2>
					<p className="text-white text-lg leading-relaxed">
						Hi I'm phil. Software developer based in NYC. I've been all over the
						stack but recently have been designing platforms for fintechs
					</p>
				</div>

				<div className={`max-w-md max-h-md aspect-square relative ml-auto flex justify-end ${photoAnimationStarted ? 'animate-blur-to-focus' : 'photo-blurred'}`}>
					 <Image
              src="/profile_pic.jpg"
              alt="Phil Barto"
              width={400}
              height={400}
              className="w-full h-full object-contain object-right"
              priority
            />
				</div>
			</div>
		</section>
	);
}
