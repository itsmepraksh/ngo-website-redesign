import designUnderline2 from "../assets/svgs/design-underline.svg";
import yellowSvg from "../assets/svgs/yellow-elem.svg";
import image1 from "../assets/images/gallery-img-1.jpg";
import image2 from "../assets/images/gallery-img-2.jpg";
import image3 from "../assets/images/gallery-img-3.jpg";
import image4 from "../assets/images/gallery-img-4.jpg";
import image5 from "../assets/images/gallery-img-5.jpg";
import image6 from "../assets/images/gallery-img-6.jpg";
import HeaderDetails from "../components/HeaderDetails";

import { motion } from "framer-motion"; 

const Gallery = () => {
  

   const imgArr = [image2, image3, image4, image5, image6, image1];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 }, 
    show: { opacity: 1, y: 0, transition: { duration: 0.75 ,ease:"easeOut" } },
  };
  return (
    <div className=" relative w-full md:flex md:flex-col xl:justify-center md:gap-5  p-6 md:pt-20 xl:px-[7%]  mb-25 ">
      <HeaderDetails
        inputSvg={yellowSvg}
        headlineTxt={"Our community in pictures"}
        headStyle={"lg:w-1/2"}
        underlineSvg={designUnderline2}
        styleRoundSvg={
          " rotate-35 top-5 md:top-19 -left-[15%] md:left-[7%] lg:left-[25%] 2xl:left-[30%] "
        }
        divContainer={"lg:flex lg:flex-col lg:items-center"}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden" 
        whileInView="show"
        id="gallery"
        viewport={{once:true,amount:0.3}}
        className="flex flex-wrap gap-10 justify-center lg:gap-5 py-4 mt-4 lg:mt-6 xl:mt-10"
      >
        {imgArr.map((imageSrc,idx)=>{
          // console.log(imageSrc)
          return <motion.img key={idx} src={imageSrc} alt={`gallery-image-${idx + 1}`} className="rounded-xl object-cover lg:w-[42%] xl:w-[35%]" variants={itemVariants}>

          </motion.img>
        })}
 
      </motion.div>
    </div>
  );
};

export default Gallery;
