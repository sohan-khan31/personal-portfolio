export const profile = {
  name: "Md Sohan Khan",
  initials: "MSK",
  title: "Disaster Management Researcher",
  subtitle: "GIS & Remote Sensing Specialist",
  tagline:
    "Researching rivers, floods, and climate resilience — turning satellite data and geospatial science into solutions for vulnerable communities.",
  location: "Dhaka, Bangladesh",
  dob: "10 March 2001",
  nationality: "Bangladeshi",
  email: "sohan31du@gmail.com",
  phones: ["(+880) 1720235114", "(+880) 1310248013"],
  address:
    "Flat #4/A, House #43/1, Sakura Mansion, Nabab Katara Lane, Chankharpul, Bongshal, Dhaka–1100, Bangladesh",
  summary:
    "Aspiring to build a proficient career in disaster management and climate research, with a focus on GIS and remote sensing applications. Passionate about contributing to innovative solutions addressing environmental challenges and enhancing community resilience. Equipped with expertise in GIS & RS, I aim to work collaboratively on impactful projects, leveraging my academic and practical experiences. My goal is to join dynamic organizations where I can apply my skills in research, data analysis, and project management to drive meaningful change and foster sustainable development in vulnerable communities.",
}

export const stats = [
  { value: "3.86", label: "Master's CGPA", sub: "out of 4.00" },
  { value: "12+", label: "Journal & working papers", sub: "authored / co-authored" },
  { value: "10+", label: "Research roles", sub: "across leading institutions" },
  { value: "2", label: "Competitive fellowships", sub: "SPARRSO & NST" },
]

export const socials = [
  { label: "LinkedIn", handle: "in/sohan-khan", href: "https://www.linkedin.com/in/sohan-khan" },
  { label: "GitHub", handle: "sohan-khan31.github.io", href: "https://sohan-khan31.github.io/" },
  { label: "Google Scholar", handle: "Md Sohan Khan", href: "https://scholar.google.com/citations?user=MdSohanKhan" },
  { label: "ResearchGate", handle: "Md-Khan-311", href: "https://www.researchgate.net/profile/Md-Khan-311" },
  { label: "ORCID", handle: "0000-0001-8517-9588", href: "https://orcid.org/0000-0001-8517-9588" },
  { label: "Facebook", handle: "sohan.31t", href: "https://www.facebook.com/sohan.31t" },
]

export type EducationItem = {
  degree: string
  field: string
  institution: string
  location: string
  date: string
  grade: string
}

export const education: EducationItem[] = [
  {
    degree: "Masters of Disaster Management (MDM)",
    field: "Disaster Management",
    institution: "University of Dhaka",
    location: "Nilkhet Road, Ramna, Dhaka 1000, Bangladesh",
    date: "August 2025",
    grade: "CGPA 3.86 / 4.00",
  },
  {
    degree: "Bachelor of Disaster Management (BDM)",
    field: "Disaster Management",
    institution: "University of Dhaka",
    location: "Nilkhet Road, Ramna, Dhaka 1000, Bangladesh",
    date: "January 2024",
    grade: "CGPA 3.67 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate (H.S.C.)",
    field: "Humanities",
    institution: "Govt. H.S.S. College, Magura",
    location: "Magura 7600, Bangladesh",
    date: "2018",
    grade: "GPA 4.75 / 5.00",
  },
  {
    degree: "Secondary School Certificate (S.S.C.)",
    field: "Science",
    institution: "H.B.D.A. Ali Secondary School",
    location: "Jhenidah 7351, Bangladesh",
    date: "February 2016",
    grade: "GPA 4.89 / 5.00",
  },
]

export type ExperienceItem = {
  role: string
  org: string
  detail?: string
  date: string
  current?: boolean
  project?: string
  points: string[]
  tools?: string
}

