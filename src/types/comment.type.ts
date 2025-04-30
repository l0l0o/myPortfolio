export default interface Comment {
  id: string;
  text: string;
  user: {
    id: string;
    name: string;
    picture: string;
  };
  createdAt: string;
  likes: number;
  isLiked?: boolean;
  replies?: Comment[];
}
