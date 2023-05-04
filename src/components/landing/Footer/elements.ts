import { styled, Box, Typography , useTheme, useMediaQuery} from "@mui/material";

export const FooterSection = styled(Box)(({ theme}) => ({
  display: "flex",
  backgroundColor: "whitesmoke",
  width: "auto",
  padding: "70px 0",
  alignItems: "flex-start",
  justifyContent: "center",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    margin:"0 0 0 30px"

  },
}));

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
   display:"flex",
   flexDirection:'column',


})

export const AddressInfo=styled(Box)({
    marginBottom:'10px'

   

})

export const WhatsAppInfo=styled(Box)({
    marginBottom:'10px'

})

export const EmailInfo=styled(Box)({
    

})

export const FooterBottom=styled(Box)(({ theme}) =>({
    
    height:66,
    backgroundColor:'#696969',
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
  padding: '0 20px',
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    height: "auto",
    justifyContent: "flex-start",
    
  },
}));

export const SocialMediaIconsList=styled(Box)({
    display:"flex",
    flexDirection:"column",
    marginLeft:'30px'
    
})

export const FooterBottomCopyRight=styled(Typography)({
    marginLeft:'',
    fontFamily:'sans-serif'

})