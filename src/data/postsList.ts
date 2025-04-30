import Post from "@/types/post.type";

export const PostsList: Post[] = [
  {
    id: "1",
    likes: 120,
    image: "/stories/photo_1.webp",
    comments: [
      {
        id: "1",
        text: "Great post!",
        user: {
          id: "1",
          name: "Alice",
          picture: "https://example.com/alice.jpg",
        },
      },
      {
        id: "2",
        text: "Love the composition!",
        user: {
          id: "2",
          name: "Bob",
          picture: "https://example.com/bob.jpg",
        },
      },
    ],
  },
  {
    id: "2",
    likes: 245,
    image: "/stories/photo_collab.webp",
    comments: [
      {
        id: "3",
        text: "Amazing work as always!",
        user: {
          id: "3",
          name: "Charlie",
          picture: "https://example.com/charlie.jpg",
        },
      },
      {
        id: "4",
        text: "What camera did you use for this?",
        user: {
          id: "4",
          name: "Diana",
          picture: "https://example.com/diana.jpg",
        },
      },
      {
        id: "5",
        text: "The lighting is perfect!",
        user: {
          id: "5",
          name: "Ethan",
          picture: "https://example.com/ethan.jpg",
        },
      },
    ],
  },
  {
    id: "3",
    likes: 87,
    image: "/stories/Puzzle-tracer.webp",
    comments: [
      {
        id: "6",
        text: "This inspires me to start my own project!",
        user: {
          id: "6",
          name: "Fiona",
          picture: "https://example.com/fiona.jpg",
        },
      },
    ],
  },
  {
    id: "4",
    likes: 321,
    image: "/stories/photo_pizza.webp",
    comments: [
      {
        id: "7",
        text: "Your portfolio keeps getting better!",
        user: {
          id: "7",
          name: "George",
          picture: "https://example.com/george.jpg",
        },
      },
      {
        id: "8",
        text: "How long did this take you to complete?",
        user: {
          id: "8",
          name: "Hannah",
          picture: "https://example.com/hannah.jpg",
        },
      },
      {
        id: "9",
        text: "Would love to collaborate someday!",
        user: {
          id: "9",
          name: "Ian",
          picture: "https://example.com/ian.jpg",
        },
      },
      {
        id: "10",
        text: "Simply stunning work!",
        user: {
          id: "10",
          name: "Julia",
          picture: "https://example.com/julia.jpg",
        },
      },
    ],
  },
];
