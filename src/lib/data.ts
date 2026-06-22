export type Article = {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  authorAvatar?: string;
  stats: {
    views: string;
    comments: string;
    likes: string;
  };
  date: string;
  isExclusive?: boolean;
};

export const articles: Article[] = [
  {
    id: 1,
    category: 'CLOUD',
    title: "How the SSCUI List Solves Authorization Errors in SAP...",
    description:
      'Learn how the SAP SSCUI List helps troubleshoot authorization errors in SAP...',
    imageUrl: 'https://sapsecurityexpert.com/uploads/blogs/blog_5034e16009fc8233.png',
    author: 'Raghu Boddu',
    authorAvatar: 'https://i.pravatar.cc/150?u=raghu',
    stats: {
      views: '47',
      comments: '0',
      likes: '12',
    },
    date: 'June 14, 2026',
    isExclusive: true,
  },
  {
    id: 2,
    category: 'EXPERT RECOMMENDATIONS',
    title: 'When Agents Become Users: Governing Non-Human Identities...',
    description:
      "As SAP's Autonomous Enterprise vision becomes reality, AI agents are emerging as ...",
    imageUrl: 'https://sapsecurityexpert.com/uploads/blogs/blog_d78098b375db9c5c.png',
    author: 'Raghu Boddu',
    authorAvatar: 'https://i.pravatar.cc/150?u=raghu',
    stats: {
      views: '23',
      comments: '0',
      likes: '8',
    },
    date: 'June 10, 2026',
    isExclusive: true,
  },
  {
    id: 3,
    category: 'SAP PROCESS CONTROL',
    title: 'Your SAP Process Control Is a Filing Cabinet. It Was Built to Be ...',
    description:
      'Most SAP Process Control environments are used to collect evidence and support audits...',
    imageUrl: 'https://sapsecurityexpert.com/uploads/blogs/blog_75219c78415f1a0f.png',
    author: 'Raghu Boddu',
    authorAvatar: 'https://i.pravatar.cc/150?u=raghu',
    stats: {
      views: '18',
      comments: '0',
      likes: '5',
    },
    date: 'June 7, 2026',
    isExclusive: true,
  },
  {
    id: 4,
    category: 'BTP SECURITY',
    title: 'Who Owns Your SAP BTP? A Practical Governance Framework',
    description:
      'SAP BTP enables rapid innovation, but without governance it can quickly become...',
    imageUrl: 'https://sapsecurityexpert.com/uploads/blogs/blog_b086664cf417d4d4.png',
    author: 'Raghu Boddu',
    authorAvatar: 'https://i.pravatar.cc/150?u=raghu',
    stats: {
      views: '31',
      comments: '2',
      likes: '14',
    },
    date: 'June 5, 2026',
    isExclusive: true,
  },
  {
    id: 5,
    category: 'Cloud Security',
    title: 'Securing Your SAP BTP Environment: A Checklist',
    description:
      'A comprehensive checklist to ensure your Business Technology Platform is configured for maximum security.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    author: 'Raghu Boddu',
    authorAvatar: 'https://i.pravatar.cc/150?u=raghu',
    stats: {
      views: '987',
      comments: '3',
      likes: '18',
    },
    date: 'May 28, 2026',
  },
  {
    id: 6,
    category: 'Incident Response',
    title: 'Forensic Analysis of an SAP System Breach',
    description:
      'A step-by-step guide to investigating and responding to a security incident within your SAP landscape.',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
    author: 'Raghu Boddu',
    authorAvatar: 'https://i.pravatar.cc/150?u=raghu',
    stats: {
      views: '2,845',
      comments: '15',
      likes: '55',
    },
    date: 'May 20, 2026',
  },
];

export const expertise = [
  {
    icon: 'Shield',
    title: 'SAP GRC',
    description: 'Access Control, Process Control, Risk Management',
    articles: 124,
  },
  {
    icon: 'Network',
    title: 'SAP IAG',
    description: 'Identity Access Governance in the cloud',
    articles: 67,
  },
  {
    icon: 'Lock',
    title: 'Cybersecurity',
    description: 'Threat detection, vulnerability management',
    articles: 89,
  },
  {
    icon: 'FileCheck',
    title: 'License Compliance',
    description: 'SAP licensing optimization strategies',
    articles: 45,
  },
  {
    icon: 'Cloud',
    title: 'Cloud Security',
    description: 'S/4HANA Cloud, BTP security',
    articles: 78,
  },
  {
    icon: 'KeyRound',
    title: 'IAM',
    description: 'Identity & Access Management best practices',
    articles: 92,
  },
];

export const testimonials = [
  {
    name: 'Real-World Experience',
    quote:
      'Content authored by practitioners with hands-on SAP security implementation experience across Fortune 500 companies.',
    icon: 'CheckCircle',
  },
  {
    name: 'Vendor Neutral',
    quote:
      'Unbiased insights without commercial influence. We recommend solutions based on merit, not partnerships.',
    icon: 'Award',
  },
  {
    name: 'Actionable Frameworks',
    quote:
      'Ready-to-use templates, checklists, and step-by-step guides you can implement immediately.',
    icon: 'Target',
  },
];

export const tools = [
  {
    title: 'License Analysis',
    description: 'Analyze your SAP license usage to optimize costs and ensure compliance.',
    tag: 'Available',
  },
  {
    title: 'SoD Review',
    description: 'Review your Segregation of Duties matrix to identify and mitigate conflicts.',
    tag: 'Free',
  },
  {
    title: 'Security Role Of Model',
    description: 'Generate a security role model based on your specific business requirements.',
    tag: 'Coming Soon',
  },
];
