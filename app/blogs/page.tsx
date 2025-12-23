import Navigation from "../components/Navigation";
import Blogs from "../components/Blogs";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";

export default function BlogsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full px-4 sm:px-6">
          <div className="w-full max-w-4xl mx-auto">
            <BackgroundBeams className="absolute inset-0" />
            <Blogs />
          </div>
        </div>
      </main>
    </>
  );
}
