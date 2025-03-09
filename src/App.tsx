import About from "./components/About";
import Features from "./components/Feature";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <section className="min-h-screen relative">
        <Hero />
        <div className="relative z-0 h-full flex flex-col justify-between">
          <div>
            <Header />
            <About />
          </div>
          <Features />
        </div>
      </section>
      <section>sad</section>
    </>
  );
}

export default App;
