import { useEffect } from "react";
import sign from "../../../public/image/magazine/sign.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetch_magazine } from "../../Redux/Magazine/Magazine_Slice";

const Magazine = () => {
 

  const { data, loading, error } = useSelector((state) => state.magazine);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_magazine());
  }, []);
  return (
    <div className="w-[100%] h-[auto] flex justify-center my-[5px]">
      <div className="w-[96%] h-[auto] max-w-[1400px] flex mob:flex-wrap justify-between ">
        <div className="w-[100%] self-center flex justify-between items-center">
          <p className="text-[14px] text-[black] font-[700] mr-[20px]">
            خواندنی
          </p>
          <a href="" className="flex items-center gap-[5px] ml-[20px] ">
            <p className=" text-[#19bfd3] text-[10px] font-[700] no-underline ">
              مطالب بیشتر در دیجی کالا مگ
            </p>
            <div className="w-[18px] h-[18px] self-center ">
              <img src={sign} alt="" className="w-[100%] h-[100%]-fit object" />
            </div>
          </a>
        </div>

        {data.map((item) => {
          return (
            <a
              key={item.id}
              href=""
              className="flex flex-col mob:w-[100%]  des:w-[24%]  des:min-w-[237px] des:max-w-[323px] rounded-[4px] overflow-hidden mob:mt-[15px] border border-solid border-[#e0e0e2]"
            >
              <div className="w-[100%] des:h-[201px] mob:max-h-[611px] mob:min-h-[186px]">
                <img
                  src={item.adress}
                  alt=""
                  className="w-[100%] h-[100%] object-cover object-center"
                />
              </div>
              <div className="px-[16px] py-[12px] text-[12px] font-[400] leading-[2.17] text-[#0c0c0c] ">
                {item.text}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Magazine;