export const experience: ExperienceItem[] = [
  {
    role: "Research Associate (RA)",
    org: "Institute of Disaster Management and Vulnerability Studies, University of Dhaka",
    date: "22 Jun 2026 – Present",
    current: true,
    project:
      "Gender Responsive Health Care System in Bangladesh: Addressing the Dual Burden Challenge of Climate Change and Health Inequities.",
    points: [
      "Research activities: EOI preparation, research proposal writing, research design, methodology development, questionnaire development, data analysis and report writing.",
      "Field & other activities: administrative and document preparation, training enumerators, qualitative data collection (FGD, KII, IDI), facility assessment, technical assistance.",
    ],
  },
  {
    role: "Junior Research Fellow (JRF)",
    org: "Bangladesh Space Research and Remote Sensing Organization (SPARRSO), Ministry of Defense (MoD)",
    detail: "Agro and Hydrometeorology Lab, SPARRSO",
    date: "22 Oct 2025 – 21 Jun 2026",
    project:
      "Elucidating the fluvial-geomorphological response mechanism to surrounding landscapes in the transboundary Brahmaputra River in Bangladesh.",
    points: [
      "Assisted supervisor's research project through research design, literature review, methodology design, data collection, data analysis and report writing.",
      "Planned and executed own research on “Assessment of Spatial Sediment Yield and Its Influence along the Lower Teesta River Basin, Bangladesh.”",
      "Prepared Monthly, Annual Progress, Annual Research Completion and Annual Reports for SPARRSO.",
    ],
    tools: "Google Earth Engine (GEE), Python, Google Colab, InVEST, ArcGIS Pro, GPS",
  },
  {
    role: "Executive",
    org: "Give Bangladesh Foundation",
    date: "01 Aug 2025 – Present",
    current: true,
    points: [
      "Coordinating organizational operations with a focus on documentation, reporting, and project support to ensure smooth execution of programs.",
      "Assisting cross-team collaboration by preparing proposals, newsletters, and reports, while contributing to strategic communication and stakeholder engagement.",
    ],
    tools: "Grant proposals, newsletters, reports, press releases",
  },
  {
    role: "Research Assistant (RA)",
    org: "Bivutivushan Sikder, Assistant Professor — IDMVS, University of Dhaka",
    date: "01 Jul 2025 – 21 Oct 2025",
    points: [
      "Assisted in research on climate change, adaptation, disaster management, vulnerability studies, and resilience building.",
      "Contributed to research papers, reports and presentations for academic and policy-oriented audiences.",
      "Collaborated with faculty, students and external stakeholders on research methodologies.",
      "Managed and maintained research databases and project files, ensuring accuracy and ethical compliance.",
    ],
  },
  {
    role: "Research Assistant (RA)",
    org: "Sustainable Research and Consultancy Limited (SRCL) | UNDP",
    date: "16 Mar 2025 – 08 Apr 2025",
    points: [
      "Conducted field data collection (FGDs) for UNDP with Pond Sand Filter (PSF) and Reverse Osmosis (RO) users across 10 Upazilas of Satkhira, Khulna and Bagerhat districts.",
      "Conducted Key Informant Interviews (KIIs) with Assistant and Sub-Assistant Engineers of the Department of Public Health Engineering (DPHE).",
      "Prepared reports on drinking water sources, acceptance of PSF & RO systems, gender dynamics, technical feasibility, effluent management and recommendations.",
    ],
  },
  {
    role: "Research Assistant (RA)",
    org: "Bangladesh Disaster Preparedness Centre (BDPC) | BRAC",
    date: "02 Nov 2024 – 06 Nov 2024",
    project: "Training Needs Assessment of Local Disaster Management Committees.",
    points: [
      "Conducted field data collection for BRAC focusing on UDMC and WDMC in Jamalpur District.",
      "Conducted Training Need Assessment (TNA) for UDMC & WDMC members through FGD and KII and prepared reports.",
    ],
  },
  {
    role: "Intern",
    org: "GIS & Remote Sensing Division, Center for Environmental and Geographic Information Services (CEGIS)",
    date: "11 Jul 2023 – 29 Nov 2023",
    points: [
      "Gathered data sources including historical land use data, satellite imagery and demographic information.",
      "Supported mapping and spatial analysis and prepared comprehensive reports on riverbank erosion.",
    ],
  },
  {
    role: "Research Assistant (RA)",
    org: "Dr. Maksudur Rahman, Professor — Dept. of Geography & Environment, University of Dhaka",
    date: "10 Jul 2023 – 30 Dec 2023",
    project: "BRAC NDC Review Project (CRHI at Coastal Zone).",
    points: [
      "Conducted Key Informant Interviews (KII) to gather qualitative insights from stakeholders.",
      "Transcribed and analyzed qualitative data to derive actionable findings on CRHI in the coastal zone.",
    ],
  },
  {
    role: "Teaching Assistant (TA)",
    org: "GIS Lab, IDMVS, University of Dhaka",
    detail: "DMC 305: Geographic Information System (Lab)",
    date: "09 Jul 2023 – 30 Sep 2023",
    points: [
      "Offered technical expertise in GIS & geospatial tools, software and databases for research and projects.",
      "Provided software solutions to students including ArcGIS, ArcGIS Pro and other GIS applications.",
    ],
  },
  {
    role: "Deputy Coordinator & Design Head",
    org: "HQ Operations Team, Give Bangladesh Foundation",
    date: "01 Apr 2023 – Present",
    current: true,
    points: [
      "Leading creation of professional designs for reports, annual/monthly reports, newsletters and project proposals.",
      "Supporting cross-functional teams, mentoring members and coordinating documentation tasks to meet deadlines.",
    ],
  },
  {
    role: "Data Enumerator and Analyst",
    org: "Gender Responsive Resilience & Intersectionality in Policy & Practice (GRRIPP) | South Asia",
    date: "25 Aug 2022 – 30 Aug 2022",
    points: [
      "Conducted in-depth interviews on the impacts of flash-flood in north-east Bangladesh with a focus on gender and intersectionality.",
      "Analyzed and synthesized data into reports to guide gender-responsive and inclusive policies.",
    ],
  },
  {
    role: "Instructor",
    org: "MIT Coaching Center, Malibagh",
    detail: "Geography, Economics, General Science, English",
    date: "04 Jan 2022 – 30 Jul 2022",
    points: [
      "Conducted interactive classes, simplifying complex topics and providing personalized support.",
      "Guided students in exam preparation through targeted practice, progress monitoring and counseling.",
    ],
  },
  {
    role: "Data Enumerator",
    org: "United Nations International Children's Emergency Fund (UNICEF)",
    date: "05 Sep 2020 – 20 Sep 2020",
    points: [
      "Conducted remote field data collection to verify beneficiaries for the Flood Anticipatory Action program (CERF 2021) in Northern Bangladesh.",
    ],
  },
]

