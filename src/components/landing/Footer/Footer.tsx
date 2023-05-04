import BusinessIcon from "@mui/icons-material/Business";

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import {
  AddressInfo,
  ContactInfo,
  ContactSection,
  EmailInfo,
  FooterBottom,
  FooterHeading,
  FooterSection,
  NavItem,
  NavItemList,
  NavSection,
  ReviewSection,
  WhatsAppInfo,
  SocialMediaIconsList,
  FooterBottomCopyRight,
} from "./elements";
export const Footer = () => {
  return (
    <>
      <FooterSection>
        <ReviewSection>
          <FooterHeading>About ConsoleDot Review</FooterHeading>
          <span style={{ padding: "0 20px" }}>
            We strive to get to the heart of what CPA candidates really need to
            know to sit for the exam with confidence - and earn their CPA
          </span>
        </ReviewSection>
        <NavSection>
          <FooterHeading>Navigation</FooterHeading>
          <NavItemList>
            <NavItem>About</NavItem>
            <NavItem>Contact us</NavItem>
            <NavItem>AdaptaPass</NavItem>
            <NavItem>Our Partners</NavItem>
            <NavItem>Privacy Policycy</NavItem>
            <NavItem>Reviews</NavItem>
          </NavItemList>
        </NavSection>
        <ContactSection>
          <FooterHeading>Get In Touch</FooterHeading>
          <ContactInfo>
            <BusinessIcon />

            <AddressInfo>
              <span>Address of our office will be there </span>
            </AddressInfo>
            <WhatsAppInfo>
              <WhatsAppIcon />
              <span>555-5555-555</span>
            </WhatsAppInfo>

            <EmailInfo>
              <EmailIcon />
              <span>ConsoleDot@gmail.com</span>
            </EmailInfo>
          </ContactInfo>
        </ContactSection>
      </FooterSection>
      <FooterBottom>
        <FooterBottomCopyRight>
          Copyright © 2023 Yaeger CPA Review
        </FooterBottomCopyRight>
        <div style={{ display: "flex" }}>
          <SocialMediaIconsList>
            <FacebookIcon />
          </SocialMediaIconsList>
          <SocialMediaIconsList>
            <WhatsAppIcon />
          </SocialMediaIconsList>
          <SocialMediaIconsList>
            <EmailIcon />
          </SocialMediaIconsList>
          <SocialMediaIconsList>
            <LinkedInIcon />
          </SocialMediaIconsList>
          <SocialMediaIconsList>
            <TwitterIcon />
          </SocialMediaIconsList>
          <SocialMediaIconsList>
            <YouTubeIcon />
          </SocialMediaIconsList>
          <SocialMediaIconsList>
            <InstagramIcon />
          </SocialMediaIconsList>
        </div>
      </FooterBottom>
    </>
  );
};
