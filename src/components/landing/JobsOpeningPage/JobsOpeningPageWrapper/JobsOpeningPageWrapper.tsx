import { Footer } from "../../Footer"
import { Header } from "../../Header"
import { JobsDescription } from "../JobDescription"
import { JobsOpeningTop } from "../JobsOpeningTop"
import { OpenJobsSection } from "../OpenJobsSection"




export const JobsOpeningPageWrapper=()=>{
    return(
        <>
        <Header/>
        <JobsOpeningTop/>
        <OpenJobsSection/>

        
        <Footer/>
        </>
    )
}