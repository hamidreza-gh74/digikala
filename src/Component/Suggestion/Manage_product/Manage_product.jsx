import Default_pro from "./Default_pro";
import Edit_pro from "./Edit_pro";

import { useEffect } from "react";
import { fetch_suggestion } from "../../../Redux/Suggestion/Suggestion_Slice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Manage_product = () => {
    const { data, loading, error } = useSelector((state) => state.suggestion);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetch_suggestion());
    }, []);
  return (
    <div className="w-[100%] h-[auto] flex justify-center items-center mb-[80px] mt-[200px]">
      <div className="w-[96%] max-w-[1400px] h-[auto] flex flex-col gap-[8px] justify-center items-center">
        <div className="titr w-[100%] flex gap-[40px] justify-center items-center py-[20px]">
          <h1 className="text-[14px] font-[700]">مدیریت محصولات </h1>
          <NavLink to={"/"} className="bg-[green] py-[10px] px-[14px] rounded-[4px] text-[white] text-[12px] font-[400]"> صفحه اصلی</NavLink>
        </div>
        <div className="main flex mob:flex-wrap gap-[8px] w-[100%] h-[auto]  justify-center">
          <div className="edit flex flex-col items-center des:w-[45%] mob:w-[100%] h-[auto] border border-solid border-[grey] rounded-[6px]  p-[10px]">
            
            <div className="topic text-[14px] font-[400] my-[8px]">
              ویرایش محصولات :
            </div>
            <div className="w-[100%] flex flex-wrap p-[5px] justify-center items-center">
              <Edit_pro />
            </div>
          </div>

          <div className="default des:w-[45%] mob:w-[100%] h-[auto] border border-solid border-[grey] p-[10px] rounded-[6px] flex flex-col items-center ">
            <div className="topic text-[14px] font-[400] my-[8px]">
              محصولات در حال نمایش :
            </div>
            <div className="w-[100%] flex flex-wrap p-[5px] justify-center items-center">
              <Default_pro data={data}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manage_product;
