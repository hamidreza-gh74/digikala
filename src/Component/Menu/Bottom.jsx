import Part_two from "./component/Part_two";
import Part_three from "./component/Part_three";
import Line from "./component/Line";
import Part_one from "./component/Part_one";
import Part_four from "./component/Part_four";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_menu } from "../../Redux/Menu/Menu_Slice";
import Mobile_bottom from "./component/Mobile_bottom";

const Bottom = () => {
  const { data, loading, error } = useSelector((state) => state.menu);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_menu());
  }, []);

  return (
    <>
      <div className="mob:hidden des:block w-[100%] des:h-[40px]">
        <nav className="w-[100%] h-[100%] px-[16px] flex justify-between border-b-[1px] border-solid border-[#c8c8c8] relative">
          <div className="right w-[82%] h-[100%]  flex">
            <div className="first w-fit h-[40px] flex items-center ">
              <Part_one data={data} />
              <Line />
            </div>

            <div className="second w-fit h-[40px] flex items-center ">
              {data?.parttwo?.map((item) => {
                return <Part_two key={item.id} item={item} />;
              })}

              <Line />
            </div>
            <div className="third w-[230px] h-[40px] flex">
              {data?.partthree?.map((item) => {
                return <Part_three item={item} key={item.id} />;
              })}
            </div>
          </div>

          <div className="left w-[18%] h-[100%] pb-[4px] flex justify-end ">
            <Part_four />
          </div>
        </nav>
      </div>

      <div className="mobile mob:block des:hidden w-[100%] mob:h-[60px] p-[8px]  ">
        <Mobile_bottom />
      </div>
    </>
  );
};

export default Bottom;
