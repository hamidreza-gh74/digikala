import { create_slice, fetch_data } from "../needs";

export const fetch_picture_four = fetch_data(
  "/picture_four/fetch",
  "http://localhost:1000/picture_four"
);


const Picture_four_Slice = create_slice(
  "picture_four",
  fetch_picture_four
);

export default Picture_four_Slice.reducer;
