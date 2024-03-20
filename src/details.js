import esqido from "./media/esqido.mp4"
import flixy from "./media/flixy.mp4"
import nykaa from "./media/nykaa.mp4"
import zomato from "./media/zomato.mp4"
import clearout from './media/clearout.mp4'
import quizzie from "./media/quizzie.mp4"



export const details = {
    firstname: "Charles",
    lastname: "Galwyn",
    navList: ["Home", "About", "Skills", "Work", "Contact"],
    scrollPosition: [0, 545, 1070, 1730, 3400],
    className: ["introDiv", "aboutContainer", "skillContainer", "workDiv", "contactDiv"],
    linkedInLink: "https://www.linkedin.com/in/charles-galwyn-80343b267/",
    githubLink: "https://github.com/charlesgalwyn",
    instagramLink: "",
    mailLink: "mailto: charlesgalwyn@gmail.com",
    techStack: [
        {
            name: "HTML",
            img: "https://img.icons8.com/color/512/html-5--v1.png"
        },
        {
            name: "CSS",
            img: "https://img.icons8.com/fluency/512/css3.png"
        },
        {
            name: "JavaScript",
            img: "https://img.icons8.com/color/512/javascript.png"
        },
        {
            name: "Java",
            img: "https://img.icons8.com/ios-filled/512/java-coffee-cup-logo.png"
        },
        {
            name: "React",
            img: "https://img.icons8.com/office/512/react.png"
        },
        {
            name: "Material UI",
            img: "https://img.icons8.com/color/512/material-ui.png"
        },
        {
            name: "Chakra UI",
            img: "https://img.icons8.com/color/512/chakra-ui.png"
        },
        {
            name: "Node JS",
            img: "https://img.icons8.com/fluency/512/node-js.png"
        },
        {
            name: "BootStrap",
            img: "https://img.icons8.com/color/512/bootstrap.png",

        },
        {
            name: "Github",
            img: "https://img.icons8.com/glyph-neue/512/github.png"
        },
        {
            name: "Express JS",
            img: "https://img.icons8.com/ios/512/express-js.png"
        },
        {
            name: "Mongo DB",
            img: "https://img.icons8.com/color/512/mongodb.png"
        }

    ],
    projects: [

        {
            name: "Clearout.io",
            github: "",
            live: "https://app.clearout.io",
            type: "Individual",
            tech: ["React", "Chakra UI", "Node JS", "Mongo DB", "Express JS"],
            img: clearout,
            description: "Experience seamless Clearout.io website with our MERN project, combining the power of MongoDB, Express.js, React, and Node.js for robust and scalable web applications"
        },

        {
            name: "Quizzie App",
            github: "https://github.com/charlesgalwyn/charlesgalwyn-gmail.com_cuvette_final_evaluation_june",
            live: "https://cuvette-quizzie.vercel.app",
            type: "Individual",
            tech: ["React", "Chakra UI", "Node JS", "Mongo DB", "Express JS"],
            img: quizzie,
            description: "This Application is created as a part of Cuvette Evaluation .This Application allows user to create quizzes and share them . Users can view their quizzes and analytics ."
        },

        {
            name: "Zomato Replica",
            github: "https://media1.tenor.com/images/c4e7e3d30058ef3f2cb9901a50527696/tenor.mp4?itemid=27241143",
            live: "https://clone-zomato-project.netlify.app/",
            type: "Collaborative",
            tech: ["HTML", "CSS", "JavaScript"],
            img: zomato,
            description: "Food Ordering Platform where user can order food easily. This application allows user to order food and track their order . This project is developed as a part of Masai Curriculum."
        },

        {
            name: "Bohemian Traders",
            github: "https://github.com/charlesgalwyn/Bohemiantraders-website-clone",
            live: "https://bohemian-clone-team9.netlify.app/",
            type: "Collaborative",
            tech: ["React", "Chakra UI", "Node JS", "Mongo DB", "Express JS"],
            img: nykaa,
            description: "E-Commerce Web Application of Dresses.Users can order products from Application. This project is a collaborative project built using MERN stack technologies within a span of one week ."
        }

    ]

}