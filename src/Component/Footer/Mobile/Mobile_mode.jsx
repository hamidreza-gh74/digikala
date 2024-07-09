import Call from "./Call";
import Download from "./Download";
import Up from "./Up";

import Accordion from "./Accordion_mobile";
import { useState } from "react";
import More from "./More";
const Mobile_mode = () => {
  let data = [
    {
      id: 1,
      titr: "با دیجی کالا",
      items: [
        { id: 1, titr: "اتاق خبر دیجی کالا" },
        { id: 2, titr: "فروش در دیجی کالا" },
        { id: 3, titr: "فرصت های شغلی" },
        { id: 4, titr: "گزارش تخلف در دیجی کالا" },
        { id: 5, titr: "تماس با دیجی کالا" },
        { id: 6, titr: "درباره دیجی کالا" },
      ],
    },
    {
      id: 2,
      titr: "خدمات مشتریان",
      items: [
        { id: 1, titr: " پاسخ به پرسش های متداول" },
        { id: 2, titr: "رویه های بازگرداندن کالا" },
        { id: 3, titr: "شرایط استفاده " },
        { id: 4, titr: "حریم خصوصی" },
        { id: 5, titr: "گزارش باگ" },
      ],
    },
    {
      id: 3,
      titr: "راهنمای خرید از دیجی کالا",
      items: [
        { id: 1, titr: "نحوه سفارشی ثبت سفارش" },
        { id: 2, titr: "رویه ارسال " },
        { id: 3, titr: "شیوه های پرداخت" },
      ],
    },
    {
      id: 4,
      titr: "شرکای تجاری",
      items: [
        { id: 1, adress: "../../../../public/image/footer/Brands/num1.svg" },
        { id: 2, adress: "../../../../public/image/footer/Brands/num2.svg" },
        { id: 3, adress: "../../../../public/image/footer/Brands/num3.svg" },
        { id: 4, adress: "../../../../public/image/footer/Brands/num5.svg" },
        { id: 5, adress: "../../../../public/image/footer/Brands/num6.svg" },
        { id: 6, adress: "../../../../public/image/footer/Brands/num7.svg" },
        { id: 7, adress: "../../../../public/image/footer/Brands/num8.svg" },
        { id: 8, adress: "../../../../public/image/footer/Brands/num9.svg" },
        { id: 9, adress: "../../../../public/image/footer/Brands/num10.svg" },
        { id: 10, adress: "../../../../public/image/footer/Brands/num11.svg" },
        { id: 11, adress: "../../../../public/image/footer/Brands/num12.svg" },
        { id: 12, adress: "../../../../public/image/footer/Brands/num13.svg" },
        { id: 13, adress: "../../../../public/image/footer/Brands/num14.svg" },
        { id: 14, adress: "../../../../public/image/footer/Brands/num15.svg" },
        { id: 15, adress: "../../../../public/image/footer/Brands/num16.svg" },
      ],
    },
  ];
  const [selected, setSelect] = useState("");
  console.log(selected);
  return (
    <div className="w-[100%] flex justify-center items-center">
      <div className="w-[90%] h-[auto] des:hidden mob:flex flex-col justify-center items-center  mb-[100px]  ">
        <Up />
        <Call />
        <Download />

        {data.map((item) => {
          return (
            <Accordion
              selected={selected}
              setSelect={setSelect}
              item={item}
              sample={`carousel-${item.id}`}
              key={`carousel-${item.id}`}
            />
          );
        })}

        <More />
      </div>
    </div>
  );
};

export default Mobile_mode;
