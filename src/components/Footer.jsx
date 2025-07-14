import {
  faFacebookF,
  faInstagram,
  faThreads,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className=" relative bottom-0 w-full flex flex-col items-center 2xl:justify-self-center justify-evenly py-6 bg-[#E65E00] text-white ">
      {/* https://bababhaskarpawarvrudhashram.org/privacy-policy/ */}
      <div id="upper-footer">
        <div id="part-one" className=" flex flex-col gap-4 items-center">
          <Logo name={"प्रेरणास्थान"} color={"text-white"} />
          <p className="text-[#FFD9B3] text-center">
            “Only by giving are you able to receive more than you already have.”
          </p>
          <div
            id="social-links"
            className=" my-2 text-[#FFF2E0] w-2/3 flex justify-around text-xl"
          >
            <FontAwesomeIcon icon={faShareNodes} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faThreads} />
          </div>
        </div>
      </div>
      <hr className=" border-[#FFBF80] my-4 border-[0.5px] w-full " />

      <p className="text-xs text-[#FFD9B3] leading-[1.75]">
        Copyright &copy; 2025 Baba Bhaskar Pawar Vrudhashram Trust | All Rights
        Reserved | Designed by{" "}
        <span className="text-white">Prakash Samanta</span>, Powered by{" "}
        <span className="text-white">Ganesh More</span> .{" "}
      </p>
    </div>
  );
};

export default Footer;
