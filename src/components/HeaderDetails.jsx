 

const HeaderDetails = ({inputSvg, headlineTxt,underlineSvg, styleRoundSvg}) => {
  return (
    <div id="part-one">
      <img
        src={inputSvg}
        alt="yellow-elem"
        className={`absolute -z-[1] ${styleRoundSvg}`}
      />

      <h1 className="font-bold text-zinc-800 text-center text-4xl md:text-5xl pt-7 pb-5 md:py-10">
        {headlineTxt}
      </h1>
      <img
        src={underlineSvg}
        alt="design-underline"
        className="flex justify-self-center"
      />
    </div>
  );
};

export default HeaderDetails;
