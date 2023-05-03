import Image from "next/image";
import { Event, Life } from "@/assets";
import {
  ComponentContainer,
  ImageSection,
  Section1,
  SectionButton,
  SectionDescription,
  SectionTitle,
  StyledButton,
} from "./elements";

export const EventsLifeEmp = () => {
  return (
    <>
      <ComponentContainer>
        <Section1>
          <ImageSection>
            <Image src={Event} alt="Event Image" width={389} height={222} />
          </ImageSection>

          <SectionTitle>
            <h2 >Events</h2>
          </SectionTitle>
          <SectionDescription>
            Whether it is birthdays, culture, festivals, or seasons- we
            celebrate every occasion with enthusiasm and joy.
          </SectionDescription>
          <SectionButton>
            <StyledButton>
              VIEW MORE
              </StyledButton>
            </SectionButton>
        </Section1>
        <Section1>
          <ImageSection>
            <Image src={Life} alt="Event Image" width={389} height={222} />
          </ImageSection>

          <SectionTitle>
            <h2 >Life@ConsoleDot</h2>
          </SectionTitle>
          <SectionDescription>
            With a perfect mix of life and work, our employees understand the
            responsibility and resonate the same.
          </SectionDescription>
          <SectionButton>
            <StyledButton>
              VIEW MORE
              </StyledButton>
            </SectionButton>
        </Section1>
        <Section1>
          <ImageSection>
            <Image src={Life} alt="Event Image" width={389} height={222} />
          </ImageSection>

          <SectionTitle>
            <h2>Employee Feedback</h2>
          </SectionTitle>
          <SectionDescription>
            It’s not we but you who affirm our unique work culture. All ears to
            your unsaid needs and ensure to avail you a fertile work
            environment.
          </SectionDescription>
          <SectionButton>
            <StyledButton>
              VIEW MORE
              </StyledButton>
            </SectionButton>
        </Section1>
      </ComponentContainer>
    </>
  );
};
