import { useDispatch, useSelector } from "react-redux";
import { fetch_picture_two } from "../../Redux/Picture_two/Picture_two_Slice";
import { useEffect } from "react";


const Picture_two = () => {
  const { data, loading, error } = useSelector((state) => state.picture_two);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_picture_two());
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
              className="flex mob:w-[100%]  des:w-[49%]  des:min-w-[400px] des:max-w-[660px] rounded-[16px] overflow-hidden mob:mt-[15px]"
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

export default Picture_two;
