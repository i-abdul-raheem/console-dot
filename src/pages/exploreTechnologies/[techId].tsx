import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { Mobile } from "@/components";
const Index = () => {
  const router = useRouter();
  const { techId } = router.query;
  return (
    <>
      <Mobile />
    </>
  );
};
export default Index;
