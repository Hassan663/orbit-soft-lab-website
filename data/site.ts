export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "Contact Us", href: "/contact" },
];

export const stats = [
  { value: "5+", label: "Years of Experience", icon: "calendar" },
  { value: "100+", label: "Projects Delivered", icon: "plus" },
  { value: "96%", label: "Client Satisfaction", icon: "users" },
];

export type FeatureItem = { title: string; text: string };
export type QA = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  text: string;
  icon: string;
  image: string;
  overview: string[];
  deliverables: string[];
  tech: string[];
  features: FeatureItem[];
  process: FeatureItem[];
  faqs: QA[];
  relatedProjects: string[];
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    text: "Technology built around your business. Built software designed to solve unique challenges, streamline operations, and give your business room to grow.",
    icon: "code",
    image: "/images/service-1.webp",
    overview: [
      "Off the shelf tools only get you so far. We design and build software around the way your team actually works, so processes get faster instead of being bent to fit a generic product.",
      "From internal platforms and customer portals to integrations between the systems you already use, we deliver maintainable code with clear documentation and a roadmap for growth.",
    ],
    deliverables: [
      "Technical discovery and architecture plan",
      "Custom web platforms, portals and internal tools",
      "API design and third party integrations",
      "Automated testing and CI/CD pipelines",
      "Documentation and team handover",
    ],
    tech: ["Node.js", "TypeScript", "React", "Python", "MongoDB", "PostgreSQL", "AWS", "Docker"],
    features: [
      { title: "Scalable Architecture", text: "Modular systems designed to handle more users, data and features without a rewrite." },
      { title: "Seamless Integrations", text: "Connect CRMs, ERPs, payment gateways and legacy systems through clean, secure APIs." },
      { title: "Role Based Access", text: "Granular permissions and audit trails so every team sees exactly what it needs." },
      { title: "Real Time Data", text: "Live dashboards and notifications that keep everyone working from the same numbers." },
      { title: "Cloud Native", text: "Containerised deployments with monitoring, backups and auto scaling built in." },
      { title: "Long Term Support", text: "Maintenance plans, performance tuning and feature releases after launch." },
    ],
    process: [
      { title: "Requirements Workshop", text: "We map workflows, users and constraints with your stakeholders." },
      { title: "Architecture & Roadmap", text: "We choose the stack, data model and milestones for delivery." },
      { title: "Sprint Development", text: "Two week sprints with demos so you see progress continuously." },
      { title: "QA & Deployment", text: "Automated and manual testing, then a staged production rollout." },
    ],
    faqs: [
      { q: "Can you work with our existing systems?", a: "Yes. We regularly integrate with legacy databases, ERPs and third party APIs, and can modernise them gradually instead of replacing everything at once." },
      { q: "Who owns the source code?", a: "You do. All code, designs and documentation are transferred to you at the end of each milestone." },
      { q: "How do you estimate custom projects?", a: "After discovery we break the scope into milestones with fixed estimates, so you always know what is being delivered and when." },
    ],
    relatedProjects: ["fintech-revolution", "enterprise-saas"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    text: "We transform complex ideas into intuitive interfaces and meaningful user experiences that are easy to understand and even easier to use.",
    icon: "palette",
    image: "/images/service-2.webp",
    overview: [
      "Good design is how a product earns trust. We combine research, information architecture and visual craft to create interfaces people understand at first glance.",
      "Every design decision is tied to a user need or a business goal, and everything we hand over is organised in a design system your developers can build from with confidence.",
    ],
    deliverables: [
      "User research and persona mapping",
      "Information architecture and user flows",
      "Wireframes and interactive prototypes",
      "High fidelity UI for web and mobile",
      "Design system and developer handoff",
    ],
    tech: ["Figma", "FigJam", "Maze", "Framer", "Adobe CC", "Lottie"],
    features: [
      { title: "Research Driven", text: "Interviews, analytics and usability testing guide every screen we design." },
      { title: "Design Systems", text: "Reusable components and tokens that keep products consistent as they grow." },
      { title: "Interactive Prototypes", text: "Clickable flows to validate ideas with real users before development starts." },
      { title: "Accessibility First", text: "WCAG aware colour, contrast and interaction patterns built in from day one." },
      { title: "Conversion Focused", text: "Clear hierarchy and friction free journeys that move users to action." },
      { title: "Clean Handoff", text: "Annotated specs and organised files so developers build exactly what was designed." },
    ],
    process: [
      { title: "Research", text: "We learn about your users, competitors and goals." },
      { title: "Structure", text: "We define flows, sitemaps and wireframes." },
      { title: "Visual Design", text: "We craft the look and feel and build the component library." },
      { title: "Test & Handoff", text: "We validate with users and prepare files for development." },
    ],
    faqs: [
      { q: "Can you redesign only part of our product?", a: "Yes. We can focus on a single flow such as onboarding or checkout, and align it with your existing visual language." },
      { q: "Do you build design systems for existing products?", a: "Yes. We audit your current UI, consolidate patterns and deliver a documented component library in Figma." },
      { q: "Will the designs work for developers?", a: "Our designers work closely with our engineers, so every file includes states, spacing and responsive behaviour." },
    ],
    relatedProjects: ["fintech-revolution", "ecommerce-excellence"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    text: "We design and develop intuitive mobile experiences that feel natural, perform reliably, and turn ideas into products people keep coming back to.",
    icon: "smartphone",
    image: "/images/service-3.webp",
    overview: [
      "We build iOS and Android apps that feel fast and familiar, with smooth interactions, offline support and the native features your users expect.",
      "Using cross platform frameworks where they make sense and native code where it matters, we ship one polished product to both stores without doubling your budget.",
    ],
    deliverables: [
      "Product strategy and feature prioritisation",
      "Mobile UI/UX design for iOS and Android",
      "Cross platform or native app development",
      "Backend, APIs and push notifications",
      "App Store and Google Play launch support",
    ],
    tech: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js"],
    features: [
      { title: "Cross Platform", text: "One codebase for iOS and Android with native performance where it counts." },
      { title: "Offline Ready", text: "Local storage and sync so the app keeps working on weak connections." },
      { title: "Push Notifications", text: "Targeted, timely messages that bring users back without being noisy." },
      { title: "Secure Payments", text: "In app purchases, subscriptions and payment gateway integrations." },
      { title: "Analytics Built In", text: "Track retention, funnels and feature usage from the first release." },
      { title: "Store Optimised", text: "Listings, screenshots and review guidelines handled for a smooth approval." },
    ],
    process: [
      { title: "Product Discovery", text: "We define the core user journeys and MVP scope." },
      { title: "Prototype", text: "We test interactive flows on real devices early." },
      { title: "Build & Integrate", text: "We develop the app and its backend in parallel sprints." },
      { title: "Release", text: "Beta testing, store submission and post launch monitoring." },
    ],
    faqs: [
      { q: "Native or cross platform?", a: "For most products cross platform frameworks give the best value. We recommend native when an app relies heavily on device specific features or extreme performance." },
      { q: "Do you handle App Store submission?", a: "Yes. We prepare the listings, handle review feedback and publish to both stores on your accounts." },
      { q: "Can you take over an existing app?", a: "Yes. We start with a code audit, fix critical issues, then continue development with a clear roadmap." },
    ],
    relatedProjects: ["healthcare-innovation"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    text: "Fast, responsive, scalable websites and web applications engineered around your business goals and your users.",
    icon: "globe",
    image: "/images/service-4.webp",
    overview: [
      "Your website is often the first conversation with a customer. We build fast, accessible sites that look great on every screen and are easy for your team to update.",
      "From marketing sites and e-commerce stores to full web applications, we focus on performance, SEO and conversion so the site keeps working for your business.",
    ],
    deliverables: [
      "Responsive marketing websites",
      "E-commerce storefronts and checkout flows",
      "Headless CMS setup and content migration",
      "Technical SEO and Core Web Vitals optimisation",
      "Hosting, analytics and maintenance",
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Shopify", "Sanity", "Vercel"],
    features: [
      { title: "Lightning Fast", text: "Optimised builds and images for top Core Web Vitals scores." },
      { title: "SEO Ready", text: "Semantic markup, metadata and structured data from launch." },
      { title: "Easy Editing", text: "A CMS your marketing team can use without calling a developer." },
      { title: "Fully Responsive", text: "Layouts crafted for phones, tablets and large desktops alike." },
      { title: "Conversion Tracking", text: "Analytics, events and A/B testing set up to measure what works." },
      { title: "Secure Hosting", text: "SSL, backups and global CDN delivery on modern infrastructure." },
    ],
    process: [
      { title: "Sitemap & Content", text: "We plan pages, messaging and content structure." },
      { title: "Design", text: "We create a responsive design aligned with your brand." },
      { title: "Development", text: "We build, connect the CMS and optimise performance." },
      { title: "Launch & Grow", text: "We go live, monitor and keep improving conversions." },
    ],
    faqs: [
      { q: "Can we update the website ourselves?", a: "Yes. We connect a headless CMS and train your team so pages, posts and products can be updated without code." },
      { q: "Do you migrate content from our old site?", a: "Yes. We migrate content and set up redirects so you keep your existing search rankings." },
      { q: "How fast will the site be?", a: "We target green Core Web Vitals scores and test performance on real mobile devices before launch." },
    ],
    relatedProjects: ["ecommerce-excellence", "fintech-revolution"],
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    text: "We use AI and automation to simplify repetitive work, improve workflows, unlock insights, and create new possibilities for your business.",
    icon: "bot",
    image: "/images/service-5.webp",
    overview: [
      "AI is most valuable when it removes real friction. We identify the repetitive, time consuming parts of your operations and automate them with reliable, measurable solutions.",
      "From intelligent assistants and document processing to predictive analytics, we integrate AI into the tools your team already uses, with guardrails for accuracy and privacy.",
    ],
    deliverables: [
      "AI opportunity assessment",
      "Custom assistants and chat interfaces",
      "Document and data extraction pipelines",
      "Workflow automation across your tools",
      "Monitoring, evaluation and model tuning",
    ],
    tech: ["Python", "LLM APIs", "LangChain", "Vector DBs", "n8n", "FastAPI"],
    features: [
      { title: "Smart Assistants", text: "Chat and voice assistants trained on your own knowledge base." },
      { title: "Document Processing", text: "Extract, classify and summarise data from invoices, contracts and forms." },
      { title: "Workflow Automation", text: "Connect apps and trigger actions automatically, without manual steps." },
      { title: "Predictive Insights", text: "Forecast demand, churn and risk using your historical data." },
      { title: "Human in the Loop", text: "Review queues and approvals for sensitive or high value decisions." },
      { title: "Privacy by Design", text: "Data handling and access controls aligned with your compliance needs." },
    ],
    process: [
      { title: "Opportunity Mapping", text: "We find the highest impact processes to automate." },
      { title: "Proof of Concept", text: "We build a small, measurable pilot with real data." },
      { title: "Integration", text: "We connect the solution to your systems and teams." },
      { title: "Monitor & Improve", text: "We track accuracy and savings and keep refining." },
    ],
    faqs: [
      { q: "Is our data used to train public models?", a: "No. We use providers and configurations that keep your data private and out of public model training." },
      { q: "How quickly can we see results?", a: "Most pilots are delivered in three to five weeks, with clear metrics such as hours saved or response time reduced." },
      { q: "Do we need a data science team?", a: "No. We handle the technical work and give your team simple tools and dashboards to manage it." },
    ],
    relatedProjects: ["enterprise-saas"],
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    text: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
    icon: "lock",
    image: "/images/service-6.webp",
    overview: [
      "Security cannot be an afterthought. We assess your applications and infrastructure, close the gaps that matter most, and help you build security into everyday development.",
      "Whether you are preparing for a compliance audit or responding to a new threat, we give you clear findings, practical fixes and ongoing protection.",
    ],
    deliverables: [
      "Security audits and risk assessments",
      "Penetration testing for web and mobile apps",
      "Cloud configuration and access reviews",
      "Compliance readiness (GDPR, ISO 27001, SOC 2)",
      "Secure development training for your team",
    ],
    tech: ["OWASP", "Burp Suite", "AWS Security Hub", "Cloudflare", "Snyk", "Vault"],
    features: [
      { title: "Vulnerability Testing", text: "Authorised testing that finds weaknesses before attackers do." },
      { title: "Cloud Hardening", text: "Least privilege access, encryption and secure network configuration." },
      { title: "Secure SDLC", text: "Code scanning and reviews built into your development pipeline." },
      { title: "Compliance Support", text: "Policies, controls and evidence prepared for your audits." },
      { title: "Incident Readiness", text: "Response plans, logging and alerting so issues are caught early." },
      { title: "Clear Reporting", text: "Prioritised findings with practical, developer friendly fixes." },
    ],
    process: [
      { title: "Scoping", text: "We agree on assets, goals and rules of engagement." },
      { title: "Assessment", text: "We test applications, infrastructure and processes." },
      { title: "Remediation", text: "We help your team fix issues in priority order." },
      { title: "Verification", text: "We retest and provide a final report and roadmap." },
    ],
    faqs: [
      { q: "Will testing disrupt our live systems?", a: "We agree on scope and timing in advance and use safe testing methods, often on staging environments, to avoid disruption." },
      { q: "Do you help fix the issues you find?", a: "Yes. Our engineers can implement fixes directly or guide your developers through remediation." },
      { q: "How often should we run security assessments?", a: "At least once a year and after major releases. Many clients choose quarterly checks as part of a retainer." },
    ],
    relatedProjects: ["fintech-revolution", "enterprise-saas"],
  },
];

export const projectFilters = ["All", "Web Design", "Mobile App", "E-commerce", "AI / SaaS"] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export type Project = {
  slug: string;
  category: string;
  filter: Exclude<ProjectFilter, "All">;
  title: string;
  text: string;
  tags: string[];
  image: string;
  client: string;
  year: string;
  duration: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string;
  resultStats: { value: string; label: string }[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "fintech-revolution",
    category: "WEB DESIGN",
    filter: "Web Design",
    title: "FinTech Revolution",
    text: "A finance dashboard concept focused on simplifying complex information through clear hierarchy, useful visualizations and a calm interface.",
    tags: ["U/UX", "Dashboard", "Web App"],
    image: "/images/project-1.webp",
    client: "Confidential FinTech Startup",
    year: "2025",
    duration: "12 weeks",
    overview:
      "A growing fintech company needed a dashboard that helps small business owners understand cash flow, invoices and spending at a glance. We led the product design and front end build of the web app.",
    challenge:
      "The existing product exposed raw financial data across a dozen screens. Users struggled to find the numbers that mattered, support tickets were rising, and most customers only logged in once a month.",
    solution:
      "We restructured the product around three daily questions: how much cash do I have, what is coming in, and what is going out. A modular dashboard, clear data visualisations and smart alerts replaced the cluttered tables, built on a reusable design system in React.",
    results:
      "Within three months of launch, users were logging in more often, completing key tasks faster and contacting support far less. The design system also cut the time needed to ship new features.",
    resultStats: [
      { value: "3.2x", label: "Weekly active users" },
      { value: "-45%", label: "Support tickets" },
      { value: "38%", label: "Faster task completion" },
    ],
    gallery: [
      "/images/project-fintech-revolution-1.webp",
      "/images/project-fintech-revolution-2.webp",
      "/images/project-fintech-revolution-3.webp",
      "/images/project-fintech-revolution-4.webp",
    ],
  },
  {
    slug: "healthcare-innovation",
    category: "MOBILE APP",
    filter: "Mobile App",
    title: "Healthcare Innovation",
    text: "A mobile product concept that turns daily wellness habits into a friendly experience with progress cues and approachable interactions.",
    tags: ["Mobile UI", "Product Design", "Prototyping"],
    image: "/images/project-2.webp",
    client: "Wellness Clinic Network",
    year: "2025",
    duration: "16 weeks",
    overview:
      "A network of wellness clinics wanted a companion app that keeps patients engaged between appointments. We designed and built a cross platform app for habit tracking, reminders and care team messaging.",
    challenge:
      "Patients often dropped their care plans after the first week. Paper handouts were easy to lose, and existing apps felt clinical and overwhelming, especially for older users.",
    solution:
      "We designed a warm, simple experience built around small daily goals, gentle reminders and visible progress. Large touch targets, plain language and an optional caregiver mode made the app accessible to every age group.",
    results:
      "Patients using the app stayed on their care plans significantly longer, and clinics reported fewer missed appointments in the first quarter after launch.",
    resultStats: [
      { value: "72%", label: "30 day retention" },
      { value: "-31%", label: "Missed appointments" },
      { value: "4.8", label: "App Store rating" },
    ],
    gallery: [
      "/images/project-healthcare-innovation-1.webp",
      "/images/project-healthcare-innovation-2.webp",
      "/images/project-healthcare-innovation-3.webp",
      "/images/project-healthcare-innovation-4.webp",
    ],
  },
  {
    slug: "ecommerce-excellence",
    category: "E-COMMERCE",
    filter: "E-commerce",
    title: "E-commerce Excellence",
    text: "A refined storefront concept with clear product hierarchy, editorial styling and a streamlined shopping journey from discovery to checkout.",
    tags: ["E-commerce", "Web Design", "Conversion UX"],
    image: "/images/project-3.webp",
    client: "Lifestyle Retail Brand",
    year: "2024",
    duration: "10 weeks",
    overview:
      "A lifestyle brand moving from marketplaces to direct sales needed a storefront that feels as premium as its products. We designed and developed a headless e-commerce experience.",
    challenge:
      "The previous store was slow on mobile, product pages lacked the brand story, and a long checkout caused many shoppers to abandon their carts.",
    solution:
      "We built an editorial storefront with fast, image rich product pages, smarter filtering and a three step checkout. A headless CMS lets the marketing team launch campaigns and collections without developer help.",
    results:
      "The new store loaded much faster on mobile and converted more visitors into customers, with a clear lift in average order value from improved product recommendations.",
    resultStats: [
      { value: "+64%", label: "Conversion rate" },
      { value: "+22%", label: "Average order value" },
      { value: "1.4s", label: "Mobile load time" },
    ],
    gallery: [
      "/images/project-ecommerce-excellence-1.webp",
      "/images/project-ecommerce-excellence-2.webp",
      "/images/project-ecommerce-excellence-3.webp",
      "/images/project-ecommerce-excellence-4.webp",
    ],
  },
  {
    slug: "enterprise-saas",
    category: "AI · SAAS CONCEPT",
    filter: "AI / SaaS",
    title: "Enterprise SaaS",
    text: "An AI enabled workspace concept designed to bring repetitive tasks, project context and everyday workflows into one focused environment.",
    tags: ["AI concept", "SaaS", "UX strategy"],
    image: "/images/project-4.webp",
    client: "B2B Operations Platform",
    year: "2025",
    duration: "20 weeks",
    overview:
      "An operations software company wanted to add AI features to its platform without overwhelming existing customers. We designed the AI workspace and built the automation layer behind it.",
    challenge:
      "Teams were switching between five or more tools to complete a single workflow. Previous AI experiments were impressive in demos but unreliable in daily use, so trust was low.",
    solution:
      "We created a focused workspace where an AI assistant drafts updates, summarises project context and automates routine tasks, always with clear sources and a human approval step. Automations connect to the tools customers already use.",
    results:
      "Pilot customers saved several hours per person each week, and the AI workspace became the most used feature on the platform within two months.",
    resultStats: [
      { value: "6h", label: "Saved per user weekly" },
      { value: "89%", label: "Suggestion acceptance" },
      { value: "+41%", label: "Expansion revenue" },
    ],
    gallery: [
      "/images/project-enterprise-saas-1.webp",
      "/images/project-enterprise-saas-2.webp",
      "/images/project-enterprise-saas-3.webp",
      "/images/project-enterprise-saas-4.webp",
    ],
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Discover",
    text: "We understand your goals, audience, and business needs to define the right direction.",
    details:
      "Through workshops, stakeholder interviews and a look at your data and competitors, we build a shared understanding of the problem before proposing any solution.",
    deliverables: ["Stakeholder workshops", "User and market research", "Goals and success metrics", "Discovery summary"],
    duration: "1 to 2 weeks",
    tools: ["FigJam", "Notion", "Google Analytics", "Hotjar"],
  },
  {
    n: "02",
    title: "Strategize",
    text: "We plan the project scope, map key features, and create a clear roadmap for success.",
    details:
      "We turn insights into a plan: prioritised features, technical architecture, milestones and a budget that matches the value each phase delivers.",
    deliverables: ["Feature prioritisation", "Technical architecture", "Project roadmap", "Fixed milestone proposal"],
    duration: "1 week",
    tools: ["Notion", "Jira", "Miro", "Lucidchart"],
  },
  {
    n: "03",
    title: "Design",
    text: "We transform ideas into intuitive wireframes and polished, user-friendly designs.",
    details:
      "Starting from wireframes and moving to high fidelity UI, we design every key screen and state, then test prototypes with real users before code is written.",
    deliverables: ["User flows and wireframes", "High fidelity UI", "Interactive prototype", "Design system"],
    duration: "2 to 4 weeks",
    tools: ["Figma", "Maze", "Framer", "Lottie"],
  },
  {
    n: "04",
    title: "Develop",
    text: "We build your product with clean, scalable code and reliable functionality.",
    details:
      "We develop in two week sprints with regular demos, automated tests and code reviews, so you see working software early and often.",
    deliverables: ["Front end and back end development", "API integrations", "Automated tests", "Sprint demos"],
    duration: "4 to 12 weeks",
    tools: ["React", "Next.js", "Node.js", "MongoDB", "GitHub"],
  },
  {
    n: "05",
    title: "Launch & Optimize",
    text: "We test, refine, and launch your product, providing ongoing support to help it grow.",
    details:
      "We handle QA, deployment and monitoring, then use real usage data to fix issues quickly and plan the next round of improvements.",
    deliverables: ["QA and performance testing", "Production deployment", "Monitoring and analytics", "Support and growth plan"],
    duration: "1 to 2 weeks, then ongoing",
    tools: ["Vercel", "AWS", "Sentry", "Mixpanel"],
  },
];

export const processWhy = [
  { title: "Clear Milestones", text: "Every phase ends with tangible deliverables, so you always know where the project stands.", icon: "target" },
  { title: "Early Feedback", text: "Prototypes and sprint demos let you shape the product before costly decisions are locked in.", icon: "lightbulb" },
  { title: "Built to Grow", text: "Scalable architecture and post launch optimisation keep your product improving after release.", icon: "rocket" },
];

export const imageStrip = [
  { src: "/images/strip-1.webp", alt: "Open plan office with developers at their desks" },
  { src: "/images/strip-2.webp", alt: "Engineers working at multiple monitors" },
  { src: "/images/strip-3.webp", alt: "Product team collaborating around a table" },
];

export const marqueeItems = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Python",
  "Flutter",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Figma",
  "Docker",
  "OpenAI",
];

export const testimonials = [
  {
    heading: "Excellent Service",
    quote: "Orbit Lab transformed our entire digital infrastructure. The results exceeded all expectations with 3x ROI in the first year.",
    name: "James Wilson",
    avatar: "/images/avatar-1.webp",
    role: "CEO, TechVentures Inc.",
  },
  {
    heading: "Good Service",
    quote: "Orbit Lab transformed our entire digital infrastructure. The results exceeded all expectations with 3x ROI in the first year.",
    name: "Lisa Anderson",
    avatar: "/images/avatar-2.webp",
    role: "CTO, Global Finance Corp",
  },
  {
    heading: "Excellent Service",
    quote: "Orbit Lab transformed our entire digital infrastructure. The results exceeded all expectations with 3x ROI in the first year.",
    name: "Robert Chang",
    avatar: "/images/avatar-3.webp",
    role: "VP Digital, RetailMax",
  },
];

export const techStack = [
  { name: "React.js", icon: "react" },
  { name: "Node.js", icon: "node" },
  { name: "Python", icon: "python" },
  { name: "Figma", icon: "figma" },
  { name: "Next.js", icon: "next" },
  { name: "TypeScript", icon: "ts" },
];

export const team = [
  { name: "Sarah Chen", role: "CEO & Founder", focus: "Strategic Leadership", photo: "/images/team-1.webp" },
  { name: "Michael Rodriguez", role: "CTO", focus: "Technology Innovation", photo: "/images/team-2.webp" },
  { name: "Emily Watson", role: "Head of Design", focus: "UX Strategy", photo: "/images/team-3.webp" },
  { name: "David Kumar", role: "VP Engineering", focus: "Software Architecture", photo: "/images/team-4.webp" },
];

export const whyUs = [
  { title: "Proven Expertise", text: "10+ years of experience delivering exceptional digital solutions across industries.", icon: "award" },
  { title: "Transparency", text: "Clear communication, honest timelines, and no hidden surprises throughout.", icon: "eye" },
  { title: "Fast Delivery", text: "Agile methodology ensures rapid iterations and timely project completion.", icon: "zap" },
  { title: "Dedicated Support", text: "24/7 support team ready to assist you at every stage of your project.", icon: "headset" },
];

export const faqs = [
  {
    q: "How long does a project take?",
    a: "Project timelines depend on the scope, complexity, and requirements. We define a clear timeline before development begins and keep you updated throughout the process.",
  },
  {
    q: "Can you redesign an existing product?",
    a: "Yes. We audit your current product, identify friction points, and redesign it with a clear UX strategy while keeping what already works for your users.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. We work with clients across the US, UK, UAE, Australia and beyond, with overlapping working hours and clear async communication.",
  },
  {
    q: "Do you offer post launch support?",
    a: "Yes. Every project includes a support window after launch, and we offer ongoing maintenance and optimization plans.",
  },
  {
    q: "How much does a project cost?",
    a: "Pricing depends on scope and timeline. After a short discovery call we share a detailed proposal with fixed milestones so there are no surprises.",
  },
  {
    q: "What technologies do you use?",
    a: "React, Next.js, Node.js, TypeScript, Python, Flutter, MongoDB, PostgreSQL and modern cloud infrastructure, chosen to fit each project.",
  },
  {
    q: "What is your process for starting a new project?",
    a: "We start with discovery, align on strategy and scope, design the experience, build it in sprints, then launch and optimize together.",
  },
];

export const footerColumns = [
  {
    heading: "Services",
    links: services.slice(0, 4).map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "GDPR", href: "/privacy-policy#your-rights" },
    ],
  },
];

