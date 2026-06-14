"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "experience", label: "Experience", href: "/experience" },
  { id: "blogs", label: "Blogs", href: "/blogs" },
];

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  return (
    <nav
      className="fixed top-2 left-2 sm:top-4 sm:left-4 md:top-6 md:left-6 z-50"
      aria-label="Main navigation"
    >
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-0.5 sm:gap-1"
      >
        {menuItems.map((item, index) => (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Link
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "group flex items-center gap-1.5 sm:gap-2 px-1.5 sm:px-2 py-1 sm:py-1.5",
                "text-white text-sm sm:text-base md:text-lg font-fira-code",
                "transition-colors duration-200",
                "hover:text-[#FFA500]",
                isActive(item.href) && "text-[#FFA500]"
              )}
            >
              <span>{item.label}</span>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
