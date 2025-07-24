import HeaderDetails from "../components/HeaderDetails";
import AboutDetails from "../components/AboutDetails";
import { motion } from "motion/react";

import pinkSvg from "../assets/svgs/pink-elem.svg";
import greenSvg from "../assets/svgs/green-elem.svg";

import underline from "../assets/svgs/design-underline2.svg";
import underline2 from "../assets/svgs/design-underline.svg";
import ContactForm from "../components/ContactForm";

import clipImage1 from "../assets/images/gallery-img-1.jpg";
import clipImage2 from "../assets/images/gallery-img-5.jpg";
import clipImage3 from "../assets/images/gallery-img-4.jpg";
import RoundImg from "../components/RoundImg";

import swipe1 from "../assets/images/BigShoes-Hero.png";
import swipe2 from "../assets/images/BigShoes-Hero2.png";
import swipe3 from "../assets/images/BigShoes-Hero3.png";
import swipe4 from "../assets/images/Hands-Show.png";

const About = () => {
  return (
    <div className="relative w-full flex flex-col gap-10 xl:justify-center p-6 md:pt-20 xl:px-[7%] mb-25">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x:0 }}
        transition= {{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
      >
        <HeaderDetails
          headlineTxt={"Dignity for All"}
          underlineSvg={underline}
          inputSvg={pinkSvg}
          styleRoundSvg={
            "rotate-35 top-5 md:top-[3%] left-[15%] md:left-[20%] lg:left-[30%] xl:left-[35%] 2xl:left-[40%]"
          }
        />
      </motion.div>

      <section
        id="shortIntro"
        className="py-6 text-xs md:text-sm xl:text-base 2xl:text-lg md:flex md:justify-center "
      >
        <p className="md:w-[85%] lg:w-[60%] xl:w-1/2">
          Welcome to{" "}
          <span className="text-[#E65E00] font-medium text-sm md:text-base xl:text-lg 2xl:text-xl">
            Baba Bhaskar Pawar Vrudhashram Trust
          </span>
          , a sanctuary where compassion meets care. Guided by the vision of{" "}
          <span className="text-[#E65E00] font-medium">
            Late Shri Baba Bhaskar Pawar
          </span>
          , we serve as a home and lifeline for the elderly, the
          differently-abled, and those left behind by society. More than
          shelter, we provide safety, healthcare, companionship, and a renewed
          sense of purpose.
        </p>
      </section>

      <section
        id="startup"
        className="flex flex-col xl:flex-row items-center text-center justify-center"
      >
        <motion.div
          id="clipped-img"
          initial={{ opacity: 0, x: -100, y: 100 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex justify-center items-center w-full md:w-2/3 lg:w-[60%] 2xl:w-[52%] aspect-[1/1.5] md:aspect-[1/1]  gap-1  "
        >
          <motion.div>
            <RoundImg
              imgSrc={clipImage3}
              styleClass={
                "blob2 absolute top-10 md:top-5 right-35 lg:right-50 xl:left-10 md:w-[17rem]! md:h-[17rem]! lg:w-[18rem]! lg:h-[18rem]! xl:w-[22rem]! xl:h-[22rem]!  "
              }
            />
          </motion.div>

          <motion.div>
            <RoundImg
              imgSrc={clipImage1}
              styleClass={
                "blob1 absolute top-50 right-40 md:right-50 lg:right-60 xl:left-0 xl:top-55 md:w-[16rem]! md:h-[16rem]! lg:w-[17rem]! lg:h-[17rem]! xl:w-[21rem]! xl:h-[21rem]! z-[9]  "
              }
            />
          </motion.div>
          <motion.div>
            <RoundImg
              imgSrc={clipImage2}
              styleClass={
                "blob3 absolute top-40 md:top-35 right-5 lg:right-10 xl:-right-30 xl:top-45 md:w-[15rem]! md:h-[15rem]! lg:w-[16rem]! lg:h-[16rem]! xl:w-[20rem]! xl:h-[20rem]!   -rotate-[15deg]  "
              }
            />
          </motion.div>
        </motion.div>

        <div
          id="difference"
          className="w-full flex flex-col justify-center items-center md:py-4 lg:pt-0"
        >
          <h1 className="font-bold text-zinc-800 text-2xl md:py-2 md:text-5xl md:pb-10">
            What Makes Us Different
          </h1>
          <img
            src={underline2}
            alt="Underline"
            className="w-fit my-5 md:mt-0"
          />
          <p className="text-left text-xs md:text-sm xl:text-base 2xl:text-lg md:w-[80%] lg:w-[60%] xl:w-1/2">
            At{" "}
            <span className="text-[#E65E00] font-medium text-sm md:text-base xl:text-lg 2xl:text-xl">
              Baba Bhaskar Pawar Vrudhashram Trust
            </span>
            , we don’t just offer shelter, we offer belonging. Rooted in a dream
            of dignity for all, we open our hearts to the elderly, bedridden,
            and differently-abled. Here, every life has purpose from tending
            gardens and animals to sharing stories and smiles. We rely solely on
            community compassion not government aid to keep this vision alive.
          </p>
        </div>
      </section>

      <div id="offering" className="text-center mt-8 xl:mt-20">
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-zinc-800">
          What We Offer
        </h2>
        <p className="text-sm text-zinc-600 mt-2 lg:mt-4 xl:text-base">
          Where Care Meets Purpose with Dignity
        </p>
      </div>

      <section
        id="carosel-effect"
        className="md:flex flex-col items-center justify-center "
      >
        <div
          id="carosel-containter"
          className="relative   h-96  w-full md:w-2/3 lg:w-[65%] rounded flex overflow-hidden gap-4 overflow-x-scroll no-scrollbar"
        >
          <AboutDetails
            swipesrc={swipe1}
            heading={"Mission & Vision"}
            list1={"Inspired by a dream to end poverty and isolation"}
            list2={"A safe haven for the elderly and differently-abled"}
            list3={"A life of dignity, peace, and purpose for all"}
          />
          <AboutDetails
            swipesrc={swipe2}
            heading={"Core Essentials We Provide"}
            list1={"Free shelter, clothing, and daily vegetarian meals"}
            list2={" Organic milk from our own cowshed"}
            list3={"Open to all, regardless of background or belief"}
          />
          <AboutDetails
            swipesrc={swipe3}
            heading={"Health & Medical Support"}
            list1={"Free checkups and care by trusted doctors"}
            list2={"First aid, essential medicines, and prosthetics"}
            list3={"Dedicated support for the bedridden and mentally unwell"}
          />
          <AboutDetails
            swipesrc={swipe2}
            heading={"Social & Cultural Wellbeing"}
            list1={"Library, games, and group activities"}
            list2={"Cultural programs, music, and festivals"}
            list3={"Regular outings to sacred and historical places"}
          />
          <AboutDetails
            swipesrc={swipe1}
            heading={"Self-Reliance & Green Living"}
            list1={"Small-scale work in candles, incense, and more"}
            list2={"Gardening fruits, vegetables, and flowers"}
            list3={"Peaceful animal care spaces for healing and joy"}
          />
          <AboutDetails
            swipesrc={swipe4}
            heading={"How You Can Make a Difference"}
            list1={"We rely entirely on community support"}
            list2={"You can donate, volunteer, or lend a helping hand"}
            list3={"Every action helps bring dignity to someone’s life"}
          />
        </div>
      </section>

      <section
        id="about-form"
        className="mt-10 md:mt-15 lg:mt-20 xl:mt-25 2xl:mt-40 md:flex xl:justify-center  "
      >
        <HeaderDetails
          divContainer={"md:w-1/2 xl:w-[30%]"}
          inputSvg={greenSvg}
          styleRoundSvg={"-left-[12%] md:-left-[5%] xl:left-[20%]  "}
          underlineSvg={underline2}
          headlineTxt={"Apply today and start making difference."}
          headStyle={"leading-[1.2] text-left"}
          underlineEdit={"justify-self-start"}
        />
        <ContactForm edit={"relative z-[9] md:w-1/2 xl:w-[35%] "} />
      </section>
    </div>
  );
};

export default About;
