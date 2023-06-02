import Image from "next/image";
import {
  LiWithIcon,
  Product1Container,
  TextDescrip,
  TextHeading,
} from "./elements";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import { AcCharger } from "@/assets";
import { StyledButton } from "../../Header/elements";
import { Container } from "../../home/DigitalTransformation/elements";
export const Product1 = () => {
  return (
    <>
      <Container>
        {/* <div style={{ width: "100%" }}>
          <TextHeading
            style={{
              fontSize: "36px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            AC Charge Controller
          </TextHeading>
          <TextDescrip
            style={{
              paddingBottom: "20px",
              paddingLeft: "32px",
              textAlign: "center",
            }}
          >
            With the green EV revolution outburst, consumers have become even
            more conscious towards the environment and invested in electric
            vehicles. However, the concern for recharging their EVs hasn’t
            diminished yet. Bacancy brings in a top-notch solution to your
            consumers’ troubles.
          </TextDescrip>

          <TextDescrip style={{ fontWeight: "bold", paddingLeft: "24px" }}>
            Types of BMS
          </TextDescrip>

          <LiWithIcon>
            <NotListedLocationIcon />
            <TextDescrip>Types of AC Controllers</TextDescrip>
          </LiWithIcon>
          <LiWithIcon>
            <NotListedLocationIcon />
            <TextDescrip>AC Single Gun Type 2 (7.4Kw Controller)</TextDescrip>
          </LiWithIcon>
          <LiWithIcon>
            <NotListedLocationIcon />
            <TextDescrip>AC Dual Gun Type 2 Controller</TextDescrip>
          </LiWithIcon>
          <LiWithIcon>
            <NotListedLocationIcon />
            <TextDescrip>AC Single Gun Type 2 (22KW)</TextDescrip>
          </LiWithIcon>
          <LiWithIcon>
            <NotListedLocationIcon />
            <TextDescrip>Bharat AC001 Controller</TextDescrip>
          </LiWithIcon>

          <StyledButton>Explore More</StyledButton>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={AcCharger}
            alt="Ac Charger"
            style={{ maxWidth: "100%", height: "" }}
          />
        </div> */}
      </Container>
    </>
  );
};
