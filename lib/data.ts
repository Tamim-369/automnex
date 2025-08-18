import { BrainCog, Code2, DollarSign, Rocket } from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Customer Support Agent",
    description:
      "An advanced AI Agent that uses your business data and talk to customers like a real human. Uses most up to date AI model.",
    image: "/projects/physiqueRater.png",
    techStack: [],
    viewSiteLink: "https://ai-physique-rater.vercel.app",
  },
  {
    id: 1,
    title: "AI Physique Rater",
    description:
      "An innovative AI-powered application that analyzes user-uploaded images to provide personalized physique ratings and exercise suggestions based on different studies.",
    image: "/projects/physiqueRater.png",
    techStack: ["Next.js", "Groq", "Langchain", "Tailwind CSS", "TypeScript"],
    viewSiteLink: "https://ai-physique-rater.vercel.app",
  },
];

export const services = [
  {
    icon: BrainCog,
    title: "LLM Chatbot Development",
    description:
      "Build advanced LLM-powered chatbots that understand context, use tools, and deliver natural responses.",
    features: [
      "Prompt engineering",
      "Custom LLM fine-tuning",
      "RAG implementation",
      "Multi-lingual support",
      "Context-aware responses",
      "Enterprise data integration",
    ],
  },
  {
    icon: Code2,
    title: "Automation Scripts with UI",
    description:
      "Simple and easy to use automation scripts with interactive UI to automate the most complex task you do again and again.",
    features: [
      "Web Automation",
      "Desktop Automation",
      "Built using custom code or tools like N8N, Zapier, Make.com",
      "Interactive UI for full control",
      "Multi-step workflow automation",
      "Scheduling and event-based triggers",
      "Error handling with notifications",
    ],
  },
  {
    icon: DollarSign,
    title: "Custom Lead Generation Agents",
    description:
      "Fully automatic lead generation agent for collecting more leads.",
    features: [
      "Automated lead capture from multiple channels",
      "Customizable lead qualification and scoring",
      "Integration with popular CRMs and marketing platforms",
      "Real-time lead alerts and notifications",
      "AI-powered lead targeting and personalization",
      "Multi-channel outreach automation (email, chat, calls)",
    ],
  },
  {
    icon: Rocket,
    title: "LLM PDF Q&A Agent",
    description:
      "Upload PDFs and get instant, context-aware answers powered by cutting-edge LLM embeddings.",
    features: [
      "Semantic PDF content extraction",
      "Contextual real-time answers",
      "Multi-document support",
      "Lightning-fast response times",
      "Intuitive user interface",
    ],
  },
  {
    icon: DollarSign,
    title: "SAAS App Development",
    description:
      "Build and maintain SAAS application. You give the idea, We turn into reality.",
    features: [
      "Full Stack SAAS App with integrated payments",
      "Lifetime maintenance service",
      "2 months free support",
      "Fast and interactive UI",
      "Scalable and secure architecture",
      "Custom feature development",
      "Responsive design for all devices",
      "API integration and third-party services",
    ],
  },
];
export const faqs = [
  {
    question: "What services does Automnex offer?",
    answer:
      "Automnex provides advanced LLM-powered chatbot development, including prompt engineering, custom LLM fine-tuning, RAG implementation, multi-lingual support, context-aware responses, and enterprise data integration.",
  },
  {
    question: "How can I get started with Automnex?",
    answer:
      "To get started, simply fill out the contact form with your details, budget idea, and description. Our team will reach out to you shortly to discuss your project.",
  },
  {
    question: "Is there a cost for initial consultation?",
    answer:
      "No, the initial consultation is completely free. We’ll assess your needs and provide a tailored solution without any upfront cost.",
  },
  {
    question: "What is the typical project timeline?",
    answer:
      "The timeline varies based on project complexity, but most projects are completed within 4-8 weeks. We’ll provide a detailed schedule after the initial consultation.",
  },
];
export const testimonials = [
  {
    id: 1,
    name: "Tanvir",
    role: "CEO",
    company: "HITEKBD",
    image: "clients/tanvir.png",
    content:
      "They are the best in the game. We have automated tons of processes in our business and we will automate more in future.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sayeed",
    role: "Founder",
    company: "Sunaan",
    avatar: "SD",
    image: "clients/sunaan.png",
    content:
      "They can automate basically anything. They fully automated how I track my expense using AI Agents.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ashish Jha",
    role: "Founder",
    company: "BLUEFIRE REDTEAM",
    avatar: "ER",
    image: "clients/asish.png",
    content: "Outstanding quality and innovative approach. Highly recommend.",
    rating: 5,
  },
];
