import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import {SiJavascript,SiTailwindcss} from 'react-icons/si'
import {FaReact,FaHtml5,FaCss3, FaNode} from 'react-icons/fa'
import {TbBrandRedux} from 'react-icons/tb'
import skill from '../assets/skills-image.png'

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">      
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
            <p className="gap-2 my-10 flex justify-between">
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                  <FaHtml5 className="m10x- text-6xl text-red-600" /> <p>HTML</p>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                  <FaCss3 className="text-6xl text-blue-600" /><p>CSS</p>
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                  <SiJavascript className="text-6xl text-yellow-300" /><p>JavaScript</p>
                </a>
                <a href="https://reactjs.org/docs/getting-started.html">
                  <FaReact className="text-6xl text-purple-900 font-semibold" /> React.js
                </a>
                <a href="https://redux.js.org/introduction/getting-started">
                  <TbBrandRedux className="text-6xl text-purple-700 font-semibold" /> Redux
                </a>
                <a href="https://nodejs.org/en/docs/">
                  <FaNode className="text-6xl text-green-600 font-semibold" /> Node.js
                </a>
                <a href="https://tailwindcss.com/docs">
                  <SiTailwindcss className="text-6xl text-green-400 font-semibold" /><p>Tailwind CSS</p>
                </a>
          </p>

        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 w-90 h-80"
                src={skill}
              />
            </div>
          ) : (
            <img src={skill}alt="skills" className="z-10"  />
          )}
        </div>
      </div>
      <div className="md:flex md:justify-between mt-16 gap-32">      
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">        
                   Front-end development focuses on creating the user interface of websites, ensuring seamless viewing and interaction for users. Front-end programmers build visual elements like animations, buttons, and menus. I have experience developing web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and integrating third-party APIs in React applications.
          </p>
        </motion.div>
      
      
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">          
              Front-end development involves creating the graphical user interface of  a website. The main goal is that any user should be able to view and interact seamlessly with the GUI. All visual elements on a website such as animations, buttons, menus, and others are built by a front-end programmer
          </p>
        </motion.div> 
      </div>
    </section>
  );
};

export default MySkills;
