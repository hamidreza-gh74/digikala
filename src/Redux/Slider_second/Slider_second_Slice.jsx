import { create_slice, fetch_data } from "../needs";

export const fetch_slider_second = fetch_data(
  "/slider_second/fetch",
  "http://localhost:1000/slider_second"
);


const Slider_second_Slice = create_slice(
  "slider_second",
  fetch_slider_second
);

export default Slider_second_Slice.reducer;
