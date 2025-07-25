import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="xs:px-10 xs:pb-5 lg:px-30  lg:pt-5 lg:mt-20 w-full xs:h-auto lg:h-[200px] 
    flex xs:flex-col xs:items-center xs:justify-center xs:gap-4 lg:flex-row lg:justify-between 
    border-t-[1px] border-[#f24e3f]/20
    ">
      {/* first section */}
      <div className="mt-8 flex flex-col xs:gap-4 lg:gap-1 ">
        <div className="flex items-center xs:justify-center lg:justify-start gap-1">
          <div className="w-7 h-7 ">
            <img className="object-cover" src="/icon.svg" alt="logo" />
          </div>
          <h4 className="text-2xl font-bold">BuildLess</h4>
        </div>
        <p className="text-sm xs:text-center font-bitcount-regular">
          Accelerating how software is built
        </p>
        {/* social media */}
        <div className="cursor-pointer mt-1 flex xs:justify-center xs:gap-5 lg:gap-0 lg:justify-between items-center gap-2">
          <FaGithub
            className="hover:bg-gray-500/80 rounded-sm transition-all duration-300"
            size={25}
          />
          <FaDiscord
            className="hover:bg-gray-500/80 rounded-sm transition-all duration-300"
            size={25}
          />
          <FaLinkedin
            className="hover:bg-gray-500/80 rounded-sm transition-all duration-300"
            size={25}
          />
        </div>
      </div>
      {/* second section */}
      <div className="mt-8 flex flex-col  gap-1">
        <h3 className="text-lg font-semibold">Feactures</h3>
        <ul className="flex flex-col gap-1 items-center xs:text-xs lg:text-sm font-bitcount-regular">
          <li className="hover:text-gray-500 transition-all duration-300">
            <a href="#">Feature 1</a>
          </li>
          <li className="hover:text-gray-500 transition-all duration-300">
            <a href="#">Feature 2</a>
          </li>
          <li className="hover:text-gray-500 transition-all duration-300">
            <a href="#">Feature 3</a>
          </li>
        </ul>
      </div>
      {/* third section */}
      <div className="mt-8 flex flex-col  gap-1">
        <h3 className="text-lg font-semibold">Resources</h3>
        <ul className="flex flex-col gap-1 items-center xs:text-xs lg:text-sm font-bitcount-regular">
          <li className="hover:text-gray-500 transition-all duration-300">
            <a href="#">Resource 1</a>
          </li>
          <li className="hover:text-gray-500 transition-all duration-300">
            <a href="#">Resource 2</a>
          </li>
          <li className="hover:text-gray-500 transition-all duration-300">
            <a href="#">Resource 3</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
