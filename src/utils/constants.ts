import { Step } from "@/interfaces/step.interface";

export const FEATURES = [
  {
    title: "AI-Powered Risk Scoring",
    description:
      "Get instant property insights tailored to your business profile using advanced AI algorithms.",
    textPosition: "right",
    image: "/img/Feature1.png",
    width: "260px",
  },
  {
    title: "Real-Time Market Analysis",
    description:
      "Stay ahead with live data on property values, demand, and area risks.",
    textPosition: "left",
    image: "/img/Feature2.png",
    width: "260px",
  },
  {
    title: "Operational Pattern Detection",
    description:
      "Our AI scans your business history to identify potential investment red flags.",
    textPosition: "right",
    image: "/img/Feature3.png",
    width: "340px",
  },
  {
    title: "Secure Assessment",
    description: "We protect your data — no login or identity required.",
    textPosition: "left",
    image: "/img/Feature4.png",
    width: "200px",
  },
  {
    title: "Location-Based Risk",
    description:
      "Visualize risk levels across different areas before choosing a property.",
    textPosition: "right",
    image: "/img/Feature5.png",
    width: "220px",
  },
];
export const WHY_US_DATA = [
  {
    id: 1,
    icon: "/svg/money.svg",
    title: "Avoid Wasting Money",
    description: "Saved me from buying a risky location.",
    colorBorder: "border-red-500",
  },
  {
    id: 2,
    icon: "/svg/warning.svg",
    title: "Stay Safe From Scams",
    description: "AI gave me better confidence.",
    colorBorder: "border-purple-500",
  },
  {
    id: 3,
    icon: "/svg/brain.svg",
    title: "Make Informed Decisions",
    description: "It was simple, clear, and fast.",
    colorBorder: "border-yellow-500",
  },
];

export const TESTIMONIALS = [
  {
    image: "/img/testimonials.jpg",
    name: "Zara M.",
    role: "Small Business Owner",
    text: "Before Riskli, I Almost Signed A Lease On A Commercial Space That Had A History Of Business Closures In The Area. Riskli's AI Flagged It Instantly, And I Chose A Better Location. It Saved Me Thousands.",
    stars: 5,
  },
  {
    image: "/img/ali.jpg",
    name: "Ali R.",
    role: "Real Estate Investor",
    text: "Riskli's insights helped me avoid a high-risk property. The analysis was spot on and saved me a lot of trouble!",
    stars: 5,
  },
  {
    image: "/img/sara.jpg",
    name: "Sara K.",
    role: "Home Buyer",
    text: "I felt confident buying my first home after using Riskli. The risk report was easy to understand and very helpful.",
    stars: 5,
  },
];

export const STEPS: Step[] = [
  {
    id: 1,
    icon: "/svg/search.svg",
    title: "Find Your Answer",
    description: "Enter business details and find your answer.",
  },
  {
    id: 2,
    icon: "/svg/barChart.svg",
    title: "AI Risk Analysis",
    description:
      "Get your tailored risk report based on history, industry, location.",
  },
  {
    id: 3,
    icon: "/svg/Network.svg",
    title: "Decide Confidently",
    description: "Use insights to make smart, safe decisions.",
  },
];
export const FOOTER_LINKS = [
  { href: "#", sectionId: "", label: "Home" },
  { href: "#features", sectionId: "features", label: "Features" },
  { href: "#why-us", sectionId: "why-us", label: "Why Us" },
  { href: "#testimonials", sectionId: "testimonials", label: "Testimonials" },
];

export const SOCIAL_LINKS = [
  {
    href: "#",
    src: "/icons/instagram.png",
    alt: "Instagram",
    width: 20,
    height: 20,
  },
  {
    href: "#",
    src: "/icons/twitter.png",
    alt: "Twitter",
    width: 18,
    height: 18,
  },
  {
    href: "#",
    src: "/icons/facebook.png",
    alt: "Facebook",
    width: 20,
    height: 20,
  },
];
