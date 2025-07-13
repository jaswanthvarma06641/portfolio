import { SiFastapi } from "react-icons/si";
import { SiOpenai  } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { SiPython } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

import { motion } from "framer-motion"
const iconVariable=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat: Infinity,
      repeatType:"reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="technologies">
      <motion.h1
       whileInView={{opacity:1, y:0}}
       initial={{opacity: 0, y:-100}}
       transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity: 0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

          <motion.div
          variants={iconVariable(3)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiOpenai  className="text-3xl"/>
          </motion.div>
          <motion.div
          variants={iconVariable(5)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <GiArtificialIntelligence className="text-3xl text-green-500"/>
          </motion.div>
              <motion.div
          variants={iconVariable(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiPython className="text-3xl text-yellow-300"/>
          </motion.div>
                    <motion.div
          variants={iconVariable(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiFastapi className="text-3xl text-cyan-400"/>
          </motion.div>
          <motion.div
          variants={iconVariable(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <PiFileSql className="text-3xl text-violet-400"/>
          </motion.div>
      
          <motion.div
          variants={iconVariable(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaDatabase className="text-3xl text-orange-400"/>
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
