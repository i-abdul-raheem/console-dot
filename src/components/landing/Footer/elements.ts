import { styled, Box, Typography } from "@mui/material";

export const FooterSection = styled(Box)({
  display: "flex",
  backgroundColor: "whitesmoke",
  width: "100%",
  padding: "70px 0",
  alignItems: "flex-start",
  justifyContent: "center",
});

export const ReviewSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "400px",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginBottom:'20px'
});

export const NavSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "400px",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginBottom:'20px'
  
});

export const ContactSection = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "400px",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  marginBottom:'20px'
});

export const FooterHeading=styled(Typography)({
    fontWeight:'bold',
    marginBottom:'5px'

})
export const NavItemList=styled(Box)({
    
})

export const NavItem=styled(Box)({
    padding:'0 10px'
})

export const ContactInfo=styled(Box)({
   

})

export const AddressInfo=styled(Box)({
    marginBottom:'10px'

   

})

export const WhatsAppInfo=styled(Box)({
    marginBottom:'10px'

})

export const EmailInfo=styled(Box)({
    margin:'10px'

})

export const FooterBottom=styled(Box)({
    width:'100%',
    height:66,
    backgroundColor:'red',
    display:'flex',
    alignItems:'center',
    justifyContent:'flex-start',
    columnGap:"500px"
})

export const SocialMediaIconsList=styled(Box)({
    display:"flex",
    flexDirection:"column",
    margin:"0 20px"
})

export const FooterBottomCopyRight=styled(Typography)({
    margin:'0 50px',
    fontFamily:'sans-serif'

})