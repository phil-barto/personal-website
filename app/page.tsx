import Header from './components/Header';
import About from './components/About';
import Blogs from './components/Blogs';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Blogs />
      </main>
    </>
  );
}
