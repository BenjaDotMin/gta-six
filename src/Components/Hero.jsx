import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useMaskSettings } from '../../constants';
import ComingSoon from "./ComingSoon"

const Hero = () => {

  //get sizes from function in constants imported file
  const { initialMaskPos, initialMaskSize, maskPos, maskSize } = useMaskSettings();

  useGSAP(() => {
    //instantly set styling, dont animate
    gsap.set('.mask-wrapper', {maskPosition: initialMaskPos, maskSize: initialMaskSize});

    gsap.set('.mask-logo', { marginTop: '-100vh', opacity: 0 });

    gsap.set('.entrance-message', { marginTop: '0vh' });

    const tl = gsap.timeline({
    //put scrollTrigger in the timeline
    scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top', //top of element hits top of browser (instantly when scrolling)
        scrub: 2.5, //smoothen by 2.5s
        end: '+=200%', //end 200% from start, so its like 2 screens high (good for browser height detection)
        pin: true, //keep on screen until end point
        //markers:true
      }
    })

    //the scrolling animation
    tl.to('.fade-out', { opacity: 0, ease: 'power1.inOut' }) //fade out cutout text, trailer logo and play button
      .to('.scale-out', { scale: 1, ease: 'power1.inOut' }) //main image was scaled up in css, scale it back to default
      .to('.mask-wrapper', { maskSize: maskSize, ease: 'power1.inOut' }, '<') //animate masksize down to 20% 20% //start this one at same time as previous line
      .to('.mask-wrapper', { opacity: 0 }) //fade out the entire text mask (and images inside)
      .to('.overlay-logo', { opacity: 1, onComplete: () => { //bring in new logo
        gsap.to('.overlay-logo', { opacity: 0 });
      } }, '<')
      //create our own mask image, a rounded fade effect that gets larger to reveal text
      .to('.entrance-message', { duration: 1, ease: 'power1.inOut', maskImage: 'radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)' }, '<') //start at same time as prev line
  });

  return (
    <section className="hero-section">

      {/* mask-wrapper makes the text in the image be a mask. This is then enlarged and shrunk over the hero as the user scrolls (see index.css) */}
      <div className="size-full mask-wrapper">

        {/* the main image */}
        <img src="/images/hero-bg.webp" alt="background" className="scale-out" />
        
        {/* the text "behind" the guy (the text is actually cut out around his head) */}
        <img src="/images/hero-text.webp" alt="hero-logo" className="title-logo fade-out" />
        
        {/* trailer logo */}
        <img  src="/images/watch-trailer.png" alt="trailer" className="trailer-logo fade-out" />
        
        {/* play btn */}
        <div className="play-img fade-out">
          <img src="/images/play.png" alt="play" className="w-7 ml-1" />
        </div>
      </div>

      <div>
        <img src="/images/big-hero-text.svg" alt="logo" className="size-full object-cover mask-logo" />
      </div>

      <div className="fake-logo-wrapper">
        <img src="/images/big-hero-text.svg" className="overlay-logo" />
      </div>

      <ComingSoon />
    </section>
  )
}

export default Hero