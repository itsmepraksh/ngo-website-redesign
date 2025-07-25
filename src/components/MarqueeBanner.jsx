import Marquee from "react-fast-marquee";

const MarqueeBanner = ({ sponsersName }) => {
  return (
    <Marquee speed={50} gradient={false} >
    
       <div className="flex gap-5 xl:gap-16 overflow-x-hidden">
        <p>{sponsersName}</p>
        <p>{sponsersName}</p>
        <p>{sponsersName}</p>
        <p>{sponsersName}</p>
        <p>{sponsersName}</p>
        <p>{sponsersName}</p>
        <p>{sponsersName}</p>
        <p>{sponsersName}</p>
        <p>{sponsersName}</p>
        <p>{sponsersName}</p>
      </div>
    </Marquee>
  );
};

export default MarqueeBanner;
