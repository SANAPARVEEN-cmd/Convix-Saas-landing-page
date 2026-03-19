const links = ["Explore", "Company", "Support"];

const reviewImgs = [
  {
    id: 1,
    name: "Gabriel Romero",
    image: new URL("../assets/reviews/img-1.webp", import.meta.url),
  },
  {
    id: 2,
    name: "Sarena Burton",
    image: new URL("../assets/reviews/img-2.webp", import.meta.url),
  },
  {
    id: 3,
    name: "LaDorian Ray",
    image: new URL("../assets/reviews/img-3.webp", import.meta.url),
  },
  {
    id: 4,
    name: "Madison Lott",
    image: new URL("../assets/reviews/img-4.webp", import.meta.url),
  },
  {
    id: 5,
    name: "Shannon Sutton",
    image: new URL("../assets/reviews/img-5.webp", import.meta.url),
  },
];

const appStatsImgs = [
  {
    id: 1,
    name: "@mario.lopez",
    description:
      "I started using Convix in 2026 and it transformed my marketing.\
      Its AI tools help me grow faster, automate campaigns, and reach the right audience at the right time.",
    image: new URL("../assets/appStats/img-1.webp", import.meta.url),
  },
  {
    id: 2,
    name: "@xuifang",
    description:
      "Convix made marketing simple and effective for my business.\
      The automation and smart insights helped me increase conversions,\
      save time, and scale my campaigns without stress.",
    image: new URL("../assets/appStats/img-2.webp", import.meta.url),
  },
  {
    id: 3,
    name: "@shannon_sutton",
    description:
      "Since switching to Convix, my results have improved dramatically.\
      Its data-driven approach and powerful analytics allow me to make \
      better decisions and achieve consistent growth every month.",
    image: new URL("../assets/appStats/img-3.webp", import.meta.url),
  },
];

const appStats = [
  {
    id: 1,
    value: "300",
    description: "creators",
  },
  {
    id: 2,
    value: "12.1k",
    description: "users",
  },
  {
    id: 3,
    value: "9.11k",
    description: "sessions",
  },
];

const features = [
  {
    id: 1,
    name: "Engagement",
    description: "Engage on a deeper level with the fans that matter most",
    icon: new URL("../assets/features/engagement.svg", import.meta.url),
  },
  {
    id: 2,
    name: "Autonomy",
    description: "Full autonomy on when and who you chose to talk",
    icon: new URL("../assets/features/autonomy.svg", import.meta.url),
  },
  {
    id: 3,
    name: "Free",
    description: "No monthly fees or annual subscription fees",
    icon: new URL("../assets/features/free.svg", import.meta.url),
  },
  {
    id: 4,
    name: "Earn",
    description: "Add a new source of income that you can control",
    icon: new URL("../assets/features/earn.svg", import.meta.url),
  },
];

const footerCols = [
  {
    id: 1,
    heading: "About",
    links: ["How it works", "Company", "Help & support"],
  },
  {
    id: 2,
    heading: "For creators",
    links: ["Getting paid", "Onboarding"],
  },
  {
    id: 3,
    heading: "Learn",
    links: ["Blog", "Careers", "Affiliates"],
  },
  {
    id: 4,
    heading: "Support",
    links: ["Service status", "Cookies policy", "Privacy policy"],
  },
];

const footerSocials = [
  {
    id: 1,
    name: "Meta (formerly facebook)",
    logo: new URL("../assets/socials/facebook.svg", import.meta.url),
  },
  {
    id: 2,
    name: "X (formerly twitter)",
    logo: new URL("../assets/socials/twitter.svg", import.meta.url),
  },
  {
    id: 3,
    name: "Instagram",
    logo: new URL("../assets/socials/instagram.svg", import.meta.url),
  },
];

const pricingCards = [
  {
    mostPopular: false,
    program: "Personal",
    price: {
      monthly: "Free",
      annual: "Free",
    },
    subheading: "Explore our product for free",
    bullets: [
      "20 free fantasy reports",
      "Limited access to AI-writer",
      "max 15 hours per month",
      "14 outreach tokens",
    ],
    cta: "Start free",
  },
  {
    primary: true,
    mostPopular: true,
    program: "Professional",
    price: {
      monthly: "20",
      annual: "228",
    },
    subheading: "For the ambitious solo professional",
    bullets: [
      "50 free fantasy reports",
      "Unlimited access to AI-writer",
      "max 35 hours per month",
      "72 outreach tokens",
    ],
    cta: "Start creating",
  },
  {
    mostPopular: false,
    program: "Team",
    price: {
      monthly: "699",
      annual: "7968",
    },
    subheading: "Licenses for up to 16 members",
    bullets: [
      "1200 free fantasy reports",
      "Access to AI-writer M2",
      "Unlimited hours per month",
      "435 outreach tokens",
    ],
    cta: "Sign up your team",
  },
];

const testimonials = [
  {
    program: "professional",
    description:
      "Yadora has been pivotal in helping me connect with others that share my same passions!",
    image: new URL(
      "../assets/testimonials/testimonial-7.webp",
      import.meta.url
    ),
    name: "Maria Sanchez",
    title: "CEO & Founder at Creation LAB's",
  },
  {
    program: "team",
    description:
      "Sharing my skills with clients around the world has never been easier. Very affordable solution for our team.",
    image: new URL(
      "../assets/testimonials/testimonial-6.webp",
      import.meta.url
    ),
    name: "Nick Ridley",
    title: "Product lead at EducationWave",
  },
  {
    program: "personal",
    description:
      "I love how easy and intuitive the platform is. Took me less than a day to get up and started!",
    image: new URL(
      "../assets/testimonials/testimonial-10.webp",
      import.meta.url
    ),
    name: "Asia Moore",
    title: "Head of HR at inspireUSA",
  },
  {
    program: "personal",
    description:
      "Having access to 50 free fantasy reports per month allows my small business to generate leads each month",
    image: new URL(
      "../assets/testimonials/testimonial-2.webp",
      import.meta.url
    ),
    name: "Tina Rodriguez",
    title: "Tech lead at GE accelerator",
  },
  {
    program: "team",
    description:
      "The free version of Yadora is generous with its offering and has helped fuel our business to new heights!",
    image: new URL(
      "../assets/testimonials/testimonial-3.webp",
      import.meta.url
    ),
    name: "Jai Ahuja",
    title: "GForce Labs  trader & Founder",
  },
  {
    program: "team",
    description:
      "Yadora’s Customer service has been very gracious in helping me navigate the platform. Loving it so far!",
    image: new URL(
      "../assets/testimonials/testimonial-1.webp",
      import.meta.url
    ),
    name: "Amy Young",
    title: "Creative director at FertilityHealth",
  },
  {
    program: "personal",
    description:
      "Getting my music business off the ground has been a breeze with the help of Yadora’s outreach accelerator.",
    image: new URL(
      "../assets/testimonials/testimonial-5.webp",
      import.meta.url
    ),
    name: "Tanner Hall",
    title: "Musician and Solo-prenuer",
  },
  {
    program: "team",
    description:
      "I wish i have known about this platform a year ago. The AI writer empowers our team to edit and revise their work easily.",
    image: new URL(
      "../assets/testimonials/testimonial-8.webp",
      import.meta.url
    ),
    name: "Diego Perez",
    title: "Analyst at SimplyMade",
  },
];

export {
  links,
  reviewImgs,
  appStatsImgs,
  appStats,
  features,
  footerCols,
  footerSocials,
  pricingCards,
  testimonials,
};
