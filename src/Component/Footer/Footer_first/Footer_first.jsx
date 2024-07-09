import main from "../../../../public/image/footer/footer_first/main.svg";
import main2 from "../../../../public/image/footer/footer_first/main2.svg";
import pic1 from "../../../../public/image/footer/footer_first/pic1.svg";
import pic2 from "../../../../public/image/footer/footer_first/pic2.svg";
import pic3 from "../../../../public/image/footer/footer_first/pic3.svg";
import pic4 from "../../../../public/image/footer/footer_first/pic4.svg";
import pic5 from "../../../../public/image/footer/footer_first/pic5.svg";
import M1 from "../../../../public/image/footer/footer_first/m1.svg";
import M2 from "../../../../public/image/footer/footer_first/m2.svg";
import M3 from "../../../../public/image/footer/footer_first/m3.svg";
import M4 from "../../../../public/image/footer/footer_first/m4.svg";

const Footer_first = () => {
  return (
    <div className="des:block hidden max-w-[1700px] w-[100%] mx-auto h-[545px]">
      <div className="w-[100%] h-[44px] flex justify-between items-center mt-[30px]">
        <img src={main} className="object-cover mr-[30px]" alt="" />
        <a
          href="#"
          className="w-[129px] h-[42px] block rounded-[8px] border-[1px] border-solid border-[#e0e0e2] ml-[30px]"
        >
          <div className="w-[inherit] h-[inherit] flex justify-center items-center gap-x-[10px]">
            <p className="font-[regular] text-[#A1A3A8] text-[12px]font-[700] text-[12px]">
              بازگشت به بالا
            </p>
            <img src={main2} className="object-cover" alt="" />
          </div>
        </a>
      </div>
      <div className="w-[590px] h-[45px] mt-[10px] flex justify-between items-center">
        <div className="w-[160px] h-[17px] flex justify-center items-center font-[regular] text-[#3f4064] text-[12px] mr-[20px]">
          تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
        </div>
        <div className="w-[1px] h-[17px] bg-[#3f4064]"></div>
        <div className="w-[80px] h-[28px] flex justify-center items-center font-[regular] text-[#3f4064] text-[12px]">
          ۰۲۱-۹۱۰۰۰۱۰۰
        </div>
        <div className="w-[1px] h-[17px] bg-[#3f4064]"></div>
        <div className="w-[241px] h-[28px] flex justify-center items-center font-[regular] text-[#3f4064] text-[12px]">
          ۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم
        </div>
      </div>
      <div className="w-[100%] h-[100px] flex justify-evenly items-center mt-[20px]">
        <a href="w-[160px] h-[inherit]">
          <div className="w-[160px] h-[100px] relative">
            <img
              src={pic1}
              className="w-[60px] h-[50px] mx-auto object-cover absolute top-[0px] left-[50%] translate-x-[-50%]"
              alt=""
            />
            <p className="w-[100%] text-center font-[regular] text-[11px] text-[#3F4064] mt-[10px] absolute bottom-[15px] left-[50%] translate-x-[-50%]">
              امکان تحویل اکسپرس
            </p>
          </div>
        </a>
        <a href="w-[160px] h-[inherit]">
          <div className="w-[160px] h-[100px] relative">
            <img
              src={pic2}
              className="w-[60px] h-[50px] mx-auto object-cover absolute top-[0px] left-[50%] translate-x-[-50%]"
              alt=""
            />
            <p className="w-[100%] text-center font-[regular] text-[11px] text-[#3F4064] mt-[10px] absolute bottom-[15px] left-[50%] translate-x-[-50%]">
              امکان پرداخت در محل
            </p>
          </div>
        </a>
        <a href="w-[160px] h-[inherit]">
          <div className="w-[160px] h-[100px] relative">
            <img
              src={pic3}
              className="w-[60px] h-[50px] mx-auto object-cover absolute top-[0px] left-[50%] translate-x-[-50%]"
              alt=""
            />
            <p className="w-[100%] text-center font-[regular] text-[11px] text-[#3F4064] mt-[10px] absolute bottom-[15px] left-[50%] translate-x-[-50%]">
              ۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ
            </p>
          </div>
        </a>
        <a href="w-[160px] h-[inherit]">
          <div className="w-[160px] h-[100px] relative">
            <img
              src={pic4}
              className="w-[60px] h-[50px] mx-auto object-cover absolute top-[0px] left-[50%] translate-x-[-50%]"
              alt=""
            />
            <p className="w-[100%] text-center font-[regular] text-[11px] text-[#3F4064] mt-[10px] absolute bottom-[15px] left-[50%] translate-x-[-50%]">
              هفت روز ضمانت بازگشت کالا
            </p>
          </div>
        </a>
        <a href="w-[160px] h-[inherit]">
          <div className="w-[160px] h-[100px] relative">
            <img
              src={pic5}
              className="w-[60px] h-[50px] mx-auto object-cover absolute top-[0px] left-[50%] translate-x-[-50%]"
              alt=""
            />
            <p className="w-[100%] text-center font-[regular] text-[11px] text-[#3F4064] mt-[10px] absolute bottom-[15px] left-[50%] translate-x-[-50%]">
              ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ
            </p>
          </div>
        </a>
      </div>
      <div className="w-[100%] h-[290px] flex justify-evenly items-center mt-[20px] gap-x-[20px]">
        <div className="h-[inherit] w-fit">
          <div className="font-[regular] text-[16px] text-[#3F4064] font-[700] mb-[12px]">
            با دیجی کالا
          </div>
          <div className="w-[165px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              اتاق خبر دیجی کالا
            </a>
          </div>
          <div className="w-[165px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              فروش در دیجی کالا
            </a>
          </div>
          <div className="w-[165px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              فرصت های شغلی
            </a>
          </div>
          <div className="w-[165px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              گزارش تخلف در دیجی کالا
            </a>
          </div>
          <div className="w-[165px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              تماس با دیجی کالا
            </a>
          </div>
          <div className="w-[165px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              درباره دیجی کالا
            </a>
          </div>
        </div>
        <div className="h-[inherit] w-fit">
          <div className="font-[regular] text-[16px] text-[#3F4064] font-[700] mb-[12px]">
            خدمات مشتریان
          </div>
          <div className="w-[185px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              پاسخ به پرسش های متداول
            </a>
          </div>
          <div className="w-[165px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              رویه‌های بازگرداندن کالا
            </a>
          </div>
          <div className="w-[165px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              شرایط استفاده
            </a>
          </div>
          <div className="w-[165px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              حریم خصوصی
            </a>
          </div>
          <div className="w-[165px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              گزارش باگ
            </a>
          </div>
        </div>
        <div className="h-[inherit] w-fit">
          <div className="font-[regular] text-[16px] text-[#3F4064] font-[700] mb-[12px]">
            راهنمای خرید از دیجی کالا
          </div>
          <div className="w-[185px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              نحوه ثبت سفارش
            </a>
          </div>
          <div className="w-[165px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              رویه ارسال سفارش
            </a>
          </div>
          <div className="w-[165px] h-[33px] mb-[8px]">
            <a
              href="#"
              className="w-[inherit] h-[inheir] black text-[#81858b] font-[regular] text-[14px] font-[100] cursor-pointer"
            >
              شیوه های پرداخت
            </a>
          </div>
        </div>
        <div className="w-[260px] h-[inherit]">
          <div className="font-[regular] text-[16px] text-[#3F4064] font-[700] mb-[12px]">
            همراه ما باشید!
          </div>
          <div className="w-[100%] h-[50px] flex justify-between items-center mb-[20px]">
            <a href="#" className="block w-[40px] h-[40px] cursor-pointer">
              <img src={M1} className="w-[100%] h-[100%] object-cover" alt="" />
            </a>
            <a href="#" className="block w-[40px] h-[40px] cursor-pointer">
              <img src={M2} className="w-[100%] h-[100%] object-cover" alt="" />
            </a>
            <a href="#" className="block w-[40px] h-[40px] cursor-pointer">
              <img src={M3} className="w-[100%] h-[100%] object-cover" alt="" />
            </a>
            <a href="#" className="block w-[40px] h-[40px] cursor-pointer">
              <img src={M4} className="w-[100%] h-[100%] object-cover" alt="" />
            </a>
          </div>
          <div className="font-[regular] text-[16px] text-[#3F4064] font-[700] mb-[12px]">
            با ثبت ایمیل، از تخفیف‌ها با‌خبر شوید{" "}
          </div>
          <div className="w-[100%] h-[60px] flex justify-between items-center">
            <input
              type="email"
              placeholder="ایمیل شما"
              className="w-[195px] h-[48px] px-[8px] bg-[#F0F0F1] rounded-[8px] font-[regular] text-[15px] text-[#3F4064] focus:outline-none"
            />
            <button className="w-[50px] h-[48px] bg-[#afafaf] text-[white] rounded-[8px] font-[regular] text-[15px]">
              ثبت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_first;
