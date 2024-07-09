import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_popular_brand } from "../../Redux/Popular_brand/Popular_brand_Slice";
import Image from "./Image";
const Brand = () => {
  const { data, loading, error } = useSelector((state) => state.popular_brand);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_popular_brand());
  }, []);

  return (
    <>
      {data.map((item) => {
        return item.divided ? (
          <div key={item.id} className="w-[144px] flex">
            <Image item={item} />
            <div className="divider w-[0.5px] h-[118px] bg-[#e0e0e2]"></div>
          </div>
        ) : (
          <Image key={item.id} item={item} />
        );
      })}
    </>
  );
};

export default Brand;
