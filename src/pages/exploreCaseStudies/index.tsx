import { ExploreCaseStudies } from "@/components/landing/ExploreCaseStudies";
import { Layout } from "@/components/landing/Layout/Layout";
import { CaseStudyTop } from "@/components/landing/casestudy/CaseStudyTop/CaseStudyTop";
import { TechnologyHeroSection } from "@/components/landing/technologies/HeroSectionOfTechnology";

const Index = () => {
  const topImage =
    "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

  return (
    <>
      <Layout>
        <TechnologyHeroSection heroImage={topImage} />
        <ExploreCaseStudies />
      </Layout>
    </>
  );
};
export default Index;
