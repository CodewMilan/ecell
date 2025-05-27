import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Alumni from './pages/Alumni';
import Gallery from './pages/Gallery';
import Codered from './components/Events/Codered';
import Team from './pages/Team';
import Preloader from './components/Preloader/Preloader';
import './App.css';

// Create preloader context
export const PreloaderContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Extended loading time for the enhanced preloader
    const timer = setTimeout(() => {
      setLoading(false);
      // Small delay before showing content for smooth transition
      setTimeout(() => {
        setShowContent(true);
      }, 100);
    }, 4000); // 4 seconds for the full preloader experience
    
    return () => clearTimeout(timer);
  }, []);

  const handlePreloaderComplete = () => {
    setLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <PreloaderContext.Provider value={{ loading, setLoading }}>
      <div className="relative">
        <AnimatePresence mode="wait">
          {loading ? (
            <Preloader key="preloader" onComplete={handlePreloaderComplete} />
          ) : (
            <motion.div
              key="content"
              initial={{ 
                scale: 0.8, 
                opacity: 0,
                filter: 'blur(10px)'
              }}
              animate={{ 
                scale: showContent ? 1 : 0.8, 
                opacity: showContent ? 1 : 0,
                filter: showContent ? 'blur(0px)' : 'blur(10px)'
              }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
              className="min-h-screen"
            >
              <Router>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/events/codered" element={<Codered />} />
                  <Route path="/alumni" element={<Alumni />} /> 
                  <Route path="/team" element={<Team />} />
                  <Route path="/gallery" element={<Gallery/>} />
                </Routes>
              </Router>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PreloaderContext.Provider>
  );
}

export default App;