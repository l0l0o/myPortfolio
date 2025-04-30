import React, { useState } from "react";
import Image from "next/image";
import RoundedPicture from "@/components/ui/RoundedPicture";
import Comment from "@/types/comment.type";

// Composant pour le contenu du commentaire, réutilisable pour les réponses
const CommentContent = ({
  user,
  text,
  createdAt,
  likes = 0,
  isLiked = false,
  onLikeToggle,
}: {
  user: { id: string; name: string; picture: string };
  text: string;
  createdAt: string;
  likes?: number;
  isLiked?: boolean;
  onLikeToggle: () => void;
}) => {
  return (
    <div className="flex flex-row gap-3 w-full">
      <RoundedPicture src={user.picture} width={24} height={24} size="sm" />
      <div className="flex flex-col flex-grow">
        <div className="flex flex-row justify-between items-start">
          <div>
            <span className="text-sm text-black">
              <span className="font-semibold">{user.name}</span> {text}
            </span>
            <div className="flex flex-row gap-4 mt-1">
              <span className="text-xs text-neutral-500">{createdAt}</span>
              {likes > 0 && (
                <span className="text-xs text-neutral-500">
                  {likes} J&apos;aime{likes > 1 ? "s" : ""}
                </span>
              )}
              <span className="text-xs font-semibold cursor-pointer text-neutral-500">
                Répondre
              </span>
            </div>
          </div>
          <div onClick={onLikeToggle} className="cursor-pointer">
            <Image
              src={isLiked ? "/icons/like_focus.svg" : "/icons/like.svg"}
              alt="Like"
              width={12}
              height={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CommentItem = ({ comment }: { comment: Comment }) => {
  const [isLiked, setIsLiked] = useState(comment.isLiked || false);
  const [showReplies, setShowReplies] = useState(false);
  const [likesCount, setLikesCount] = useState(comment.likes || 0);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="flex flex-col w-full mb-3">
      <CommentContent
        user={comment.user}
        text={comment.text}
        createdAt={comment.createdAt}
        likes={likesCount}
        isLiked={isLiked}
        onLikeToggle={handleLike}
      />

      {comment.replies && comment.replies.length > 0 && (
        <div className="mt-1 mb-1 ml-9">
          <span
            className="text-xs font-semibold cursor-pointer text-neutral-500 flex items-center"
            onClick={() => setShowReplies(!showReplies)}
          >
            <div className="w-6 h-[1px] bg-neutral-300 mr-2"></div>
            {showReplies
              ? "Masquer les réponses"
              : `Voir les réponses (${comment.replies.length})`}
          </span>

          {showReplies && (
            <div className="mt-3 pl-4">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="mb-3">
                  <CommentContent
                    user={reply.user}
                    text={reply.text}
                    createdAt={reply.createdAt}
                    likes={reply.likes}
                    isLiked={reply.isLiked}
                    onLikeToggle={() => {}}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export function commentItemSkeleton() {
  return (
    <div className="flex flex-col w-full mb-3 animate-pulse">
      <div className="flex flex-row gap-3 w-full">
        <div className="w-6 h-6 rounded-full bg-neutral-200"></div>
        <div className="flex flex-col flex-grow">
          <div className="flex flex-row justify-between items-start">
            <div>
              <div className="w-32 h-4 bg-neutral-200 rounded"></div>
              <div className="flex flex-row gap-4 mt-1">
                <div className="w-16 h-3 bg-neutral-200 rounded"></div>
              </div>
            </div>
            <div className="w-3 h-3 bg-neutral-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
