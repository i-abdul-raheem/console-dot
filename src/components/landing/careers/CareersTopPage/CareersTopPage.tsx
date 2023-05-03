import Image from "next/image";

import { MainLogo } from "@/assets";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
export const CareersTopPage = () => {
  return (
    <>
      
      <div style={{ display: "flex", padding: "70px", columnGap:'50px' }}>
        <div style={{ width: "100%" }}>
          <h1 style={{fontSize:'40px', marginBottom:'30px', lineHeight:'normal'}}>
            Plunge into your Vocational Excellence with ConsoleDot and bag
            Skills for a Lifetime
          </h1>
          <p style={{fontSize:'25px', marginBottom:'30px'}}>
            ConsoleDot lives through its people’s emotions & we never miss a
            beat of Life. Cater to the fortune 500 clients and radiate your
            tech-spark worldwide.
          </p>
          <button style={{backgroundColor:"rgb(23 , 96 , 128 )", border:'none',padding:'15px 30px', color:'white', fontSize:'15px'}}>SEE OPENING</button>
        </div>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
          }}
        >
          <Image src={MainLogo} alt="Logo" width={230} height={230} />
        </div>
      </div>
      
    </>
  );
};
