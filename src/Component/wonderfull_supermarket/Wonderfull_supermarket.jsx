import right_first from "../../../public/image/wonderfull_supermarket/right_first.webp";
import logo from "../../../public/image/wonderfull_supermarket/logo_supermarket.svg";
import more from "../../../public/image/wonderfull_supermarket/more.svg";

import Circle from "./Circle";
import "./style.css";

import { fetch_wonderfull_supermarket } from "../../Redux/wonderfull_supermarket/Wonderfull_supermarket_Slice"; 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Wonderfull_supermarket = () => {
  const { data, loading, error } = useSelector(
    (state) => state.wonderfull_supermarket
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_wonderfull_supermarket());
  }, []);

 

  return (
    <div className="w-[100%] h-[auto] flex justify-center mb-[10px]">
      <div className="w-[96%] max-w-[1400px] h-[100%] mob:px-[15px] des:px-[40px] py-[16px] bg-[url('../../../public/image/wonderfull_supermarket/background.svg')] bg-no-repeat bg-[#ecefee] rounded-[16px]">
        <a
          href=""
          className="flex des:flex-row mob:flex-col mob:gap-[25px] mob:items-start justify-between des:items-center w-[100%] h-[100%]   "
        >
          <div className="right   w-fit h-[62px] flex justify-center items-center mob:justify-start ">
            <div className="first mob:flex-col des:flex-row  flex justify-center items-center gap-[10px]  w-fit h-[62px] mob:self-start mob:gap-[10px] ">
              <div className="flex gap-[10px] justify-center items-center mob:justify-start">
                <div className="des:w-[66px] des:h-[62px] mob:w-[40px] mob:h-[38px]">
                  <img
                    src={right_first}
                    alt=""
                    className="w-[100%] h-[100%] object-cover "
                  />
                </div>
                <div className="des:w-[290px] des:h-[28px] mob:w-[210px] mob:h-[20px]">
                  <img
                    src={logo}
                    alt=""
                    className="w-[100%] h-[100%] object-cover "
                  />
                </div>
              </div>

              <div className="w-fit h-fit py-[12px] px-[25px] rounded-[25px] bg-[#029a49] text-[12px] font-[700] text-[white] flex justify-center items-center mob:self-start des:self-center">
                تا ۶۹٪ تخفیف
              </div>
            </div>
          </div>
          <div className="left  mob:w-[100%] mob:justify-between des:w-fit h-[84px] flex des:justify-center des:items-center  mob:self-start gap-[10px]">
            <div className="flex gap-[5px] ">
              {data?.map((item) => {
                return <Circle item={item} key={item.id} />;
              })}
            </div>

            <div className="more w-fit h-[50px] mob:h-fit mob:w-fit mob:p-[15px] flex gap-[5px] justify-center items-center bg-[white] rounded-[30px]">
              <div className="text-[#029a49] font-[700] text-[12px] des:block mob:hidden">
                بیش از ۱۰۰ کالا
              </div>
              <img
                src={more}
                alt=""
                className="w-[20px] h-[20px] object-cover "
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Wonderfull_supermarket;
