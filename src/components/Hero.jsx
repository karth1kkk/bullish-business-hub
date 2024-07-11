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
      <div className="h-5/6 w-full flex-center flex-col relative">
        <p id="hero" className="hero-title py-5 z-10">Presenting</p>
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
        className="flex flex-col items-center opacity-0 translate-y-20 relative z-20"
      >
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdPxjN1ZxFecJt45M3ZnDLui8Nhjleg6L6uvsQdypj2QPbC2w/viewform" className="btn text-white font-bold text-xl">Register Now</a>
        <p className="font-normal text-xl text-gray z-10">And Start Your Trading Journey</p>
      </div>
      
      {!isSmallScreen && (
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[40rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] z-0"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={-0.1} />
        </svg>
      )}
    </section>
  );
};

export default Hero;
