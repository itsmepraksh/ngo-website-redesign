import HeaderDetails from "../components/HeaderDetails";
import AboutDetails from "../components/AboutDetails";

import pinkSvg from "../assets/svgs/pink-elem.svg";
import greenSvg from "../assets/svgs/green-elem.svg";

import underline from "../assets/svgs/design-underline2.svg";
import underline2 from "../assets/svgs/design-underline.svg";
import ContactForm from "../components/ContactForm";
import ClippedImageSVG from "../components/ClippedImageSVG";

import clipImage1 from "../assets/images/gallery-1.jpg"
import clipImage2 from "../assets/images/gallery-2.jpg"
import clipImage3 from "../assets/images/gallery-3.jpg"

const About = () => {
  return (
    <div className="relative w-full flex flex-col gap-10 xl:justify-center p-6 md:pt-20 xl:px-[7%] mb-25">
      <HeaderDetails
        headlineTxt={"Dignity for All"}
        underlineSvg={underline}
        inputSvg={pinkSvg}
        styleRoundSvg={
          "rotate-35 top-5 md:top-[3%] left-[15%] md:left-[20%] lg:left-[30%] xl:left-[35%] 2xl:left-[40%]"
        }
      />

      <section
        id="shortIntro"
        className="py-6 text-xs md:text-sm md:flex md:justify-center "
      >
        <p className="md:w-[85%]">
          Welcome to{" "}
          <span className="text-[#E65E00] font-medium text-sm">
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

      <section id="startup" className="flex flex-col items-center text-center">
        <div id="clipped-img" className="relative flex w-full gap-1 justify-center">
          <ClippedImageSVG clipImage={clipImage1} />
          <ClippedImageSVG clipImage={clipImage2} />
          <ClippedImageSVG clipImage={clipImage3} />
        </div>

        <h1 className="font-bold text-zinc-800 text-2xl py-4 md:text-5xl pt-7 pb-3 md:py-10">
          What Makes Us Different
        </h1>
        <img src={underline2} alt="Underline" className="my-5 md:mt-0" />
        <p className="text-sm md:w-[80%]">
          At Baba Bhaskar Pawar Vrudhashram Trust, we don’t just offer shelter,
          we offer belonging. Rooted in a dream of dignity for all, we open our
          hearts to the elderly, bedridden, and differently-abled. Here, every
          life has purpose from tending gardens and animals to sharing stories
          and smiles. We rely solely on community compassion not government aid
          to keep this vision alive.
        </p>
      </section>

      <div id="offering" className="text-center mt-8">
        <h2 className="text-2xl md:text-4xl font-bold text-zinc-800">
          What We Offer
        </h2>
        <p className="text-sm text-zinc-600 mt-2">
          A comprehensive blend of care, dignity, and purpose
        </p>
      </div>
      <section
        id="about-full-details"
        className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-4"
      >
        <AboutDetails
          heading="Mission & Vision"
          list1="• Founded in memory of Late Shri Baba Bhaskar Pawar."
          list2="• Aims for a poverty- and loneliness-free world for seniors and the disabled."
          list3="• Focus on dignity, peace, and quality of life."
        />

        <AboutDetails
          heading="Basic Necessities"
          list1="• Free shelter, clothing, and essentials for all."
          list2="• Daily nutritious vegetarian meals, tea, and breakfast."
          list3="• Organic milk from in-house cow shed (10–15 cows)."
        />

        <AboutDetails
          heading="Healthcare & Medical Support"
          list1="• Regular free health and eye checkups."
          list2="• Free first aid, medicines, and prosthetics."
          list3="• 24/7 care for mentally ill and bedridden residents."
          list4="• Wheelchairs provided for the physically challenged."
        />

        <AboutDetails
          heading="Social & Recreational Activities"
          list1="• Indoor/outdoor games to stay active."
          list2="• Well-stocked library."
          list3="• Cultural programs, music, and festival celebrations."
          list4="• Outings to spiritual and historical places."
        />

        <AboutDetails
          heading="Self-Sufficiency & Rehabilitation"
          list1="• Small-scale work: candles, incense, camphor, etc."
          list2="• Gardening with fruits, vegetables, and flowers."
          list3="• Pet care (rabbits, turtles, cats, dogs) for therapy."
        />

        <AboutDetails
          heading="Daily Food Support"
          list1="• Committed to feeding every resident daily."
          list2="• Wholesome, nutritious meals for health and well-being."
        />

        <AboutDetails
          heading="How You Can Help"
          list1="• Donate: Clothes, food, medicine, or money."
          list2="• Volunteer: Spend time, engage in activities."
          list3="• Share: Spread awareness and support the mission."
        />
      </section>

      <section
        id="about-form"
        className="mt-10 md:mt-15 lg:mt-20 xl:mt-25 2xl:mt-40 md:flex "
      >
        <HeaderDetails
          divContainer={"md:w-1/2"}
          inputSvg={greenSvg}
          styleRoundSvg={"-left-[12%] md:-left-[5%] xl:left-[2%] 2xl:left-[5%]"}
          underlineSvg={underline2}
          headlineTxt={"Apply today and start making difference."}
          headStyle={"leading-[1.2] text-left"}
          underlineEdit={"justify-self-start"}
        />
        <ContactForm edit={"relative z-[9] md:w-1/2"} />
      </section>
    </div>
  );
};

export default About;
