import { create_slice, fetch_data } from "../needs";

export const fetch_digikala_blue = fetch_data(
  "/digikala_blue/fetch",
  "http://localhost:1000/digikala_blue"
);


const Digikala_blue_Slice = create_slice(
  "digikala_blue",
  fetch_digikala_blue
);

export default Digikala_blue_Slice.reducer;
