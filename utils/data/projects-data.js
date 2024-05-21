
import {reviewsDataConcordia, reviewsDataFlyMile} from "@/utils/data/reviews-data";
export
const
    projectsData = [
        {
            id: 1,
            name: 'Flymile.pro: Travel for Free - How?',
            description: "Fymile.pro is a flight search platform designed for credit card points enthusiasts. ",
           // tools: ["Java", 'GO', 'Python', "SpringBoot", "MongoDB", "Redis", "React", "Rest API's, JUnit, Selenium"],
            tools: ["java"],
            role: 'Co-Founder & Lead Software Engineer',
            code: '',
            demo: '',
            visitMessage:'Find Your Free Flight:',
            impact: '5000+ users, 28000+ searches, 4500+ revenue',
            link: 'https://flymile.pro/',
            pics: ['/Flymile_home.png', '/Flymile_flights.png', '/Flymile_CV_AA.png', '/Flymile_flights_open.png','/credit_cards.png','/shareFlight.png'],
            reviews: reviewsDataFlyMile
        },
        {
            id: 2,
            name: 'Concordia.courses: A platform for students',
            description: 'Concordia.courses is a platform offering course reviews and professor ratings to help students make informed academic choices.',
            //tools: ["Java", "AI", "AWS", "Spring Security", "Svelte", "Redis", "Rest API's, SpringBoot, MongoDB"],
            tools: ["java"],
            role: 'Data Engineer',
            code: '',
            demo: '',
            visitMessage:'Make Informed Academic Choices:',
            impact: '58,000+ reviews, 5,000+ courses, 1,000+ professors',
            link: 'https://concordia.courses/course/econ-203',
            pics: ['/Concordia_courses_course.png', '/Concordia_courses_prof.png','/Concordia_courses_dark.png','/Concordia_courses_AI.png', '/Concordia_courses_reviews.png','/Concordia_courses_profile.png'],
            reviews: reviewsDataConcordia
        },
        {
            id: 3,
            name: 'Replied.pro - A platform for creators',
            description: "Replied.pro connects users with influencers for paid Q&A sessions. Users pay for personalized responses, and influencers earn money.",
            //tools: [],
            tools: ["java"],
            code: '',
            role: 'Backend Engineer',
            demo: '',
            image: "",
            visitMessage:'Monetize Your Knowledge:',
            impact: 'Coming soon',
            link: 'https://replied.pro/',
            pics: ['/Coming_soon.png'],
            reviews: []
        }
    ];



// {
// id: 1,
// name: '',
// description: "",
// tools: [],
// role: '',
// code: '',
// demo: '',
// image: crefin,
//},