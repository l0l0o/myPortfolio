export default interface Post {
  id: string;
  likes: number;
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
