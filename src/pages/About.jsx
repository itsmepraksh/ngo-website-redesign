import HeaderDetails from "../components/HeaderDetails"


import pinkSvg from '../assets/svgs/pink-elem.svg'
import underline from '../assets/svgs/design-underline2.svg'

const About = () => {
  return (
    <div  className=" relative w-full md:flex xl:justify-center md:gap-5  p-6 md:pt-20 xl:px-[7%] mb-25 ">
       <HeaderDetails inputSvg={pinkSvg} headlineTxt={"Dignity for All"} underlineSvg={underline} styleRoundSvg={" rotate-35 top-5  left-[15%]   "}/>

       <p className="py-10 text-xs">Welcome to <span className="text-[#E65E00] text-sm font-medium">Baba Bhaskar Pawar Vrudhashram Trust</span>, a sanctuary where compassion meets care. Guided by the vision of <span className="text-[#E65E00] font-medium"> Late Shri Baba Bhaskar Pawar</span>, we stand as a home, a family, and a lifeline for the elderly, the differently-abled, and those left behind by society.

Here, we believe that age and disability should never strip a person of dignity. Our mission is to provide more than just food and shelter — we offer safety, medical support, companionship, and purpose. Through every meal served, every smile shared, and every life uplifted, we strive to build a world where no one feels alone or forgotten.</p>
    </div>
  )

}

export default About