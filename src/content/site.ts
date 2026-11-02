/* ─── Profile ──────────────────────────────────────────────────────────
   Every string the site renders lives here. Update this file to change
   copy, projects, or links — the components only handle layout.
   ────────────────────────────────────────────────────────────────────── */

export type SocialId = "email" | "instagram" | "linkedin" | "github";

export const contact = {
  label: "Information Systems Student · UMN",
  headline: "Let's Connect",
  blurb:
    "Have a project idea or want to talk about data and technology? Feel free to reach out.",
  cta: "Email Me",
  email: "onetania1@gmail.com",
  linkedin:
    "https://www.linkedin.com/in/aaron-laurens-misael-wantania-43754b301/",
};

/** Leave `href` empty until the profile URL is confirmed — empty entries are hidden. */
export const socials: { id: SocialId; label: string; href: string }[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/aronlmw.936/",
  },
  { id: "linkedin", label: "LinkedIn", href: contact.linkedin },
  { id: "email", label: "Email", href: `mailto:${contact.email}` },
  { id: "github", label: "GitHub", href: "https://github.com/ONETANIA" },
];

export const activeSocials = socials.filter((social) => social.href);

export const nav = [
  { label: "Projects", href: "#work", count: "09" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  label: contact.label,
  firstName: "Aaron",
  lastName: "Wantania",
  role: "Information Systems Student",
  blurb:
    "Interested in data, technology, and building useful digital solutions through academic projects.",
  cta: { label: "Explore My Work", href: "#work" },
  navCta: { label: "Let's Connect", href: "#contact" },
};

/* ─── Academic journey ───────────────────────────────────────────────── */

export const journey = {
  meta: "UMN · 2024 — Present",
  roles: [
    {
      org: "D'Information System Community Outbound (DISCO) XIII",
      role: "Chairperson",
      period: "Jan 2026 — Present",
      summary:
        "Coordinating division leads, event timelines, and communication with lecturers, HIMSI, and external partners.",
    },
    {
      org: "UMN Taekwondo",
      role: "Vice Chairperson",
      period: "Jan 2026 — Present",
      summary:
        "Managing organisational programmes, administration, internal communication, and member activities.",
    },
    {
      org: "Garuda Hacks 7.0",
      role: "Event Operations Volunteer",
      period: "Jun — Jul 2026",
      summary:
        "Supporting participant flow and event operations alongside the committee.",
    },
    {
      org: "Information System Festival (ISFEST) 2025",
      role: "E-Sport Division",
      period: "Mar — Oct 2025",
      summary:
        "Helping plan the esports competition, coordinate participants, and run the event.",
    },
    {
      org: "Orientasi Mahasiswa Baru (OMB) UMN 2025",
      role: "Person in Charge (PIC)",
      period: "Jan — Sep 2025",
      summary:
        "Guiding new students through campus orientation, academic systems, and campus facilities.",
    },
  ],
};

export const education = {
  school: "Universitas Multimedia Nusantara (UMN)",
  program: "Information Systems",
  period: "2024 — Present",
  gpa: "3.86 / 4.00",
};

export const achievements = [
  {
    title: "1st Place — Taekwondo Kyorugi Senior Under 68 kg",
    period: "Jun 2026",
  },
  {
    title: "2nd Place — Taekwondo Kyorugi Senior Under 65 kg",
    period: "May 2026",
  },
  {
    title: "Nominee — Best Graduate, Science Program",
    period: "May 2024",
  },
];

/* ─── Skills ─────────────────────────────────────────────────────────── */

export const skills = [
  {
    id: "programming",
    name: "Programming & Query Languages",
    blurb:
      "Languages I use in coursework and projects to write scripts and query data.",
    tools: ["Python", "SQL", "Java", "C#", "R"],
  },
  {
    id: "analytics",
    name: "Data Analytics & Business Intelligence",
    blurb:
      "Building reports and dashboards from class datasets and project data.",
    tools: ["Power BI", "Tableau", "Microsoft Excel", "SAS Viya"],
  },
  {
    id: "ml",
    name: "Machine Learning & Computer Vision",
    blurb:
      "Preparing data, training models, and checking how well they perform.",
    tools: [
      "Scikit-learn",
      "YOLO",
      "BigQuery ML",
      "Data preprocessing",
      "Model evaluation",
    ],
  },
  {
    id: "databases",
    name: "Databases & Data Platforms",
    blurb: "Storing, querying, and preparing data before analysis.",
    tools: ["SQL Server", "Google BigQuery"],
  },
  {
    id: "tools",
    name: "Developer Tools",
    blurb: "The everyday setup I use to write, run, and document projects.",
    tools: [
      "Jupyter Notebook",
      "Google Colab",
      "VS Code",
      "Git",
      "GitHub",
      "Streamlit",
    ],
  },
  {
    id: "uiux",
    name: "UI/UX & Web Development",
    blurb: "Designing app prototypes and building responsive pages.",
    tools: ["Figma", "HTML", "CSS", "JavaScript", "Responsive design"],
  },
];

/* ─── Work ───────────────────────────────────────────────────────────── */

export type ProjectCategory = "data-bi" | "ml-ai" | "uiux" | "web" | "is";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  tags: string[];
  image?: {
    src: string;
    alt: string;
    fit?: "cover" | "contain";
    position?: string;
  };
  href?: string;
  /** Drawn placeholder used while no verified visual exists. */
  placeholder?: { label: string; note: string };
};

