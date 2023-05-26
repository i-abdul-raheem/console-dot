import { CareersWrapper, Header, Wrapper} from "@/components";
import { Footer } from "@/components/landing/Footer";
import { MobResWrap } from "@/components/landing/utils/utils";
import Head from "next/head";



const Index=()=> {
  return (
    <>
    <Wrapper>
      <MobResWrap>
     <CareersWrapper/>
     </MobResWrap>
     </Wrapper>
     </>
  )
}
export default Index;