import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Part3 from './components/Part3';
import Part4 from './components/Part4';
import Cardswipe from './components/Cardswipe';
import Banner2 from './components/Banner2';
import Footer from './components/Footer';
import Lenis from 'lenis';

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => t, // linear (optional)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <Part3 />
      <Part4 />
      <Cardswipe />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default App;
