import { useDispatch, useSelector } from "react-redux";

import sign from "../../../public/image/table_four_pic/sign.svg";
import { fetch_table_four_pic } from "../../Redux/Table_four_pic/Table_four_pic_Slice";
import { useEffect } from "react";

const Table_four_pic = () => {
  
  const { data, loading, error } = useSelector((state) => state.table_four_pic);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetch_table_four_pic());
  }, []);

  return (
    <div className="w-[100%] h-[auto] flex justify-center my-[15px] ">
      <div className="w-[96%] h-[inherit] flex flex-wrap items-center justify-center max-w-[1350px]  ">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col des:w-[25%] mob:w-[100%] des:min-w-[236px] des:max-w-[342px] h-[auto] py-[20px] px-[20px] border border-solid "
            >
              <h4 className="text-[black] text-[15px] font-[700] leading-2">
                {item.titr}
              </h4>
              <p className="text-[#81858b] text-[12px] font-[400] leading-2 mt-[8px]">
                {item.subtitr}
              </p>

              <div className="picture w-[100%] flex flex-wrap mt-[25px]">
                {item.items.map((sub) => {
                  return (
                    <div
                      className={`w-[50%] des:min-w-[86px] des:max-w-[129px] mob:min-w-[110px] mob:max-w-[431px] p-[8px] ${
                        sub.id == 1 ? "border-b border-l border-solid" : null
                      } ${
                        sub.id == 4 ? "border-t border-r border-solid" : null
                      }`}
                      key={sub.id}
                    >
                      <img
                        src={sub.adress}
                        alt=""
                        className="w-[100%] h-[100%] object-contain"
                      />
                    </div>
                  );
                })}
              </div>

              <a
                href=""
                className="flex gap-[10px] justify-center items-center mt-[15px]"
              >
                <div className="text-[#19bfd3] text-[12px] font-[700]">
                  مشاهده
                </div>{" "}
                <img src={sign} alt="" className="w-[18px] h-[18px]" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table_four_pic;
