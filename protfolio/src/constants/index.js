import { profolio, blogged, Morahlin} from '../assets';
import headfirstJS from '../assets/headfirstJS.jpg';
import jsVisually from '../assets/jsVisually.jpg';
import secrets from '../assets/secrets.png';
import smarter from '../assets/smarter.jpg';
import data from '../assets/data.jpg';
import eloquent from '../assets/eloquent.jpg';
import novice from '../assets/novice.jpg';
import modern from '../assets/modern.jpg';
import css from '../assets/css.png';
import steal from '../assets/steal.png';
import atomic_habits from '../assets/atomic_habits.png';
import greatestSalesman from '../assets/greatestSalesman.jpg';
import harry from '../assets/harry.png';
import Improbable from '../assets/Improbable.jpg';
import vulture from '../assets/vulture.jpg';
import Book from '../assets/Book.png';
import figmaland from '../assets/figmaland.png';
import menu_app from '../assets/menu_app.png';
import clone from '../assets/clone.png';
import sketch from '../assets/sketch.png';  
import globe from '../assets/globe.png';
import image from '../assets/image.png';




import {
  CSS,
  figma,
  Github,
  html,
  javascript,
  nodejs,
  reactjs,
  redux,
  tailwind,
  chatgpt,
  discord,
  duolingo,
  firebase,
  framer,
  graphql,
  next,
  slack,
  notion,
  ts,
  trello,
  vercel,
  vscode,
  netlify,
  spotify

} from '../assets/tech'

export const projects = [
  {
    name: "slider-crazy-effects",
    description:
      "Slider Crazy Effects is a visually dynamic project featuring a custom-built image/content slider with eye-catching animations and transitions.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: profolio,
    source_code_link: "https://github.com/morahlin/Slider-Crazy-Effects",
    live_preview_link: "https://slider-crazy-effects-lyart.vercel.app/"
  },
  {
    name: "Blog",
    description:
      "A fully functional blog platform built with ReactJS and Firebase Firestore. Users can sign in with Google to create and manage blog posts4.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "firestore",
        color: "pink-text-gradient",
      },
    ],
    image: blogged,
    source_code_link: "https://github.com/morahlin/blog",
    live_preview_link: "https://morahlinblog.vercel.app/"
  },



  
  {
    name: "Gradient Card",
    description:
      "Gradient Card is a visually engaging UI component designed to showcase content within a stylish gradient background. Built using ReactJS and TailwindCSS.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: Morahlin,
    source_code_link: "https://github.com/morahlin/Gradient-card",
    live_preview_link: "https://gradient-card.vercel.app/"
  },
{

 name: "landing page",
 description:
   "A landing page is a standalone web page designed to convert visitors into taking a specific action. It's often used for marketing campaigns, product launches, or promotions.",
 tags: [
   {
     name: "reactJS",
     color: "blue-text-gradient",
   },
   {
     name: "framer-motion",
     color: "green-text-gradient",
   },
   {
     name: "aos",
     color: "pink-text-gradient",
   },
 ],
 image: figmaland,
 source_code_link: "https://github.com/morahlin/landing-page",
 live_preview_link: "https://landing-page-five-bice-40.vercel.app/#"
},
{
 name: "MØRÅHŁĮŇ wheels",
 description:
   "Car websites are online platforms that provide information, services, or resources related to cars. They cater to various needs, including car buying, selling, reviews, news, and resources.",
 tags: [
   {
     name: "reactJS",
     color: "blue-text-gradient",
   },
   {
     name: "tailwindcss",
     color: "green-text-gradient",
   },
   {
     name: "figma",
     color: "pink-text-gradient",
   },
 ],
 image: menu_app,
 source_code_link: "https://github.com/morahlin/car-websites",
 live_preview_link: "https://car-websites-bay.vercel.app/#home"
},
{
 name: "Confetti",
 description:
   "A coffee website can serve various purposes, such as showcasing coffee-related products or services, sharing coffee knowledge, or providing a platform for coffee enthusiasts to connect. ",
 tags: [
   {
     name: "reactjs",
     color: "blue-text-gradient",
   },
   {
     name: "tailwindcss",
     color: "green-text-gradient",
   },
   {
     name: "figma",
     color: "pink-text-gradient",
   },
 ],
 image: globe,
 source_code_link: "https://github.com/morahlin/coffee",
 live_preview_link: "https://morahlincoffee.vercel.app/#"
},
{
 name: "Morahlin tracker",
 description:
   "Morahlin Tracker looks like a personal dashboard you built for managing your daily life. When you open it, it welcomes you by name and shows everything you’re tracking in one place.",
 tags: [
   {
     name: "reactjs",
     color: "blue-text-gradient",
   },
   {
     name: "tailwindcss",
     color: "green-text-gradient",
   },
   {
     name: "figma",
     color: "pink-text-gradient",
   },
 ],
 image: image,
 source_code_link: "https://github.com/morahlin/MorahlinTracker",
 live_preview_link: "https://morahlin-tracker.vercel.app/login.html"
},




];
const know = [
  {
    name: 'About me',
    description: 'Who I am and what I do.',
    linkName: 'Visit site',
    id: 'about',
  },
  {
    name: 'Tech Stack',
    description: 'The dev tools and apps I use.',
    linkName: 'Visit site',
    id: 'stack',
  },
  {
    name: 'Bookshelf',
    description: "Books and pieces of wisdom I've enjoyed reading",
    linkName: 'Visit site',
    id: 'bookshelf',
  },
  
    {
    name: 'gallery',
    description: 'A pic of my projects.',
    linkName: 'Visit site',
    id: 'gallery',
  },
];

