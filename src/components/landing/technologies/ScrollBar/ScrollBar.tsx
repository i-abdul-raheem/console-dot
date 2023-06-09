import { List, ListItem, ScrollBarContainer } from "./elements";

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
interface props {
  heading: string[];
}

export const ScrollBar = ({ heading }: props) => {

  return (
    <>
      <ScrollBarContainer>
        <List>
          {heading.map((head, index) => (
            <ListItem>
              <Link
                to={head}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={index}
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
