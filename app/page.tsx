import Header from './components/Header';
import About from './components/About';
import Blogs from './components/Blogs';

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full px-6">
          <div className="w-4/7 md:w-4/7 mx-auto">
			      <Header />
            <About />
            <Blogs />
          </div>
        </div>
      </main>
    </>
  );
}
