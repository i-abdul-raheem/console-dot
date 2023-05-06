import { FullPage } from "@/components"
import { useRouter } from "next/router";

const Test = () => {
    const router = useRouter();
    return (
        <FullPage>
            <button onClick={() => router.push("/")}>Go to home</button>
        </FullPage>
    )
}

export default Test;