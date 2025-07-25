import { FaGoogle } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar justify-between">
      <div className="flex items-center">
        <img src="/icon.svg" alt="logo" className="w-7 h-7" />
        <a className="cursor-pointer font-bold text-3xl">BuildLess</a>
      </div>

      <div className="xs:hidden md:block">
        <ul className="menu menu-horizontal px-1 flex items-center gap-4 font-bold">
          <li>
            <button className="bg-gray-500/25 hover:bg-gray-500/50 text-sm rounded-md text-nav-link-hover p-2">
              <span>
                <IoDocumentAttach size={15} />
              </span>
              <p className="text-sm font-bitcount-medium ">Docs</p>
            </button>
          </li>
          <li>
            <button className="bg-[#f24e3f]/65 hover:bg-[#f24e3f]/25 rounded-md  flex justify-between items-center gap-2 p-2">
              <span>
                <FaGoogle size={15} />
              </span>
              <p className="text-sm font-bitcount-medium ">Log in with Google</p>
            </button>
          </li>
        </ul>
      </div>

      <div className="md:hidden text-2xl cursor-pointer dropdown dropdown-start">
        {isOpen ? (
          <IoClose onClick={() => setIsOpen(!isOpen)} />
        ) : (
          <IoMenu onClick={() => setIsOpen(!isOpen)} />
        )}
      </div>

      {isOpen && (
        <div
          className="absolute top-16 right-0 dropdown-content md:hidden menu bg-base-100 border-b-[0.2px] 
        border-[#f24e3f]/10 rounded-box z-1 w-full p-2 shadow-lg"
        >
          <div className="flex flex-col items-center gap-2 ">
            <li className="text-sm font-bitcount-medium">
              <a className="text-md rounded-xl ">
                <IoDocumentAttach />
                Docs
              </a>
            </li>
            <li className="me-3 font-bitcount-medium">
              <a className="text-md rounded-xl bg-[#f24e3f]/65 hover:bg-[#f24e3f]/25">
                <FaGoogle />
                Log in with Google
              </a>
            </li>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