export const footerBottomLinks = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms-of-service" },
  { label: "Cookies", href: "/cookie-policy" },
];

/* ---------- Page heroes ---------- */

export type HeroContent = { eyebrow: string; title: string; highlight: string; text: string; image: string };

export const pageHeroes = {
  about: {
    eyebrow: "About Us",
    title: "The team behind what comes",
    highlight: "next",
    text: "We are designers, engineers and strategists who help ambitious companies turn ideas into digital products people love to use.",
    image: "/images/page-about.webp",
  },
  services: {
    eyebrow: "Our Services",
    title: "Everything you need to build what",
    highlight: "matters",
    text: "Strategy, design, engineering and security under one roof, so your product moves from idea to launch without the hand-off headaches.",
    image: "/images/page-services.webp",
  },
  work: {
    eyebrow: "Our Work",
    title: "Selected projects and",
    highlight: "results",
    text: "A look at the products we have designed and built, and the measurable impact they created for our clients.",
    image: "/images/page-work.webp",
  },
  process: {
    eyebrow: "Our Process",
    title: "From first idea to final",
    highlight: "launch",
    text: "A clear, collaborative five step process that keeps projects on time, on budget and focused on outcomes.",
    image: "/images/page-process.webp",
  },
  contact: {
    eyebrow: "Contact Us",
    title: "Let's build something",
    highlight: "great",
    text: "Tell us about your project and we will get back to you within one business day with next steps.",
    image: "/images/page-contact.webp",
  },
  careers: {
    eyebrow: "Careers",
    title: "Build the future with",
    highlight: "us",
    text: "Join a remote friendly team of makers who care about craft, ownership and shipping work we are proud of.",
    image: "/images/page-careers.webp",
  },
  blog: {
    eyebrow: "Blog",
    title: "Insights from the",
    highlight: "lab",
    text: "Practical notes on product design, engineering, AI and growing digital products, written by our team.",
    image: "/images/page-blog.webp",
  },
} satisfies Record<string, HeroContent>;