export type VolunteerItem = {
  role: string
  org: string
  date: string
  points: string[]
}

export const volunteering: VolunteerItem[] = [
  {
    role: "Advisor and Instructor",
    org: "IDMVS Students Forum, University of Dhaka",
    date: "03 Feb 2025 – Present",
    points: [
      "Mentor students on academic and professional development in disaster management and vulnerability studies, including GIS and creative methodologies.",
      "Conduct workshops on GIS techniques, data visualization and creative tools.",
    ],
  },
  {
    role: "Member",
    org: "YouthMappers, University of Dhaka Chapter",
    date: "16 Nov 2024 – Present",
    points: [
      "Contributed to OpenStreetMap by mapping vulnerable areas and critical infrastructure for disaster management and resilience.",
      "Participated in workshops and collaborated with global YouthMappers chapters.",
    ],
  },
  {
    role: "Volunteer",
    org: "Give Bangladesh Foundation",
    date: "26 Nov 2022 – Present",
    points: [
      "Engaged in event planning, fieldwork and community outreach to support social impact projects and project implementation.",
    ],
  },
  {
    role: "Volunteer",
    org: "Disaster Management Studio, IDMVS, University of Dhaka",
    date: "07 Aug 2021 – 20 Dec 2022",
    points: [
      "Served as R&D member to plan and implement research programmes.",
      "Organized workshops, seminars and training on disaster risk reduction and response.",
    ],
  },
  {
    role: "Information & Technology (IT) Secretary",
    org: "School of Ghasful, University of Dhaka",
    date: "15 Oct 2019 – 30 Sep 2023",
    points: [
      "Designed and managed ID cards, certificates and digital assets to streamline administrative processes.",
      "Maintained and updated the organization's database and event management records.",
    ],
  },
]

