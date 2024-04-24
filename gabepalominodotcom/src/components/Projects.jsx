import React, { useState } from "react";
import moodWave from "../assets/moodwavePhoto.png";
import reactIcon from "../assets/bestReactIcon.png";
import nodeIcon from "../assets/node.jsIcon.png";
import tailwindIcon from "../assets/tailwindIcon.png";
import openAiIcon from "../assets/openAiIcon.png";
import ReactCardFlip from "react-card-flip";
import { HiOutlineLink } from "react-icons/hi";
import skyCast from "../assets/skycastPhoto.png";
import jsIcon from "../assets/javascriptIcon.png";
import htmlIcon from "../assets/htmlIcon.png";
import cssIcon from "../assets/cssIcon.png";
import freedomHer from "../assets/freedomHerPhoto.png";
import mongoIcon from "../assets/mongoIcon.png";
import ecoCerch from "../assets/ecoCerchPhoto.png";
import flask from "../assets/flask-icon.png";
import booked from "../assets/bookedPhoto.png";
import goIcon from '../assets/goIcon.png';
import { useRef } from "react";
import { useInView } from "framer-motion";


import "../styles/project.css";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

function Projects() {
  const [flip, isFlipped] = useState(false);
  const [flip2, isFlipped2] = useState(false);
  const [flip3, isFlipped3] = useState(false);
  const [flip4, isFlipped4] = useState(false);
  const [flip5, isFlipped5] = useState(false);
  function flipCard() {
    isFlipped(!flip);
  }
  function flipCard2() {
    isFlipped2(!flip2);
  }
  function flipCard3() {
    isFlipped3(!flip3);
  }
  function flipCard4() {
    isFlipped4(!flip4);
  }
  function flipCard5() {
    isFlipped5(!flip5);
  }
  // Fix the width for the cards at small screens
  return (
    <div className="grid grid-cols-1 pt-10 place-items-center md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-2 xl:gap-y-28 lg:gap-y-20 gap-5 px-5 sm:px-0">
      {/* Moodwave.ai */}
      <Section>
        <div className=" bg-[#8361e8] max-w-[450px] h-fit md:rounded-lg">
          <h1 className="text-center text-3xl py-4">Moodwave.ai</h1>
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <img
              src={moodWave}
              className="h-[380px] md:rounded-b-lg"
              onClick={flipCard}
            />
            <div
              onClick={flipCard}
              className="h-[380px] bg-[#4e41ae] md:rounded-b-lg p-7 sm:p-10 flex flex-col justify-center items-center gap-10"
            >
              <div className="flex items-center justify-center gap-10 py-1">
                {/* <h2 className="text-center text-2xl">Tools:</h2> */}
                <ul className=" list-none flex items-center justify-center gap-1 sm:gap-5 md:gap-3 lg:gap-5">
                  <li className="skill">
                    <img src={reactIcon} className="h-10" />
                    <p className="">React</p>
                  </li>
                  <li className="skill">
                    <img src={nodeIcon} className="h-10" />
                    <p>Node.js</p>
                  </li>
                  <li className="skill">
                    <img
                      src={tailwindIcon}
                      className="h-10 w-11 object-contain  "
                    />
                    <p className="">Tailwind</p>
                  </li>
                  <li className="skill">
                    <img src={openAiIcon} className="h-9" />
                    <p>OpenAI</p>
                  </li>
                </ul>
              </div>
              <p className=" text-center">
                Facial recognition software capable of suggesting music based on
                user emotions. Utilizes the OpenAI and HUME.ai APIs for accurate
                results.
              </p>
              <a
                href="https://github.com/gabepalomin/MoodWave.ai"
                target="_blank"
                className="bg-[#6d4ccf] p-1 px-[10px] pt-2 rounded-full hover:bg-opacity-70 cursor-pointer ease-in-out duration-300"
              >
                <button className="text-center">
                  <HiOutlineLink size={40} />
                </button>
              </a>
            </div>
          </ReactCardFlip>
        </div>
      </Section>
      {/* FreedomHer */}
      <Section>
        <div className=" bg-[#bfa3eb] max-w-[450px] h-fit md:rounded-lg">
          <h1 className="text-center text-3xl py-4">FreedomHer</h1>
          <ReactCardFlip isFlipped={flip3} flipDirection="horizontal">
            <img
              src={freedomHer}
              className="h-[380px] w-[450px] md:rounded-b-lg"
              onClick={flipCard3}
            />
            <div
              onClick={flipCard3}
              className="h-[380px] bg-[#4d3f7a]  md:rounded-b-lg p-7 sm:p-10 flex flex-col justify-center items-center gap-10"
            >
              <div className="flex items-center justify-center gap-10 py-1">
                <ul className=" list-none flex items-center justify-center gap-1 sm:gap-5 md:gap-2 lg:gap-5">
                  <li className="skill">
                    <img src={reactIcon} className="h-11" />
                    <p>React</p>
                  </li>
                  <li className="skill">
                    <img src={mongoIcon} className="h-11" />
                    <p>MongoDB</p>
                  </li>
                  <li className="skill">
                    <img src={nodeIcon} className="h-11" />
                    <p>Node</p>
                  </li>
                  <li className="skill">
                    <img
                      src={tailwindIcon}
                      className="h-11 w-11 object-contain"
                    />
                    <p>Tailwind</p>
                  </li>
                </ul>
              </div>
              <p className=" text-center  sm:text-base">
                An anonymous forum empowering women in their journey towards
                personal growth, resilience, and collective strength one message
                at a time
              </p>
              <a
                href="https://github.com/gabepalomin/FreedomHer"
                target="_blank"
                className="bg-[#bfa3eb] p-1 px-[10px] pt-2 rounded-full hover:bg-opacity-70 cursor-pointer ease-in-out duration-300"
              >
                <button className="text-center">
                  <HiOutlineLink size={40} className="" />
                </button>
              </a>
            </div>
          </ReactCardFlip>
        </div>
      </Section>
      {/* booked up */}
      <Section>
        <div className=" bg-[#105fd3] max-w-[450px] h-fit md:rounded-lg">
          <h1 className="text-center text-3xl py-4">Book'd Up</h1>
          <ReactCardFlip isFlipped={flip5} flipDirection="horizontal">
            <img
              src={booked}
              className="h-[380px] w-[450px] md:rounded-b-lg"
              onClick={flipCard5}
            />
            <div
              onClick={flipCard5}
              className="h-[380px]  bg-[#09316d] md:rounded-b-lg p-7 sm:p-10 flex flex-col justify-center items-center gap-10"
            >
              <div className="flex items-center justify-center gap-10 py-1">
                <ul className=" list-none flex items-center justify-center gap-1 sm:gap-5 md:gap-2 lg:gap-5">
                  <li className="skill">
                    <img src={reactIcon} className="h-11" />
                    <p>React</p>
                  </li>
                  <li className="skill">
                    <img src={mongoIcon} className="h-11" />
                    <p>MongoDB</p>
                  </li>
                  <li className="skill">
                    <img src={nodeIcon} className="h-11" />
                    <p>Node</p>
                  </li>
                  <li className="skill">
                    <img
                      src={tailwindIcon}
                      className="h-11 w-11 object-contain"
                    />
                    <p>Tailwind</p>
                  </li>
                </ul>
              </div>
              <p className=" text-center  sm:text-base">
                Booking site simplifying
                personal care appointments, catering not only to barbers but to
                all professionals in the personal care industry (Start-up Dev)
              </p>
              <a
                href="https://github.com/Book-dUp/Book-dUpWebsite"
                target="_blank"
                className="bg-[#105fd3] p-1 px-[10px] pt-2 rounded-full hover:bg-opacity-70 cursor-pointer ease-in-out duration-300"
              >
                <button className="text-center">
                  <HiOutlineLink size={40} className="" />
                </button>
              </a>
            </div>
          </ReactCardFlip>
        </div>
      </Section>
      {/* SkyCast */}
      <Section>
        <div className=" bg-[#4276ee] max-w-[450px] h-fit md:rounded-lg">
          <h1 className="text-center text-3xl py-4">SkyCast</h1>
          <ReactCardFlip isFlipped={flip2} flipDirection="horizontal">
            <img
              src={skyCast}
              className="h-[380px] w-[450px] md:rounded-b-lg"
              onClick={flipCard2}
            />
            <div
              onClick={flipCard2}
              className="h-[380px] bg-[#2d3f72] md:rounded-b-lg p-10 flex flex-col justify-center items-center gap-10"
            >
              <div className="flex items-center justify-center gap-10 py-1">
                <ul className=" list-none flex items-center justify-center gap-5">
                  <li className="skill">
                    <img src={htmlIcon} className="h-11" />
                    <p>HTML</p>
                  </li>
                  <li className="skill">
                    <img src={jsIcon} className="h-11" />
                    <p>JavaScript</p>
                  </li>
                  <li className="skill">
                    <img src={cssIcon} className="h-11" />
                    <p>CSS</p>
                  </li>
                </ul>
              </div>
              <p className=" text-center">
                Air travel tool allowing users to see their boarding and flight
                information at the palm of their hand, while also providing
                flight delay predicitions.
              </p>
              <a
                href="https://github.com/gabepalomin/SkyCast"
                target="_blank"
                className="bg-[#4276ee] p-1 px-[10px] pt-2 rounded-full hover:bg-opacity-70 cursor-pointer ease-in-out duration-300"
              >
                <button className="text-center">
                  <HiOutlineLink size={40} />
                </button>
              </a>
            </div>
          </ReactCardFlip>
        </div>
      </Section>
      {/* EcoCerch */}
      <Section>
        <div className=" bg-[#5e8580] max-w-[450px] h-fit md:rounded-lg">
          <h1 className="text-center text-3xl py-4">EcoCerch</h1>
          <ReactCardFlip isFlipped={flip4} flipDirection="horizontal">
            <img
              src={ecoCerch}
              className="h-[380px] w-[450px] md:rounded-b-lg"
              onClick={flipCard4}
            />
            <div
              onClick={flipCard4}
              className="h-[380px] bg-[#808080] md:rounded-b-lg p-10 flex flex-col justify-center items-center gap-10"
            >
              <div className="flex items-center justify-center gap-10 py-1">
                <ul className=" list-none flex items-center justify-center gap-5">
                  <li className="skill">
                    <img src={htmlIcon} className="h-11" />
                    <p>HTML</p>
                  </li>
                  <li className="skill">
                    <img src={flask} className="h-11" />
                    <p>Flask</p>
                  </li>
                  <li className="skill">
                    <img src={cssIcon} className="h-11" />
                    <p>CSS</p>
                  </li>
                </ul>
              </div>
              <p className=" text-center">
                A search tool indexing eco-friendly certifications earned by
                major corporations (1st ever project)
              </p>
              <a
                href="https://github.com/gabepalomin/EcoCerch"
                target="_blank"
                className="bg-[#5e8580] p-1 px-[10px] pt-2 rounded-full hover:bg-[#4f706b] cursor-pointer ease-in-out duration-300"
              >
                <button className="text-center">
                  <HiOutlineLink size={40} />
                </button>
              </a>
            </div>
          </ReactCardFlip>
        </div>
      </Section>
      {/* incoming */}
      <Section>
        <div className=" bg-white/10 text-[#fff5ea93] max-w-[450px] h-fit md:rounded-lg">
          <h1 className="text-center text-3xl py-4">Project incoming...</h1>
          
            <div
              
              className="h-[380px] md:rounded-b-lg p-7 sm:p-10 flex flex-col justify-center items-center gap-7"
            >
              <div className="flex items-center justify-center gap-10 py-1">
                <ul className=" list-none flex items-center justify-center gap-1 sm:gap-5 md:gap-2 lg:gap-5">
                  <li className="skill">
                    <img src={goIcon} className=" h-16" />
                    <p>GO</p>
                  </li>
                  
                </ul>
              </div>
              <p className=" text-center  sm:text-base px-14">
                Cooking up something in the office. This will most likely use the GO programming language. Stay tuned for more projects...
              </p>
              {/* <a
                href="https://github.com/Book-dUp/Book-dUpWebsite"
                target="_blank"
                className="bg-[#105fd3] p-1 px-[10px] pt-2 rounded-full hover:bg-opacity-70 cursor-pointer ease-in-out duration-300"
              >
                <button className="text-center">
                  <HiOutlineLink size={40} className="" />
                </button>
              </a> */}
            </div>
          
        </div>
      </Section>
    </div>
  );
}

export default Projects;
