// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import fire from "../../../public/image/bestceller_goods/fire.svg";
import Row from "./Row";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetch_bestceller_goods } from "../../Redux/Bestceller_goods/Bestceller_goods_Slice";
const Bestceller_goods = () => {
  const { data, loading, error } = useSelector(
    (state) => state.bestceller_goods
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_bestceller_goods());
  }, []);
  // console.log(data);

  return (
    <div className="w-[100%] h-[auto] flex justify-center my-[15px]">
      <div className="w-[96%] h-[inherit] flex flex-col items-center justify-center max-w-[1350px] border border-solid rounded-[8px] pt-[20px]   gap-[20px] ">

        <div className="top  flex w-[100%] justify-center items-center relative ">
          <div className="flex gap-[5px] w-fit items-center  ">
            <img src={fire} alt="" />
            <h3 className="text-[black] text-[17px] font-[700]">
              پر فروش ترین کالا ها
            </h3>
          </div>
          <div className="w-fit pl-[5px] absolute left-[10px] ">
            <a href="" className=" text-[#19bfd3] text-[14px] font-[500] ">
              {" "}
              مشاهده همه
            </a>
          </div>
        </div>



        <div className="bottom px-[10px] h-[350px] w-[100%] mb-[10px]  ">
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: 4,
                grid: {
                  rows: 3,
                },
              },
              800: {
                slidesPerView: 3,
                grid: {
                  rows: 3,
                },
              },
              500: {
                slidesPerView: 2,
                grid: {
                  rows: 3,
                },
              },
              300: {
                slidesPerView: 1,
                grid: {
                  rows: 3,
                },
              },
            }}
            slidesPerView={4}
            grid={{
              rows: 3,
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

export default Bestceller_goods;
