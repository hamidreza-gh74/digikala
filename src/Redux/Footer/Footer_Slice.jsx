import { create_slice, fetch_data } from "../needs";

export const fetch_footer= fetch_data(
  "/footer/fetch",
  "http://localhost:1000/footer"
);


const Footer_Slice = create_slice(
  "footer",
  fetch_footer
);

export default Footer_Slice.reducer;
