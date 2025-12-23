"use client";

import MapIntro from "./MapIntro";

export default function Header() {
  return (
    <>
      <header className="w-full py-4 sm:py-6">
        <div className="w-full flex justify-center items-center">
          <div className="h-32 sm:h-48 md:h-64 lg:h-80 relative w-full">
            <MapIntro />
          </div>
        </div>
      </header>
      {/* Horizontal line separator */}
      {/* <div className="w-full border-t border-white"></div> */}
    </>
  );
}
