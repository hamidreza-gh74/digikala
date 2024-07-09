import { useEffect } from "react";
import { fetch_manage_product } from "../../../Redux/Manage_product/Manage_product_Slice";
import { useDispatch, useSelector } from "react-redux";
import plus from "../../../../public/image/suggestion/manage/plus.svg";
import trash from "../../../../public/image/suggestion/manage/trash.svg";
import axios from "axios";

const Edit_pro = () => {
  const { data, loading, error } = useSelector((state) => state.manage_product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_manage_product());
  }, []);

  const post_delete = async (id) => {
    await fetch(`http://localhost:1000/suggestion/${id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };
  const post_add = async (item) => {
    let check = await axios.get(`http://localhost:1000/suggestion`);
    console.log(check.data);
    let find = check.data.find((elem) => {
      return Number(elem.id) == item.id;
    });

    if (find) {
    } else {
      await axios.post("http://localhost:1000/suggestion", item);
      window.location.reload();
    }
  };
  return (
    <>
      {data?.map((item) => {
        return (
          <div
            key={item.id}
            className="w-[30%] flex flex-col justify-center items-center p-[5px] border border-solid border-[grey] rounded-[4px] m-[5px]"
          >
            <div className="w-[100px] h-[70px] ">
              <img src={item.adress} alt="" className="w-[100%] h-[100%]" />
            </div>

            <div className="font-[700] text-[10px]  mt-[8px] text-[#3f4064] leading-[2.17] ">
              <h3>{item.text.substr(0, 10)}</h3>
            </div>
            <div className="w-[100%] flex justify-center items-center gap-[18px] mb-[5px] mt-[8px]">
              <img
                src={plus}
                alt=""
                className="w-[18px] h-[18px] object-cover cursor-pointer"
                onClick={() => post_add(item)}
              />
              <img
                src={trash}
                alt=""
                className="w-[18px] h-[18px] object-cover cursor-pointer"
                onClick={() => post_delete(item.id)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Edit_pro;
