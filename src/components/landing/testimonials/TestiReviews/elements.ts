import { Box, styled, Typography } from "@mui/material";

export const TestiReviewTopHeading = styled(Box)({
  padding: "64px 0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const PageTopHeading = styled(Typography)({
  wordWrap: "break-word",
  overflowWrap: "break-word",
  lineHeight: 1.3,
  fontSize: "32px",
  textAlign: "center",
});

export const TotalRevLine = styled(Box)({
  paddingBottom: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "10px",
});

export const StarsLineSec = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: "10px",
});


export const ReviewSlideContainer=styled(Box)({
    display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
})

export const TestiCardSection=styled(Box)({
    display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap:"20px"
})

export const ReviewCard=styled(Box)({
    display: "flex",
                width: "250px",
                flexDirection:"column",
                height:"300px",
                rowGap:"20px",
                border: "1px solid #ddd",
                padding:"10px",
                backgroundColor:'whitesmoke'
})

export const ReviewText=styled(Typography)({

})

export const ReviewerDesig=styled(Typography)({

})

export const VerifiyRevDiv=styled(Box)({
    display:"flex", alignItems:"center", columnGap:"10px"
})


export const CheckBtnDiv=styled(Box)({
    display:"flex", alignItems:"center", justifyContent:"center"
})

