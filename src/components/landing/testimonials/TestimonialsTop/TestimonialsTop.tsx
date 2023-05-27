import { ProductsHeadingText } from "../../products/ProductsTop.tsx/elements";
import { useEffect } from "react";

export const TestimonialsTop = () => {
  useEffect(() => {
    const element = document.getElementById("__next");
    if (element) {
      element.style.width = "100%";
    }
  }, []);
  return (
    <>
      <div
        style={{
          height: "300px",
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px",
        }}
      >
        <ProductsHeadingText style={{ fontSize: "48px" }}>
          Action{" "}
          <span
            style={{ backgroundColor: "rgb(23 , 96 , 128 )", fontSize: "52px" }}
          >
            {" "}
            Speaks Louder
          </span>{" "}
          than Words
        </ProductsHeadingText>
        <ProductsHeadingText style={{ fontSize: "24px" }}>
          We believes that bringing real results and making outsourcing
          experience successful is a perfect way to get through the heart of
          customers.
        </ProductsHeadingText>
      </div>
    </>
  );
};
