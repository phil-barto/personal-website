import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export default function ContactMe() {
  return (
    <section id="contact" className="py-8 sm:py-12">
      <div className="w-full flex flex-col items-center text-center gap-5 sm:gap-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-fira-code">
          Get in touch
        </h2>
        <p className="text-white/80 text-base sm:text-lg max-w-md">
          Have a project, a tough problem, or just want to talk shop? My inbox
          is open.
        </p>

        <div className="flex gap-6 sm:gap-8 justify-center items-center pt-2">
          <a
            href="https://github.com/phil-barto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-[#FFA500] transition-colors"
          >
            <FaGithub className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://linkedin.com/in/philbarto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-[#FFA500] transition-colors"
          >
            <FaLinkedin className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
          <a
            href="mailto:phildbarto@gmail.com"
            aria-label="Email"
            className="text-white hover:text-[#FFA500] transition-colors"
          >
            <BiLogoGmail className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
