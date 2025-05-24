import { useEffect, useState } from 'react';
import logoSrc from "../../assets/ecell1.png"; // Adjust the path to your logo image
const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              setIsDone(true);
              if (onComplete) onComplete();
            }, 1000);
          }, 500);
        }
        return next;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  if (isDone) return null;

  return (
    <>
      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #0f172a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          overflow: hidden;
          transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .preloader.exiting {
          transform: scale(20);
          opacity: 0;
        }

        .content {
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .brand {
          margin-bottom: 3rem;
          animation: slideUp 1.2s ease-out;
        }
        .brand-icon, .icon-outer, .icon-inner { display: none; }

        .brand-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          position: relative;
        }
         .brand-logo {
          width: 120px;
          height: auto;
          display: block;
          margin: 0 auto 1.5rem;
          animation: logoPulse 2s ease-in-out infinite;
        }

        @keyframes logoPulse {
          0%, 100% { transform: scale(1); }
          50%     { transform: scale(1.05); }
        }

        /* Optionally adjust text */
        .brand-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e2e8f0;
          letter-spacing: 0.2em;
          margin-bottom: 0.5rem;
        }
      

        .icon-outer {
          width: 100%;
          height: 100%;
          border: 3px solid #1e40af;
          border-radius: 20px;
          position: relative;
          animation: iconPulse 2s ease-in-out infinite;
        }

        .icon-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border-radius: 8px;
          animation: iconFloat 3s ease-in-out infinite;
        }

        .brand-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e2e8f0;
          letter-spacing: 0.2em;
          margin-bottom: 0.5rem;
        }

        .brand-subtitle {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 400;
          letter-spacing: 0.1em;
        }

        .loading-section {
          margin-top: 4rem;
        }

        .loading-text {
          font-size: 1.1rem;
          color: #94a3b8;
          margin-bottom: 2rem;
          font-weight: 500;
          animation: textFade 2s ease-in-out infinite;
        }

        .progress-container {
          width: 300px;
          margin: 0 auto;
        }

        .progress-track {
          width: 100%;
          height: 6px;
          background: #1e293b;
          border-radius: 3px;
          overflow: hidden;
          position: relative;
          margin-bottom: 1rem;
          border: 1px solid #334155;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #f97316, #ea580c, #f97316);
          background-size: 200% 100%;
          border-radius: 3px;
          width: ${progress}%;
          transition: width 0.3s ease;
          animation: shimmer 2s linear infinite;
          position: relative;
        }

        .progress-bar::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 20px;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: sweep 2s ease-in-out infinite;
        }

        .progress-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .progress-label {
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 500;
        }

        .progress-number {
          font-size: 1rem;
          color: #f97316;
          font-weight: 700;
          font-family: 'Courier New', monospace;
        }

        .dots {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #1e40af;
          border-radius: 50%;
          opacity: 0;
          animation: dotFloat 4s linear infinite;
        }

        .dot:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
        .dot:nth-child(2) { left: 20%; top: 80%; animation-delay: 0.5s; }
        .dot:nth-child(3) { left: 80%; top: 30%; animation-delay: 1s; }
        .dot:nth-child(4) { left: 70%; top: 70%; animation-delay: 1.5s; }
        .dot:nth-child(5) { left: 30%; top: 60%; animation-delay: 2s; }
        .dot:nth-child(6) { left: 90%; top: 50%; animation-delay: 2.5s; }

        .background-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.03;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes iconPulse {
          0%, 100% { 
            transform: scale(1);
            border-color: #1e40af;
          }
          50% { 
            transform: scale(1.05);
            border-color: #3b82f6;
          }
        }

        @keyframes iconFloat {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
          50% { transform: translate(-50%, -50%) rotate(5deg); }
        }

        @keyframes textFade {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes sweep {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(500%); opacity: 0; }
        }

        @keyframes dotFloat {
          0% { 
            opacity: 0;
            transform: translateY(0) scale(0.5);
          }
          25% {
            opacity: 1;
            transform: translateY(-20px) scale(1);
          }
          75% {
            opacity: 1;
            transform: translateY(-40px) scale(1);
          }
          100% { 
            opacity: 0;
            transform: translateY(-60px) scale(0.5);
          }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        @media (max-width: 768px) {
          .brand-text {
            font-size: 1.25rem;
          }
          .progress-container {
            width: 250px;
          }
          .brand-icon {
            width: 60px;
            height: 60px;
          }
          .icon-inner {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>

      <div className={`preloader ${isExiting ? 'exiting' : ''}`}>
        <div className="background-grid"></div>
        
        <div className="dots">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="dot"></div>
          ))}
        </div>

        <div className="content">
          <div className="brand">
             <img src={logoSrc} alt="E-Cell Logo" className="brand-logo" />
              
              </div>
            </div>
            <div className="brand-text">Entrepreneurship Cell </div>
            <div className="brand-subtitle">IDEATE INNOVATE INSPIRE</div>
          </div>

        
  
      
   
    </>
  );
};

export default Preloader;