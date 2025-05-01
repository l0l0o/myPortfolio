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
    image: "/posts/photo_1.webp",
    comments: [
      {
        id: "1",
        text: "Le Digital Event de cette année était incroyable ! J'ai hâte de voir le prochain !",
        user: {
          id: "1",
          name: "alice_designr",
          picture: "/user_picture/Female Memojis.png",
        },
        createdAt: "2h",
        likes: 5,
        isLiked: false,
      },
      {
        id: "2",
        text: "Notre équipe a vraiment donné le meilleur pendant ces deux semaines intensives !",
        user: {
          id: "2",
          name: "bob.dev42",
          picture: "/user_picture/Male Memojis.png",
        },
        createdAt: "1h",
        likes: 2,
        isLiked: true,
        replies: [
          {
            id: "2-1",
            text: "Merci ! On a tous travaillé très dur pour aboutir à ce résultat.",
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
    image: "/posts/photo_collab_2.webp",
    comments: [
      {
        id: "3",
        text: "La collaboration pendant le Digital Event était exceptionnelle ! Vivement l'année prochaine !",
        user: {
          id: "3",
          name: "charlie_code.master",
          picture: "/user_picture/Male Memojis-1.png",
        },
        createdAt: "5h",
        likes: 14,
        isLiked: true,
      },
      {
        id: "4",
        text: "Quelle technologie avez-vous utilisée pour ce projet du Digital Event ?",
        user: {
          id: "4",
          name: "diana.tech_girl",
          picture: "/user_picture/Female Memojis-1.png",
        },
        createdAt: "3h",
        likes: 0,
        isLiked: false,
      },
      {
        id: "5",
        text: "Ces deux semaines de Digital Event ont vraiment porté leurs fruits ! Le résultat est magnifique !",
        user: {
          id: "5",
          name: "ethan_dev2023",
          picture: "/user_picture/Male Memojis-2.png",
        },
        createdAt: "2h",
        likes: 7,
        isLiked: false,
        replies: [
          {
            id: "5-1",
            text: "On a mis toute notre passion dans ce projet pendant l'événement !",
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
    image: "/posts/Puzzle-tracer.webp",
    comments: [
      {
        id: "6",
        text: "Le jeu Puzzle Tracer que vous avez développé pendant le Digital Event était vraiment incroyable ! Un des meilleurs projets de l'événement !",
        user: {
          id: "6",
          name: "fiona.creative_",
          picture: "/user_picture/Female Memojis-2.png",
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
    image: "/posts/photo_pizza.webp",
    comments: [
      {
        id: "7",
        text: "Même les pauses pizza pendant le Digital Event étaient productives ! Super travail d'équipe !",
        user: {
          id: "7",
          name: "geo_coder99",
          picture: "/user_picture/Male Memojis-3.png",
        },
        createdAt: "6h",
        likes: 12,
        isLiked: false,
      },
      {
        id: "8",
        text: "Combien de temps avez-vous passé sur ce module pendant le Digital Event ?",
        user: {
          id: "8",
          name: "h4nnah.web",
          picture: "/user_picture/Female Memojis.png",
        },
        createdAt: "5h",
        likes: 2,
        isLiked: false,
        replies: [
          {
            id: "8-1",
            text: "Pratiquement toutes les nuits de la deuxième semaine du Digital Event ! Ça valait le coup !",
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
        text: "J'espère qu'on pourra collaborer au prochain Digital Event ! Votre équipe a vraiment du talent !",
        user: {
          id: "9",
          name: "ian.developer_",
          picture: "/user_picture/Male Memojis-1.png",
        },
        createdAt: "3h",
        likes: 8,
        isLiked: true,
      },
      {
        id: "10",
        text: "Le Digital Event a vraiment révélé le potentiel de chaque équipe ! Félicitations pour ce travail remarquable !",
        user: {
          id: "10",
          name: "julia.ux_design",
          picture: "/user_picture/Female Memojis-1.png",
        },
        createdAt: "1h",
        likes: 3,
        isLiked: false,
      },
    ],
  },
];
