import { Project, Skill, EducationItem, ExperienceItem, CertificationItem, AchievementItem, ServiceItem } from './types';

export const PERSONAL_INFO = {
  name: 'Bhuvanesh T',
  titles: [
    'AI & Data Science Student',
    'Full Stack Developer',
    'AI/ML Developer',
    'Problem Solver'
  ],
  email: 'bhuvanesht87@gmail.com',
  phone: '+91 73056 94525',
  leetcode: 'https://leetcode.com/Bhuvanesh-T',
  github: 'https://github.com/buvi08-ctrl',
  linkedin: 'https://linkedin.com/in/bhuvanesh-thirupathi',
  location: 'Tamilnadu, India',
  summary: 'AI & Data Science student with strong skills in Python, Java, SQL, and full-stack development. Experienced in developing AI/ML and IoT-based applications through internships and academic projects using Flask, React.js, Node.js, and OpenCV. Passionate about building innovative software solutions and solving real-world problems.'
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Speech-to-Text Web Application',
    description: 'A responsive real-time speech processing web application that accurately transcribes audio to text. Optimized backend response latency for seamless transcription and won 3rd Place in Innovation Day 2025.',
    tech: ['Flask', 'Web Speech API', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/buvi08-ctrl',
    liveUrl: '#',
    category: 'Full Stack',
    image: 'speech_recognition'
  },
  {
    id: 2,
    title: 'Plate Vision: AI-Driven License Plate Recognition (ALPR)',
    description: 'An AI-powered license plate recognition system designed for real-time automatic vehicle detection, license plate detection, and OCR extraction. Deployed in a GPU-enabled Linux environment for rapid real-time inference.',
    tech: ['YOLOv5', 'OpenCV', 'Flask', 'Python'],
    githubUrl: 'https://github.com/buvi08-ctrl',
    liveUrl: '#',
    category: 'AI & ML',
    image: 'license_plate'
  },
  {
    id: 3,
    title: 'Smart Automation in IoT-Based Physiotherapy Instrument',
    description: 'An innovative IoT physiotherapy device incorporating an ESP32 microcontroller, sensors, and servo motors. Tracks joint angles and monitors patient range of motion in real-time, sending data back for rehabilitation progress logging.',
    tech: ['IoT', 'ESP32', 'Arduino', 'Sensors', 'Servo Motors'],
    githubUrl: 'https://github.com/buvi08-ctrl',
    liveUrl: '#',
    category: 'IoT',
    image: 'iot_physio'
  },
  {
    id: 4,
    title: 'AI Electricity Theft Detection System',
    description: 'A machine learning system tailored for data analytics and predictive modeling of electrical distribution. Implemented Random Forest and XGBoost classifiers to flag anomalous consumption patterns and combat power theft.',
    tech: ['Python', 'Machine Learning', 'Random Forest', 'XGBoost', 'Data Analytics'],
    githubUrl: 'https://github.com/buvi08-ctrl',
    liveUrl: '#',
    category: 'AI & ML',
    image: 'electricity_theft'
  },
  {
    id: 5,
    title: 'MERN Stack Smart Campus Management System',
    description: 'A comprehensive, multi-module campus portal designed for real-time student record audits, automated course management, and administrator panels. Features end-to-end user authentication and RESTful resource endpoints.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    githubUrl: 'https://github.com/buvi08-ctrl',
    liveUrl: '#',
    category: 'Full Stack',
    image: 'campus_management'
  }
];

