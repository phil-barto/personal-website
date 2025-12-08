"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Briefcase, BookOpen, User, Handshake } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["about", "consulting"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home", icon: Home, href: "/", type: "link" },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
      href: "/experience",
      type: "link",
    },
    {
      id: "blogs",
      label: "Blogs",
      icon: BookOpen,
      href: "/blogs",
      type: "link",
    },
  ];

  const isActive = (item: (typeof menuItems)[0]) => {
    if (item.type === "section") {
      return activeSection === item.id;
    }
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname === item.href;
  };

  return (
    <nav
      className="fixed top-4 left-4 md:top-6 md:left-6 z-50"
      aria-label="Main navigation"
    >
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-1"
      >
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const itemActive = isActive(item);
          const isSection = item.type === "section";

          return (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {isSection ? (
                <button
                  onClick={() => {
                    if (pathname !== "/") {
                      window.location.href = item.href;
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className={cn(
                    "group flex items-center gap-2 px-2 py-1.5",
                    "text-white text-lg font-fira-code",
                    "transition-colors duration-200",
                    "hover:text-[#FFA500]",
                    itemActive && "text-[#FFA500]"
                  )}
                >
                  <span>{item.label}</span>
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-2 px-2 py-1.5",
                    "text-white text-lg font-fira-code",
                    "transition-colors duration-200",
                    "hover:text-[#FFA500]",
                    itemActive && "text-[#FFA500]"
                  )}
                >
                  <span>{item.label}</span>
                </Link>
              )}
            </motion.li>
          );
        })}
      </motion.ul>
    </nav>
  );
}
