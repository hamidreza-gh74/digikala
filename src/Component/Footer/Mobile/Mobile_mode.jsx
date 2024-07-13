import Call from "./Call";
import Download from "./Download";
import Up from "./Up";

import Accordion from "./Accordion_mobile";
import { useEffect, useState } from "react";
import More from "./More";
import { fetch_footer_accor } from "../../../Redux/Footer_accor/Footer_accor_Slice";
import { useDispatch, useSelector } from "react-redux";
const Mobile_mode = () => {
  const { data, loading, error } = useSelector((state) => state.footer_accor);
  console.log(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetch_footer_accor());
  }, []);

  const [selected, setSelect] = useState("");
  console.log(selected);
  return (
    <div className="w-[100%] flex justify-center items-center">
      <div className="w-[90%] h-[auto] des:hidden mob:flex flex-col justify-center items-center  mb-[100px]">
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
