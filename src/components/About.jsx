import profilepic2 from "../assets/profile1.png"
import { ABOUT_TEXT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
   <div className="border-b border-neutral-900 pb-4" id="about">
        <motion.h1 
         whileInView={{opacity:1, y:-2}}
         initial={{opacity: 0, y:100}}
         transition={{duration:1}}
        className="my-20 text-center text-4xl">About
            <span className="text-neutral-500"> Me</span>
        </motion.h1>
        <div className="flex flex-wrap">
<motion.div 
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 0.5 }}
  className="w-full lg:w-1/2 flex justify-center items-center px-4 lg:px-0"
>
  <img 
    className="rounded-2xl w-80 h-auto object-contain" 
    src={profilepic2} 
    alt="about" 
  />
</motion.div>


            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start mr-10">
                    <p className="my-2 maxw-w-xl py-6 text-justify">
                        {ABOUT_TEXT}
                    </p>
                </div>
            </motion.div>
        </div>
   </div>
  )
}

export default About
