import React, { useState, useEffect } from "react";
import Image from "next/image";
import UserInfo from "./UserInfo";
import Post from "@/types/post.type";
import CommentItem, { commentItemSkeleton } from "./CommentItem";
import { DEFAULT_PROFILE_PICTURE } from "@/constantes/userInfo";

const CommentList = ({ post, isLoading = false }: { post: Post, isLoading?: boolean }) => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments);

  // Mettre à jour les commentaires lorsque le post change (navigation)
  useEffect(() => {
    setComments(post.comments);
  }, [post.id, post.comments]);

  const handleAddComment = () => {
    if (!commentText.trim()) return;

    const newComment = {
      id: `new-${Date.now()}`,
      text: commentText,
      user: {
        id: "current-user",
        name: "Vous",
        picture: DEFAULT_PROFILE_PICTURE,
      },
      createdAt: "À l'instant",
      likes: 0,
      isLiked: false,
    };

    setComments([...comments, newComment]);
    setCommentText("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddComment();
    }
  };

  return (
    <div
      className="bg-white w-[500px] h-full overflow-y-auto rounded-br-sm rounded-tr-sm flex flex-col justify-between"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex flex-row h-15 border-b-1 items-center justify-between border-b-neutral-200 p-3">
        <UserInfo post={post} />
        <Image
          src={"/icons/more.svg"}
          alt="More options"
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-60"
        />
      </div>
      <div className="flex flex-col gap-1 p-4 h-full items-start justify-start overflow-y-auto">
        {isLoading ? (
          // Afficher des squelettes pendant le chargement
          Array(5).fill(0).map((_, index) => (
            <React.Fragment key={`skeleton-${index}`}>
              {commentItemSkeleton()}
            </React.Fragment>
          ))
        ) : (
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        )}
      </div>
      <div className="flex flex-row h-15 border-t-1 items-center border-t-neutral-200 p-4 gap-4">
        <Image
          src={"/icons/emoji.svg"}
          alt="Emoji"
          width={24}
          height={24}
          className="cursor-pointer hover:opacity-60"
        />
        <input
          type="text"
          className="w-full text-sm outline-none"
          placeholder="Ajouter un commentaire..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={isLoading}
        />
        <button
          disabled={!commentText.trim() || isLoading}
          onClick={handleAddComment}
          className={`text-sm font-semibold text-[#0095F6] hover:text-blue-950 cursor-pointer ${
            !commentText.trim() || isLoading ? "opacity-20" : ""
          }`}
        >
          Publier
        </button>
      </div>
    </div>
  );
};

export default CommentList;
