import { useEffect } from "react";
import sign from "../../../public/image/selection_product_for_discount/sign.svg";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetch_selection_product_for_discount } from "../../Redux/Selection_product_for_discount/Selection_product_for_discount_Slice";

const Selection_product_for_discount = () => {
  const { data, loading, error } = useSelector((state) => state.selection_product_for_discount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_selection_product_for_discount());
  }, []);


  return (
    <div className="w-[100%] h-[auto] flex justify-center my-[15px] ">
      <div className="w-[96%] h-[inherit] flex flex-wrap items-center justify-center max-w-[1350px] border border-solid rounded-[8px] p-[20px] ">
        <div className="top flex gap-[5px] mb-[20px]">
          <img src={sign} alt="" className="w-[24px] h-[24px] self-center" />
          <p className="text-[black] text-[20px] font-[500]">
            منتخب محصولات تخفیف و حراج
          </p>
        </div>

        <div className="bottom w-[100%] flex justify-center items-center flex-wrap ">
          {data.map((item) => {
            return <Product key={item.id} item={item}/>})}
        </div>
      </div>
    </div>
  );
};

export default Selection_product_for_discount;
