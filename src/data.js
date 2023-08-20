import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tour" },
  { id: 5, href: "#tours", text: "Ark" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", fabIcon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", fabIcon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", fabIcon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    fabIcon: "fas fa-tree fa-fw",
    title: "endless hiking",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    fabIcon: "fas fa-wallet fa-fw",
    title: "saving money",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    fabIcon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    imgSrc: tour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit veniam temporibus sint laborum eum ipsum aperiam placeat vel quod ab dolore accusantium odit expedita, debitis totam voluptatum fuga, omnis hic! Illo adipisci laboriosam quam, rem dolorem, numquam dolore quibusdam sequi dolores deserunt id, at blanditiis? Aut libero repudiandae laboriosam.",
    country: "china",
    days: "6 days",
    price: "2100",
  },
  {
    id: 2,
    imgSrc: tour2,
    date: "october 1st, 2020",
    title: "best of java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit veniam temporibus sint laborum eum ipsum aperiam placeat vel quod ab dolore accusantium odit expedita, debitis totam voluptatum fuga, omnis hic! Illo adipisci laboriosam quam, rem dolorem, numquam dolore quibusdam sequi dolores deserunt id, at blanditiis? Aut libero repudiandae laboriosam.",
    country: "indonesia",
    days: "11 days",
    price: "1400",
  },
  {
    id: 3,
    imgSrc: tour3,
    date: "september 15th, 2020",
    title: "explore hongkong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit veniam temporibus sint laborum eum ipsum aperiam placeat vel quod ab dolore accusantium odit expedita, debitis totam voluptatum fuga, omnis hic! Illo adipisci laboriosam quam, rem dolorem, numquam dolore quibusdam sequi dolores deserunt id, at blanditiis? Aut libero repudiandae laboriosam.",
    country: "hong kong",
    days: "8 days",
    price: "5000",
  },
  {
    id: 4,
    imgSrc: tour4,
    date: "december 5th, 2019",
    title: "Kenya Highlight",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit veniam temporibus sint laborum eum ipsum aperiam placeat vel quod ab dolore accusantium odit expedita, debitis totam voluptatum fuga, omnis hic! Illo adipisci laboriosam quam, rem dolorem, numquam dolore quibusdam sequi dolores deserunt id, at blanditiis? Aut libero repudiandae laboriosam.",
    country: "kenya",
    days: "20 days",
    price: "3300",
  },
];
