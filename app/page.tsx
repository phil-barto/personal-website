import Header from './components/Header';
import About from './components/About';
import Blogs from './components/Blogs';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-4/7 md:w-5/7 mx-auto">
          <About />
          <Blogs />
        </div>
      </main>
    </>
  );
}
