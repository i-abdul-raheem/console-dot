import { InquireSection } from "../../home"
import { CeoReviews } from "../CeoReviews"
import { ContactExperts } from "../ContactExperts"
import { TestiReviews } from "../TestiReviews"
import { TestimonialsTop } from "../TestimonialsTop/TestimonialsTop"




export const TestimonialsWrapper=()=>{
    return(
        <>
        <TestimonialsTop/>
        <TestiReviews/>
        <ContactExperts/>
        <InquireSection/>
        <CeoReviews/>
        </>
    )
}