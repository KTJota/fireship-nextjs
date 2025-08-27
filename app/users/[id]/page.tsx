import FollowButton from "@/components/FollowButton/FollowButton";
import {prisma} from "@/lib/prisma";
import {Metadata} from "next";

interface Props {
    params: {
        id: string;
    };
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
    let awaitedId = await params;
    const user = await prisma.user.findUnique({where: {id: awaitedId.id}});
    return {title: `User profile of ${user?.name}`};
}

export default async function UserProfile({params}: Props) {
    const awaitedId = await params;
    const user = await prisma.user.findUnique({where: {id: awaitedId.id}});
    const {name, bio, image, id} = user ?? {};

    return (
        <div>
            <h1>{name}</h1>

            <img width={300} src={image ?? "/mememan.webp"} alt={`${name}'s profile`} />

            <h3>Bio</h3>
            <p>{bio}</p>
        </div>
    );
}
