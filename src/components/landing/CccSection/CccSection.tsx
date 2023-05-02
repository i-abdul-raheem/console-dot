import Box from '@mui/material/Box';
import {
  CardSection,
  CccContainer,
  SectionDescrip,
  SectionTitle,
  SectionTitleDescrip,
} from "./elements";

export const CccSection = () => {
  return (
    <>
      <CccContainer>
        <SectionTitleDescrip>
          <SectionTitle>Connect, Collaborate and Create</SectionTitle>
          <SectionDescrip>
            Partner with us to work with on-demand Agile product team. We are
            always committed to your growth.
          </SectionDescrip>
        </SectionTitleDescrip>
        <div style={{ backgroundColor:'whitesmoke' }}>
          <div style={{ display:'flex', marginBottom:'10px'}}>
            <div style={{width:'655.5px' , height:'300px' , margin:'10px 10px 0  0', backgroundColor:"white"}}></div>
            <div style={{width:'322.25px' , height:'300px' , margin:'10px 10px 0  0', backgroundColor:"white"}}></div>
            <div style={{width:'322.25px' , height:'300px' , margin:'10px 10px 0  0', backgroundColor:"white"}}></div>
          </div>
          <div style={{ display:'flex'}}>
            <div style={{width:'322.25px' , height:'300px' , margin:'0 10px 0  0', backgroundColor:"white"}}></div>
            <div style={{width:'322.25px' , height:'300px' , margin:'0 10px 0  0', backgroundColor:"white"}}></div>
            <div style={{width:'655.5px' , height:'300px' , margin:'0 10px 0  0', backgroundColor:"white"}}></div>
          </div>
        </div>
        <CardSection></CardSection>
      </CccContainer>
    </>
  );
};
