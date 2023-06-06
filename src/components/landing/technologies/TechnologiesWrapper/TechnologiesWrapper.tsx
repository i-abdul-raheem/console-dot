import { Header } from "../../Header";
import { InquireSection } from "../../home";
import { MobResWrap } from "../../utils/utils";
import { Mobile } from "../Mobile";
import { ScrollBar } from "../ScrollBar";
import { ExploreTechnologies } from "../ExploreTechnologies";

import { WebTechs } from "../WebTechs";
import { ScrollingControl } from "./elements";

export const TechnologiesWrapper = () => {
  return (
    <>
      <ExploreTechnologies />
      {/* <WebTechs /> */}
      <Mobile />
    </>
  );
};
