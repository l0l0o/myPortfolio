"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Post from "@/types/post.type";
import useImageSize from "@/hooks/useImageSize";
import RoundedPicture from "@/components/ui/RoundedPicture";
import CommentList from "@/components/ui/CommentList";

type PostModalProps = {
  post: Post;
  allPosts: Post[];
  currentPostIndex: number;
  onClose: () => void;
  onChangePost: (postIndex: number) => void;
};

export default function PostModal({
  post,
  allPosts,
  currentPostIndex,
  onClose,
  onChangePost,
}: PostModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [parentHeight, setParentHeight] = useState(0);
  const [isHoveredNav, setIsHoveredNav] = useState(false);

  // Utiliser useImageSize pour le post courant
  const currentImageSize = useImageSize(post.image);

  // Déterminer si l'image est en format portrait (hauteur > largeur)
  const isPortrait =
    !currentImageSize.isLoading &&
    currentImageSize.height > currentImageSize.width;

  // Effet pour mesurer la hauteur disponible du conteneur parent
  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        // Prendre en compte la marge intérieure (padding)
        const computedStyle = window.getComputedStyle(containerRef.current);
        const paddingTop = parseInt(computedStyle.paddingTop, 10);
        const paddingBottom = parseInt(computedStyle.paddingBottom, 10);

        // Calculer la hauteur disponible
        const availableHeight =
          containerRef.current.clientHeight - paddingTop - paddingBottom;
        setParentHeight(availableHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Navigation vers le post précédent
  const goToPrevPost = () => {
    if (allPosts.length > 0 && currentPostIndex > 0) {
      onChangePost(currentPostIndex - 1);
    }
  };

  // Navigation vers le post suivant
  const goToNextPost = () => {
    if (allPosts.length > 0 && currentPostIndex < allPosts.length - 1) {
      onChangePost(currentPostIndex + 1);
    }
  };

  const handleMouseEnter = () => {
    setIsHoveredNav(true);
  };

  const handleMouseLeave = () => {
    setIsHoveredNav(false);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 w-full h-screen z-50 bg-black/70 flex justify-center items-center"
    >
      <div
        className="flex flex-row h-full w-full justify-between items-center p-5"
        ref={containerRef}
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`h-screen w-6 flex items-center transition-all duration-300 ${
            isHoveredNav ? "opacity-25" : ""
          }`}
        >
          {allPosts.length > 0 && currentPostIndex > 0 && (
            <div onClick={(e) => e.stopPropagation()}>
              <RoundedPicture
                onClick={goToPrevPost}
                src={"/icons/chevron_navigation.svg"}
                width={12}
                height={12}
                size="sm"
                className="rotate-180"
              />
            </div>
          )}
        </div>

        <div className="flex flex-row h-full w-full items-center justify-center">
          {!currentImageSize.isLoading && isPortrait ? (
            <div
              className="relative w-auto bg-black flex items-center justify-center"
              style={{
                height: `${Math.min(parentHeight, 700)}px`,
                maxHeight: "100%",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={post.image}
                alt=""
                className="object-contain h-full w-auto"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          ) : (
            <div
              className="relative w-full h-full max-w-[500px] max-h-[700px] bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={post.image} alt="" className="object-contain" fill />
            </div>
          )}
          <CommentList post={post} />
        </div>

        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`h-screen w-6 flex items-center transition-all duration-300 ${
            isHoveredNav ? "opacity-25" : ""
          }`}
        >
          {allPosts.length > 0 && currentPostIndex < allPosts.length - 1 && (
            <div onClick={(e) => e.stopPropagation()}>
              <RoundedPicture
                onClick={goToNextPost}
                src={"/icons/chevron_navigation.svg"}
                width={12}
                height={12}
                size="sm"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
