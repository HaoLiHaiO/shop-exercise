import diablo from "./img/diablo.jpg";
import quake from "./img/quake.jpg";
import hitman from "./img/hitman.jpg";
import hl from "./img/hl.jpg";
import mk from "./img/mk.jpg";

export const data: Item[] = [
  {
    picture: `${diablo}`, //
    price: 49,
    name: "Diablo",
  },
  {
    picture: `${quake}`,
    price: 29,
    name: "Quake",
  },
  {
    picture: `${hitman}`,
    price: 19,
    name: "Hitman",
  },
  {
    picture: `${hl}`,
    price: 79,
    name: "Half Life",
  },
  {
    picture: `${mk}`,
    price: 59,
    name: "Mortal Kombat",
  },
];

export type Item = { picture: string; price: number; name: string };
