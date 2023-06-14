import { JobOpening } from "@/assets";
import MediaCard from "../../MediaCard/MediaCard";
import { Box, Container, Typography } from "@mui/material";
import {
  Body,
  ContainerPadding,
  HeadFont,
  Margin,
  Padding,
  SubFont,
} from "../../utils";
interface Props {
  image: any;
  heading: String;
  details: String;
}

export const WorkingAtConsoleDot = () => {
  const cards = [
    {
      image: JobOpening,
      heading: "Job Openings",
      details: `Find your dream job at the right place where you fit. There
                  are only two who believe in your dreams- we and you. We help
                  you transcend in your professional world, and you help us
                  achieve mutual goals`,
    },
    {
      image: JobOpening,
      heading: "Perks & Benefits",
      details: `When you work with ConsoleDot, it’s not only the salary that you get; you get a pool of benefits that grow you as an individual. Avail the leisure of 5-star at the comfort zone of your home and enjoy a dream workstation.`,
    },
    {
      image: JobOpening,
      heading: "Training & Development",
      details: `We believe in the constant upliftment of one’s skills. Learning is a life-long process, and we ensure that your growth isn’t stuck while you’re busy building your caree`,
    },
    {
      image: JobOpening,
      heading: "Interview Process",
      details: `ConsoleDot follows an uncluttered and unclouded interview process where a candidate never feels despondent. You get instant feedback after your interview, and we keep transparency in updating your selection.`,
    },
    {
      image: JobOpening,
      heading: "Our Culture",
      details: `Our unique work culture is a manifestation of the reviving souls of ConsoleDot. It is an environment built for you, by you. Dive in a workplace where you earn a professionally-rich environment and a culture that imbibes you.

      `,
    },
    {
      image: JobOpening,
      heading: "Meet Our Team",
      details: `As seven colors merge into the salient white, so do our heterogeneous mates affiliate in a union of like-mindedness. ConsoleDot is a collective force built by individual power-houses that contribute their acumen towards the greater good.`,
    },
  ];
  return (
    <Box sx={{ width: "100%", bgcolor: Body }}>
      <Container sx={{ padding: ContainerPadding }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{fontSize: HeadFont, color: "#226597" }}
          >
            Working @ ConsoleDot
          </Typography>
          <Typography sx={{ padding: Padding, fontSize: SubFont }}>
            Here is what ConsoleDot job looks like. Take a dive into the setup
            and realize what have you been missing until now in your career.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
         
          }}
        >
          {cards.map((i, index) => (
            <MediaCard
              key={index}
              image={i.image}
              title={i.heading}
              explanation={i.details}
              placeholder="explore"
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
