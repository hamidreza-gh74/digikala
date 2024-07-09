import sun from "../../../public/image/popular_brand/sun.svg";
import btn from "../../../public/image/my_slider/btn.svg";

import Brand from "./Brand";
import { useRef } from "react";
const Popular_brand = () => {
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
    <div className="w-[100%] h-[auto] flex justify-center my-[15px]">
      <div className="w-[96%] h-[auto] max-w-[1400px] flex flex-col justify-between border border-solid border-[#e0e0e2] rounded-[8px]">
        <div className="titr flex justify-center gap-[10px] items-center w-[100%] pt-[8px] my-[15px] ">
          <img src={sun} alt="" className="w-[21px] h-[20px] object-cover " />
          <div className="text text-[22px] text-[#0c0c0c] font-[500] flex self-center">
            محبوب ترین برند ها
          </div>
        </div>

        <div className="slider ">
          <div className="w-[100%] flex justify-center mt-[16px] ">
            <div className="w-[100%] px-[5px]  max-w-[1336px]">
              <div className="w-[100%] relative">
                <div
                  ref={box}
                  className="box w-[100%] h-[100%] gap-[24px] overflow-hidden scroll-smooth flex items-center justify-start mb-[30px]  "
                >
                  <Brand />
                </div>
                <div
                  className="btn_left w-[40px] h-[40px] bg-[#fff] rounded-[50%] absolute top-[50%] translate-y-[-50%] bottom-[0] left-[10px] flex justify-center items-center "
                  onClick={btn_left}
                >
                  <img src={btn} alt="" className="w-[20px] h-[20px] " />
                </div>

                <div
                  className="btn_right w-[40px] h-[40px] bg-[#fff] rounded-[50%] absolute top-[50%] translate-y-[-50%] bottom-[0] right-[10px] flex justify-center items-center "
                  onClick={btn_right}
                >
                  <img
                    src={btn}
                    alt=""
                    className="w-[20px] h-[20px] rotate-180  "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular_brand;
