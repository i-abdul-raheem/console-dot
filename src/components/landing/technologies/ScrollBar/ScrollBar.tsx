import { List, ListItem, ScrollBarContainer } from "./elements";

import { Link } from "react-scroll";
interface props {
  heading: string[];
}

export const ScrollBar = ({ heading }: props) => {
  return (
    <>
      <ScrollBarContainer>
        <List>
          {heading.map((head, index) => (
            <ListItem key={index}>
              <Link
                to={head}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                {head}
              </Link>
            </ListItem>
          ))}
        </List>
      </ScrollBarContainer>
    </>
  );
};
