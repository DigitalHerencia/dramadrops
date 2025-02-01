"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { toggleThreadLike } from "@/lib/actions/thread.actions";

interface Props
{
    threadId: string;
    currentUserId: string;
    isLiked: boolean;
    likeCount: number;
}

function LikeThread({ threadId, currentUserId, isLiked, likeCount }: Props)
{
    const pathname = usePathname();

    return (
        <button
            className="flex items-center gap-1"
            onClick={async () =>
            {
                await toggleThreadLike(threadId, currentUserId, pathname);
            }}
        >
            <Image
                src={isLiked ? "/assets/heart-filled.svg" : "/assets/heart-gray.svg"}
                alt="like"
                width={24}
                height={24}
                className="cursor-pointer object-contain"
            />
            <span className="text-small-regular text-light-2">{likeCount}</span>
        </button>
    );
}

export default LikeThread;
