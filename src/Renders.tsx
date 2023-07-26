import "./Renders.css";
import Intro from "./components/intro";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contacts from "./components/contacts";
import Footer from "./components/footer";
// import { gsap } from "gsap";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import React, { useLayoutEffect, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function Renders() {
  // const main = useRef();
  // const smoother: any = useRef();
  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // create the smooth scroller FIRST!
  //     smoother.current = ScrollSmoother.create({
  //       smooth: 2, // seconds it takes to "catch up" to native scroll position
  //       effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
  //     });
  //     ScrollTrigger.create({
  //       trigger: ".sect-b",
  //       pin: true,
  //       start: "center center",
  //       end: "+=300",
  //       markers: true,
  //     });
  //   }, main);
  //   return () => ctx.revert();
  // }, []);

  return (
    <div className="renders">
      <Intro className="sect-a" data-speed="0.5" />
      <Skills className="sect-b" data-speed="0.8" />
      <Projects className="sect-c" data-speed="0.13" />
      <Contacts className="sect-d" data-speed="0.18" />
      <Footer />
    </div>
  );
}

export default Renders;
