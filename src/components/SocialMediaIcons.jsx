import { FaFacebookSquare, FaGithub } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineTwitter,AiFillGithub,AiFillFacebook  } from "react-icons/ai";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-1 gap-7">
      <a
        className="hover:opacity-50 transition text-blue-800 font-bold text-3xl  duration-500"
        href="https://linkedin.com/in/owolabi-destiny-oluwanifemi-231222265"
        target="_blank"
        rel="noreferrer"
      >        
        <AiFillLinkedin/>
      </a>
      <a
        className="hover:opacity-50 text-blue-500 font-bold text-3xl transition duration-500"
        href="https://twitter.com/iboytech123"
        target="_blank"
        rel="noreferrer"
      >        
        <AiOutlineTwitter/>
      </a>
      <a
        className="hover:opacity-50 text-blue-500 font-bold text-3xl  transition duration-500"
        href="https://web.facebook.com/profile.php?id=100090722973122"
        target="_blank"
        rel="noreferrer"
      >        
        <AiFillFacebook/>
      </a>
      <a
        className="hover:opacity-50 text-gray-400 font-bold text-3xl  transition duration-500"
        href="https://github.com/owolabijunior12" 
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub/>      
      </a>
    </div>
  );
};

export default SocialMediaIcons;
