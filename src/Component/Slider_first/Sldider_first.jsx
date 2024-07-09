import { useRef } from "react";
import btn from "../../../public/image/my_slider/btn.svg";
import Story from "./Story";

const Slider_first = () => {
  let box = useRef();

  let btn_left = () => {
    let pos = box.current;
    pos.scrollLeft = pos.scrollLeft - 250;
  };
  let btn_right = () => {
    let pos = box.current;
    pos.scrollLeft = pos.scrollLeft + 250;
  };

  return (
    <div className="w-[100%] h-[156px] flex justify-center mob:mt-[100px]  des:mt-[175px]">
      <div className="w-[100%] h-[156px]  px-[16px]  max-w-[1336px]">
        <div className="w-[100%] h-[100%]  relative">
          <div
            ref={box}
            className="box w-[100%] h-[100%] gap-[24px] overflow-hidden scroll-smooth flex items-center justify-start  "
          >
            <Story />
          </div>
          <div
            className="btn_left w-[40px] h-[40px] bg-[#fff] rounded-[50%] absolute top-[50%] translate-y-[-50%] bottom-[0] left-[20px] flex justify-center items-center "
            onClick={btn_left}
          >
            <img src={btn} alt="" className="w-[20px] h-[20px] " />
          </div>

          <div
            className="btn_right w-[40px] h-[40px] bg-[#fff] rounded-[50%] absolute top-[50%] translate-y-[-50%] bottom-[0] right-[20px] flex justify-center items-center "
            onClick={btn_right}
          >
            <img src={btn} alt="" className="w-[20px] h-[20px] rotate-180  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider_first;
