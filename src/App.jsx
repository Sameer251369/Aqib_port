import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Thumbnails from './components/Thumbnails';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Thumbnails />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
