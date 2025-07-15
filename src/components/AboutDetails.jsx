 

const AboutDetails = ({heading, list1, list2, list3,list4}) => {
  return (
     <div className="md:w-[45%] border-[1px] p-2 px-4"> 
          <h1 className="text-sm py-3 text-[#E65E00]">{heading}</h1>
          <ul className="text-xs flex flex-col gap-1">
            <li>{list1}</li>
            <li>{list2}</li>
            <li>{list3}</li>
            <li>{list4}</li>
          </ul>
        </div>
  )
}

export default AboutDetails