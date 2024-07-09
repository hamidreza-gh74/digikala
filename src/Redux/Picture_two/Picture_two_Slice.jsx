import { create_slice, fetch_data } from "../needs";

export const fetch_picture_two = fetch_data(
  "/picture_two/fetch",
  "http://localhost:1000/picture_two"
);


const Picture_two_Slice = create_slice(
  "picture_two",
  fetch_picture_two
);

export default Picture_two_Slice.reducer;
