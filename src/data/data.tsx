import {
  AcademicCapIcon,
  // CalendarIcon,
  // DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Mohamed Mongy',
  description: "My Career Path",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Mohamed Mongy.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a  <strong className="text-stone-100">iOS Software Engineer</strong>, currently working
        at <strong className="text-stone-100">SameSystem</strong> helping build a modern, high imapact Applications
      </p>
    </>
  ),
  actions: [
    // {
    //   href: 'src/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: DownloadIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `An enthusiastic, passionate software engineer with 5+ years of experience, 
  eager to learn and share knowledge. 
  showcases exceptional skills in common programming languages and technology tools.
   Experienced in several technologies including Swift, RxSwift,SwiftUI, Python, PostgreSQL, JavaScript, and NodeJs 
   with current preference and expertise in iOS.`,
  aboutItems: [
    {label: 'Location', text: 'Cairo, Egypt', Icon: MapIcon},
    // {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Egyptian', Icon: FlagIcon},
    {label: 'Interests', text: 'Football, Reading', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Tanta', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'SameSystem', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Arabic',
        level: 10,
      },
      {
        name: 'English',
        level: 8,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Typescript',
        level: 6,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Swift',
        level: 10,
      },
      {
        name: 'Flutter',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://timbaker.me',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2015',
    location: 'Tanta University',
    title: 'Bachelor of Materials Engineering',
    content: (<p></p>),
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2020  - Present',
    location: 'SameSystem',
    title: 'iOS Software Engineer',
    content: (
      <p>
        I am currently working as a Software Engineer at SameSystem. 
        We are building a reatil, modern, mobile Application.
        Here I'm responsible for building the core technologies and features to allow our clients to plan and manage their employess shifts,
        and begin collecting revenue with less effort.

        <p> Frontend: Swift, UIKit, GraphQL , VIPER architecture. </p>
      </p>
    ),
  },
  {
    date: 'January 2019 - January 2020',
    location: 'Algorithmz',
    title: 'iOS Software Engineer',
    content: (
      <p>
        We are building is a streaming App that offers a wide variety of TV shows, movies, anime.
        You can watch as much as you want, whenever you want. all for one low monthly price.
        There's always something new to discover.

        <p> Frontend: RxSwift, UIKIt, MVVM architecture . </p>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: "",
  testimonials: [],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'In years of experience, I contributed to numerous projects that helped clients achieve their goals. I am available for taking on new work. See my contact information below and get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'mohamedmongy99@gmail.com',
      href: 'mailto:mohamedmongy99@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Cairo, Egypt',
      href: 'https://goo.gl/maps/goVovWnVJj4KxTpR9',
    },
    {
      type: ContactType.Github,
      text: 'mohamedmongy',
      href: 'https://github.com/mohamedmongy',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/mohamedmongy'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/mohamed-mongy-416447134/'},
];
