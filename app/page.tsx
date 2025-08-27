import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function Home() {
    const session = await getServerSession();

    console.log("session", session);

    if (!session) {
        console.log("redirecting...");
        redirect("/api/auth/signin");
    }

    return <main> This is the home page, you're logged in! </main>;
}
