import top from "../../../public/image/menu/top.gif";
import top_m from "../../../public/image/menu/top-m.gif";


const Top = () => {
  return (
    <div className="top w-[100%] mob:h-[35px] des:h-[60px]">
      <img className="des:block mob:hidden w-[100%] h-[100%] object-cover" src={top} alt="" />
      <img className="mob:block  des:hidden w-[100%] h-[100%] object-cover" src={top_m} alt="" />
    </div>
  );
};

export default Top;
