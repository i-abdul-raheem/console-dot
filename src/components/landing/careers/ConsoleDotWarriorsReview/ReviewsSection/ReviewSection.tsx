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
    name: "- Rao Hassaan Mujtaba",
    image: Hassaan,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut voluptatum nihil dolorum deleniti fugit quia neque nemo modi ratione!"
  },
  {
    name: "- Haris",
    image: Hassaan,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut voluptatum nihil dolorum deleniti fugit quia neque nemo modi ratione!"
  },
  {
    name: "- Abdul Raheem",
    image: Hassaan,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut voluptatum nihil dolorum deleniti fugit quia neque nemo modi ratione!"
  },
  {
    name: "- Fahad",
    image: Hassaan,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut voluptatum nihil dolorum deleniti fugit quia neque nemo modi ratione!"
  },
  {
    name: "- Shuja",
    image: Hassaan,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aut voluptatum nihil dolorum deleniti fugit quia neque nemo modi ratione!"
  },
];
export const ReviewSection = () => {
    const [index, setIndex] = useState(0);
  
    const handleNext = () => {
      setIndex((index) => (index === Reviews.length - 1 ? 0 : index + 1));
    };
  
    const handlePrevious = () => {
      setIndex((index) => (index === 0 ? Reviews.length - 1 : index - 1));
    };
  
    const review = Reviews[index];
  
    return (
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
              <ParaSection onClick={handlePrevious}>
                <ReviewPara>{review.review}</ReviewPara>
              </ParaSection>
              <ImageSection onClick={handleNext}>
                <Image
                  src={review.image}
                  alt="Image"
                  style={{
                    borderRadius: "30px",
                    width: "auto",
                    maxHeight: "150px",
                  }}
                />
                <NameLabel><i>{review.name}</i></NameLabel>
              </ImageSection>
            </ReviewContentFlex>
          </ReviewContent>
          <ReviewSlidesButton>
            <ReviewButton onClick={handlePrevious}>
              <ArrowBackIosIcon style={{color:"rgb(23 , 96 , 128)"}} />
              Previous
            </ReviewButton>
            <ReviewButton onClick={handleNext}>
              Next
              <ArrowForwardIosIcon style={{color:"rgb(23 , 96 , 128)"}}/>
            </ReviewButton>
          </ReviewSlidesButton>
        </ReviewContainer>
      </>
    );
  };