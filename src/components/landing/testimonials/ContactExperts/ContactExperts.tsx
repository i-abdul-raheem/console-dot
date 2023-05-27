import { TextTop } from "./elements";

export const ContactExperts = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(23 , 96 , 128 )",
          height: "300px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ padding: "32px" }}>
          <TextTop>
            Working with Bacancy means your need for a UI/UX expert, full stack
            developer and infrastructure expert will be met at one place.
          </TextTop>
        </div>
        <div>
          <button
            style={{
              fontSize: "20px",
              color: "rgb(23 , 96 , 128 )",
              padding: "10px",
            }}
          >
            Contact With Our Experts
          </button>
        </div>
      </div>
    </>
  );
};