/* ---------- About ---------- */

export const aboutStory = {
  eyebrow: "Our Story",
  title: "Started small. Built to",
  highlight: "scale.",
  images: ["/images/about-office-1.webp", "/images/about-office-2.webp", "/images/about-office-3.webp"],
  paragraphs: [
    "Orbit Soft Lab began in 2020 as a two person studio helping local startups launch their first products. We cared about the details others skipped: clean code, honest timelines and design that actually made sense to users.",
    "Word spread. Today we are a cross functional team working with startups and enterprises across the UAE, Pakistan, Europe and North America, but we still work the same way: small focused teams, close collaboration and an obsession with quality.",
  ],
};

export const missionVision = [
  {
    title: "Our Mission",
    text: "To help businesses move forward by designing and building digital products that are useful, reliable and genuinely enjoyable to use.",
    icon: "target",
  },
  {
    title: "Our Vision",
    text: "To be the product partner ambitious companies trust first, known for craft, transparency and results that last well beyond launch day.",
    icon: "eye",
  },
];

export const values = [
  { title: "Craft Over Shortcuts", text: "We sweat the details in code and design because quality compounds over time.", icon: "sparkles" },
  { title: "Radical Transparency", text: "Honest estimates, open progress and clear communication at every step.", icon: "eye" },
  { title: "Ownership", text: "We treat your product like our own and take responsibility for outcomes.", icon: "shield" },
  { title: "Partnership", text: "We work alongside your team, share knowledge and celebrate wins together.", icon: "handshake" },
];

