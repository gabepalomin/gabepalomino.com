import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { IoSchoolSharp } from "react-icons/io5";
import {useRef} from 'react';
import {useInView} from "framer-motion";
import Spline from "@splinetool/react-spline";


function Section({children}){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </div>
    </section>
  );
}



function AboutMe() {
  return (
    <div className="flex flex-col lg:pt-32 lg:flex-row lg:gap-1 lg:justify-center items-center px-0 sm:px-10 gap-5 pt-3">
      
      <div className=" w-full h-[50vh] lg:w-2/5 xl:w-[33%]">
        <Spline scene="https://prod.spline.design/siyuYFAxOv4mOBeb/scene.splinecode" />
      </div>
     
      <div className="flex flex-col gap-5 lg:w-1/2 px-10 sm:px-0">
        <Section>
        <p className="text-center md:order-last xl:text-lg">
          Hello! I'm Gabriel Palomino, a computer science student passionate
          about full-stack development. Currently, I'm immersed in learning new
          technologies like Go, PostgreSQL, Flask, and Next.js. Through research
          and hands-on projects, I refine my skills in building web applications
          and exploring server-side frameworks. I am currently seeking summer
          2024 internships to apply my expertise and contribute to innovative
          tech projects.
        </p>
        </Section>
        <div className="w-full flex flex-col gap-5 md:flex-row md:justify-center items-center">
          
          <div className="max-w-[430px] w-full border-2 rounded-3xl flex flex-col items-center gap-2 py-6">
            
            <Section><HiBadgeCheck size={40} /></Section>
            <Section><h2 className="text-2xl font-semibold">Experience</h2></Section>
            <Section><p className="text-sm opacity-60">2+ years</p></Section>
            <Section><p className="text-sm opacity-60">Full-Stack Development</p></Section>
            
          </div>
          
          
          <div className="max-w-[430px] w-full border-2 rounded-3xl flex flex-col items-center gap-2 py-6">
            <Section><IoSchoolSharp size={40} /></Section>
            <Section><h2 className="text-2xl font-semibold">Education</h2></Section>
            <Section><p className="text-sm opacity-60">Virginia Tech</p></Section>
            <Section><p className="text-sm opacity-60"> BS. Computer Science</p></Section>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
