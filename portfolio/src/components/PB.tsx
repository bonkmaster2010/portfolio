import { useEffect } from 'react';
import 'particles.js'; 

const ParticleBg = () => {
  useEffect(() => {
    particlesJS('particles-js', {
      particles: {
        number: { value: 100 },
        size: { value: 5 },
        move: { speed: 2, direction: 'random' },
        color: { value: '#ff00ff' },
        links: {
          enable: true,
          color: '#00f2ff',
          distance: 150,
          opacity: 0.5,
          width: 1,
        },
      },
    });
  }, []);

  return (
    <div
      id="particles-js"
      style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}
    ></div>
  );
};

export default ParticleBg;
function particlesJS(arg0: string, arg1: { particles: { number: { value: number; }; size: { value: number; }; move: { speed: number; direction: string; }; color: { value: string; }; links: { enable: boolean; color: string; distance: number; opacity: number; width: number; }; }; }) {
  throw new Error('Function not implemented.');
}