export const projects: Project[] = [
  {
    slug: "publication-data-warehouse",
    title: "University Publication Data Warehouse – Power BI",
    summary:
      "An interactive Power BI dashboard built using integrated university publication and lecturer datasets to explore publication trends, journal quartile distribution, faculty productivity, and academic collaboration.",
    category: "data-bi",
    tags: ["Power BI", "Data Warehouse", "Data Visualization"],
    href: "https://app.powerbi.com/view?r=eyJrIjoiMGNiMWU5OGQtMGRkMy00NzJhLWIyMDUtOWJiZWIwODQwM2VlIiwidCI6ImJmMzdmMzE1LWJhYzItNDRhOC1hZTZjLTJmMjEzNTFkMjY0YyIsImMiOjEwfQ%3D%3D",
    image: {
      src: "/img/projects/powerbi.jpg",
      alt: "Power BI dashboard with a year slicer, Q1 publication share by faculty, and total publications by year",
      fit: "contain",
    },
  },
  {
    slug: "datvis",
    title: "DATVIS — Food Security Dashboard",
    summary:
      "An interactive Tableau story on rice production and food security in Indonesia — output by province (2019–2024), provinces with a deficit, and imports by year and origin country, built from BPS data.",
    category: "data-bi",
    tags: ["Tableau", "Data Storytelling", "BPS Data"],
    href: "https://public.tableau.com/app/profile/dani.arifianto/viz/AnalisisKetahananPangandanProduksiBerasNasionaldiIndonesia/Story1",
    image: {
      src: "/img/projects/datvis.jpg",
      alt: "DATVIS Tableau dashboard overview with a national production map and province ranking",
      fit: "contain",
    },
  },
  {
    slug: "diabetes-health-indicators",
    title: "Diabetes Health Indicators",
    summary:
      "A Random Forest model on 253,680 BRFSS health records, tuned with SMOTE and GridSearchCV. The Streamlit app takes health indicators and returns a diabetes risk estimate.",
    category: "ml-ai",
    tags: ["Machine Learning", "Random Forest", "Streamlit"],
    href: "https://diabetes-detection-5ejk4fmqunren7mca9ydsj.streamlit.app/",
    image: {
      src: "/img/projects/diabetes.jpg",
      alt: "Bar chart of the diabetes indicator dataset's target distribution",
      fit: "contain",
    },
  },
  {
    slug: "helmet-detection",
    title: "Helmet Detection",
    summary:
      "A YOLOv8 model trained on a labelled Roboflow dataset to tell whether motorcycle riders wear a helmet. The Streamlit app checks uploaded images and videos at a chosen confidence threshold.",
    category: "ml-ai",
    tags: ["Computer Vision", "YOLOv8", "Streamlit"],
    href: "https://helmet-detection-yolov8-app.streamlit.app/",
    image: {
      src: "/img/projects/helmet.jpg",
      alt: "Helmet detection dataset samples with bounding boxes for helmet and no-helmet riders",
      fit: "contain",
    },
  },
  {
    slug: "loopera",
    title: "Loopera",
    summary:
      "A school-supplies donation app concept with needs-based recommendations and impact tracking, plus a unit-economics model of revenue, cost, and fees.",
    category: "uiux",
    tags: ["UI/UX", "Mobile App", "Unit Economics"],
    href: "https://www.figma.com/proto/PfN1bCOIoO09odbAUQTGLr/Uzora---Loopera?node-id=1224-5128&p=f&t=8hgSztfSbiXTMslg-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1224%3A5079&show-proto-sidebar=1",
    image: {
      src: "/img/projects/loopera.jpg",
      alt: "Loopera logo",
      fit: "cover",
    },
  },
  {
    slug: "uzora",
    title: "UZORA",
    summary:
      "A food-donation app concept for SDG 2 — Zero Hunger. The Figma prototype covers emergency campaigns, campaign progress, and a donation calendar.",
    category: "uiux",
    tags: ["UI/UX", "Mobile App", "SDG 2"],
    href: "https://www.figma.com/proto/PfN1bCOIoO09odbAUQTGLr/Uzora---Loopera?node-id=243-828&p=f&t=4gUm1sQlHjwqtJYn-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=168%3A264&show-proto-sidebar=1",
    image: {
      src: "/img/projects/uzora.jpg",
      alt: "Two UZORA app screens: the emergency donation home and a campaign detail with a donation calendar",
      fit: "cover",
    },
  },
  {
    slug: "disco-umn",
    title: "DISCO XIII — Website",
    summary:
      "The event site for DISCO XIII, HIMSI UMN's annual Information Systems gathering — bilingual pages, divisions, and participant and committee dashboards.",
    category: "web",
    tags: ["Web Development", "Event Site"],
    href: "https://discoumn.my.id/",
    image: {
      src: "/img/projects/disco.jpg",
      alt: "DISCO XIII website hero with the event title and registration buttons",
      fit: "cover",
      position: "center 35%",
    },
  },
  {
    slug: "uso-website",
    title: "UMN Symphony Orchestra — Website",
    summary:
      "The official UMN Symphony Orchestra site with profile, events, and activity documentation in ID/EN. Next.js and Sanity; I worked on the About contact section.",
    category: "web",
    tags: ["Next.js", "Sanity", "Web Development"],
    href: "https://uso.umnsymphonyorchestra.com/",
    image: {
      src: "/img/projects/uso.jpg",
      alt: "UMN Symphony Orchestra website hero with the Viva La Musica title",
      fit: "cover",
      position: "center 45%",
    },
  },
  {
    slug: "warteg-orens-bahari",
    title: "Warteg Orens Bahari",
    summary:
      "A restaurant site for a neighbourhood seafood warung — menu tabs, an order-history page, and contact details. Front end in HTML, CSS, and JavaScript.",
    category: "is",
    tags: ["HTML/CSS", "JavaScript", "Responsive"],
    href: "https://warteg-orens-bahari.netlify.app/",
    image: {
      src: "/img/projects/warteg.jpg",
      alt: "Warteg Orens Bahari website showing its menu categories and about section",
      fit: "cover",
      position: "center 42%",
    },
  },
];

export const workFilters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "data-bi", label: "Data & Business Intelligence" },
  { id: "ml-ai", label: "Machine Learning & AI" },
  { id: "uiux", label: "UI/UX & Product Design" },
  { id: "web", label: "Web Development" },
  { id: "is", label: "Information Systems" },
];
