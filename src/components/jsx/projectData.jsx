import React from "react";

const projectData = [
    {id: 0,
    projectName:'Anime Recommendations with Machine Learning',
    projectDescription:'A web application uses a trained machine learning model to recommend users new anime series and movies. The web application works by allowing the user to rate anime series and movies they have watched. Based on the anime titles and their ratings, the machine learning model recommends new anime titles to the user. The machine learning model utilized by the web application was trained using an acquired anime dataset from Kaggle. The web application uses the Firestore database by Firebase to retrieve anime titles.',
    projectType:'Web Application',
    image:require('../../assets/images/animerecommendation.png'),
    githubLink:'https://github.com/nuebie/animes2watch',
    demoLink:'https://nuebie.github.io/Anime-Recommendation-Static/'
    },
    {id: 1,
    projectName:'Online Retail Store Management System',
    projectDescription:'A web-based retail store management system which could be used by both store owners and customers. Store owners can utilize the system to showcase the available products in their store, manage inventory, and handle store orders. On the other hand, customers can use the system to browse through the assortment of products, place orders, and conveniently track their order status.',
    projectType:'Web Application',
    image:require('../../assets/images/retail.png'),
    githubLink:'https://github.com/nuebie/Online-Retail-Store-Management-Sytem',
    demoLink:''
    },
    {id: 2,
    projectName:'Online Dental Clinic Management System',
    projectDescription:'A web-based dental clinic management system can be utilized by the staff and clients of a dental clinic. Users can authenticate themselves and be classified as either an admin or a regular user within the system. Admin users have the capability to perform administrative tasks within the application, such as managing clinic appointments and client treatments. Regular users can browse through the services, book appointments, and view their personal records via the application. The data of the web application is stored in a MySQL database.',
    projectType:'Web Application',
    image:require('../../assets/images/clinic.png'),
    githubLink:'https://github.com/nuebie/Dental-Clinic-Management-System',
    demoLink:''
    },
    {id: 3,
    projectName:'Recipe Roulette',
    projectDescription:'The web application shows different recipes based on the ingredients provided by the user. The recipes are stored in the Firestore database by Firebase, which is accessed by the web application.',
    projectType:'Web Application',
    image:require('../../assets/images/reciperoulette.png'),
    githubLink:'https://github.com/nuebie/Recipe-Roulette',
    demoLink:''
    },
    {id: 4,
    projectName:'Art Gallery',
    projectDescription:'A web application that showcases a few popular artworks made by well-known artist.',
    projectType:'Web Application',
    image:require('../../assets/images/artgallery.png'),
    githubLink:'https://github.com/nuebie/Art-Gallery',
    demoLink:'https://nuebie.github.io/Art-Gallery/'
    },
    {id: 5,
    projectName:'Suicide Ideation Detection',
    projectDescription:'As part of my senior thesis, we trained four different ensemble machine learning models that can classify text as either "at risk" or "not at risk" when it comes to suicide ideation. The machine learning models were trained using our own dataset. The dataset was created by scraping tweets from Twitter using common English and Filipino phrases indicating suicide ideation. The tweets were preprocessed and annotated by a professional.',
    projectType:'Machine Learning',
    image:require('../../assets/images/suicideideation.png'),
    githubLink:'',
    demoLink:''
    },
    {id: 6,
    projectName:'Dark Alley',
    projectDescription:'A casual 2D endless runner mobile game was created using Unity. The mechanics were inspired by the popular mobile game Flappy Bird, where the player has to constantly tap their screen to avoid obstacles.',
    projectType:'Video Game',
    image:require('../../assets/images/darkalley.png'),
    githubLink:'',
    demoLink:'https://www.youtube.com/watch?v=XdT5YDxG-RM'
    },

]

export default projectData;