export const milestones = [
  { year: "2020", title: "Studio Founded", text: "Orbit Soft Lab starts as a two person design and development studio." },
  { year: "2021", title: "First 25 Projects", text: "We ship our first 25 products and grow the team to ten people." },
  { year: "2022", title: "UAE Office Opens", text: "A new office in Dubai brings us closer to clients across the Gulf." },
  { year: "2023", title: "AI Practice Launched", text: "We launch a dedicated AI and automation team to meet rising demand." },
  { year: "2024", title: "100+ Products Delivered", text: "We pass 100 delivered projects with a 96% client satisfaction rate." },
  { year: "2025", title: "Going Global", text: "Clients across four continents and a growing remote team of specialists." },
];

/* ---------- Careers ---------- */

export const jobs = [
  { title: "Senior Full Stack Engineer (MERN)", department: "Engineering", type: "Full-time", location: "Remote / Lahore" },
  { title: "Product Designer (UI/UX)", department: "Design", type: "Full-time", location: "Dubai, UAE" },
  { title: "React Native Developer", department: "Engineering", type: "Full-time", location: "Remote" },
  { title: "AI / ML Engineer", department: "AI & Automation", type: "Full-time", location: "Remote / Dubai" },
  { title: "Project Manager", department: "Delivery", type: "Full-time", location: "Lahore, Pakistan" },
  { title: "Frontend Developer Intern", department: "Engineering", type: "Internship", location: "Lahore, Pakistan" },
];

