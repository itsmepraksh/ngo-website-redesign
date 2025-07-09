import { faOldRepublic } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleHamburgMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }; 


  return (
    <div
      id="nav"
      className=" relative w-full flex items-center 2xl:justify-self-center justify-evenly py-4 px-2 lg:py-6 lg:px-4 xl:py-8  bg-[#2EA0C5] "
    >
      <div
        id="nav-bar"
        className=" flex items-center justify-around  w-[50%] lg:w-[70%] 2xl:w-[50%] text-xs text-white "
      >
        <div className="logo text-2xl flex items-center gap-2">
          <FontAwesomeIcon icon={faOldRepublic} />{" "}
          <h1 className="font-bold text-lg">प्रेरणास्थान</h1>
        </div>

        <div className="hidden lg:flex gap-2 lg:gap-6 font-medium  ">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>Certificates</Link>
          <Link>Gallery</Link>
          <Link>Contact</Link>
        </div>
      </div>

      <div id="menu" className=" flex items-center gap-4 ">
        <button className="bg-white px-5 text-xs py-1 rounded-xl font-medium active:outline active:outline-2 focus:outline-red-500 active:scale-[0.9]">
          donate
        </button>

        <FontAwesomeIcon
          onClick={toggleHamburgMenu}
          className={`lg:hidden! ${isMenuOpen? 'bg-black text-white' : '' } p-2 `}
          icon={faBars}
        />
      </div>

      <div
        id="hamburg-menu"
        className={` ${isMenuOpen? '' :'hidden' }  absolute top-16 flex flex-col items-center gap-2 bg-[#2EA0C5] text-white w-full px-4 py-6`}
      >
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Services</Link>
        <Link>Certificates</Link>
        <Link>Gallery</Link>
        <Link>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
