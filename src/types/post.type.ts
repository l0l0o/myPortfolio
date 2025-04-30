export default interface Post {
  id: string;
  likes: number;
  image: string;
  comments: Array<{
    id: string;
    text: string;
    user: {
      id: string;
      name: string;
      picture: string;
    };
  }>;
}
