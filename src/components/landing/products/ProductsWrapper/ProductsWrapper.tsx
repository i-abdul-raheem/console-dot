import { MobResWrap } from "../../utils/utils";
import { Product1 } from "../Product1";
import { Product2 } from "../Product2";
import { ProductsTop } from "../ProductsTop.tsx/ProductsTop";

export const ProductsWrapper = () => {
  return (
    <>
      <MobResWrap>
        <ProductsTop />
        <Product1 />
        <Product2 />
      </MobResWrap>
    </>
  );
};
