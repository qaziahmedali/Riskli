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
    icon: "/icons/Vector.png",
    title: "Avoid Wasting Money",
    description: "Saved me from buying a risky location.",
    colorBorder: "border-red-500",
    bgGradient: "bg-gradient-to-r from-white to-red-100",
  },
  {
    id: 2,
    icon: "/icons/Warning.png",
    title: "Stay Safe From Scams",
    description: "AI gave me better confidence.",
    colorBorder: "border-purple-500",
    bgGradient: "bg-gradient-to-r from-white to-purple-100",
  },
  {
    id: 3,
    icon: "/icons/Brain.png",
    title: "Make Informed Decisions",
    description: "It was simple, clear, and fast.",
    colorBorder: "border-yellow-500",
    bgGradient: "bg-gradient-to-r from-white to-yellow-100",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Before Riskli, I Almost Signed A Lease On A Commercial Space That Had A History Of Business Closures In The Area. Riskli's AI Flagged It Instantly, And I Chose A Better Location. It Saved Me Thousands.",
    author: "- Zara M.,",
    role: "Small Business Owner",
    rating: 4,
    image: "/img/testimonials.jpg",
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
