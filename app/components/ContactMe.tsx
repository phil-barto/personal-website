import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export default function ContactMe() {
  return (
    <section id="contact" className="py-8 sm:py-12">
      <div className="w-full">
        {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-fira-code">
					Contact Me
				</h2> */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 justify-center items-center">
          <a
            href="https://github.com/phil-barto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg hover:text-red-500 transition-colors"
          >
            <FaGithub className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
          <a
            href="https://linkedin.com/in/philbarto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
          <a
            href="mailto:phildbarto@gmail.com"
            className="text-white text-lg hover:text-red-500 transition-colors"
          >
            <BiLogoGmail className="w-7 h-7 sm:w-8 sm:h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}
