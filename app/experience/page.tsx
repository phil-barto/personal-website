import Navigation from "../components/Navigation";
import Experience from "../components/Experience";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full px-6">
          <div className="w-4/7 md:w-4/7 mx-auto">
            <BackgroundBeams className="absolute inset-0" />
            <Experience />
          </div>
        </div>
      </main>
    </>
  );
}
