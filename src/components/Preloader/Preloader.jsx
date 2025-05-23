import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['Ideate', 'Innovate', 'Inspire'];

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsDone(true);
            onComplete();
          }, 1500);
        }
        return next;
      });
    }, 50);

    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(wordInterval);
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center text-white relative overflow-hidden">

      {/* Animated Stars */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Rocket */}
      <motion.svg
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-8"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <path
          d="M32 2C20 14 26 34 26 34h12s6-20-6-32z"
          fill="#facc15"
          stroke="#fbbf24"
          strokeWidth="2"
        />
        <circle cx="32" cy="14" r="3" fill="#1e40af" />
        <path
          d="M30 34l-2 6 4 2 4-2-2-6"
          fill="#ef4444"
          stroke="#b91c1c"
          strokeWidth="1"
        />
      </motion.svg>

      {/* Word Transition */}
      <AnimatePresence mode="wait">
        <motion.h1
          key={wordIndex}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider mb-4 text-center px-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          {words[wordIndex]}
        </motion.h1>
      </AnimatePresence>

      {/* Progress Circle */}
      <div className="relative w-24 h-24">
        <svg className="transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#374151"
            strokeWidth="10"
            fill="transparent"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="#facc15"
            strokeWidth="10"
            fill="transparent"
            strokeDasharray="282.6"
            strokeDashoffset={282.6 - (progress / 100) * 282.6}
            strokeLinecap="round"
            transition={{ duration: 0.3 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-yellow-400 font-bold text-xl">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
