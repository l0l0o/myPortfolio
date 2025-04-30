import Comment from "@/types/comment.type";

export default interface Post {
  id: string;
  userInfo: {
    username: string;
    picture: string;
  };
  likes: number;
  image: string;
  comments: Comment[];
}
