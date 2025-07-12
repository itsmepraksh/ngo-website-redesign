import { faFacebookF, faInstagram, faThreads, faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faShareNodes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Logo from "./Logo"

 

const Footer = () => {
  return (
    <div  className=" relative bottom-0 w-full flex flex-col items-center 2xl:justify-self-center justify-evenly p-6   "
  >
        {/* https://bababhaskarpawarvrudhashram.org/privacy-policy/ */}
        <div id="upper-footer">
            <div id="part-one" className=" flex flex-col gap-4 items-center">
                 
                <Logo name={"प्रेरणास्थान"} color={'text-[#FF6F00]'}/>
                <p className="text-zinc-600 text-center">“Only by giving are you able to receive more than you already have.”</p>
                <div id="social-links" className=" my-2 text-[#FF6F00] w-2/3 flex justify-around text-xl">
                    <FontAwesomeIcon icon={faShareNodes} />
                    <FontAwesomeIcon icon={faYoutube} />
                    <FontAwesomeIcon icon={faFacebookF} /> 
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faThreads} />
                </div>
            </div> 
        </div>
        <div id="lower-footer">
            <hr className=" border-gray-200 my-4 border-[1px]" />
            <p className="text-xs text-zinc-500 leading-[1.75]">Copyright &copy; 2025 Baba Bhaskar Pawar Vrudhashram Trust | All Rights Reserved | Designed by <span className="text-[#FF6F00]">Prakash Samanta</span>, Powered by <span className="text-[#FF6F00]">Ganesh More</span> . </p>
             {/* <div>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Cookie Policy</p>
             </div> */}
        </div>
    </div>
  )
}

export default Footer