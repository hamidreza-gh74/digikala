import { create_slice, fetch_data } from "../needs";

export const fetch_slider_first = fetch_data(
  "/slider_first/fetch",
  "http://localhost:1000/story"
);


const Slider_first_Slice = create_slice(
  "slider_first",
  fetch_slider_first
);

export default Slider_first_Slice.reducer;
