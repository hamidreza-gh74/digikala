// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";



import { fetch_slider_second } from "../../Redux/Slider_second/Slider_second_Slice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Slider_second = () => {
  
  const { data, loading, error } = useSelector((state) => state.slider_second);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_slider_second());
  }, []);

  return (
    <>
      <div className="swiper w-[100%] h-[auto] bg-[white] relative">
        <Swiper
        
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper2"
        >
          {data?.map((elem) => {
            return (
              <SwiperSlide key={elem.id}>
                <img
                  src={elem.adress}
                  alt=""
                  className="w-[100%] h-[100%] block"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Slider_second;
