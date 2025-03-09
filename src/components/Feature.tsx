import biodata from "../assets/biodata.svg";
import second from "../assets/2.svg";
import third from "../assets/3.svg";
import fourth from "../assets/4.svg";
import fifth from "../assets/5.svg";

const Features = () => {
  return (
    <div className="flex flex-row justify-between pl-[200px]">
      <img src={biodata} alt="bio" className="w-[15%] pt-[10px]" />
      <img src={second} alt="anomal" className="w-[15%] pt-[90px]" />
      <img src={third} alt="eval" className="w-[15%] pt-[90px]" />
      <img src={fourth} alt="now" className="w-[15%] pt-[90px]" />
      <img src={fifth} alt="asd" className="w-[15%] pt-[90px]" />
    </div>
  );
};

export default Features;
