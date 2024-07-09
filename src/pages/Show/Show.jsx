import { useParams } from "react-router-dom";
import { fetch_suggestion } from "../../Redux/Suggestion/Suggestion_Slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import art_sug from "../../../public/image/suggestion/art_sug.svg";
import icon from "../../../public/image/suggestion/icon.svg";
import toman from "../../../public/image/suggestion/toman.svg";

const Show = () => {
  let { id } = useParams();
  const { data, loading, error } = useSelector((state) => state.suggestion);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_suggestion());
  }, []);

  let post_show = data?.find((item) => item.id == id);

  return (
    <div className="w-[100%] flex mb-[10px] mt-[200px] justify-center items-center">
      <div className="flex flex-col justify-center items-center w-fit p-[40px] border bordet-solid border-[grey] rounded-[8px]">
        <div className="w-[116px] h-[14px] self-start">
          <img src={art_sug} alt="" className="w-[116px] h-[14px] " />
        </div>
        <div className="w-[150px] h-[150px] mt-[15px]">
          <img
            src={post_show && post_show.adress}
            alt=""
            className="w-[150px] h-[150px]"
          />
        </div>

        <div className="font-[700] text-[10px] self-start mt-[8px] text-[#3f4064] leading-[2.17] ">
          <h3>{post_show && post_show.text}</h3>
        </div>
        <div className="flex self-start gap-[5px] mt-[20px]">
          <img src={icon} alt="" className="w-[18px] h-[18px]" />
          <div className="text-[10px] text-[#62666d] font-[400]">
            ارسال فروشنده
          </div>
        </div>
        <div className="flex justify-between w-[100%] mt-[15px]">
          <div className="w-[34px] h-[20px] px-[4px] bg-[red] rounded-[16px] font-[700] text-[10px] text-[white] leading-[20px] text-center self-start ">
            ۴٪
          </div>
          <div className="flex gap-[5px]">
            <span className="text-[10px] font-[700]">۱,۶۴۱,۶۰۰</span>
            <img src={toman} alt="" className="w-[16px] h-[16px]" />
          </div>
        </div>

        <div className="flex self-end pl-[20px] text-[10px] text-[#c0c2c5] font-[700] mb-[20px]  ">
          ۱,۷۱۰,۰۰۰
        </div>

        <div className="flex self-end text-[10px] text-[red] font-[700]">
          ۲۸ : ۰۴ : ۱۱
        </div>
      </div>
    </div>
  );
};

export default Show;