export const journalArticles = [
  "Azad, R. A., Fahim, T. C., Bhattacharjee, B., Khan, M. S. & Shuvo, S. R. (2026). Water insecurity in multi-ethnic communities of the Chittagong Hill Tracts, Bangladesh. Natural Hazards [Submitted].",
  "Bhattacharjee, B., Sikder, B. B., Fahim, T. C., Khan, M. S. & Islam, A. (2026). Climate-induced internal displacement in coastal Bangladesh: Socioeconomic vulnerabilities and spatiotemporal dynamics. Natural Hazards, 122(218).",
  "Jihan, M. A. T., Popy, S., Rasul, G., Khan, M. S. & Sheikh, N. (2026). Evaluation of NEX-GDDP–CMIP6 multi-model (29 GCMs): Historical and future climate variability and extremes in South Asia (1951–2100). Scientific Reports [Under Review].",
  "Khan, M. S. & Faisal, B. M. R. (2026). Assessment of sediment yield at lower Teesta River Basin of Bangladesh using geospatial technique. Journal of Mountain Science [Submitted].",
  "Khan, M. S., Sikder, B. B., Madhubi, J. J., Bhattacharjee, B., Roy, B., Shuvo, S. R., Shammu, I. J., Rajon, T. M. & Shahrujjaman, S. M. (2026). Influence of hydrogeological factors on Jamuna riverbank erosion in Sirajganj, Bangladesh [Working Paper].",
  "Mondal, B. K., Sikder, B. B., Bhattacharjee, B., Shahrujjaman, S. M. & Khan, M. S. (2026). Water security challenges in coastal Bangladesh: A multi-dimensional approach. Sustainable Water Resources Management, 12(28).",
  "Rahman, S. S., Khan, M. S., Maruf, M. S. H., Taiba, S. T., Hasan, M. Y. & Kafy, A. A. (2025). Remote sensing-based temporal and regression analysis of temperature and rainfall trends integrating ERA-5 and CHIRPS data. Remote Sensing Applications: Society and Environment [Submitted].",
  "Rajon, T. M., Khan, M. S. & Shammu, I. J. (2026). Sleep quality and psychological distress among undergraduate students of a Bangladeshi university [Working Paper].",
  "Rasul, G., Jihan, M. A. T., Khan, M. S., Sheikh, N. & Popy, S. (2025). SHAP-driven machine learning approaches for LST modeling using surface indices in Chuadanga. Scientific Reports [Under Review].",
  "Rasul, G., Khan, M. S., Shammu, I. J., Sheikh, N. & Jihan, M. A. T. (2026). Impact of land use and land cover changes on urban ecosystem service value in Khulna City Corporation, Bangladesh [Working Paper].",
  "Shahrujjaman, S. M., Sikder, B. B., Zahid, D. & Khan, M. S. (2025). Knowledge, attitude and preparedness to respond to heat wave among informal workers in Dhaka, Bangladesh. Progress in Disaster Science, 26, 100436.",
  "Sikder, B. B., Khan, M. S., Bhattacharjee, B., Roy, B., Chowdhury, A., Sarker, S. K. & Karmaker, S. C. (2026). Spatiotemporal dynamics and predictive modeling of climatic trends in Bangladesh using NASA Power dataset [Working Paper].",
]

export const reports = [
  "Jesmin, J., Sadiya, I., Sayma, T., Khan, M. S., et al. (2026, February). Annual Report 2025. Give Bangladesh Foundation.",
  "Khan, M. S. (2024). Assessment of Bankline Shifting, Changes in Land Use & Land Cover, and Impacts of Jamuna Riverbank Erosion: A GIS and Remote Sensing Study in Chauhali Upazila of Sirajganj District [Undergraduate Internship Report]. IDMVS, University of Dhaka / CEGIS.",
  "Khan, M. S. (2025). Spatiotemporal Analysis of Jamuna River Channel Shifting and Its Impacts on Riverine Communities: A Study on Kazipur, Sirajganj [Master's Thesis]. IDMVS, University of Dhaka.",
  "Mumun, T., Khan, M. S., et al. (2025). Annual Report 2024. Give Bangladesh Foundation.",
  "Mumun, T., Khan, M. S., Antar, F. A. S., Islam, F. (2024). Annual Report 2023. Give Bangladesh Foundation.",
]

export const posters = [
  "Khan, M. S. & Faisal, B. M. R. (2026, Jan 25). Assessment of soil erosion using geospatial techniques: A case of the lower Teesta River Basin, Bangladesh [Poster]. Research Fair & Career Festival, Faculty of Earth and Environmental Science, University of Dhaka.",
  "Khan, M. S. & Faisal, B. M. R. (2026, Apr 11). Assessment of sediment yield using geospatial techniques: A case of the lower Teesta River Basin, Bangladesh [Poster]. National Seminar on Climate & Disaster Resilience, IDMVS, University of Dhaka.",
]

export type AwardItem = {
  title: string
  org: string
  date: string
  desc?: string
}

