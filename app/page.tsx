import Header from "./components/Header";
import About from "./components/About";
import Blogs from "./components/Blogs";
import ContactMe from "./components/ContactMe";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";

export default function Home() {
	return (
		<>
			<main className="min-h-screen flex flex-col items-center justify-center">
				<div className="w-full px-6">
					<div className="w-4/7 md:w-4/7 mx-auto">
						<BackgroundBeams className="absolute inset-0" />
						<Header />
						<About />
						<Blogs />
						<ContactMe />
					</div>
				</div>
			</main>
		</>
	);
}
