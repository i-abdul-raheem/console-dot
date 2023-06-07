import { CareersWrapper, Header, Wrapper } from "@/components";
import { Footer } from "@/components/landing/Footer";
import { Layout } from "@/components/landing/Layout/Layout";
import { MobResWrap } from "@/components/landing/utils/utils";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Layout>
        <Wrapper>
          <CareersWrapper />
        </Wrapper>
      </Layout>
    </>
  );
};
export default Index;