export const grants: AwardItem[] = [
  {
    title: "SPARRSO Fellowship 2025-26",
    org: "Bangladesh Space Research and Remote Sensing Organization (SPARRSO), MoD",
    date: "15 Oct 2025 – 21 Jun 2026",
    desc: "Awarded for research on flood risk assessment and river channel shifting using remote sensing in flood-prone north-western Bangladesh. Research: “Assessment of Spatial Sediment Yield and Its Influence along the Lower Teesta River Basin, Bangladesh.”",
  },
  {
    title: "National Science and Technology (NST) Fellowship 2024-25",
    org: "Ministry of Science and Technology (MoST), Government of Bangladesh",
    date: "01 Jul 2024 – 30 Jun 2025",
    desc: "Awarded for MS thesis research on extent and impacts of river channel shifting and remote sensing applications in riverbank erosion-prone north-western Bangladesh. Thesis: “Spatiotemporal Analysis of Jamuna River Channel Shifting and Its Impacts on Riverine Communities: A Study on Kazipur, Sirajganj.”",
  },
  {
    title: "Dhaka University Postgraduation Scholarship (General) 2024-25",
    org: "University of Dhaka",
    date: "02 Feb 2025",
    desc: "Recognition based on good conduct, regular attendance and satisfactory academic progress during the undergraduate level (2019–2022).",
  },
  {
    title: "Junior School Certificate (JSC) Scholarship (General) 2014-15",
    org: "Board of Secondary and Higher Secondary Education, Jessore",
    date: "01 Mar 2014",
    desc: "Recognition based on satisfactory academic results in the JSC Exam held in 2013.",
  },
]

export const achievements: AwardItem[] = [
  {
    title: "3rd Position — Beat the Heat: The Student Heat Action Contest 2025",
    org: "Bangladesh Red Crescent Society, supported by IFRC & American Red Cross",
    date: "28 Jun 2025",
    desc: "Intra-University Photography Contest.",
  },
  {
    title: "Participation Certificate — 10th 35AWARDS International Photography Award",
    org: "35AWARDS",
    date: "01 Jun 2025",
  },
  {
    title: "Top 6% Best Photos — 35AWARDS: Winged Insects contest",
    org: "35AWARDS",
    date: "08 Apr 2025",
  },
  {
    title: "Volunteer of the Month (VoM), February 2025",
    org: "Give Bangladesh Foundation",
    date: "Feb 2025",
  },
  {
    title: "“A Dedicated Difference-Maker: Coolest One” Award",
    org: "Give Bangladesh Foundation",
    date: "27 Dec 2024",
    desc: "For reliable and consistent efforts throughout 2024.",
  },
  {
    title: "Volunteer of the Month (VoM), February 2024",
    org: "Give Bangladesh Foundation",
    date: "Feb 2024",
  },
  {
    title: "Champion — Graphic Design Course on Basics of Adobe Illustrator",
    org: "Give Bangladesh Foundation",
    date: "23 Jul 2023",
  },
  {
    title: "Introduction to GIS Mapping — 99.24% grade",
    org: "University of Toronto (Coursera)",
    date: "23 Nov 2022",
  },
  {
    title: "Participant — Centennial Photography Competition 2021",
    org: "University of Dhaka",
    date: "06 Oct 2021",
  },
  {
    title: "2nd Position — Music Competition (Nazrul Sangeet)",
    org: "Inter-Upazila Cultural Fest",
    date: "2014",
  },
  {
    title: "1st Position — Drawing Competition",
    org: "Primary School",
    date: "2011",
  },
]

export type SkillGroup = {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    category: "Spatial Analysis",
    items: [
      "ArcGIS Pro",
      "ArcGIS (ArcMap)",
      "Google Earth Engine (GEE)",
      "QGIS",
      "Google Earth Pro",
      "OpenStreetMap",
      "GPS Mapping & Visualization",
    ],
  },
  {
    category: "Programming & Statistics",
    items: [
      "Python",
      "Google Colab",
      "PyCharm",
      "SPSS",
      "Jamovi",
      "R",
      "InVEST",
      "Mermaid",
    ],
  },
  {
    category: "Office Applications",
    items: ["MS Office 365", "MS Word", "LaTeX", "MS Excel", "PowerPoint", "Outlook", "Teams", "Google Suite"],
  },
  {
    category: "Research",
    items: [
      "Literature Review",
      "Methodology Development",
      "Data Analysis",
      "Proposal & Report Writing",
      "EOI Writing",
      "Inception Report",
      "Budgeting",
      "Questionnaire Development",
      "Field Supervision",
      "Transcribing",
    ],
  },
  {
    category: "Referencing",
    items: ["Zotero", "Mendeley", "EndNote", "Mybib"],
  },
  {
    category: "Graphic Design",
    items: ["Adobe Illustrator", "Adobe Photoshop", "Canva", "Affinity", "Figma"],
  },
  {
    category: "Video Editing",
    items: ["Adobe Premiere Pro", "DaVinci Resolve", "iMovie", "CapCut"],
  },
  {
    category: "Data Collection & Other",
    items: ["KoboToolbox", "Mapillary", "Photography (Camera & Mobile)"],
  },
]

