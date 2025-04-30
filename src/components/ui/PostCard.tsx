"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import PostHoverText from "./PostHoverText";
import Post from "@/types/post.type";
import useImageSize from "@/hooks/useImageSize";
import RoundedPicture from "./RoundedPicture";

export default function PostCard({
  post,
  allPosts = [],
}: {
  post: Post;
  allPosts?: Post[];
}) {
  const [isHover, setIsHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [parentHeight, setParentHeight] = useState(0);
  const [currentPostIndex, setCurrentPostIndex] = useState<number>(() => {
    return allPosts.findIndex((p) => p.id === post.id);
  });
  const [currentPost, setCurrentPost] = useState<Post>(post);
  const [isHoveredNav, setIsHoveredNav] = useState(false);

  // Utiliser useImageSize pour le post initial et le post courant
  const currentImageSize = useImageSize(currentPost.image);

  // Déterminer si l'image est en format portrait (hauteur > largeur)
  const isPortrait =
    !currentImageSize.isLoading &&
    currentImageSize.height > currentImageSize.width;

  // Effet pour mesurer la hauteur disponible du conteneur parent
  useEffect(() => {
    if (isClicked && containerRef.current) {
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
    }
  }, [isClicked]);

  // Navigation vers le post précédent
  const goToPrevPost = () => {
    if (allPosts.length > 0 && currentPostIndex > 0) {
      const newIndex = currentPostIndex - 1;
      setCurrentPostIndex(newIndex);
      setCurrentPost(allPosts[newIndex]);
    }
  };

  // Navigation vers le post suivant
  const goToNextPost = () => {
    if (allPosts.length > 0 && currentPostIndex < allPosts.length - 1) {
      const newIndex = currentPostIndex + 1;
      setCurrentPostIndex(newIndex);
      setCurrentPost(allPosts[newIndex]);
    }
  };

  const handleMouseEnter = () => {
    setIsHoveredNav(true);
  };

  const handleMouseLeave = () => {
    setIsHoveredNav(false);
  };

  return (
    <>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setIsClicked(!isClicked)}
        className="h-[412px] w-full bg-gray-300 cursor-pointer relative"
      >
        {post && (
          <Image
            src={post.image}
            alt="Post Card"
            fill
            className="object-cover"
          />
        )}
        {isHover && (
          <div className="absolute top-0 left-0 w-full h-full gap-7.5 bg-black/70 flex flex-row justify-center items-center">
            <PostHoverText
              icon="icons/like_post.svg"
              text={String(post.likes)}
            />
            <PostHoverText
              icon="icons/comment_post.svg"
              text={String(post.comments.length)}
            />
          </div>
        )}
      </div>

      {isClicked && (
        <div
          onClick={() => setIsClicked(false)}
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
                    onClick={() => {
                      goToPrevPost();
                    }}
                    src={"/icons/chevron_navigation.svg"}
                    width={12}
                    height={12}
                    size="sm"
                    className="rotate-180"
                  />
                </div>
              )}
            </div>

            {/* Contenu du post - Utilise currentImageSize pour déterminer si l'image est en portrait */}
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
                    src={currentPost.image}
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
                  <Image
                    src={currentPost.image}
                    alt=""
                    className="object-contain"
                    fill
                  />
                </div>
              )}
              <div
                className="bg-white w-[500px] h-full overflow-y-auto p-4 rounded-br-sm rounded-tr-sm"
                onClick={(e) => e.stopPropagation()}
              ></div>
            </div>

            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`h-screen w-6 flex items-center transition-all duration-300 ${
                isHoveredNav ? "opacity-25" : ""
              }`}
            >
              {allPosts.length > 0 &&
                currentPostIndex < allPosts.length - 1 && (
                  <div onClick={(e) => e.stopPropagation()}>
                    <RoundedPicture
                      onClick={() => {
                        goToNextPost();
                      }}
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
      )}
    </>
  );
}
