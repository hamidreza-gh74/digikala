
import Center_des_right from "./component/Center_des_right";
import Center_des_left from "./component/Center_des_left";
import Center_mob_right from "./component/Center_mob_right";
import Center_mob_left from "./component/Center_mob_left";

import { useEffect, useState } from "react";
import { fetch_menu } from "../../Redux/Menu/Menu_Slice";
import { useDispatch, useSelector } from "react-redux";

const Center = () => {
  const { data, loading, error } = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_menu());
  }, []);
  const [click, setclick] = useState(false);
  
  return (
    <>
      <div className=" desktop w-[100%] des:h-[68px] py-[12px] px-[16px] mob:hidden des:flex justify-between ">
        <Center_des_right />
        <Center_des_left />
      </div>

      <div
        className={`mobile  ${
          click ? "hidden" : "mob:flex"
        }  mob:justify-between mob:items-center  des:hidden mob:h-[44px] w-[100%] pt-[8px] pl-[8px]`}
      >
        <Center_mob_right setclick={setclick} click={click} />
        <Center_mob_left />
      </div>


    </>
  );
};

export default Center;
