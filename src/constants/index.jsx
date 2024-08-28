import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "Jesus Immanuel Karampudi",
    company: "Franchise Empire",
    image: user1,
    text: "The Franchise Hub platform transformed our business operations. Their support team was responsive, and the tools provided exceeded our expectations. We've seen tremendous growth since partnering with them.",
  },
  {
    user: "Dharani Annavarapu",
    company: "Global Ventures",
    image: user2,
    text: "The team's expertise and problem-solving abilities were key to our success. Franchise Hub's platform made the complex process of expanding our franchise network seamless and efficient",
  },
  {
    user: "Anirudh H T",
    company: "Enterprise Networks",
    image: user3,
    text: "Working with Franchise Hub has been an absolute pleasure. Their commitment to excellence and attention to detail are unparalleled. I highly recommend their services to any business looking to grow",
  },
  {
    user: "Ronee Brown",
    company: "Business Innovations",
    image: user4,
    text: "Franchise Hub has been a game-changer for our business. The innovative solutions and professional support have helped us achieve our goals faster than we thought possible. Their expertise is invaluable!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Solutions",
    image: user5,
    text: "I am thoroughly impressed by the level of dedication and professionalism shown by the Franchise Hub team. They exceeded our expectations and delivered outstanding results that drove our growth",
  },
  {
    user: "Emily Davis",
    company: "Synergy Enterprises",
    image: user6,
    text: "The Franchise Hub team went above and beyond to ensure our success. Their unmatched expertise and dedication have solidified our decision to continue working with them for future expansions.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Centralized Communication",
    description:
      "Streamline all your franchise communications in one place, ensuring clear and efficient exchanges between franchisees and franchisors.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Access",
    description:
      " Access the Franchise Hub across multiple platforms, including desktop, mobile, and tablet, for seamless management on the go.",
  },
  {
    icon: <ShieldHalf />,
    text: "Pre-Built Templates",
    description:
      "Kickstart your franchise operations with a variety of built-in templates designed for different aspects of franchise management.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Updates",
    description:
      "Keep your entire network informed with real-time updates and notifications, allowing for quick decision-making and action.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      " Work together with your team in real time, sharing insights, documents, and strategies to foster seamless collaboration",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain deep insights into your franchise's performance with a comprehensive analytics dashboard that tracks key metrics and trends.",
  },
];

export const checklistItems = [
  {
    title: "Effortless Sales Tracking",
    description:
      "Easily monitor and compare your sales performance across different segments before and after joining our platform.",
  },
  {
    title: "Data-Driven Growth Strategies",
    description:
      "Leverage our insights to drive targeted growth in consumer, corporate, and home office sales.",
  },
  {
    title: "Instant Access to Performance Metrics",
    description:
      "Get real-time updates on your business's key performance indicators, ensuring you stay ahead of the competition.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "₹0",
    features: [
      "Access to Basic Franchise Resources",
      "5 Gb Storage",
      "Standard Business Analytics and No chat Support ",
      "Limited Support",
    ],
  },
  {
    title: "Pro",
    price: "₹500",
    features: [
      "Access to Advanced Franchise Resources",
      "50 Gb Storage",
      "Enhanced Business Analytics with Growth Insights",
      "Priority Support",
    ],
  },
  {
    title: "Enterprise",
    price: "₹1299",
    features: [
      "Unlimited Access to Franchise Resources",
      "Unlimited Storage",
      "Comprehensive Business Analytics and Custom Reports",
      "Dedicated Account Manager",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Franchise Documentation" },
  { href: "#", text: "Video Tutorials" },
  { href: "#", text: "Case Studies" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
