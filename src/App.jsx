import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useReveal from './hooks/useReveal';

function App() {
  const mainRef = useReveal();

  return (
    <>
      <Navbar />
      <main ref={mainRef}>
        <Hero />
        <Services />
        <Process />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
