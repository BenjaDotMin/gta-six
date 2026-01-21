
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import FirstVideo from "./Components/FirstVideo";
import Jason from "./Components/Jason";
import SecondVideo from "./Components/SecondVideo";
import Lucia from "./Components/Lucia";
import PostCard from "./Components/PostCard";
import Final from "./Components/Final";
import Outro from "./Components/Outro";

function App() {
    //use this (above return, inside page function)
    //Note: this is a replacement for useEffect() for gsap animations/ScrollTriggers/Draggables/SplitText ect
    // useGSAP(() => { 
    //     //animate here
    //     gsap.from(".thing", {
        
    //     });
    // },
    // //like useEffect, but in an object
    // {dependencies: [], revertOnUpdate: true }
    // );

    return (
        <main>
            <NavBar/>
            <Hero/>
            <FirstVideo/>
            <Jason/>
            <SecondVideo/>
            <Lucia/>
            <PostCard/>
            <Final/>
            <Outro/>
        </main>
  )
}

export default App