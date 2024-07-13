import { configureStore } from "@reduxjs/toolkit";
import Slider_first_Slice from "./Slider_first/Slider_first_Slice";
import Slider_second_Slice from "./Slider_second/Slider_second_Slice";
import Digikala_Slice from "./Digikala/Digikala_Slice";
import Suggestion_Slice from "./Suggestion/Suggestion_Slice";

import Wonderfull_supermarket_Slice from "./wonderfull_supermarket/Wonderfull_supermarket_Slice";
import Picture_four_Slice from "./Picture_four/Picture_four_Slice";
import Classify_buy_Slice from "./Classify_buy/Classify_buy_Slice";
import Discount_Slice from "./Discount/Discount_Slice";
import Popular_brand_Slice from "./Popular_brand/Popular_brand_Slice";
import Picture_two_Slice from "./Picture_two/Picture_two_Slice";
import Digikala_blue_Slice from "./Digikala_blue/Digikala_blue_Slice";
import Bestceller_goods_Slice from "./Bestceller_goods/Bestceller_goods_Slice";

import Table_four_pic_Slice from "./Table_four_pic/Table_four_pic_Slice";
import Selection_product_for_discount_Slice from "./Selection_product_for_discount/Selection_product_for_discount_Slice";
import Magazine_Slice from "./Magazine/Magazine_Slice";
import Menu_Slice from "./Menu/Menu_Slice";
import Manage_product_Slice from "./Manage_product/Manage_product_Slice";
import Footer_Slice from "./Footer/Footer_Slice";
import Footer_accor_Slice from "./Footer_accor/Footer_accor_Slice";

const store = configureStore({
  reducer: {
    slider_first: Slider_first_Slice,
    slider_second: Slider_second_Slice,
    digikala: Digikala_Slice,
    suggestion: Suggestion_Slice,
    wonderfull_supermarket: Wonderfull_supermarket_Slice,
    picture_four: Picture_four_Slice,
    classify_buy: Classify_buy_Slice,
    discount: Discount_Slice,
    popular_brand: Popular_brand_Slice,
    picture_two: Picture_two_Slice,
    digikala_blue: Digikala_blue_Slice,
    bestceller_goods: Bestceller_goods_Slice,
    table_four_pic: Table_four_pic_Slice,
    selection_product_for_discount: Selection_product_for_discount_Slice,
    magazine: Magazine_Slice,
    menu: Menu_Slice,
    manage_product: Manage_product_Slice,
    footer: Footer_Slice,
    footer_accor: Footer_accor_Slice,
  },
});

export default store;
