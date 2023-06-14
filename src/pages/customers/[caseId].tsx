import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { CaseStudyWrapper } from "@/components";
import { AllCustomers } from "@/components/landing/AllCustomers";
const Index = () => {
  const router = useRouter();
  const { techId } = router.query;
  return (
    <>
      <AllCustomers />
    </>
  );
};
export default Index;
