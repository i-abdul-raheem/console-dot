import { HomeWrapper } from "@/components/landing/home";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.getElementById("__next").style.width = "100%";
  })
  return (
    <>
     <HomeWrapper/>
     </>
  )
}
