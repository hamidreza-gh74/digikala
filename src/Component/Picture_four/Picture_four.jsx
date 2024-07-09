import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_picture_four } from "../../Redux/Picture_four/Picture_four_Slice";
const Picture_four = () => {

  const { data, loading, error } = useSelector((state) => state.picture_four);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_picture_four());
  }, []);

  
  return (
    <div className="w-[100%] h-[auto] flex justify-center my-[5px]">
      <div className="w-[96%] h-[auto] max-w-[1400px] flex mob:flex-wrap justify-between ">

        {
          data.map((item)=>{
            return(
              <a
              key={item.id}
              href=""
              className="flex mob:w-[49%]  des:w-[24%]  des:min-w-[236px] des:max-w-[322px] rounded-[16px] overflow-hidden mob:mt-[15px]"
            >
              <div className="w-[100%] h-[100%]">
                <img src={item.adress} alt="" className="w-[100%] h-[100%] object-cover object-center" />
              </div>
            </a>
            )
          })
        }
     
      </div>
    </div>
  );
};

export default Picture_four;
