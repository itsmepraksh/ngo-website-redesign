 
 import {motion} from "framer-motion"

const HeaderDetails = ({inputSvg, headlineTxt,underlineSvg,underlineEdit, styleRoundSvg , headStyle , divContainer}) => {
  return (
    <motion.div 
    initial={{opacity:0,x:-50}}
    whileInView={{opacity:1,x:0,transition:{duration:0.5,ease:"anticipate"}}}
    id="part-one" className={`${divContainer}`}>
      <img
        src={inputSvg}
        alt="yellow-elem"
        className={`absolute -z-[1] ${styleRoundSvg}`}
      />

      <h1 className={`font-bold text-zinc-800 text-center text-4xl md:text-5xl pt-7 pb-5 md:py-10 ${headStyle}`}>
        {headlineTxt}
      </h1>
      <img
        src={underlineSvg}
        alt="design-underline"
        className={`flex justify-self-center ${underlineEdit}`}
      />
    </motion.div>
  );
};

export default HeaderDetails;
