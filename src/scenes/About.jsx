import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import person from '../assets/person-1.png'

const About = () => {
  return (
    <section id="about" className="pt-28 pb-16">     
      <motion.div
        className="md:w-1/3 pb-10 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-2 text-red">
         ABOUT
        </p>
        <LineGradient width="mx-auto w-2/5" />
        
        <p className="mt-10">
        

I'm Owolabi Destiny Oluwanifemi, a self-taught frontend developer based in Lagos, Nigeria. I have a passion for creating engaging and intuitive user experiences on the web. With a year of experience in building, integrating, scaling, and supporting web applications, I have developed a strong skill set and a keen eye for detail.

As a forward-thinking individual, I constantly strive for excellence in my work. I believe in pushing the boundaries of what is possible in web development, always seeking innovative solutions to deliver outstanding results.

One of my key strengths is my ability to organize and manage projects effectively. I am adept at coordinating with team members and stakeholders to ensure smooth collaboration and successful project delivery. Additionally, my interpersonal skills enable me to communicate ideas clearly and work well in a team environment.

Throughout my journey as a frontend developer, I have had the opportunity to work on various projects, honing my skills and keeping up with the latest industry trends. I am proficient in leveraging modern frameworks and technologies to create responsive, scalable, and visually appealing web applications.

I invite you to explore my portfolio, where you will find examples of my work showcasing my attention to detail, creativity, and dedication to delivering exceptional user experiences. I am confident that my skills and experience will be valuable in any project I undertake.


        </p>
      </motion.div>            
      <motion.div
        className="md:w-1/3 pb-10 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-2 text-red">
        EDUCATION
        </p>
        <LineGradient width="mx-auto w-2/5" />
        
        <p className="my-10 flex">
              <img src={person} alt=""  className="mb-10 "/>
            <p className=" ml-5">
               <p>YABA COLLEGE OF TECHNOLOGY</p>
              <p> Computer Science</p>
              <p>2021 - 2023</p>
            </p>
            
        </p>
      </motion.div>            

    </section>
  );
};

export default About;
