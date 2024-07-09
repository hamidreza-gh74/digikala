import sug from "../../../public/image/suggestion/sug.svg";
import sug_m from "../../../public/image/suggestion/sug_m.svg";

import smile from "../../../public/image/suggestion/smile.svg";

import btn from "../../../public/image/my_slider/btn.svg";
import Product from "./Product";
import { useRef } from "react";
import { fetch_suggestion } from "../../Redux/Suggestion/Suggestion_Slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Timer from "./Timer";
import { NavLink } from "react-router-dom";

const Suggestion = () => {
  const { data, loading, error } = useSelector((state) => state.suggestion);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_suggestion());
  }, []);

  let main = useRef();
  let right = useRef();
  let left = useRef();

  let btn_left = () => {
    let pos = main.current;
    let check = [...right.current.classList];
    pos.scrollLeft = pos.scrollLeft - 309;
    if (check.includes("hidden")) {
      right.current.classList.remove("hidden");
      right.current.classList.add("flex");
    }
  };
  let btn_right = (e) => {
    let pos = main.current;

    if (Math.floor(Math.abs(pos.scrollLeft)) <= 250) {
      e.currentTarget.classList.add("hidden");
      e.currentTarget.classList.remove("flex");
      pos.scrollLeft = 0;
    } else {
      pos.scrollLeft = pos.scrollLeft + 309;
    }
  };

  return (
    <div className="w-[100%] h-[auto] flex flex-col items-center my-[15px]">
      <div className="w-[96%] max-w-[1400px] h-[100%] py-[20px]  flex justify-center items-center">
        <NavLink to={"/manage-product"} className="flex justify-center items-center bg-green-700 text-[12px] font-[400] text-[white] px-[14px] py-[10px] rounded-[4px]">مدیریت محصولات</NavLink>
      </div>
      <div className="w-[96%] max-w-[1400px] h-[100%] py-[20px] px-[10px] bg-gradient-225 from-[#d22c4e] via-[#ee384e] via-[40%] to-[#ef5662] rounded-[8px] relative mob:pr-[30px] ">
        <div className="des:hidden mob:w-[100%] mob:h-[auto] flex justify-start items-center mb-[12px] gap-[8px] ">
          <img src={smile} alt="" className="w-[24px] h-[24px]" />
          <img src={sug_m} alt="" className="w-[108px] h-[20px]" />
          <Timer />
        </div>
        <div
          ref={main}
          className="main w-auto h-[100%] flex justify-between  items-center overflow-hidden     scroll-smooth"
        >
          <div className="right w-[209px] h-[100%] mob:hidden des:flex flex-col justify-center items-center  ml-[8px] ">
            <img src={sug} alt="" className="w-[120px] h-[120px]" />
            <div className="flex w-[100%] justify-center items-center text-[white]  font-[700] text-[13px] mt-[7px] ">
              <div className="w-[26px] h-[26px] leading-[26px] text-center rounded-[4px] bg-[white] mx-[5px] text-[black] ">
                07
              </div>
              :
              <div className="w-[26px] h-[26px] leading-[26px] text-center rounded-[4px] bg-[white] mx-[5px] text-[black]">
                22
              </div>
              :
              <div className="w-[26px] h-[26px] leading-[26px] text-center rounded-[4px] bg-[white] mx-[5px] text-[black]">
                23
              </div>
            </div>
            <img
              src={smile}
              alt=""
              className="block mt-[10px] w-[120px] h-[120px]"
            />
          </div>
          <div className="left des:w-[calc(100%-217px)] mob:w-[100%] flex ">
            {data?.map((item) => {
              return <Product key={item.id} item={item} />;
            })}
          </div>
          <div
            className="btn_left w-[40px] h-[40px] bg-[#fff] rounded-[50%] absolute top-[50%] translate-y-[-50%] bottom-[0] left-[20px] flex justify-center items-center "
            onClick={btn_left}
            ref={left}
          >
            <img src={btn} alt="" className="w-[20px] h-[20px] " />
          </div>

          <div
            className="btn_right w-[40px] h-[40px] bg-[#fff] rounded-[50%] absolute top-[50%] translate-y-[-50%] bottom-[0] right-[20px] hidden justify-center items-center "
            onClick={btn_right}
            ref={right}
          >
            <img src={btn} alt="" className="w-[20px] h-[20px] rotate-180  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
