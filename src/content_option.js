import  Profile_Image  from "./assets/images/B612_20230822_105245_794_adobe_express.png";
import logo_img from "./assets/images/8953549_163.png";
import typography_img from "./assets/images/Untitled-1-06.jpg";
import vc_img from "./assets/images/English Visiting Card-01.jpg";
import posters_img from "./assets/images/Untitled-1-03.jpg";
import header_img from "./assets/images/web header_Mesa de trabajo 1 copia.jpg";
import ui_img from "./assets/images/UI Design.png";
import certificate_img from "./assets/images/127.jpg";

const logotext = "Mujahid Islam";
const meta = {
    title: "Mujahid Islam",
    description: "I am Mujahid Islam, Graphic Designer and React JS frontend developer Internee",
};

const introdata = {
    title: "I’m Mujahid Islam",
    animated: {
        first: "Graphics Designer",
        second: "Website Developer",
        third: "React JS Internee",
    },
    description: "Passionate, Self Motivated & Hard Working fresh graduate. ",
    your_img_url: Profile_Image,
};

const dataabout = {
    title: "A bit about my self",
    aboutme: "Passionate, Self Motivated & Hard Working fresh graduate looking for Internship in Fields of Web & Mobile app development to enhance skills. Knowledgeable in user interface, testing, and debugging processes.",
};
const worktimeline = [{
        jobtitle: "Graphics Designer Internee",
        where: "Career Institute",
        date: "2020",
    },
    {
        jobtitle: "Data Entry Operator",
        where: "Shopping Mall",
        date: "2022",
    },
    {
        jobtitle: "Customer Support Representative",
        where: "Call Centre",
        date: "2023",
    },
];

const skills = [{
        name: "HTML, CSS, JS & React",
        value: 90,
    },
    {
        name: "Graphics Designing",
        value: 100,
    },
    {
        name: "Video Editing",
        value: 90,
    },
    {
        name: "Microsoft Office Tools",
        value: 100,
    },
    {
        name: "Urdu Typing",
        value: 100,
    },
];

const services = [{
        title: "Graphics Designing",
    },
    {
        title: "Volunteer Development Program",
    },
    {
        title: "SDG Community Service",
    },
];
const dataportfolio = [{
        img: logo_img,
        description: "Logo For a brand",
    },
    {
        img: typography_img,
        description: "Typography poster",
    },
    {
        img: vc_img,
        description: "Visiting Card of a Client designed by me",
    },
    {
        img: posters_img,
        description: "Two posters designed by me",
    },
    {
        img: header_img,
        description: "Website header designed by me",
    },
    {
        img: ui_img,
        description: "UI designed for a client",
    },

    {
        img: certificate_img,
        description: "Certificate of Participation in Poster Competition",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "mujahidislam7601@gmail.com",
    YOUR_FONE: "+92 324 8667751",
    description: "Feel Free to contact any time 24/7",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_tnk915r",
    YOUR_TEMPLATE_ID: "template_po2zw9c",
    YOUR_USER_ID: "zcpj-yz-ek97YK4Gz",
};

const socialprofils = {
    whatsapp: "https://wa.link/et8uh8",
    facebook: "https://www.facebook.com/mujahidkhan7601",
    linkedin: "https://pk.linkedin.com/in/mujahid-islam-32b2791aa",
    twitter: "https://x.com/Mujahidkhan7601?s=08",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};