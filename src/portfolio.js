// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Anvitha's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Anvitha Lolla Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Anvitha Lolla",
  logo_name: "AshutoshHathidara",
  subTitle:
    "A Master's student in IT with a specialization in Security at Arizona State University. Recieved Gold Medal for academic excellence at ASU. I've a deep commitment to mastering cutting-edge technologies and advanced techniques in system, network, and application security.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ashutosh1919",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh1919/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:ashutoshhathidara98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Security Engineer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Conducting comprehensive vulnerability assessments using tools like Nmap, Nessus, and Metasploit, reducing exploitable vulnerabilities by up to 50%",
        "⚡  Implementing secure coding practices and parameterized queries to mitigate cross-site scripting and SQL injection risks.",
        "⚡ Training employees in phishing simulations and enhancing their security awareness, leading to a significant reduction in phishing vulnerability",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cloud Security Engineer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing and implementing cloud security solutions using AWS and Microsoft Azure to protect large-scale infrastructures.",
        "⚡ Utilizing frameworks like OWASP Top 10 and NIST standards to ensure compliance and robust security postures.",
        "⚡ Enhancing DDoS mitigation and threat detection with advanced techniques like IP rate limiting, regex pattern matching, and real-time monitoring using tools like Azure Sentinel.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Secure Software Developer ",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Developed secure software applications, incorporating best practices in secure coding to prevent common vulnerabilities.",
        "⚡ Conducted code reviews and security assessments to ensure compliance with security standards and guidelines.",
        "⚡ Integrated security measures into the software development lifecycle, enhancing overall application security",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Penetration Tester",
      fileName: "DesignImg",
      skills: [
        "⚡  Executed penetration tests using tools like Metasploit, ProRat, and Kali Linux, revealing critical security flaws and improving endpoint security.",
        "⚡Conducted thorough network intrusion detection and analysis using Wireshark, Snort, and tcpdump, identifying and mitigating advanced cyber threats.",
        "⚡ Provided detailed incident response reports and remediation plans, enhancing overall organizational security posture.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Arizona State University",
      subtitle: "MS in Information Technology",
      logo_path: "asu.png",
      alt_name: "Arizona State University",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have been awarded the With Distinction honor for outstanding academic excellence.",
        "⚡ I have taken a variety of courses related to security and data analytics, including network forensics, advanced system security, and analyzing big data.",
        "⚡ Additionally, I have worked on numerous forensic case studies, solving many threat investigation cases alongside my professor,",
      ],
      website_link: "https://asuonline.asu.edu/",
    },
    {
      title: "GITAM University",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "gitam_logo.jpg",
      alt_name: "GITAM University",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ Awarded GITAM Merit Based Scholarship for 6 semesters due to rank in top 1% among 1100 students.",
        "⚡ Conducted workshops and seminars on cyber threats and security as the lead of CySec.",
        "⚡ Volunteered and Organised bootcamps and cultural fests as a member of ACM and GUSAC.",
        "⚡ Facilitated lab sessions together with professors for the courses like Operating Systems, Linux Systems and Java Programming, by assisting and enhancing students' understanding of Linux os and Java.",
      ],
      website_link: "https://www.gitam.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Mastercard - Cybersecurity Job Simulation",
      subtitle: "- Cybersecurity",
      logo_path: "mastercard_logo.png",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_aKuvPFxMBqpnq6zHb_1716862105974_completion_certificate.pdf",
      alt_name: "Mastercard",
      color_code: "#8C151599",
    },
    {
      title: "Google Cybersecurity Professional Certification",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/BQT7EWS6L9FP",
      alt_name: "Google",
      color_code: "#D5EDF8",
    },
    {
      title: "Introduction to Cybersecurity Tools & Cyber Attacks",
      subtitle: "Dee Dee Collette",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/H5LYDKQHXBEP",
      alt_name: "IBM",
      color_code: "#0C9D5899",
    },
    {
      title: "Cryptography",
      subtitle: "- Jonathan Katz",
      logo_path: "umbc_logo.jpeg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/LUGTYWWC7QJV",
      alt_name: "UMBC",
      color_code: "#1F70C199",
    },
    {
      title: "Python Data Structures",
      subtitle: "- Charles Russell ",
      logo_path: "universityofmichigan_logo.jpeg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/N7P43X2V9YBA",
      alt_name: "Michigan",
      color_code: "#D83B0199",
    },
    {
      title: "Machine Learning Algorithms",
      subtitle: "- Anna Koop",
      logo_path: "logo_amii_coursera.png",
      certificate_link:
        "https://coursera.org/share/2eca6c39ea8486e821c0b8db536a89eb",
      alt_name: "amii",
      color_code: "#1F70C199",
    },
    {
      title: "Software Development Processes and Methodologies",
      subtitle: "- Software Development",
      logo_path: "universityogminisota_logo.png",
      certificate_link:
        "https://coursera.org/share/dc0422c679a3e8b847f80db767883d51",
      alt_name: "Minisota",
      color_code: "#0C9D5899",
    },
    {
      title: "Object-Oriented Design",
      subtitle: "- Kenny Wong",
      logo_path: "universityofalbama_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/ZKZAMS8BHNC2",
      alt_name: "Object-orient design",
      color_code: "#00000099",
    },
    {
      title: "Data Visualization",
      subtitle: "- John C. Hart",
      logo_path: "illinois_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/8ETGVFRPLDEA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Database Management Essentials",
      subtitle: "- Michael Mannino",
      logo_path: "universityofcolorado_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/8MV4R45YQ8UY",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Open Source Software Development Methods",
      subtitle: "- Jerry Cooperstein",
      logo_path: "linuxfoundation_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/MRE2HWR8BLTL",
      alt_name: "Linux FOundation",
      color_code: "#e5daca",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Volunteership",
  description:
    "I have helped clients enhance their security postures through comprehensive assessments and effective vulnerability management. My experience includes conducting Nmap scans, executing penetration tests, and automating AWS WAF deployments. I have trained employees on phishing simulations and implemented secure coding practices. Additionally, I co-founded CYSEC-GITAM, leading over 400 members to improve their cybersecurity skills through mentorship and practical training.",

  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internship",
      experiences: [
        // {
        //   title: "Security Engineer",
        //   company: "",
        //   company_url: "https://www.linkedin.com/company/smartknower/",
        //   logo_path: "smartknower_logo.jpeg ",
        //   duration: "May 2021 - Aug 2021",
        //   location: "Bengaluru, Karnataka",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        {
          title: "Security Engineer Intern",
          company: "Smartknower",
          company_url: "https://www.delhivery.com/",
          logo_path: "smartknower_logo.jpeg",
          duration: "May 2021 - Aug 2021",
          location: "Banglore, India",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Member",
          company: "Women in CyberSecurity (WiCyS)",
          company_url: "https://www.wicys.org/",
          logo_path: "wicys_logo.png",
          duration: "Sept 2022 - Present",
          location: "United States",
          description:
            "Consistently participating in WiCyS webinars, embracing a range of cybersecurity topics that broaden my perspective and skills. Earned the Tier 1 WiCyS SANS Security Training Scholarship and qualified to the Tier 2 CTF Challange round.Received the mWISE Conference 2023 scholarship.",
          color: "#4285F4",
        },
        {
          title: "Operations Team Member",
          company:
            "GUSAC- GITAM (Deemed to be) University Science and Activity Center",
          company_url:
            "https://www.linkedin.com/company/gusac/posts/?feedView=all",
          logo_path: "gusac_logo.jpeg",
          duration: "Oct 2020 - Apr 2022 ",
          location: "Visakhapatnam, Andhra Pradesh",
          description:
            "As an operational team member, promoted the club and encouragaed new ideas from students of different branches by providing resources and guidance in their projects. Conducted seminars on emerging technologies to Freshman and junior year students, helping them finding and exploring their passions and interests. Led the Arts and Creative Team in organizing events and fests like GUSAC Carnival 2019 and more.",
          color: "#D83B01",
        },
        {
          title: "Student Member",
          company: "ACM, Association for Computing Machinery",
          company_url: "https://www.acm.org/chapters/students",
          logo_path: "acm_logo.svg",
          duration: "Oct 2018 - Apr 2022 ",
          location: "Visakhapatnam, Andhra Pradesh",
          description:
            "Participated in Hackathons and various workshops on topics like Ethical Hacking, IoT and more. Organized and Volunteered Python Bootcamps.",
          color: "#000000",
        },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
