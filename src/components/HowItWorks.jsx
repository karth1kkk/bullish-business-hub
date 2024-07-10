import React, { useRef, useEffect, useState } from 'react'
import { chipImg, frameImg, frameImgsmall, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 760);

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    });

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 760);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="bg-black common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="text-white flex flex-col items-center">
          <h2 className="hiw-title">
            Trade with the
            <br /> most reliable platforms.
          </h2>

          <p className="hiw-subtitle">
            It's safe and easy to execute your trades.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img 
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              {isMobile ? (
                <img src={frameImgsmall} alt="frame" className="pointer-events-none" />
              ) : (
                <video
                  className="pointer-events-none"
                  playsInline
                  preload="none"
                  muted
                  autoPlay
                  ref={videoRef}
                >
                  <source src={frameVideo} type="video/mp4" />
                </video>
              )}
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">MT4 Trading App</p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              At Bullish Business Hub, we prioritize not just trading strategies, but also money management skills.  {' '}
              <span className="text-white">
                Build a solid foundation for sustainable trading success.
              </span>.
            </p>

            <p className="hiw-text g_fadeIn">
              Discover your unique trading style with Bullish Business Hub.
              <span className="text-white">
                {' '}Our expert guidance will help you identify high-probability 
              </span>,
              setups tailored to your risk tolerance and financial goals.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">Join Our Community</p>
            <p className="hiw-bigtext">Master Your Trades</p>
            <p className="hiw-text">with Expert Guidance</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
