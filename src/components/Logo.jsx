import { faOldRepublic } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo = ({name,color,textstyle}) => {
  return (
    <div className="logo text-2xl flex items-center gap-2">
      <FontAwesomeIcon icon={faOldRepublic} className={color} />{" "}
      <h1 className={`font-bold ${textstyle}`}>{name}</h1>
    </div>
  );
};

export default Logo;