export const careersEmail = "careers@orbitsoftlab.com";

export const benefits = [
  { title: "Remote Friendly", text: "Work from home, from our offices, or a mix of both.", icon: "laptop" },
  { title: "Health Cover", text: "Medical insurance for you and your family.", icon: "heart" },
  { title: "Learning Budget", text: "Annual budget for courses, books and conferences.", icon: "graduation" },
  { title: "Paid Time Off", text: "Generous annual leave plus public holidays.", icon: "plane" },
  { title: "Latest Gear", text: "A modern laptop and the tools you need to do great work.", icon: "cpu" },
  { title: "Team Retreats", text: "Yearly meetups to plan, learn and celebrate together.", icon: "coffee" },
];

export const culture = {
  eyebrow: "Our Culture",
  title: "Small teams. Big",
  highlight: "ownership.",
  images: ["/images/culture-1.webp", "/images/culture-2.webp"],
  paragraphs: [
    "We keep teams small so every person has real impact. Designers, engineers and project leads work side by side from discovery to launch, and everyone has a voice in how we build.",
    "We value clear writing, kind feedback and steady progress over heroics. You will have time for deep work, mentors who want you to grow, and the freedom to try new ideas.",
  ],
  points: ["Weekly demos and knowledge sharing", "Mentorship and clear growth paths", "Flexible hours across time zones", "No unnecessary meetings"],
};

