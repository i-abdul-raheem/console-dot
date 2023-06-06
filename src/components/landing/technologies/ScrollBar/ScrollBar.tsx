import { List, ListItem, ScrollBarContainer } from "./elements";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export const ScrollBar = () => {
  return (
    <>
      <ScrollBarContainer>
        <List>
          <ListItem>
            <Link
              to="Frontend"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              FrontEnd
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="Backend"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Backend
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="javaScript"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Javascript
            </Link>
          </ListItem>
          <ListItem>
            <Link
              to="javaScript"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Javascript
            </Link>
          </ListItem>

          <ListItem>
            <Link>Data Analytics & Data Science</Link>{" "}
          </ListItem>
          <ListItem>
            <Link>NoSQL DB</Link>{" "}
          </ListItem>
          <ListItem>
            <Link>Big Data</Link>{" "}
          </ListItem>
          <ListItem>
            <Link>Data Base</Link>{" "}
          </ListItem>
          <ListItem>
            <Link>Cloud</Link>{" "}
          </ListItem>
          <ListItem>
            <Link>SalesForce</Link>{" "}
          </ListItem>
        </List>
      </ScrollBarContainer>
    </>
  );
};
