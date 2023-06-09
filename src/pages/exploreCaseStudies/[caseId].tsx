import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { CaseStudyWrapper } from "@/components";
const Index = () => {
  const router = useRouter();
  const { techId } = router.query;
  return (
    <>
      <CaseStudyWrapper />
    </>
  );
};
export default Index;
