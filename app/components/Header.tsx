export default function Header() {
  return (
    <>
      <header className="w-full px-6 py-6">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {/* Left: Logo and Name */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-7 h-7"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M25 35 Q30 25 35 30 Q40 35 35 45 Q30 55 25 50" />
                  <path d="M45 30 L45 60" />
                  <path d="M60 30 Q70 25 75 35 Q80 45 75 55 Q70 65 60 60" />
                  <path d="M60 45 L75 45" />
                </svg>
              </div>
              <span className="text-outline font-medium text-sm">Phil Barto</span>
            </div>

            {/* Middle: Title */}
            <div className="flex justify-center">
              <h1 className="text-outline text-base md:text-lg font-normal">movable map of NYC</h1>
            </div>

            {/* Right: Social Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-outline hover:opacity-70 transition-opacity">GH</a>
              <a href="#" className="text-outline hover:opacity-70 transition-opacity">LD</a>
              <a href="#" className="text-outline hover:opacity-70 transition-opacity">EM</a>
            </div>
          </div>
        </div>
      </header>
      {/* Horizontal line separator */}
      <div className="w-full border-t border-white"></div>
    </>
  );
}

