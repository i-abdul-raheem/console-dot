import { useEffect } from "react";
import { ProductsHeadingText } from "./elements";

export const ProductsTop = () => {
  
  return (
    <div
      style={{
        maxWidth:"100%",
        height: "300px",
        backgroundColor: "black",
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"32px"
      }}
    >
      <ProductsHeadingText style={{fontSize:"48px"}}>Products</ProductsHeadingText>
      <ProductsHeadingText style={{fontSize:"32px"}}>
        We Empower Businesses with our Revolutionary Products.
      </ProductsHeadingText>
    </div>
  );
};
