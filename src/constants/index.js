import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Inspiration Mentor",
  "Motivation Coach",
  "Life Guide",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Domain-Specific Chatbot Development",
    text: "Begin development on domain-specific chatbots tailored to areas such as coding, fitness, cooking, finance, and more, leveraging OpenAI's technology.",
    date: "April 2024",
    status: "In Progress",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "1",
    title: "Voice Assistance Integration",
    text: "Integrate voice assistance functionality, allowing users to interact with chatbots via voice commands for a seamless experience.",
    date: "May 2024",
    status: "Planned",
    imageUrl: roadmap1,
  },
  {
    id: "2",
    title: "Specialized Chatbot Deployment",
    text: "Deploy domain-specific chatbots into the ExpertEase app, providing users with access to expert advice and guidance in various fields.",
    date: "May 2024",
    status: "Planned",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Personalized User Profiles",
    text: "Implement personalized user profiles, allowing users to tailor their preferences and receive customized recommendations from chatbots.",
    date: "June 2024",
    status: "Planned",
    imageUrl: roadmap4,
  },

];


export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Start with limited daily tokens and access to 3 chatbot assistants.",
    price: "0",
    features: [
      "Limited daily tokens for accessing the chatbot",
      "Access to 3 chatbot assistants",
      "Personalized recommendations based on your preferences",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Unlock unlimited tokens and access to unlimited chatbot assistants.",
    price: "49/m",
    features: [
      "Unlimited tokens for accessing the app",
      "Access to unlimited chatbot assistants",
      "Advanced AI chatbot for complex queries",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Tailored solutions for your business needs with custum chatbot.",
    price: null,
    features: [
      "Custom AI chatbot to meet specific requirements",
      "Advanced analytics for deeper insights",
      "Dedicated account management and support",
    ],
  },
];


export const benefits = [
  {
    id: "0",
    title: "Streamlined Access",
    text: "Effortlessly access a variety of specialized chatbots, each catering to your unique needs, whether it's coding advice, fitness tips, or more.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    },
    {
    id: "1",
    title: "Tailored Guidance",
    text: "Receive personalized assistance that fits your goals and preferences, ensuring every interaction is meaningful and helpful.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    },
    {
    id: "2",
    title: "Dynamic Conversations",
    text: "Engage in natural and intuitive conversations with our AI-powered assistants, gaining valuable insights and advice in real-time.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    },
    {
    id: "3",
    title: "Comprehensive Support",
    text: "Get answers to your questions quickly without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    },
    {
    id: "4",
    title: "Ask Anything",
    text: "Find answers to your questions rapidly without the hassle of searching through various sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    },
    {
    id: "5",
    title: "Improve Every Day",
    text: "Our app uses natural language processing to understand your queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    }
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
