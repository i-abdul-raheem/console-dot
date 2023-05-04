import Image from "next/image";
import { DescriptionSection, TitleSection, TitleSectionTop } from "./elements";
import { Fb, Hassaan, ReviewIcon } from "@/assets";

export const ConsoleDotWarriorsReview = () => {
  return (
    <>
      <TitleSectionTop>
        Let’s hear it from the ConsoleDot Warriors….
      </TitleSectionTop>
      <TitleSection>Our People Our Brand</TitleSection>
      <DescriptionSection>
        It’s not we but our people who affirm our unique work culture. Giving
        all ears to your unsaid needs, we ensure to avail you of a fertile work
        environment. Here’s what the ConsoleDot Warriors have to say about our
        culture and how they feel being a part of it.
      </DescriptionSection>

      <div style={{padding:'70px' }}>
        <Image src={ReviewIcon} alt="Image" width={80} height={80} style={{marginTop:'20px'}}/>
        <div style={{padding:"100px" , backgroundColor:"rgb(23 , 96 , 128, 0.5 )", borderRadius:'0 100px 0 100px'}}>
          <div style={{display:"flex" , columnGap:'30px'}}>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates aut voluptatum nihil dolorum deleniti fugit quia
                neque nemo modi ratione!
              </p>
            </div>
            <div>
            <Image src={Hassaan} alt="Image" style={{borderRadius:"30px",width:"auto",height:'150px'}} />
            <label>Hassaan Mujtaba</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
