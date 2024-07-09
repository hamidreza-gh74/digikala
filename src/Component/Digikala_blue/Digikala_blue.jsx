
import "./style.css"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetch_digikala_blue } from "../../Redux/Digikala_blue/Digikala_blue_Slice";
import Pic from "./Pic";

const Digikala_blue = () => {
  const { data, loading, error } = useSelector((state) => state.digikala_blue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_digikala_blue());
  }, []);

  return (
    <div className="w-[100%] h-[auto] flex justify-center my-[25px]">

      <div className="w-[96%] h-[auto] max-w-[1400px] flex mob:flex-col des:flex-row items-center mob:gap-[20px] mob:justify-center  des:justify-between bg-gradient-to-l from-[#007295] from-30% via-[#7cf2f6] via-600% to-[#35a6c8] to-80%  rounded-[12px] px-[16px] py-[12px]">

        <div className="right w-[119px] h-[33px] mr-[25px] des:self-center mob:self-start mob:mt-[10px] ">
          <img src={data[0]?.logo} alt="" className="w-[100%] h-[100%] object-fit" />
        </div>

        <div className="left des:w-[66%] mob:w-[100%] flex gap-[5px] des:justify-end des:items-center mob:items-center mob:justify-center ">

          {
            data[1]?.picture.map((item)=>{
              return <Pic key={item.id} item={item}/>
            })
          }
       
         
        </div>
      </div>
    </div>
  );
};

export default Digikala_blue;


