import React from 'react'
import {motion} from 'framer-motion';


function Skills() {

  const skill = ["Java", "C", "JavaScript", "TailwindCSS", "Node.js", "MongoDB", "Flask", "HTML", "CSS", "Git", "Express.js", "Pandas", "Figma", "Python", "React"]

  return (
    <div className='mx-auto flex flex-wrap gap-2 text-[#FFF5EA] font-webFont max-w-[50rem] px-5 py-7 sm:py-20'>
      <h2 className='w-full'>Technologies:</h2>
      {skill.map((tech, i)=>(
         <motion.div
         initial="hidden"
         className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ duration: 0.3, delay: i*0.2 }}
         variants={{
           visible: { opacity: 1, translateY:0 },
           hidden: { opacity: 0, translateY:100}
         }}
       >
         {tech}
       </motion.div>
      ))}
        {/* <h2 className='w-full'>Technologies:</h2>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>Java</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>C</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>JavaScript</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>TailwindCSS</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>Node.js</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>MongoDB</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>Flask</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>HTML</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>CSS</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>Git</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>Express.js</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>Pandas</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>Figma</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center'>Python</div>
        <div className='grow select-none rounded-lg bg-white/5 px-6 py-2 text-center w-full'>React</div>
         */}
    </div>
  )
}

export default Skills