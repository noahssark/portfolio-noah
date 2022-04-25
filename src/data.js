import React from "react";
import { FaLinkedin } from "react-icons/fa/";
import { Link } from 'react-router-dom';

export const Icon= () => {
     return (
         <div id="middle_heading">  
            <Link to="/https://www.linkedin.com/in/noah-oladele-16b4b1123/" target="_blank">
                <FaLinkedin/>
              {/* <FontAwesomeIcon icon={FaLinkedin} size="2x"/>           */}
            </Link> 
         </div>
     );
 };



const skillsList = [
    { title: "React JS", value: 75 },
    { title: "Next js", value: 80 },
    { title: "Material UI", value: 80 },
    { title: "Styled components", value: 80 },
    { title: "Node JS ", value: 60 },
    { title: "Express JS ", value: 70 },
    { title: "Firebase", value: 70 },
    { title: "MongoDb", value: 80 },
    { title: "Postgres", value: 70 },
    { title: "Wordpress", value: 80 },

];
const projectList = [
    {
        id: 1,
        title: "Mern Invoice",
        links: {
            website: "https://twinkleinteractive1.web.app/",
            facebook: "",
            instagram: "",
        },
        technologies: ["React JS", "Node JS", "MongoDB", "Express JS"],
        backgroundImage:
            "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
        frontImage: "1.jpg",
        
    },
    {
        id: 2,
        title: "The Shoppies",
        links: {
            website: "https://twinkleinteractive1.web.app/",
            facebook: "",
            instagram: "",
        },
        technologies: ["React JS","Node JS", "Firebase"],
        backgroundImage:
            "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
        frontImage: "2.jpg",
    },
    {
        id: 3,
        title: "Admin Dashboard",
        links: {
            website: "https://twinkleinteractive1.web.app/",
            facebook: "",
            instagram: "",
        },
        technologies: ["React JS", "Node JS"],
        backgroundImage:
            "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
        frontImage: "3.jpg",
    },
    {
        id: 4,
        title: "Church Website",
        links: {
            website: "https://twinkleinteractive1.web.app/",
            facebook: "",
            instagram: "",
        },
        technologies: ["React JS", "Node JS", "Firebase","Express JS"],
        backgroundImage:
            "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
        frontImage: "church.jpg",
    },{
        id: 5,
        title: "noahssARK Chart",
        links: {
            website: "https://twinkleinteractive1.web.app/",
            facebook: "",
            instagram: "",
        },
        technologies: ["Vanilla JS", "Node JS", "Firebase"],
        backgroundImage:
            "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
        frontImage: "chat.jpg",
    },
];

const experienceList = [
    {
        id: 0,
        company: "Twinkle Interactive",
        links: {
            website: "https://twinkleinteractive1.web.app/",
            facebook: "",
            instagram: "",
        },
    },
    {
        id: 1,
        company: "Stapek Academy",
        links: {
            website: "https://www.stapekacademy.com/",
        },
    },
];

export { skillsList, projectList, experienceList };
