import { useEffect } from 'react';

import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Events from '../components/Events/Events';
import FailureStory from '../components/FailureStory/FailureStory';
import Footer from '../components/Footer/Footer';

const Home = () => {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <>
   
      
      <div className="home-page">
        <Hero />
        <About />
        <Events />
        <FailureStory />
        <Footer />
      </div>
    </>
  );

};

export default Home;