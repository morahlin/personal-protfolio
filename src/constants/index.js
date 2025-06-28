import { profolio, blogged, Morahlin } from '../assets';

export const projects = [
  {
    name: "slider-crazy-effects",
    description:
      "Slider Crazy Effects is a visually dynamic project featuring a custom-built image/content slider with eye-catching animations and transitions. Designed using modern frontend tools like React, TailwindCSS, and Framer Motion, this slider pushes beyond the basics — offering smooth interactions.",
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
      "A fully functional blog platform built with ReactJS and Firebase Firestore. Users can sign in with Google to create and manage blog posts. The app features real-time database integration.",
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
      "Gradient Card is a visually engaging UI component designed to showcase content within a stylish gradient background. Built using ReactJS and TailwindCSS, the card combines smooth color transitions with modern layout techniques to enhance user experience and interface aesthetics..",
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
      name: 'LinkedIn',
      id: '',
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

]

export { 
    know,
  
    Footlinks
};