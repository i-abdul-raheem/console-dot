import { FormContainer, FormHeading, InputSection, StyledInput, StyledLabel } from "./elements"
import { StyledButton } from "./elements"



export const SubmitForm=()=>{
    return(
        <>
        <FormContainer>
          <FormHeading> Apply for this position</FormHeading>

          <InputSection>
            <StyledLabel htmlFor="">Full Name </StyledLabel>
            <StyledInput type="text" />
          </InputSection>
          <InputSection>
            <StyledLabel htmlFor="">Email </StyledLabel>
            <StyledInput type="text" />
          </InputSection>
          <InputSection>
            <StyledLabel htmlFor="">Phone </StyledLabel>
            <StyledInput type="text" />
          </InputSection>
          <InputSection>
            <StyledLabel htmlFor="">Experience Year & Months </StyledLabel>
            <StyledInput type="text" />
          </InputSection>
          <InputSection>
            <StyledLabel htmlFor="">Current Job Location </StyledLabel>
            <StyledInput type="text" />
          </InputSection>
          <InputSection>
            <StyledLabel htmlFor="">Notice Period </StyledLabel>
            <StyledInput type="text" />
          </InputSection>
          <InputSection>
            <StyledLabel htmlFor="">Upload CV/Resume </StyledLabel>
            <StyledInput type="file" />
            <span>Allowed Type(s): .pdf, .doc, .docx</span>
          </InputSection>
          <InputSection style={{display:"flex",marginBottom:"10px", justifyContent:"flex-start",alignItems:"flex-start", flexDirection:"row", columnGap:"10px"}}>
            <StyledInput type="checkbox"/>
            <span style={{fontSize:"15px"}}>
              By using this form you agree with the storage and handling of your
              data by this website.{" "}
            </span>
          </InputSection>
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <StyledButton>Submit</StyledButton>
          </div >

          
          </FormContainer>
        </>
    )
}