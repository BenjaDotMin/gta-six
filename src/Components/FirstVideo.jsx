import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from "react"

const FirstVideo = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.set('.first-vd-wrapper', { marginTop: '-150vh', opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.first-vd-wrapper',
        start: 'top top',
        end: '+=200% top', //2 screen heights
        scrub: true, //tie to scrollbar
        pin: true, //lock to screen, until end position
      }
    })

    tl.to('.hero-section', { delay: 0.5, opacity: 0, ease: 'power1.inOut' }); //fade out hero, with some delay
    tl.to('.first-vd-wrapper', { opacity: 1, duration: 2, ease: 'power1.inOut' }); //fade in next video section

    //once video is loaded (has video length etc)
    videoRef.current.onloadedmetadata = () => {
      //scrub through video, tie to scrollbar (to video duration, over 3s)
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<');
    }
  }, []);

  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video 
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/output1.mp4"
          className="first-vd"
        />
      </div>
    </section>
  )
}

export default FirstVideo