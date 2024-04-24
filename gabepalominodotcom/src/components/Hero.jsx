import React from "react";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LinkedIn from "../assets/linkedInIcon.png";
import gitHub from "../assets/github.png";
import "../styles/hero.css";
function Hero() {
  gsap.registerPlugin(useGSAP);
  const container = useRef();
  useGSAP(
    () => {
      const titles = gsap.utils.toArray("p");
      const tl = gsap.timeline({repeat: -1});
      titles.forEach((title) => {
        tl.from(title, {
          opacity: 0,
          y: 15,
          rotateX: -90,
        }, "<").to(title, {
          opacity: 0,
          y: -15,
          rotateX: 90,
        },"<3");
      });
    },
    { scope: container }
  );

  return (
    <div className="hero">
      <h1 className=" text-5xl text-[#FFF5EA] font-webFont pt-10 text-center md:text-[4rem] md:pt-16 xl:text-[5rem] xl:pt-20">
        Gabe Palomino
      </h1>
      <div className="min-h-[100px] flex items-center font-webFont text-lg">
      <div ref={container} className="container">
        <div className="text-wrapper">
          <p className="select-none">I'm a Full Stack Developer</p>
          <p className="select-none">Computer Science Student</p>
          <p className="select-none">Curious Learner</p>
        </div>
      </div>
      </div>
      
      
    </div>
  );
}

export default Hero;
