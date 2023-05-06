import Image from "next/image";
import { SeeOpeningTopImage } from "@/assets";
export const JobsOpeningTop = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          padding: "70px",
          columnGap: "100px",
          backgroundColor: "rgb(23 , 96 , 128, 0.3 )",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >
          <h1 style={{ fontSize: "60px" }}>
            Kick-start Your Journey with ConsoleDot
          </h1>
          <p style={{ fontSize: "20px" }}>
            Open Doors To New Opportunities In Your Career, We are looking for
            enthusiasts who would welcome change with both their arms wide open.
            And that’s how we along with you will bring a transformation in the
            world. Find out the roles that are we are currently open for:
          </p>
        </div>

        <div style={{ width: "100%" }}>
          <Image
            src={SeeOpeningTopImage}
            alt="Image"
            width={451}
            height={473}
          />
        </div>
      </div>
    </>
  );
};
