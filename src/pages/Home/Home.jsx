import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';

const Home = () => {
  return (
    <main className="w-full mb-5 text-gray-700 body-font">
      <Hero />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
