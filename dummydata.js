const members = [
  {
    id: "2SqLH",
    firstName: "Samantha",
    lastName: "Altman",
    email: "samantha_altman@gmail.com",
    profilePicture: "",
    online: "GET /presence",
    age: 34,
    city: "",
    country: "",
    subscription: "standard | vip | premium",
    role: "user | moderator",
    roomId: "room_2SqLH",
    gender: "female",
    chatSettings: {
      // paramètres par défault ...
      settingsCheck: {
        microphones: "microphones",
        speakers: "speakers",
        cameras: "cameras",
      },
      blockedUsers: [],
      notifications: {},
      darkmode: true,
    },
  },
  {
    id: "jMwNQ",
    firstName: "Clara",
    lastName: "Hilfilgher",
    email: "clara_hilfilgher@gmail.com",
    profilePicture: "",
    online: "GET /presence",
    age: 34,
    city: "",
    country: "",
    subscription: "standard | vip | premium",
    role: "user | moderator",
    roomId: "room_1EfPc",
    gender: "female",
    chatSettings: {
      blockedUsers: [],
      notifications: {}, // par défault ...
    },
  },
  {
    id: "Fjtt4",
    firstName: "Baptiste",
    lastName: "Muday",
    email: "baptiste_muday@gmail.com",
    age: 24,
    profilePicture: "",
    online: "GET /presence",
    city: "",
    country: "",
    subscription: "standard | vip | premium",
    role: "user | moderator",
    roomId: "room_2SqLH",
    gender: "male",
    chatSettings: {
      blockedUsers: [],
      notifications: {}, // par défault ...
    },
  },
  {
    id: "2jMNK",
    firstName: "Nathan",
    lastName: "Toto",
    email: "nathan_toto@gmail.com",
    age: 18,
    profilePicture: "",
    online: "GET /presence",
    city: "",
    country: "",
    subscription: "standard | vip | premium",
    role: "user | moderator",
    roomId: "room_3zEr7",
    gender: "male",
    chatSettings: {
      blockedUsers: [],
      notifications: {}, // par défault ...
    },
  },
  {
    id: "jMwNQa",
    firstName: "Solène",
    lastName: "MUDAY",
    email: "solene_muday@gmail.com",
    age: 20,
    profilePicture: "",
    online: "GET /presence",
    city: "",
    country: "",
    subscription: "standard | vip | premium",
    role: "user | moderator",
    roomId: "room_3zEr7",
    gender: "female",
    chatSettings: {
      blockedUsers: [],
      notifications: {}, // par défault ...
    },
  },
  {
    id: "wNQ7d",
    firstName: "Cyrille",
    lastName: "Toto",
    email: "cyrille_toto@gmail.com",
    age: 50,
    profilePicture: "",
    online: "GET /presence",
    city: "",
    country: "",
    subscription: "standard | vip | premium",
    role: "user | moderator",
    roomId: "room_23Frd",
    gender: "male",
    chatSettings: {
      blockedUsers: [],
      notifications: {}, // par défault ...
    },
  },
];

const rooms = [
  {
    id: "room_2SqLH",
    name: "home",
    nbUsers: 103,
    image: "",
  },
  {
    id: "room_23Frd",
    name: "agua",
    nbUsers: 89,
    image: "",
  },
  {
    id: "room_3zEr7",
    name: "dance",
    nbUsers: 173,
    image: "",
  },
  {
    id: "room_2Sdda",
    name: "pop",
    nbUsers: 124,
    image: "",
  },
  {
    id: "room_1EfPc",
    name: "jazz",
    nbUsers: 380,
    image: "",
  },
  {
    id: "room_7AmPn",
    name: "rumba",
    nbUsers: 29,
    image: "",
  },
];

const posts = [
  {
    id: "article_7AmPn",
    title: "home",
    content: "lorem",
    coverImage: "",
  },
  {
    id: "article_jMwNQ",
    title: "home",
    content: "lorem",
    coverImage: "",
  },
  {
    id: "article_2jMNK",
    title: "home",
    content: "lorem",
    coverImage: "",
  },
  {
    id: "article_wNQ7d",
    title: "home",
    content: "lorem",
    coverImage: "",
  },
  {
    id: "article_1EfPc",
    title: "home",
    content: "lorem",
    coverImage: "",
  },
  {
    id: "article_Fjtt4",
    title: "home",
    content: "lorem",
    coverImage: "",
  },
];

const privateMessages = [
  {
    id: 1,
    senderId: "2SqLH",
    receiverId: "wNQ7d",
    text: "hello",
    image: "",
    pollAnswer: "",
    // createdAt: ,
  },
  {
    id: 2,
    senderId: "jMwNQ",
    receiverId: "2SqLH",
    text: "hey",
    image: "",
    pollAnswer: "",
    // createdAt: ,
  },
  {
    id: 3,
    senderId: "wNQ7d",
    receiverId: "jMwNQ",
    text: "what's up?",
    image: "",
    pollAnswer: "",
    // createdAt: ,
  },
];

const roomMessages = [
  {
    id: 1,
    senderId: "wNQ7d",
    text: "hello everybody!",
    image: "",
    roomId: "room_2SqLH",
    // createdAt: ,
  },
  {
    id: 1,
    senderId: "wNQ7d",
    text: "hello world!",
    image: "",
    roomId: "room_23Frd",
    // createdAt: ,
  },
  {
    id: 1,
    senderId: "wNQ7d",
    text: "hello coders!",
    image: "",
    roomId: "room_3zEr7",
    // createdAt: ,
  },
];

module.exports = {
  members,
  rooms,
  posts,
  roomMessages,
  privateMessages,
};
