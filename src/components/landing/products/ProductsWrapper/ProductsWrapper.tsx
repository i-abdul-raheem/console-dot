import { Layout } from "../../Layout/Layout";

import { Product2 } from "../Product2";
import { ProductsTop } from "../ProductsTop.tsx/ProductsTop";
import { Tech } from "@/assets";

export const ProductsWrapper = () => {
  return (
    <>
      <Layout>
        <ProductsTop sideImage={Tech} />
        <Product2 />
      </Layout>
    </>
  );
};
