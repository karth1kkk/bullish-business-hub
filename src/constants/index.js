import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = [
  { name: "About", url: "/about" },  // Add the About page link
  { name: "Register", url: "/register" },
  { name: "Broker", url: "https://h5.vtmarketsapp.com/web/h5/support/register/register.html?referee_user_id=9ee6f03cdf5d45af8b6609d5e9afe566&referee_mt4_account_id=830568" },
  { name: "Support", url: "https://tr.ee/ESksfR5dj4" }
];


export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Unlock Your Trading Potential.",
      "Advanced Analytics.",
      "Seamless Performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Market Analysis.", "Strategize and Succeed."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "Diverse Asset Classes.",
      "Trade Anytime, Anywhere.",
      "Maximize Your Returns.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["Advanced Risk Management.", "Trade with Confidence."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "Basic and Advance Class",
    color: ["#000000", "#000000", "#000000"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "Copytrading 500$",
    color: ["#000000", "#000000", "#000000"],
    img: blueImg,
  },
  {
    id: 3,
    title: "Copytrading 1000$",
    color: ["#000000", "#000000", "#000000"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "Signal Group",
    color: ["#000000", "#000000", "#000000"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];