import { TextField, Button ,TextareaAutosize} from "@mui/material";
import { StyledButton } from "./elements";

export const InquireSection = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "whitesmoke",
          padding: "50px",
        }}
      >
        <div
          style={{
            display: "block",
            width: "25%",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <h1>How Can We Help You? </h1>
        </div>
        <div style={{ width: "100%" }}>
          <div style={{ display: "flex", width: "100%", columnGap: "30px" ,marginBottom:'20px'}}>
            <div className="name" style={{ width: "100%" }}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Your Name"
                variant="outlined"
              />
            </div>
            <div className="email" style={{ width: "100%" }}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Email Address"
                variant="outlined"
              />
            </div>
            <div className="phone_num" style={{ width: "100%" }}>
              <TextField
                id="outlined-basic"
                style={{ width: "100%" }}
                label="Phone Number"
                variant="outlined"
              />
            </div>
          </div>

          <div className="message" style={{marginBottom:'20px'}}>
            <TextareaAutosize
              id="outlined-basic"
              placeholder="Your Message"
              minRows={7} 
              
              style={{width:'100%',fontSize:'20px'}}
            />
          </div>
          <div style={{display:"flex",justifyContent:"flex-end"}}>
            <StyledButton >Inquire Now</StyledButton>
          </div>
        </div>
      </div>
      ;
    </>
  );
};
