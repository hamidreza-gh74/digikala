import { useState } from "react";

import Sub_menu_right from "./submenu/Sub_menu_right";
import Sub_menu_left from "./submenu/Sub_menu_left";

const Part_one = ({ data }) => {
  const [hover, sethover] = useState(false);
  const [show, setshow] = useState("right-1");
  return (
    <div
      className="w-fit h-[40px] text-[#3f4064] font-[600] text-[14px] flex items-center ml-[12px] hover:border-b-2 hover:border-solid hover:border-[red]  "
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
    >
      <div className="w-[100%] H-[100%] flex items-center cursor-pointer">
        <div className="w-[20px] h-[20px] ml-[4px] ">
          <img
            src={data.partone && data.partone.svg}
            alt=""
            className="w-[100%] h-[100%]"
          />
        </div>
        {data.partone && data.partone.text}
      </div>

      <div
        className={`submenu  absolute top-[40px] w-[80%] h-[400px]  bg-[white] z-50 
        ${hover ? "flex" : "hidden"}`}
      >
        <Sub_menu_right show={show} data={data} setshow={setshow} />
        <Sub_menu_left data={data} show={show} />
      </div>
    </div>
  );
};

export default Part_one;
