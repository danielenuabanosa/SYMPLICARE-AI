export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
  yearsExp: number;
  expertiseAreas: string[];
  linkedinUrl: string;
}

export const teamData: TeamMember[] = [
  {
    id: "founder",
    name: "Sarah Mitchell",
    role: "Founder & CEO",
    bio: "Healthcare innovator with 15+ years in digital transformation. Passionate about bridging technology and compassionate care.",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop",
    yearsExp: 15,
    expertiseAreas: ["Healthcare Tech", "Strategy", "Product Vision"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "dev",
    name: "Alex Chen",
    role: "Lead Developer",
    bio: "Full-stack engineer specializing in scalable healthcare platforms. 10+ years building robust, secure systems.",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
    yearsExp: 10,
    expertiseAreas: ["Full-Stack Dev", "Cloud Architecture", "Security"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "designer",
    name: "Emma Rodriguez",
    role: "Head of Design & UX",
    bio: "Award-winning UX/UI designer with 10+ years crafting intuitive interfaces for healthcare workflows.",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop",
    yearsExp: 10,
    expertiseAreas: ["UX Strategy", "Accessibility", "User Research"],
    linkedinUrl: "https://linkedin.com",
  },
  {
    id: "qa",
    name: "James Wilson",
    role: "QA & Testing Lead",
    bio: "Meticulous quality assurance specialist. 10+ years ensuring mission-critical systems meet the highest standards.",
    photoUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop",
    yearsExp: 10,
    expertiseAreas: ["Test Automation", "Quality Strategy", "Performance Testing"],
    linkedinUrl: "https://linkedin.com",
  },
];
