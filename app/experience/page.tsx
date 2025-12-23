import Navigation from "../components/Navigation";
import { ExperienceTimeline } from "../components/experience/ExperienceTimeline";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full px-4 sm:px-6">
          <div className="w-full max-w-4xl mx-auto">
            <BackgroundBeams className="absolute inset-0" />
            <section className="py-8 sm:py-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 sm:mb-12 font-fira-code">
                Experience
              </h2>
              <ExperienceTimeline />
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
