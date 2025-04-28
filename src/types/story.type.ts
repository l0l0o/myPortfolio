export default interface Story {
  id: string;
  title: string;
  image: string;
  content: Array<{
    image: string;
    time: number;
  }>;
}
