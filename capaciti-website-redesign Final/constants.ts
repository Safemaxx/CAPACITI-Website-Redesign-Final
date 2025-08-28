import type { TeamMember, Programme, Testimonial, BlogPost, NewsEvent } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  { 
    name: 'Chanel Oldfield', 
    role: 'Head of CAPACITI', 
    imageUrl: '/images/Chanel11.JPG', 
    linkedinUrl: 'https://www.linkedin.com/in/chaneloldfield?originalSubdomain=za' 
  },
  { 
    name: 'Chesarae K Pillay', 
    role: 'Head of Information Technology Systems & Solutions', 
    imageUrl: '/images/Chesarae3.JPG', 
    linkedinUrl: 'https://www.linkedin.com/in/chesarae?originalSubdomain=za' 
  },
  { 
    name: 'Kelly Maroon', 
    role: 'Head of Talent at CAPACITI', 
    imageUrl: '/images/Kelly1.JPG', 
    linkedinUrl: 'https://www.linkedin.com/in/kelly-m-655249158?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' 
  },
  { 
    name: 'Nasheeta Du Toit', 
    role: 'Head of Corporate Partner', 
    imageUrl: '/images/Nash4.JPG', 
    linkedinUrl: 'https://za.linkedin.com/in/nasheeta-du-toit-90641039?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile' 
  },
];


export const PROGRAMMES: Programme[] = [
  { 
    title: 'Software Development', 
    description: 'Master full-stack development with our intensive bootcamp covering everything from JavaScript to cloud deployment.',
    stats: { duration: '12 Months', placementRate: '92%' },
    imageUrl: 'https://picsum.photos/seed/software/400/300',
    videoUrl: '/images/software development.mp4'
  },
  { 
    title: 'Data Science & AI', 
    description: 'Unlock the power of data. Learn Python, machine learning, and data visualization to solve real-world problems.',
    stats: { duration: '12 Months', placementRate: '88%' },
    imageUrl: 'https://picsum.photos/seed/data/400/300',
    videoUrl: '/images/data science and ai.mp4'
  },
  { 
    title: 'UI/UX Design', 
    description: 'Create beautiful, user-centric digital experiences. Learn design thinking, prototyping, and user testing.',
    stats: { duration: '12 Months', placementRate: '95%' },
    imageUrl: 'https://picsum.photos/seed/design/400/300',
    videoUrl: '/images/uxd.mp4'
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'CAPACITI transformed my career. The hands-on training and mentorship were invaluable in landing my dream job.',
    author: 'Alex Johnson',
    role: 'Software Engineer at TechCorp'
  },
  {
    quote: 'The curriculum is incredibly relevant to industry needs. I felt confident and prepared from day one at my new company.',
    author: 'Samantha Lee',
    role: 'Data Scientist at Innovate LLC'
  },
  {
    quote: 'An amazing community and a life-changing experience. The support from instructors and peers is second to none.',
    author: 'David Chen',
    role: 'UX Designer at Creative Solutions'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'The Future of Work: Adapting to AI',
    summary: 'How artificial intelligence is reshaping industries and what skills you need to stay ahead of the curve.',
    imageUrl: '/images/adapting%20to%20AI.png',
    tags: ['AI', 'Future Tech']
  },
  {
    title: 'Cracking the Coding Interview: A Guide',
    summary: 'Our top tips and strategies for navigating technical interviews and showcasing your problem-solving skills.',
    imageUrl: '/images/Cracking%20the%20code%20interview.png',
    tags: ['Careers', 'Interview']
  },
  {
    title: 'Why Soft Skills Matter in Tech',
    summary: 'Beyond the code: exploring the importance of communication, teamwork, and leadership for a successful tech career.',
    imageUrl: '/images/soft%20skills.png',
    tags: ['Development', 'Skills']
  }
];

export const NEWS_EVENTS: NewsEvent[] = [
    {
        title: 'Anual Tech Summit 2025',
        date: 'November 26 2025',
        description: 'Join us for a day of inspiring talks, workshops, and networking with industry leaders.',
        imageUrl: '/images/download.jpg'
    },
    {
        title: 'CAPACITI Partners with FutureLabs',
        date: 'November 15 2025',
        description: 'A new partnership to expand our programme offerings and provide more opportunities for aspiring tech professionals.',
        imageUrl: 'https://picsum.photos/seed/event2/400/300'
    },
];

export const PARTNER_LOGOS: string[] = [
    '/logo-placeholder-1.svg',
    '/logo-placeholder-2.svg',
    '/logo-placeholder-3.svg',
    '/logo-placeholder-4.svg',
    '/logo-placeholder-5.svg',
];