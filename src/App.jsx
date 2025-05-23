import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Alumni from './pages/Alumni';
// import EventDetails from './pages/EventDetails';
import Team from './pages/Team';
import Preloader from './components/Preloader/Preloader';
import './App.css';

// Create preloader context
export const PreloaderContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (3.5 seconds for transition animations)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <PreloaderContext.Provider value={{ loading, setLoading }}>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
             {/* <Route path="/events/:eventId" element={<EventDetails />} /> */}
            <Route path="/alumni" element={<Alumni />} /> 

             <Route path="/team" element={<Team />} /> 
          </Routes>
        </Router>
      )}
    </PreloaderContext.Provider>
  );
}

export default App;