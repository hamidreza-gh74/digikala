
import { create_slice, fetch_data } from "../needs";

export const fetch_table_four_pic= fetch_data(
  "/table_four_pic/fetch",
  "http://localhost:1000/table_four_pic"
);


const Table_four_pic_Slice = create_slice(
  "table_four_pic",
  fetch_table_four_pic
);

export default Table_four_pic_Slice.reducer;