const Footlinks = [
  {
    name: 'Links',
    links: [
      {
        name: 'About',
        id: '/about',
      },
      {
        name: 'Projects',
        id: '/#projects',
      },
      {
        name: 'Tech Stack',
        id: '/stack',
      },
      {
        name: 'Contact',
        id: '/contact',
      },
      {
        name: 'Blog',
        id: '/blog'
      }
    ]
  },
  {
    name: 'Elsewhere',
    links: [
      {
        name: 'Email',
        id: 'mailto:morahlinmorahmorahlin@gmail.com',
      },
    
      {
        name: 'GitHub',
        id: 'https://github.com/morahlin',
      },
      {
        name: 'Facebook',
        id: 'https://www.facebook.com/profile.php?id=100094192264039',
      },
    ]
  }
];


const shelf = [
    headfirstJS,
    jsVisually,
    secrets,
    smarter,
    data,
    eloquent,
    novice,
    modern,
    css,
    steal,
    atomic_habits,
    greatestSalesman,
    harry,
    Improbable,  
    vulture,
    Book,
]

const tech = {
  dev: [
    {
      logo: reactjs,
      name: 'ReactJS',
      description: 'Web Framework',
    },
    {
      logo: javascript,
      name: 'JavaScript',
      description: 'Web Framework',
    },
    {
      logo: next,
      name: 'NextJS',
      description: 'Web Framework',
    },
    {
      logo: nodejs,
      name: 'NodeJS',
      description: 'Web Framework',
    },
    {
      logo: ts,
      name: 'TypeScript',
      description: 'Web Framework',
    },
    {
      logo: html,
      name: 'HTML5',
      description: 'Web Framework',
    },
    {
      logo: CSS,
      name: 'CSS3',
      description: 'CSS',
    },
    {
      logo: tailwind,
      name: 'TailwindCSS',
      description: 'CSS',
    },
  
    {
      logo: figma,
      name: 'Figma',
      description: 'Design',
    },
    {
      logo: graphql,
      name: 'GraphQL',
      description: 'Database',
    },
    {
      logo: firebase,
      name: 'Firebase',
      description: 'Database',
    },
    {
      logo: vercel,
      name: 'Vercel',
      description: 'Deployment',
    },
    {
      logo: netlify,
      name: 'Netlify',
      description: 'Deployment',
    },
    {
      logo: framer,
      name: 'Framer Motion',
      description: 'Animation',
    },
    {
      logo: vscode,
      name: 'VSCode',
      description: 'Editor',
    },
  ],

  app: [
   
    {
      logo: Github,
      name: 'Github',
      description: 'Version Control',
    },
    {
      logo: chatgpt,
      name: 'ChatGPT',
      description: 'Productivity',
    },
    {
      logo: discord,
      name: 'Discord',
      description: 'Communication',
    },
    {
      logo: duolingo,
      name: 'Duolingo',
      description: 'Education',
    },
    {
      logo: spotify,
      name: 'Spotify',
      description: 'Music',
    }
  ]
};

export { 
  know,
  Footlinks,
  tech,
  shelf
};