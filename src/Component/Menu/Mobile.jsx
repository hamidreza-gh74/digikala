import { useEffect } from "react";
import { fetch_menu } from "../../Redux/Menu/Menu_Slice";
import Menu_mob_four from "./component/Menu_mob_four";
import { useDispatch, useSelector } from "react-redux";

const Mobile = () => {

    const { data, loading, error } = useSelector((state) => state.menu);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetch_menu());
    }, []);
  return (
    <>
      <div className="mobile_menu des:hidden mob:flex  w-[100%] mob:h-[50px] bg-[white] fixed bottom-0 right-0 z-[1000]">
        {data?.menu_mob_four?.map((item) => {
          return <Menu_mob_four key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Mobile;
