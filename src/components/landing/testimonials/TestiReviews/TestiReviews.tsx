import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import VerifiedIcon from "@mui/icons-material/Verified";
import {
  CheckBtnDiv,
  PageTopHeading,
  ReviewCard,
  ReviewSlideContainer,
  ReviewText,
  ReviewerDesig,
  StarsLineSec,
  TestiCardSection,
  TestiReviewTopHeading,
  TotalRevLine,
  VerifiyRevDiv,
} from "./elements";
export const TestiReviews = () => {
  return (
    <>
      <TestiReviewTopHeading>
        <PageTopHeading>
          It’s all about people and process. Having the right people execute
          time tested processes is a sure shot way to results.
        </PageTopHeading>
      </TestiReviewTopHeading>
      <div style={{paddingBottom:'64px'}}>
        <TotalRevLine>
          <Link href="#" style={{ textDecoration: "none", color: "black" }}>
            ConsoleDot Reviews
          </Link>
          <StarsLineSec>
            <ReviewStarsLine />
            <Link href="#">
              <i>43 REVIEWS</i>
            </Link>
          </StarsLineSec>
        </TotalRevLine>

        <ReviewSlideContainer>
          <ArrowBackIosIcon />
          <TestiCardSection>
            {/* Review Card start here */}
            <ReviewCard>
              <ReviewStarsLine />
              <ReviewText>
                "They have the ability to complete a project quickly and
                efficiently"
              </ReviewText>
              <ReviewerDesig>
                Controller, Genesis Machine and Fabrication Inc
              </ReviewerDesig>

              <VerifiyRevDiv
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <VerifiedIcon />
                <span>Verified Review</span>
              </VerifiyRevDiv>
              <CheckBtnDiv
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button style={{ width: "30%" }}>Check</button>
              </CheckBtnDiv>
            </ReviewCard>
            {/* Review Card ends here */}

            {/* Just for test later we will automate it */}
            <ReviewCard>
              <ReviewStarsLine />
              <ReviewText>
                "They have the ability to complete a project quickly and
                efficiently"
              </ReviewText>
              <ReviewerDesig>
                Controller, Genesis Machine and Fabrication Inc
              </ReviewerDesig>

              <VerifiyRevDiv>
                <VerifiedIcon />
                <span>Verified Review</span>
              </VerifiyRevDiv>
              <CheckBtnDiv>
                <button style={{ width: "30%" }}>Check</button>
              </CheckBtnDiv>
            </ReviewCard>
            <div
              style={{
                display: "flex",
                width: "250px",
                flexDirection: "column",
                height: "300px",
                rowGap: "20px",
                border: "1px solid #ddd",
                padding: "10px",
                backgroundColor: "whitesmoke",
              }}
            >
              <ReviewStarsLine />
              <span>
                "They have the ability to complete a project quickly and
                efficiently"
              </span>
              <span>Controller, Genesis Machine and Fabrication Inc</span>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <VerifiedIcon />
                <span>Verified Review</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button style={{ width: "30%" }}>Check</button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "250px",
                flexDirection: "column",
                height: "300px",
                rowGap: "20px",
                border: "1px solid #ddd",
                padding: "10px",
                backgroundColor: "whitesmoke",
              }}
            >
              <ReviewStarsLine />
              <span>
                "They have the ability to complete a project quickly and
                efficiently"
              </span>
              <span>Controller, Genesis Machine and Fabrication Inc</span>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "10px",
                }}
              >
                <VerifiedIcon />
                <span>Verified Review</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <button style={{ width: "30%" }}>Check</button>
              </div>
            </div>
            {/* Just for test later we will automate it */}
          </TestiCardSection>
          <ArrowForwardIosIcon />
        </ReviewSlideContainer>
      </div>
    </>
  );
};

const ReviewStarsLine = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "10px",
        }}
      >
        <span>4.5</span>
        <StarIcon style={{ color: "rgb(23 , 96 , 128 )" }} />
        <StarIcon style={{ color: "rgb(23 , 96 , 128 )" }} />
        <StarIcon style={{ color: "rgb(23 , 96 , 128 )" }} />
        <StarIcon style={{ color: "rgb(23 , 96 , 128 )" }} />
        <StarHalfIcon style={{ color: "rgb(23 , 96 , 128 )" }} />
      </div>
    </>
  );
};
