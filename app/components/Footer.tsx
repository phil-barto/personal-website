import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-8 sm:mt-12 py-6 sm:py-8 border-t border-white/10">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm font-fira-code">
          © {year} Phil Barto
        </p>
        <div className="flex gap-5 sm:gap-6 items-center">
          <a
            href="https://github.com/phil-barto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/70 hover:text-[#FFA500] transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/philbarto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/70 hover:text-[#FFA500] transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:phildbarto@gmail.com"
            aria-label="Email"
            className="text-white/70 hover:text-[#FFA500] transition-colors"
          >
            <BiLogoGmail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