/* ---------- Blog ---------- */

export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  cover: string;
  author: { name: string; role: string; bio: string };
  content: PostBlock[];
};

const authors = {
  sarah: { name: "Sarah Chen", role: "CEO & Founder", bio: "Sarah leads strategy at Orbit Soft Lab and has helped launch more than 100 digital products." },
  michael: { name: "Michael Rodriguez", role: "CTO", bio: "Michael oversees engineering and architecture, with a focus on scalable cloud platforms." },
  emily: { name: "Emily Watson", role: "Head of Design", bio: "Emily leads the design team and specialises in UX strategy and design systems." },
  david: { name: "David Kumar", role: "VP Engineering", bio: "David runs delivery and loves turning complex requirements into simple, reliable software." },
};

export const posts: Post[] = [
  {
    slug: "how-to-scope-an-mvp",
    title: "How to Scope an MVP Without Losing What Matters",
    excerpt: "A practical framework for deciding what goes into your first release, and what can wait.",
    category: "Product Strategy",
    date: "2026-09-18",
    readTime: "6 min read",
    cover: "/images/blog-1.webp",
    author: authors.sarah,
    content: [
      { type: "p", text: "Every founder wants to launch quickly, but an MVP that is too thin fails to prove anything. The goal is not the smallest product possible. It is the smallest product that tests your most important assumption." },
      { type: "h2", text: "Start with the riskiest assumption" },
      { type: "p", text: "Write down what must be true for your business to work. Usually one assumption is both critical and uncertain. Your MVP exists to test that one thing." },
      { type: "h2", text: "Map the core journey" },
      { type: "p", text: "Identify the single path a user takes to get value. Everything on that path is in scope. Everything else is a candidate for later." },
      { type: "ul", items: ["Sign up and onboarding", "The one action that delivers value", "A way to measure success", "A simple feedback channel"] },
      { type: "quote", text: "If you are not embarrassed by some part of your first release, you probably waited too long. If you are embarrassed by the core journey, you launched too early." },
      { type: "h2", text: "Set a time box" },
      { type: "p", text: "Fix the timeline and let scope flex. Eight to twelve weeks is enough for most MVPs when the scope is focused on learning." },
    ],
  },
  {
    slug: "design-systems-that-scale",
    title: "Design Systems That Actually Scale",
    excerpt: "Why most design systems stall after version one, and how to build one your team keeps using.",
    category: "Design",
    date: "2026-08-27",
    readTime: "8 min read",
    cover: "/images/blog-2.webp",
    author: authors.emily,
    content: [
      { type: "p", text: "A design system is a product, not a project. Teams that treat it as a one time deliverable end up with a beautiful Figma file nobody trusts six months later." },
      { type: "h2", text: "Start from real screens" },
      { type: "p", text: "Audit your existing product before designing new components. The patterns you already use repeatedly are your first components." },
      { type: "h2", text: "Tokens before components" },
      { type: "p", text: "Colour, spacing, typography and radius tokens create consistency faster than any button library. They also make theming and dark mode far easier." },
      { type: "ul", items: ["Name tokens by purpose, not value", "Keep the palette small", "Document when to use each component", "Version your system like code"] },
      { type: "h2", text: "Give it an owner" },
      { type: "p", text: "Someone needs to review contributions, publish updates and talk to the teams using the system. Without ownership, drift is inevitable." },
    ],
  },
  {
    slug: "practical-ai-for-operations",
    title: "Practical AI for Everyday Operations",
    excerpt: "Five places AI saves real time in business operations today, without a research team.",
    category: "AI & Automation",
    date: "2026-08-05",
    readTime: "7 min read",
    cover: "/images/blog-3.webp",
    author: authors.michael,
    content: [
      { type: "p", text: "The most valuable AI projects we deliver are rarely the flashiest. They remove repetitive work that quietly eats hours every week." },
      { type: "h2", text: "Where AI helps most" },
      { type: "ul", items: ["Summarising long documents and email threads", "Extracting data from invoices and forms", "Drafting first replies to support tickets", "Classifying and routing incoming requests", "Answering internal questions from your knowledge base"] },
      { type: "h2", text: "Keep a human in the loop" },
      { type: "p", text: "For anything customer facing or high value, design a review step. It builds trust, catches errors and creates data to improve the system." },
      { type: "quote", text: "Measure AI projects in hours saved and errors avoided, not in how impressive the demo looked." },
    ],
  },
  {
    slug: "nextjs-performance-checklist",
    title: "A Next.js Performance Checklist for 2026",
    excerpt: "The checks we run on every Next.js project before launch to keep Core Web Vitals green.",
    category: "Engineering",
    date: "2026-07-14",
    readTime: "5 min read",
    cover: "/images/blog-4.webp",
    author: authors.david,
    content: [
      { type: "p", text: "Fast sites convert better and rank better. These are the checks our team runs before every launch." },
      { type: "h2", text: "Rendering" },
      { type: "ul", items: ["Prefer static generation for marketing pages", "Keep client components small and leaf level", "Stream slow data with Suspense"] },
      { type: "h2", text: "Assets" },
      { type: "ul", items: ["Serve responsive, modern image formats", "Self host or preconnect to fonts", "Audit third party scripts ruthlessly"] },
      { type: "h2", text: "Measure in the field" },
      { type: "p", text: "Lab scores are a start, but real user monitoring shows what your customers actually experience on their devices and networks." },
    ],
  },
  {
    slug: "security-basics-for-startups",
    title: "Security Basics Every Startup Should Cover",
    excerpt: "A short list of security practices that prevent the most common and costly incidents.",
    category: "Security",
    date: "2026-06-23",
    readTime: "6 min read",
    cover: "/images/blog-5.webp",
    author: authors.michael,
    content: [
      { type: "p", text: "Most security incidents at early stage companies come from a handful of preventable mistakes. Covering the basics removes most of the risk." },
      { type: "h2", text: "The essentials" },
      { type: "ul", items: ["Enforce multi factor authentication everywhere", "Use a secrets manager, never commit keys", "Apply least privilege access in the cloud", "Keep dependencies updated automatically", "Back up data and test restores"] },
      { type: "h2", text: "Make it a habit" },
      { type: "p", text: "Security works best as part of everyday development: code review checklists, automated scanning in CI and a short quarterly review." },
    ],
  },
  {
    slug: "working-with-a-product-studio",
    title: "What to Expect When Working With a Product Studio",
    excerpt: "How engagements are structured, what you need to prepare, and how to get the most value.",
    category: "Company",
    date: "2026-06-02",
    readTime: "4 min read",
    cover: "/images/blog-6.webp",
    author: authors.sarah,
    content: [
      { type: "p", text: "Hiring a product studio is a big decision. Knowing what to expect makes the partnership smoother from day one." },
      { type: "h2", text: "Before kickoff" },
      { type: "p", text: "Gather what you already know: goals, users, existing research and any technical constraints. Nominate one decision maker on your side." },
      { type: "h2", text: "During the project" },
      { type: "p", text: "Expect weekly check ins, regular demos and a shared board where you can see progress at any time. Give feedback early, it is always cheaper than late changes." },
      { type: "h2", text: "After launch" },
      { type: "p", text: "Launch is the beginning. Plan for a support window, measure how users respond and agree on the next set of improvements together." },
    ],
  },
];