export const SKILLS: Skill[] = [
  // Programming & Scripting
  { name: 'Python', category: 'programming', iconName: 'Cpu' },
  { name: 'Java', category: 'programming', iconName: 'Coffee' },
  { name: 'JavaScript', category: 'programming', iconName: 'Code' },
  { name: 'SQL', category: 'programming', iconName: 'Database' },

  // Frontend
  { name: 'HTML5', category: 'frontend', iconName: 'Html5' },
  { name: 'CSS3', category: 'frontend', iconName: 'Css3' },
  { name: 'Tailwind CSS', category: 'frontend', iconName: 'Wind' },
  { name: 'React.js', category: 'frontend', iconName: 'Atom' },
  { name: 'Bootstrap', category: 'frontend', iconName: 'LayoutGrid' },

  // Backend
  { name: 'Node.js', category: 'backend', iconName: 'Server' },
  { name: 'Express.js', category: 'backend', iconName: 'Cpu' },
  { name: 'Flask', category: 'backend', iconName: 'Terminal' },
  { name: 'REST APIs', category: 'backend', iconName: 'Network' },

  // Database
  { name: 'MongoDB', category: 'database', iconName: 'Database' },
  { name: 'MySQL', category: 'database', iconName: 'TableProperties' },
  { name: 'SQLite', category: 'database', iconName: 'Database' },

  // Tools
  { name: 'Git', category: 'tools', iconName: 'GitBranch' },
  { name: 'GitHub', category: 'tools', iconName: 'Github' },
  { name: 'Docker', category: 'tools', iconName: 'Container' },
  { name: 'VS Code', category: 'tools', iconName: 'Monitor' },
  { name: 'Postman', category: 'tools', iconName: 'Send' },

  // AI & ML
  { name: 'OpenCV', category: 'ai_ml', iconName: 'Eye' },
  { name: 'YOLOv5', category: 'ai_ml', iconName: 'Scan' },
  { name: 'Machine Learning', category: 'ai_ml', iconName: 'Brain' },
  { name: 'Deep Learning', category: 'ai_ml', iconName: 'Layers' },
  { name: 'Natural Language Processing', category: 'ai_ml', iconName: 'MessageSquareText' }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 1,
    degree: 'B.Tech Artificial Intelligence and Data Science',
    institution: 'Nandha Engineering College, Erode (VI Semester)',
    duration: 'Sept 2023 – Apr 2027',
    gpa: '7.70 CGPA',
    details: [
      'Strong academic foundation in machine learning, statistical modeling, data structures, and algorithms.',
      'Actively involved in AI research, project development, and technical workshops.'
    ]
  },
  {
    id: 2,
    degree: 'HSC Second Year Education',
    institution: 'A.E.S Higher Secondary School',
    duration: 'June 2021 – Apr 2022',
    gpa: '79%',
    details: [
      'Completed secondary education with focus on Mathematics, Physics, and Computer Science.',
      'Developed strong analytical and computational foundations.'
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: 'Data Analyst Intern',
    company: 'SAN Technovation Pvt Ltd',
    location: 'Perundurai, Erode',
    duration: 'July 2025',
    description: [
      'Cleaned, processed, and analyzed structured datasets using Python and advanced SQL queries.',
      'Built interactive data visualization dashboards to present key performance indicators (KPIs).',
      'Generated actionable insights and reports to support critical management business decisions.'
    ]
  },
  {
    id: 2,
    role: 'AI/ML Intern',
    company: 'F5 Coders',
    location: 'Trichy, Tamilnadu',
    duration: 'Dec 2025 – Jan 2026',
    description: [
      'Built an AI-powered spam email detection system leveraging Natural Language Processing (NLP) techniques and Machine Learning algorithms.',
      'Integrated a Python Flask backend with a user-friendly frontend web portal and a secure SQLite database.',
      'Enabled rapid real-time classification of emails into spam or ham categories using optimized predictive models.'
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 1,
    title: 'Data Analysis with Power BI',
    issuer: 'Workshop by Mr. Sapthagiri',
    date: 'Feb 2025',
    iconName: 'BarChart3'
  },
  {
    id: 2,
    title: 'Python for Machine Learning',
    issuer: 'Coursera / edX',
    date: '2024',
    iconName: 'Award'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 1,
    title: '3rd Place Winner',
    description: 'Awarded 3rd Place at Innovation Day 2025 for developing the real-time Speech-to-Text Web Application.',
    iconName: 'Trophy'
  },
  {
    id: 2,
    title: '80+ LeetCode Problems',
    description: 'Successfully solved over 80 algorithmic problems covering Data Structures and Algorithms on LeetCode.',
    iconName: 'Award'
  },
  {
    id: 3,
    title: 'Team Collaboration',
    description: 'Led and collaborated within multi-disciplinary teams in hackathons and college technical symposia.',
    iconName: 'Users'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Full Stack Development',
    description: 'End-to-end development of modern web applications using React, Express, Node.js, and Flask, with fully responsive layouts.',
    iconName: 'AppWindow'
  },
  {
    id: 2,
    title: 'AI Solutions & Integrations',
    description: 'Building custom AI applications, text transcribers, vision detection systems, and automation pipelines tailored for real-world problems.',
    iconName: 'Sparkles'
  },
  {
    id: 3,
    title: 'Machine Learning Modeling',
    description: 'Designing, training, and evaluating ML classifiers, regressions, and neural networks using Random Forest, XGBoost, and YOLO.',
    iconName: 'Brain'
  },
  {
    id: 4,
    title: 'REST API Development',
    description: 'Creating robust, scalable, secure, and documented API endpoints in Express.js or Flask to support modern web applications.',
    iconName: 'Webhook'
  },
  {
    id: 5,
    title: 'Data Analytics & Dashboards',
    description: 'Transforming raw datasets into actionable insights with Python, SQL, and creating interactive visualization models.',
    iconName: 'BarChart'
  }
];
