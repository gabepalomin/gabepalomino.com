import React, { useState } from 'react'
import "../styles/NavStyle.css"
import {Link} from 'react-scroll';
import {useRef} from 'react';
import {useInView} from "framer-motion";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(false);

  function Section({children}){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
      <section ref={ref}>
        <div
          style={{
            transform: isInView ? "none" : "translateY(-100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
        >
          {children}
        </div>
      </section>
    );
  }



  return (
    <div class="nav">
      <Section>
      <ul className={click ? 'nav-list active' : 'nav-list'}>
        <l1 className="navLink">
          <Link to='home' className='hover:text-[#FFF5EA] cursor-pointer' spy={true} smooth={true} hashSpy={true} onClick={handleClick}>Home</Link>
        </l1>
        <l1 className="navLink">
          <Link to='projects' className='hover:text-[#FFF5EA] cursor-pointer'  smooth={true} offset={-10} spy={true} hashSpy={true} onClick={handleClick}>Projects</Link>
        </l1>
        <l1 className="navLink">
          <Link to='aboutMe' className='hover:text-[#FFF5EA] cursor-pointer' spy={true} hashSpy={true} smooth={true} offset={0} onClick={handleClick}>About</Link>
        </l1>
        <l1 className="navLink">
          <Link to='contactMe' className='hover:text-[#FFF5EA] cursor-pointer' spy={true} hashSpy={true} smooth={true} offset={1} onClick={handleClick}>Contact</Link>
        </l1>
      </ul>
      </Section>
    </div>
  )
}

export default Navbar