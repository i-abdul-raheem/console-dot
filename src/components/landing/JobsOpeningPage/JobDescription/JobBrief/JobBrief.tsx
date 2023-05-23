import { ButtonContainer, StyledButton } from "./elements"
import { JobBriefContainer, ListItems, PageTitle, StyledText } from "./elements"



export const JobBrief=()=>{
    return(
        <>
        <JobBriefContainer>
        <div style={{borderBottom:"1px solid #ddd",paddingBottom:"20px"}}>
          <PageTitle> Laravel Developer</PageTitle>
          <StyledText style={{fontWeight:"bold" , paddingBottom:"10px"}}>Job Brief:</StyledText>
          <StyledText>
            Bacancy is an Agile-based offshore web Development Company providing
            excellent service and solutions in India, the USA, Australia, and
            Canada. We have currently got the strength of Employees. We
            specialize in software product development and have successfully
            executed numerous projects in software development, Web Designing &
            Development, Mobile Technologies, Microsoft Technologies and
            open-source as well for Internet Marketing.
            </StyledText>
          <StyledText><b>Role:</b>Developer</StyledText>
          <StyledText><b>Experience:</b>3 to 5 Years</StyledText>
          <StyledText><b>Position Open:</b>1</StyledText>
          <StyledText><b>Job Location:</b>Work From Office</StyledText>
          <StyledText><b>Work from Home Available:</b>NO</StyledText>
          <StyledText><b>Salary:</b>Not a constraint for the right candidate</StyledText>
          </div>
        
        <div style={{borderBottom:"1px solid #ddd"}}>
          <StyledText style={{fontWeight:"bold" , paddingTop:"10px"}}>Roles and Responsibility:</StyledText>
          <ul style={{paddingBottom:"20px"}}>
            <ListItems>Write clean, well designed code</ListItems>
            <ListItems>Produce detailed specifications</ListItems>
            <ListItems>Troubleshoot, test and maintain the core product software and databases to ensure strong optimization and functionality</ListItems>
            <ListItems>Contribute in all phases of the development lifecycle</ListItems>
            <ListItems>Follow industry best practices</ListItems>
            <ListItems>Develop and deploy new features to facilitate related procedures and tools if necessary</ListItems>
            <ListItems>Client Interaction and communication in English will be added advantage.</ListItems>
          </ul>
        </div>

        <div style={{borderBottom:"1px solid #ddd"}}>
          <StyledText style={{fontWeight:"bold" ,paddingTop:"10px" }}>Skill Requirement:</StyledText>
          <ul style={{paddingBottom:"20px"}}>
            <ListItems>Strong knowledge of Linux system with command line.</ListItems>
            <ListItems>Strong knowledge of PHP and core PHP web frameworks such as Laravel.</ListItems>
            <ListItems>Should have knowledge of object oriented.</ListItems>
            <ListItems>Understanding the fully synchronous behavior of PHP</ListItems>
            <ListItems>Understanding of MVC design patterns.</ListItems>
            <ListItems>Good to have knowledge of Advanced laravel</ListItems>
            <ListItems>Good to have knowledge of Vue/React.</ListItems>
          </ul>
        </div>

        <div style={{borderBottom:"1px solid #ddd", padding:"24px 0"}}>
           <StyledText><b>Qualification :</b> B.Tech/B.E/MCA </StyledText>

        </div>
        <div style={{borderBottom:"1px solid #ddd", padding:"24px 0"}}>
           <StyledText><b>Office Timings:</b> 10.00 AM to 7.00 PM</StyledText>

        </div>

        <div style={{borderBottom:"1px solid #ddd"}}>
          <StyledText style={{fontWeight:"bold" , paddingTop:"10px"}}>Perks and Benefits:</StyledText>
          <ul style={{paddingBottom:"20px"}}>
            <ListItems>5-Days a week</ListItems>
            <ListItems>Health Insurance</ListItems>
            <ListItems>(28 Leaves a year) 18 paid leave & 10 public holiday</ListItems>
            <ListItems>Recruitment referral bonus policy</ListItems>
            <ListItems>Maternity paternity leave benefit</ListItems>
            <ListItems>Training and Development: Certifications</ListItems>
            <ListItems>Employee engagement activities: awards, community gathering</ListItems>
            <ListItems>Good Infrastructure</ListItems>
            <ListItems>Flexible working culture</ListItems>
            <ListItems>Work From Anywhere</ListItems>
            <ListItems>Onsite opportunity</ListItems>
          </ul>
        </div>

        <ButtonContainer>
            <StyledButton>Go Back</StyledButton>
            </ButtonContainer>
        
        </JobBriefContainer>
        </>
    )
}