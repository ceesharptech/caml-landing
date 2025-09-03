import { User, Book, File } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import user1 from "./../assets/images/user1.jpg";
import user2 from "./../assets/images/user2.jpg";
import user3 from "./../assets/images/user3.jpg";

export interface Feature {
  title: string;
  content: string;
  icon: LucideIcon; // this is provided by lucide-react
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export const navlinks = [
  { href: "#work", title: "Work" },
  { href: "#aboutus", title: "About Us" },
  { href: "#casestudy", title: "Case Study" },
  { href: "#contactus", title: "Contact Us" },
];

export const featureCardInfo: Feature[] = [
  {
    title: "Easy Publishing",
    content: "Lorem ipsum dolor avec tani aber volor sit dol amet col man",
    icon: User,
  },
  {
    title: "Multiple Stories",
    content: "Lorem ipsum dolor avec tani aber volor sit dol amet col man",
    icon: Book,
  },
  {
    title: "Diverse Readers",
    content: "Lorem ipsum dolor avec tani aber volor sit dol amet col man",
    icon: File,
  },
];

export const pricingData = [
  {
    id: "basic",
    name: "Basic",
    price: "$10/mo",
    description: "For new writers starting out.",
    features: [
      { feature: "Upload up to 3 stories", available: true },
      { feature: "Access to community forum", available: true },
      { feature: "Basic analytics (views & likes)", available: true },
      { feature: "Custom story cover design", available: false },
      { feature: "Monetization options", available: false },
      { feature: "Priority support", available: false },
    ],
    buttonContent: "Get Started",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$30/mo",
    description: "For growing writers building an audience.",
    features: [
      { feature: "Upload unlimited stories", available: true },
      { feature: "Access to community forum", available: true },
      { feature: "Advanced analytics (reads, retention)", available: true },
      { feature: "Custom story cover design", available: true },
      { feature: "Monetization options", available: true },
      { feature: "Priority support", available: false },
    ],
    buttonContent: "14-Day Free Trial",
  },
  {
    id: "elite",
    name: "Elite",
    price: "$70/mo",
    description: "For professional writers seeking premium features.",
    features: [
      { feature: "Upload unlimited stories", available: true },
      { feature: "Access to community forum", available: true },
      { feature: "Full analytics dashboard", available: true },
      { feature: "Custom story cover design", available: true },
      { feature: "Monetization options", available: true },
      { feature: "Priority support (24/7)", available: true },
      { feature: "Featured placement on homepage", available: true },
    ],
    buttonContent: "Try Now",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Marketing Director @ XYZ",
    image: user1,
    text: "Eniola was a pleasure to work with. They followed my instructions to the letter, and the end results were absolutely outstanding.",
    rating: 5,
  },
  {
    id: 2,
    name: "John Adams",
    role: "Marketing Director @ XYZ",
    image: user2,
    text: "Working alongside Eniola was a fantastic experience. They fulfilled all my expectations flawlessly, and the final results were beyond excellent.",
    rating: 5,
  },
  {
    id: 3,
    name: "Alex James",
    role: "Marketing Director @ ABC",
    image: user3,
    text: "Loved working with Eniola. They did everything exactly how I wished for and the results couldn’t have been better.",
    rating: 5,
  },
];
