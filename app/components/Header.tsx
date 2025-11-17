"use client";

import MapIntro from './MapIntro';

export default function Header() {
  return (
    <>
      <header className="w-full px-6 py-6">
        <div className="w-full flex justify-center items-center">
          <div className="h-16 md:h-45 relative w-4/7 md:w-5/7">
            <MapIntro />
          </div>
        </div>
      </header>
      {/* Horizontal line separator */}
      {/* <div className="w-full border-t border-white"></div> */}
    </>
  );
}

