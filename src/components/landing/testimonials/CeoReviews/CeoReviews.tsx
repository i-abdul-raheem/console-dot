import { PausedVideo } from "@/assets";
import Image from "next/image";

export const CeoReviews = () => {
  return (
    <>
      <div style={{ display: "flex", columnGap: "32px" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <Image
            src={PausedVideo}
            alt="video"
            style={{ width: "100%", height: "auto" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "black",
                borderRadius: "50%",
              }}
            ></div>
            <span>Reviewer Name</span>
          </div>
          <div style={{ padding: "24px" }}>
            <span style={{ textAlign: "center" }}>
              I was looking for a skilled IT organization to build custom
              software for my confectionery, and I found Bacancy, as they kind
              of check all those needed boxes. Bacancy has been able to do
              everything that I've asked them to do, and they have been doing a
              fantastic job since our collaboration. So I highly recommend
              Bacancy and the team of people. Yes, undoubtedly, give them a try
              without any doubt.
            </span>
          </div>
        </div>
        <div style={{ width: "100%", display:"flex", flexDirection:"column", rowGap:"20px" }}>
          <Image
            src={PausedVideo}
            alt="video"
            style={{ width: "100%", height: "auto" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "black",
                borderRadius: "50%",
              }}
            ></div>
            <span>Reviewer Name</span>
          </div>
          <div style={{ padding: "24px" }}>
            <span style={{ textAlign: "center" }}>
              I was looking for a skilled IT organization to build custom
              software for my confectionery, and I found Bacancy, as they kind
              of check all those needed boxes. Bacancy has been able to do
              everything that I've asked them to do, and they have been doing a
              fantastic job since our collaboration. So I highly recommend
              Bacancy and the team of people. Yes, undoubtedly, give them a try
              without any doubt.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
