import designUnderline2 from "../assets/svgs/design-underline.svg";

import registration from "../assets/images/registration-certificate.png";
import yellowSvg from "../assets/svgs/yellow-elem.svg";
import pancard from "../assets/images/PAN-Card.jpg";
import iso from "../assets/images/iso-certificate.png";
import certificate80G from "../assets/images/Certificate-80G.png";
import certificate12A from "../assets/images/Certificate-12-A.png";
import Cert from "../components/Cert";

import { motion } from "motion/react";

const Certificates = () => {
  const certLink1 =
    "https://i0.wp.com/bababhaskarpawarvrudhashram.org/wp-content/uploads/2022/11/WhatsApp-Image-2022-10-08-at-11.19.01-AM.jpeg?resize=768%2C1024&ssl=1";
  const certIso =
    "https://docs.google.com/viewerng/viewer?url=https://bababhaskarpawarvrudhashram.org/wp-content/uploads/2022/11/9001-BABA-BHASKAR-PAWAR-VRUDHASHRAM-TRUST-_page-0001-1.pdf";
  const cert80G =
    "https://docs.google.com/viewerng/viewer?url=https://bababhaskarpawarvrudhashram.org/wp-content/uploads/2022/11/80G-Granted.pdf";
  const cert12A =
    "https://docs.google.com/viewerng/viewer?url=https://bababhaskarpawarvrudhashram.org/wp-content/uploads/2022/11/AACTB2602HE20219_signed12A.pdf";
  const certPanCard =
    "https://i0.wp.com/bababhaskarpawarvrudhashram.org/wp-content/uploads/2022/11/PAN-Card.jpg?w=638&ssl=1";

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className=" relative w-full  p-6 md:pt-20 xl:px-[7%] mb-25 ">
      <motion.div id="part-one"
      
      initial={{opacity:0,x:-100,y:100}}
      whileInView={{opacity:1,x:0,y:0}}
      transition={{duration:0.9, delay:0.5}}
      animate={{opacity:1,x:0,y:0}}
      >
        <img
          src={yellowSvg}
          alt="yellow-elem"
          className="absolute rotate-35 top-5 md:top-19  md:left-[25%] lg:left-[30%] xl:left-[35%] 2xl:left-[40%]  -z-[1]"
        />

        <h1 className="font-bold text-zinc-800 text-center text-4xl md:text-5xl pt-7 pb-5 md:py-10">
          Certificates
        </h1>
        <img
          src={designUnderline2}
          alt="design-underline"
          className="flex justify-self-center"
        />
      </motion.div>
      <motion.div
        id="certificates"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        className="flex flex-wrap items-start justify-center gap-10 py-4 mt-10 h-full w-full "
      >
        <motion
        variants={itemVariants}
        className="div w-full md:w-[40%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%] ">
          <Cert
            certLink={certLink1}
            certImg={registration}
            certName={"Trust registration certificate"}
          />
        </motion>

        <motion.div
        variants={itemVariants}
        className="div w-full md:w-[40%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%] ">
          <Cert
            certLink={certIso}
            certImg={iso}
            certName={"iso 9001 certification"}
          />
        </motion.div>
        <motion.div
        variants={itemVariants}
        className="div w-full md:w-[40%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%] ">
          <Cert
            certLink={cert80G}
            certImg={certificate80G}
            certName={"80G certification"}
          />
        </motion.div>
        <motion.div
        variants={itemVariants}
        className="div w-full md:w-[40%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%] ">
          <Cert
            certLink={cert12A}
            certImg={certificate12A}
            certName={"12 A certification"}
          />
        </motion.div>
        <motion.div
        variants={itemVariants}
        className="div w-full md:w-[40%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%] ">
          <Cert
            certLink={certPanCard}
            certImg={pancard}
            certName={"Pan Card"}
          />
        </motion.div>

        <motion.div variants={itemVariants} className="w-full h-96 md:w-[40%] lg:w-[35%] xl:w-[25%] 2xl:w-[20%]   flex flex-col items-center shrink-[0] bg-[#FFF2E0] rounded-lg p-4 hover:scale-[1.1]">
          <h1 className="text-lg font-medium py-1 rounded-lg bg-[#FFF2E0] text-[#4D2300] px-4 w-fit my-4">
            "NITI AAYOG"
          </h1>

          <div
            id="details"
            className="text-xs text-gray-700  p-2 bg-[white] rounded-lg"
          >
            <p>our organization has been granted the</p>
            <h3 className="font-medium text-sm text-zinc-800 py-2">
              NITI AAYOG Registration number :
            </h3>
            <p className="p-1 text-center border-[#FF6F00] border-[1px] my-2 mx-4 text-sm font-medium text-black ">
              {" "}
              MH/2021/0272400{" "}
            </p>
            <p className="leading-[1.5] py-2">
              Please note that there is no certificate is allocated. Only a
              Unique ID is given. You can visit their website NGO DARPAN.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Certificates;
