import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { CaseStudyWrapper } from "@/components";
import { CustomersDetail } from "@/components/landing/AllCustomers";
const Index = () => {
  const router = useRouter();
  const { techId } = router.query;
  return (
    <>
      <CustomersDetail />
    </>
  );
};
export default Index;
