const AboutDetails = ({ heading, list1, list2, list3,swipesrc }) => {
  return (
    <div className="bg-[#FFF2E0] h-full p-4 shrink-[0] w-full    lg:w-[50%]">
      <h1 className="text-base font-bold ">{heading}</h1>
      <ul className="p-4 flex flex-col gap-3 text text-sm list-disc">
        <li className="">{list1}</li>
        <li className="">
          {list2}
        </li>
        <li>{list3}</li>
      </ul>

      <img src={swipesrc} className="object-cover  " alt="" />
    </div>
  );
};

export default AboutDetails;
