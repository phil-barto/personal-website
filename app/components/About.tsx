import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-12 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Text content */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">Hi! I'm Phil</h2>
            <p className="text-white text-lg leading-relaxed">
              Hi I'm phil. Software developer based in NYC. I've been all over the stack but recently have been designing platforms for fintechs
            </p>
          </div>
          
          {/* Right: Profile picture */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-md aspect-square relative">
              <Image
                src="/profile_pic.jpg"
                alt="Phil Barto"
                width={400}
                height={400}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

