
import { create_slice, fetch_data } from "../needs";

export const fetch_footer_accor= fetch_data(
  "/footer_accor/fetch",
  "http://localhost:1000/footer_accor"
);


const Footer_accor_Slice = create_slice(
  "footer_accor",
  fetch_footer_accor
);

export default Footer_accor_Slice.reducer;
