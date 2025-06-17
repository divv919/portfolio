import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
// import { SiBluesky } from "react-icons/si";

const rinkitImage = "/assets/Images/pfps/mark.png";
const rinkitName = "Divyansh Swarnkar";
const rinkitShortName = "Divyansh";
const rinkitBio = "Software Engineer";
const rinkitAbout = `
  <p>
    Hey! I'm Divyansh Swarnkar, an undergraduate BCA student and full-stack developer who loves turning ideas into real, working products.
  </p>
  <p>
    I'm flexible working with any tech stack, though I prefer modern tools. I'm currently working with Next.js, React.js,  Express, and TypeScript.
  </p>
  <p>
    I love contributing to open-source projects and build projects that solve real world problems.
  </p>
`;

const rinkitLink = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/divv919",
    icon: FaGithub,
  },

  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/divv919",
    icon: FaXTwitter,
  },

  {
    id: 3,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/divyansh-swarnkar-87746a323",
    icon: FaLinkedinIn,
  },

  {
    id: 4,
    name: "LeetCode",
    link: "https://leetcode.com/u/divyansh919/",
    icon: SiLeetcode,
  },
];

const rinkitContact =
  "Most of the time, you'll find me coding. I'm also super active on X, so feel free to DM me there or reach out to me via email if you have any queries.";
const rinkitContactLink = [
  {
    id: 1,
    name: "Twitter",
    link: "https://x.com/divv919",
    icon: FaXTwitter,
  },

  {
    id: 2,
    name: "Email",
    link: "mailto:divyanshsoni919@gmail.com",
    icon: MdOutlineMail,
  },
];

const rinkitFooterLink = [
  {
    id: 1,
    name: "Mail",
    link: "mailto:divyanshsoni919@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/divv919",
    icon: FaGithub,
  },

  {
    id: 3,
    name: "Twitter",
    link: "https://x.com/divv919",
    icon: FaXTwitter,
  },
  {
    id: 4,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/divyansh-swarnkar-87746a323",
    icon: FaLinkedinIn,
  },
  {
    id: 5,
    name: "LeetCode",
    link: "https://leetcode.com/u/divyansh919/",
    icon: SiLeetcode,
  },
  {
    id: 6,
    name: "Instagram",
    link: "https://www.instagram.com/div.yansh_232/?next=%2F",
    icon: FaInstagram,
  },
];

export {
  rinkitImage,
  rinkitBio,
  rinkitContact,
  rinkitContactLink,
  rinkitName,
  rinkitShortName,
  rinkitAbout,
  rinkitLink,
  rinkitFooterLink,
};