/* ---------- Contact ---------- */

export const contactInfo = {
  email: "hello@orbitsoftlab.com",
  phone: "+971 4 123 4567",
  offices: [
    { name: "UAE Office", address: "Business Bay, Dubai, United Arab Emirates" },
    { name: "Pakistan Office", address: "Gulberg III, Lahore, Pakistan" },
  ],
  hours: "Monday to Friday, 9:00 AM to 6:00 PM (GST)",
  mapImage: "/images/contact-map.webp",
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
  { label: "Dribbble", href: "https://dribbble.com", icon: "dribbble" },
  { label: "GitHub", href: "https://github.com", icon: "github" },
];

export const budgetRanges = ["Less than $5,000", "$5,000 to $15,000", "$15,000 to $50,000", "$50,000+", "Not sure yet"];

/* ---------- Legal ---------- */

export type LegalSection = { id: string; title: string; paragraphs: string[] };
export type LegalPage = {
  title: string;
  highlight: string;
  description: string;
  updated: string;
  image: string;
  sections: LegalSection[];
};

export const legalPages: Record<"privacy" | "terms" | "cookies", LegalPage> = {
  privacy: {
    title: "Privacy",
    highlight: "Policy",
    description: "How Orbit Soft Lab collects, uses and protects your personal information.",
    updated: "2026-10-01",
    image: "/images/page-process.webp",
    sections: [
      { id: "introduction", title: "Introduction", paragraphs: ["This Privacy Policy explains how Orbit Soft Lab (\"we\", \"us\") collects and uses personal information when you visit our website or work with us. By using our website you agree to the practices described here."] },
      { id: "information-we-collect", title: "Information We Collect", paragraphs: ["We collect information you provide directly, such as your name, email, company and project details when you contact us or apply for a job.", "We also collect limited technical data automatically, such as browser type, pages visited and approximate location, using cookies and analytics tools."] },
      { id: "how-we-use", title: "How We Use Information", paragraphs: ["We use your information to respond to enquiries, provide our services, improve our website, process job applications and, with your consent, send occasional updates.", "We do not sell your personal information to third parties."] },
      { id: "sharing", title: "Sharing and Disclosure", paragraphs: ["We share information only with trusted service providers who help us operate our business, such as hosting, email and analytics providers, under appropriate confidentiality agreements, or where required by law."] },
      { id: "retention", title: "Data Retention", paragraphs: ["We keep personal information only as long as needed for the purposes described in this policy or as required by law, after which it is securely deleted or anonymised."] },
      { id: "your-rights", title: "Your Rights (GDPR)", paragraphs: ["Depending on your location, you may have the right to access, correct, delete or export your personal data, and to object to or restrict certain processing.", "To exercise these rights, contact us at privacy@orbitsoftlab.com. We will respond within 30 days."] },
      { id: "contact", title: "Contact Us", paragraphs: ["If you have questions about this policy, email privacy@orbitsoftlab.com or write to our Dubai office in Business Bay, United Arab Emirates."] },
    ],
  },
  terms: {
    title: "Terms of",
    highlight: "Service",
    description: "The terms that govern your use of the Orbit Soft Lab website and services.",
    updated: "2026-10-01",
    image: "/images/page-process.webp",
    sections: [
      { id: "acceptance", title: "Acceptance of Terms", paragraphs: ["By accessing or using this website you agree to these Terms of Service. If you do not agree, please do not use the website."] },
      { id: "services", title: "Our Services", paragraphs: ["Project work is governed by a separate written agreement or statement of work. Where that agreement conflicts with these terms, the agreement takes precedence."] },
      { id: "intellectual-property", title: "Intellectual Property", paragraphs: ["All content on this website, including text, graphics and logos, belongs to Orbit Soft Lab or its licensors and may not be reused without permission.", "Ownership of deliverables created for clients is defined in each client agreement."] },
      { id: "acceptable-use", title: "Acceptable Use", paragraphs: ["You agree not to misuse the website, attempt to gain unauthorised access to our systems, or use the website for any unlawful purpose."] },
      { id: "liability", title: "Limitation of Liability", paragraphs: ["The website is provided \"as is\". To the fullest extent permitted by law, Orbit Soft Lab is not liable for indirect or consequential losses arising from your use of the website."] },
      { id: "changes", title: "Changes to These Terms", paragraphs: ["We may update these terms from time to time. The latest version will always be available on this page with the date of the last update."] },
      { id: "governing-law", title: "Governing Law", paragraphs: ["These terms are governed by the laws of the United Arab Emirates, and disputes are subject to the exclusive jurisdiction of the courts of Dubai."] },
    ],
  },
  cookies: {
    title: "Cookie",
    highlight: "Policy",
    description: "How Orbit Soft Lab uses cookies and similar technologies on this website.",
    updated: "2026-10-01",
    image: "/images/page-process.webp",
    sections: [
      { id: "what-are-cookies", title: "What Are Cookies", paragraphs: ["Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and understand how it is used."] },
      { id: "cookies-we-use", title: "Cookies We Use", paragraphs: ["Essential cookies keep the website secure and working correctly.", "Analytics cookies help us understand which pages are visited and how we can improve them. These are only set with your consent where required."] },
      { id: "third-party", title: "Third Party Cookies", paragraphs: ["Some cookies are set by third party services we use, such as analytics or embedded content providers. These providers have their own privacy policies."] },
      { id: "managing-cookies", title: "Managing Cookies", paragraphs: ["You can block or delete cookies in your browser settings. Blocking some cookies may affect how the website works."] },
      { id: "contact", title: "Contact Us", paragraphs: ["Questions about our use of cookies can be sent to privacy@orbitsoftlab.com."] },
    ],
  },
};
