import Navigation from "../components/Navigation";
import { ExperienceTimeline } from "../components/experience/ExperienceTimeline";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full px-6">
          <div className="w-4/7 md:w-4/7 mx-auto">
            <BackgroundBeams className="absolute inset-0" />
            <section className="py-12">
              <h2 className="text-5xl md:text-5xl font-bold text-white mb-12 font-fira-code">
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
