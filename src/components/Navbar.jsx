 
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link} from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleHamburgMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDonateRedirect = ()=>{
    window.location.href = "https://razorpay.me/@bababhaskarpawarvrudhashramtr";
  }

  return (
    <div
      id="nav" /*bg-[#2EA0C5]*/
      className=" relative z-[999] w-full flex items-center 2xl:justify-self-center justify-evenly py-4 px-2 lg:py-6 lg:px-4 xl:py-8 bg-[#FF6F00]  "
    >
      <div
        id="nav-bar"
        className=" flex items-center justify-around  w-[50%] lg:w-[70%] 2xl:w-[50%] text-xs xl:text-sm text-white "
      >
        <Logo name={'प्रेरणास्थान'}/>

        <div className="hidden lg:flex gap-2 lg:gap-6 xl:text-base font-medium  ">
          <Link to={"/home"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/services"}>Services</Link>
          <Link to={"/certificates"}>Certificates</Link>
          <Link to={"/gallery"}>Gallery</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
      </div>

      <div id="menu" className=" flex items-center gap-4 ">
        <button onClick={handleDonateRedirect} className="bg-white px-5 xl:px-8 xl:py-2 text-xs xl:text-sm py-1  rounded-xl xl:rounded-2xl font-medium active:outline active:outline-2 focus:outline-red-500 active:scale-[0.9] cursor-pointer">
          donate
        </button>

        <FontAwesomeIcon
          onClick={toggleHamburgMenu}
          className={`lg:hidden! ${
            isMenuOpen ? "bg-black text-white" : ""
          } p-2 `}
          icon={faBars}
        />
      </div>

      <div
        id="hamburg-menu"
        className={` ${
          isMenuOpen ? "" : "hidden"
        } lg:hidden! absolute top-16 flex flex-col items-center gap-2 bg-[#FF6F00] text-white w-full px-4 py-6`}
      >
        <Link to={"/home"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/services"}>Services</Link>
        <Link to={"/certificates"}>Certificates</Link>
        <Link to={"/gallery"}>Gallery</Link>
        <Link to={"/contact"}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