export const softSkills = [
  "Communication",
  "Adaptability",
  "Time Management",
  "Risk Management",
  "Teamwork",
]

export const training = [
  { year: "2026", title: "Spanish Elementary Course", org: "Institute of Modern Languages (IML), University of Dhaka" },
  { year: "2025", title: "Your First Bite into Graphic Design: A Canva Guide — Advanced Edition", org: "Give Bangladesh Foundation" },
  { year: "2025", title: "Your First Bite into Graphic Design: A Canva Guide", org: "Give Bangladesh Foundation" },
  { year: "2025", title: "Fundamentals of GIS", org: "University of California, Davis (Coursera)" },
  { year: "2025", title: "Data Analysis with Python", org: "IBM (Coursera)" },
  { year: "2023", title: "OpenStreetMap (OSM) Validation using JOSM", org: "YouthMappers International" },
  { year: "2023", title: "Adobe Illustrator Basic Course", org: "Give Bangladesh Foundation" },
  { year: "2022", title: "Introduction to GIS Mapping", org: "University of Toronto (Coursera)" },
  { year: "2022", title: "ArcGIS Pro Basics", org: "ESRI" },
  { year: "2022", title: "GIS Basics", org: "ESRI" },
  { year: "2022", title: "Presentation & Public Speaking", org: "10 Minute School" },
  { year: "2022", title: "Fire Safety Awareness", org: "10 Minute School" },
  { year: "2022", title: "Fire Safety Awareness & Training", org: "Bangladesh Fire Service and Civil Defense (BFSCD)" },
  { year: "2020", title: "Excel Skills for Business: Essentials", org: "Macquarie University (Coursera)" },
  { year: "2020", title: "Structuring Machine Learning Projects", org: "DeepLearning.AI (Coursera)" },
]

export const languages = [
  { name: "Bengali", note: "Mother tongue", levels: "Native proficiency" },
  { name: "English", note: "C1 – C2", levels: "Listening C1 · Reading C2 · Spoken Prod. B2 · Interaction C1 · Writing C2" },
  { name: "Spanish", note: "B1 – C1", levels: "Listening B2 · Reading C1 · Spoken Prod. B1 · Interaction B1 · Writing B2" },
  { name: "Hindi", note: "B2 – C1", levels: "Listening C1 · Writing B2 · Spoken Prod. B2" },
]

export const researchInterests = [
  "Geomorphology",
  "Hydrology",
  "Urban Climate",
  "Disaster Risk Reduction (DRR)",
  "River Morphodynamics & Flood",
  "Water Security",
  "GIS & Remote Sensing",
  "Climate Change",
  "Atmospheric Research",
]

export const personalInterests = [
  "Design & Creativity",
  "Volunteering & Social Engagement",
  "Photography",
  "Acquiring New Knowledge",
  "Travel & Field Visits",
  "Singing",
  "Cooking",
]

export const conferences = [
  {
    date: "13–14 Dec 2025",
    title: "National Coastal Convention 2025",
    org: "Participatory Research & Action Network (PRAAN), Bangladesh Military Museum",
    note: "Participated on behalf of Give Bangladesh Foundation, a youth partner of PRAAN.",
  },
]

export type ReferenceItem = {
  name: string
  role: string
  org: string
  phone: string
  email: string
}

export const references: ReferenceItem[] = [
  {
    name: "Dilara Zahid, PhD",
    role: "Associate Professor",
    org: "IDMVS, University of Dhaka",
    phone: "+8801726266666",
    email: "dilarazahid@du.ac.bd",
  },
  {
    name: "Bivutivushan Sikder",
    role: "Assistant Professor",
    org: "IDMVS, University of Dhaka",
    phone: "+8801717342625",
    email: "bbs@du.ac.bd",
  },
  {
    name: "Dr. B. M. Refat Faisal",
    role: "Principal Scientific Officer (PSO)",
    org: "Agro & Hydro Meteorology Division, SPARRSO",
    phone: "+8801919491335",
    email: "refatfaisal@yahoo.com",
  },
  {
    name: "Md. Saifullah Mithu",
    role: "Co-Founder and President",
    org: "Give Bangladesh Foundation",
    phone: "+8801819230486",
    email: "saif.mithu@gmail.com",
  },
]

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "awards", label: "Awards" },
  { id: "contact", label: "Contact" },
]
