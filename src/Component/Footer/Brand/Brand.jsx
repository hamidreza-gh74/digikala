import { useEffect } from "react";
import { fetch_footer } from "../../../Redux/Footer/Footer_Slice";
import { useDispatch, useSelector } from "react-redux";

const Brand = () => {
  const { data, loading, error } = useSelector((state) => state.footer);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_footer());
  }, []);

  return (
    <div className="hidden des:w-[100%] des:h-[160px] des:bg-[#f0f0f1] des:block">
      <div className="w-[100%] h-[80px]  mx-auto flex justify-evenly items-center border-b-[1px] border-solid border-[#e0e0e2] flex-wrap">
        {data?.map((item) => {
          return (
            <div
              key={item.id}
              className="h-[100%] w-[12%] flex justify-center items-center "
            >
              <a href="#" className="des:block w-fit h-[20px]">
                <img src={item.adress} className="w-fit  object-fit" alt="" />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brand;
