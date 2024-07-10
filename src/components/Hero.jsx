import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 760);

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 760);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title py-5">Presenting</p>
        <div className="md:w-10/12 w-9/12">
          {isSmallScreen ? (
            <img style={{
              opacity: opacity,
              transition: 'opacity 2s ease-in-out',
            }} src={smallHeroVideo} alt="Hero Image" className="pointer-events-none" />

          ) : (
            <video className="pointer-events-none" autoPlay muted playsInline={true} key={isSmallScreen ? smallHeroVideo : heroVideo}>
              <source src={isSmallScreen ? smallHeroVideo : heroVideo} type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="/register" className="btn text-white font-bold text-xl">Register Now</a>
        <p className="font-normal text-xl text-gray">And Start Your Trading Journey</p>
      </div>
    </section>
  );
};

export default Hero;
