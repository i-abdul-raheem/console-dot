import { Layout } from "../../Layout/Layout";
import { Product1 } from "../Product1";
import { Product2 } from "../Product2";
import { ProductsTop } from "../ProductsTop.tsx/ProductsTop";

export const ProductsWrapper = () => {
  return (
    <>
      <Layout>
        <ProductsTop sideImage="url('https://images.unsplash.com/photo-1616857002717-d337600d15ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')" />
        <Product2 />
      </Layout>
    </>
  );
};
