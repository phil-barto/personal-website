import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Consulting from "./components/Consulting";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full px-4 sm:px-6">
          <div className="w-full max-w-4xl mx-auto">
            <BackgroundBeams className="absolute inset-0" />
            <Header />
            <About />
            <Consulting />
            <ContactMe />
            <Analytics />
            <SpeedInsights />
          </div>
        </div>
      </main>
    </>
  );
}
