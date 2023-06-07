import { Box, Container, Typography, Avatar } from "@mui/material";

interface props {
  title: string;
  image: string;
  member: number;
  time: string;
}

export const TechnologyCard = ({ title, image, member , time}: props) => {
  return (
    <>
      <Box
        sx={{
          width: "200px",
          height: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          marginRight: "10px",
          marginBottom: "10px",
          border: "1px solid gray",
          borderRadius: "5px",
          backgroundColor: "#226597",
          transition: "box-shadow 0.3s",
          cursor: "pointer",

          "&:hover": {
            boxShadow: "0px 3px 3px 2px rgba(0, 0, 0, 0.5)",
            backgroundColor: "#87c0cd",
          },
        }}
      >
        <Avatar sx={{ width: "70px", height: "70px", borderRadius: "0" }}>
          <img
            src={image}
            alt={`${title} image`}
            style={{
              width: "100%",
              height: "100%",
              "&:hover": { transfrom: "scale(1.2)" },
            }}
          />
        </Avatar>
        <Box>
          <Typography
            sx={{ paddingTop: "9px", color: "white", fontWeight: "bold" }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              paddingTop: "5px",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {member}
          </Typography>
          <Typography
            sx={{
              paddingTop: "5px",
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {time}
          </Typography>
        </Box>
      </Box>
    </>
  );
};
