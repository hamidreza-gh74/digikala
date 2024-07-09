// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import Row from "./Row";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_classify_buy } from "../../Redux/Classify_buy/Classify_buy_Slice";

const Classify_buy = () => {
  const { data, loading, error } = useSelector((state) => state.classify_buy);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_classify_buy());
  }, []);
 


  return (
    <div className="w-[100%] h-[464px] flex justify-center my-[30px]">
      <div className="w-[76%] h-[inherit] flexx flex-col justify-center max-w-[1350px]">
        <div className="top flex justify-center ">
          <h3 className="text-[black] text-[21px] font-[500]">
            خرید براساس دسته بندی
          </h3>
        </div>
        <div className="bottom h-[398px] w-[100%]  ">
          <Swiper
            breakpoints={{
              1200: {
                slidesPerView: 8,
                grid: {
                  rows: 2,
                },
              },
              1150: {
                slidesPerView: 6,
                grid: {
                  rows: 2,
                },
              },
              900: {
                slidesPerView: 5,
                grid: {
                  rows: 3,
                },
              },
              700: {
                slidesPerView: 4,
                grid: {
                  rows: 3,
                },
              },
              500: {
                slidesPerView: 3,
                grid: {
                  rows: 3,
                },
              },
              300: {
                slidesPerView: 2,
                grid: {
                  rows: 3,
                },
              },
            }}
            slidesPerView={8}
            grid={{
              rows: 2,
            }}
            spaceBetween={0}
            modules={[Grid, Navigation]}
            className="mySwiper"
          >
            {data?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Row item={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Classify_buy;
