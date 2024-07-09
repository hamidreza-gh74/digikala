import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_slider_first } from "../../Redux/Slider_first/Slider_first_Slice";

const Story = () => {


  const { data, loading, error } = useSelector(
    (state) => state.slider_first
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_slider_first());
  }, []);

  return (
    <>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className="story w-[84px] h-[140px] bg-[white] flex flex-col items-center justify-center "
          >
            <div className="circle w-[84px] h-[83px] rounded-[50%] flex justify-center items-center bg-gradient-315 from-[#e03d96] to-[#7d4c9e]  ">
              <div className="w-[80px] h-[80px] bg-[white] rounded-[50%] flex justify-center items-center">
                <div className="w-[74px] h-[74px]">
                  <img
                    src={item.adress}
                    alt=""
                    className="w-[100%] h-[100%] object-cover rounded-[100%]"
                  />
                </div>
              </div>
            </div>
            <div className="text mt-[10px] w-[100%] h-[47px]  text-[#23254e] text-[10px] font-[400] text-center overflow-hidden">
              {" "}
              مراقب کفشات هستی ؟{" "}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Story;
