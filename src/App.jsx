import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Reveal from "./components/Reveal";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Reveal />
      <Services />
      <Skills />
      <Projects />
      <main id="home" className="min-h-screen px-6 pt-40 text-center">
        <p className="mb-3 text-sm font-semibold text-violet-600">HELLO, I'M</p>

        <h1 className="text-4xl font-bold text-gray-950 md:text-6xl">
          Ayomide Michael
        </h1>

        <h2 className="mt-3 text-xl font-bold text-violet-600 md:text-3xl">
          Frontend Developer & QA Tester
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-gray-600">
          I build beautiful, responsive web applications and ensure they work
          perfectly through quality testing.
        </p>
      </main>
    </>
  );
}

export default App;
