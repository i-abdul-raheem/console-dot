import {
  FormContainer,
  FormHeading,
  InputSection,
  StyledInput,
  StyledLabel,
} from "./elements";
import FormData from "form-data";
import { Container } from "@mui/material";
import { StyledButton } from "./elements";
import {
  ContainerPadding,
  Dark,
  H1,
  Primary,
} from "@/components/landing/utils";
import { useState } from "react";
import { submitJobApplication } from "@/apis/submitForm";
import axios from "axios";
import { BASE_URL } from "@/apis/config";
import { useRouter } from "next/router";

interface valuesOfForm {
  name: string;
  email: string;
  phone: string;
  resumeId: string;
}

export const SubmitForm = () => {
  const [formValues, setFormValues] = useState<valuesOfForm>({
    name: "",
    email: "",
    phone: "",
    resumeId: "",
  });
  const router = useRouter();
  const id = router.query;

  const [selectedFile, setSelectedFile] = useState<any>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file);
  };
  const handleclick = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("myFile", selectedFile);
    axios.post(`${BASE_URL}/file`, formData).then((image) => {
      const resume = image?.data?.data?._id;
      const body = {
        ...formValues,
        cv_ref: resume,
        job_ref: id?.job_id,
      };
      submitJobApplication(body);
    });
  };

  return (
    <>
      <FormContainer>
        <Container sx={{ padding: ContainerPadding }}>
          <FormHeading>
            <H1
              variant="h1"
              sx={{
                color: Primary,
                textAlign: "center",
              }}
            >
              Apply for this position
            </H1>
          </FormHeading>

          <InputSection>
            <StyledLabel htmlFor="name">Full Name</StyledLabel>
            <StyledInput
              type="text"
              value={formValues?.name}
              onChange={(e:any) =>
                setFormValues({ ...formValues, name: e.target.value })
              }
            />
          </InputSection>
          <InputSection>
            <StyledLabel htmlFor="email">Email </StyledLabel>
            <StyledInput
              type="text"
              value={formValues?.email}
              onChange={(e:any) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
            />
          </InputSection>
          <InputSection>
            <StyledLabel htmlFor="phone">Phone </StyledLabel>
            <StyledInput
              type="text"
              value={formValues?.phone}
              onChange={(e:any) =>
                setFormValues({ ...formValues, phone: e.target.value })
              }
            />
          </InputSection>
          <InputSection>
            <StyledLabel htmlFor="">Upload CV/Resume </StyledLabel>
            <StyledInput type="file" onChange={handleFileChange} />
            <span>Allowed Type(s): .pdf, .doc, .docx</span>
          </InputSection>
          <InputSection
            style={{
              display: "flex",
              marginBottom: "10px",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "row",
              columnGap: "10px",
            }}
          >
            <StyledInput type="checkbox" />
            <span style={{ fontSize: "15px" }}>
              By using this form you agree with the storage and handling of your
              data by this website.{" "}
            </span>
          </InputSection>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyledButton
              sx={{
                marginTop: "10px",
                color: "white",
                backgroundColor: Primary,
                "&:hover": {
                  backgroundColor: Dark,
                },
              }}
              onClick={handleclick}
            >
              Submit
            </StyledButton>
          </div>
        </Container>
      </FormContainer>
    </>
  );
};
