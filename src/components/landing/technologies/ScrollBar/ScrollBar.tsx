import { Box } from "@mui/material";
import { ListItem, ScrollBarContainer } from "./elements";

import { Link } from "react-scroll";
interface props {
  heading: any[];
  stack: any;
}

export const ScrollBar = ({ heading, stack }: props) => {
  return (
    <>
      <Box sx={{ color: "white" }}>
        {Object.keys(stack).map((head, index) => (
          <ListItem key={index}>
            <Link
              to={head}
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
            >
              {head}
            </Link>
          </ListItem>
        ))}
      </Box>
    </>
  );
};
