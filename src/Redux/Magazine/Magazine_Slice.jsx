


import { create_slice, fetch_data } from "../needs";

export const fetch_magazine = fetch_data(
  "/magazine/fetch",
  "http://localhost:1000/magazine"
);


const Magazine_Slice = create_slice(
  "magazine",
  fetch_magazine
);

export default Magazine_Slice.reducer;