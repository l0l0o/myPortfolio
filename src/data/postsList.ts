import Post from "@/types/post.type";
import {
  DEFAULT_PROFILE_PICTURE,
  DEFAULT_USER_ID,
} from "@/constantes/userInfo";

export const PostsList: Post[] = [
  {
    id: "1",
    userInfo: {
      username: DEFAULT_USER_ID,
      picture: DEFAULT_PROFILE_PICTURE,
    },
    likes: 120,
    image: "/stories/photo_1.webp",
    comments: [
      {
        id: "1",
        text: "Great post!",
        user: {
          id: "1",
          name: "Alice",
          picture: "/stories/photo_1.webp",
        },
        createdAt: "2h",
        likes: 5,
        isLiked: false,
      },
      {
        id: "2",
        text: "Love the composition!",
        user: {
          id: "2",
          name: "Bob",
          picture: "/stories/photo_2.webp",
        },
        createdAt: "1h",
        likes: 2,
        isLiked: true,
        replies: [
          {
            id: "2-1",
            text: "Thanks! I worked hard on it.",
            user: {
              id: DEFAULT_USER_ID,
              name: DEFAULT_USER_ID,
              picture: DEFAULT_PROFILE_PICTURE,
            },
            createdAt: "45min",
            likes: 1,
            isLiked: false,
          },
        ],
      },
    ],
  },
  {
    id: "2",
    userInfo: {
      username: DEFAULT_USER_ID,
      picture: DEFAULT_PROFILE_PICTURE,
    },
    likes: 245,
    image: "/stories/photo_collab.webp",
    comments: [
      {
        id: "3",
        text: "Amazing work as always!",
        user: {
          id: "3",
          name: "Charlie",
          picture: "/stories/photo_3.webp",
        },
        createdAt: "5h",
        likes: 14,
        isLiked: true,
      },
      {
        id: "4",
        text: "What camera did you use for this?",
        user: {
          id: "4",
          name: "Diana",
          picture: "/stories/photo_collab_2.webp",
        },
        createdAt: "3h",
        likes: 0,
        isLiked: false,
      },
      {
        id: "5",
        text: "The lighting is perfect!",
        user: {
          id: "5",
          name: "Ethan",
          picture: "/stories/studyLink.webp",
        },
        createdAt: "2h",
        likes: 7,
        isLiked: false,
        replies: [
          {
            id: "5-1",
            text: "I used natural light for this one!",
            user: {
              id: DEFAULT_USER_ID,
              name: DEFAULT_USER_ID,
              picture: DEFAULT_PROFILE_PICTURE,
            },
            createdAt: "1h",
            likes: 3,
            isLiked: false,
          },
        ],
      },
    ],
  },
  {
    id: "3",
    userInfo: {
      username: DEFAULT_USER_ID,
      picture: DEFAULT_PROFILE_PICTURE,
    },
    likes: 87,
    image: "/stories/Puzzle-tracer.webp",
    comments: [
      {
        id: "6",
        text: "This inspires me to start my own project!",
        user: {
          id: "6",
          name: "Fiona",
          picture: "/stories/profile_picture.webp",
        },
        createdAt: "1j",
        likes: 10,
        isLiked: false,
      },
    ],
  },
  {
    id: "4",
    userInfo: {
      username: DEFAULT_USER_ID,
      picture: DEFAULT_PROFILE_PICTURE,
    },
    likes: 321,
    image: "/stories/photo_pizza.webp",
    comments: [
      {
        id: "7",
        text: "Your portfolio keeps getting better!",
        user: {
          id: "7",
          name: "George",
          picture: "/stories/photo_pizza.webp",
        },
        createdAt: "6h",
        likes: 12,
        isLiked: false,
      },
      {
        id: "8",
        text: "How long did this take you to complete?",
        user: {
          id: "8",
          name: "Hannah",
          picture: "/stories/Puzzle-tracer.webp",
        },
        createdAt: "5h",
        likes: 2,
        isLiked: false,
        replies: [
          {
            id: "8-1",
            text: "About two weeks of consistent work!",
            user: {
              id: DEFAULT_USER_ID,
              name: DEFAULT_USER_ID,
              picture: DEFAULT_PROFILE_PICTURE,
            },
            createdAt: "4h",
            likes: 5,
            isLiked: false,
          },
        ],
      },
      {
        id: "9",
        text: "Would love to collaborate someday!",
        user: {
          id: "9",
          name: "Ian",
          picture: "/stories/photo_collab.webp",
        },
        createdAt: "3h",
        likes: 8,
        isLiked: true,
      },
      {
        id: "10",
        text: "Simply stunning work!",
        user: {
          id: "10",
          name: "Julia",
          picture: "/stories/photo_3.webp",
        },
        createdAt: "1h",
        likes: 3,
        isLiked: false,
      },
    ],
  },
];
