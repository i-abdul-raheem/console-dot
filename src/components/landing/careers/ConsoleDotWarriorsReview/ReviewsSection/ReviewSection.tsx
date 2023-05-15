import Image from "next/image";
import { Fb, Hassaan, ReviewIcon } from "@/assets";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  ImageSection,
  NameLabel,
  ParaSection,
  ReviewButton,
  ReviewContainer,
  ReviewContent,
  ReviewContentFlex,
  ReviewPara,
  ReviewSlidesButton,
} from "./elements";
export const Reviews = [
  {
    name: "Hassaan Mujtaba",
    image: Hassaan,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut voluptatum nihil dolorum deleniti fugit quia neque nemo modi ratione!",
  },
  {
    name: "Hassaan Mujtaba",
    image: Hassaan,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut voluptatum nihil dolorum deleniti fugit quia neque nemo modi ratione!",
  },
  {
    name: "Hassaan Mujtaba",
    image: Hassaan,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut voluptatum nihil dolorum deleniti fugit quia neque nemo modi ratione!",
  },
  {
    name: "Hassaan Mujtaba",
    image: Hassaan,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut voluptatum nihil dolorum deleniti fugit quia neque nemo modi ratione!",
  },
  {
    name: "Hassaan Mujtaba",
    image: Hassaan,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut voluptatum nihil dolorum deleniti fugit quia neque nemo modi ratione!",
  },
];
export const ReviewSection = () => {
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === Reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? Reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {Reviews.map((item, index) => (
        <>
          <ReviewContainer>
            <Image
              src={ReviewIcon}
              alt="Image"
              width={80}
              height={80}
              style={{
                position: "absolute",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "flex-start",
                padding: "20px",
              }}
            />
            <ReviewContent>
              <ReviewContentFlex>
                <ParaSection>
                  <ReviewPara>{item.review}</ReviewPara>
                </ParaSection>
                <ImageSection>
                  <Image
                    src={item.image}
                    alt="Image"
                    style={{
                      borderRadius: "30px",
                      width: "auto",
                      height: "150px",
                    }}
                  />
                  <NameLabel>{item.name}</NameLabel>
                </ImageSection>
              </ReviewContentFlex>
            </ReviewContent>
            <ReviewSlidesButton>
              <ReviewButton
                sx={{ justifyContent: "center" }}
                onClick={handlePrevious}
              >
                <ArrowBackIosIcon style={{ color: "rgb(23 , 96 , 128 )" }} />
                Previous
              </ReviewButton>
              <ReviewButton
                sx={{ justifyContent: "center" }}
                onClick={handleNext}
              >
                Next
                <ArrowForwardIosIcon style={{ color: "rgb(23 , 96 , 128 )" }} />
              </ReviewButton>
            </ReviewSlidesButton>
          </ReviewContainer>
        </>
      ))}
    </>
  );
};
