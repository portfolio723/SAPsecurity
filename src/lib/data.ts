export type Article = {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  stats: {
    views: string;
    comments: string;
    likes: string;
  };
  time: string;
};

export const articles: Article[] = [
  {
    id: 1,
    category: 'SAP GRC',
    title: "Complete Guide to SAP Access Control 12.0: What's New and How to Upgrade",
    description:
      'A comprehensive walkthrough of the latest SAP GRC Access Control features and migration best practices.',
    imageUrl: 'https://picsum.photos/seed/sap1/600/400',
    stats: {
      views: '2,345',
      comments: '12',
      likes: '45',
    },
    time: '2 hours ago',
  },
  {
    id: 2,
    category: 'Cybersecurity',
    title: 'Protecting SAP Systems from Ransomware: Best Practices for 2026',
    description:
      'Learn essential strategies to safeguard your SAP infrastructure against modern cyber threats.',
    imageUrl: 'https://picsum.photos/seed/sap2/600/400',
    stats: {
      views: '1,890',
      comments: '8',
      likes: '32',
    },
    time: '5 hours ago',
  },
  {
    id: 3,
    category: 'IAM',
    title: 'Role Mining Strategies for Large SAP Environments',
    description:
      'Data-driven approaches to optimize your SAP authorization model.',
    imageUrl: 'https://picsum.photos/seed/sap3/600/400',
    stats: {
      views: '1,567',
      comments: '6',
      likes: '28',
    },
    time: 'Yesterday',
  },
  {
    id: 4,
    category: 'Code Security',
    title: 'Static Code Analysis for Custom ABAP Development',
    description:
      'Secure your custom code from vulnerabilities by integrating static analysis into your development lifecycle.',
    imageUrl: 'https://picsum.photos/seed/sap4/600/400',
    stats: {
      views: '1,203',
      comments: '5',
      likes: '22',
    },
    time: '2 days ago',
  },
  {
    id: 5,
    category: 'Cloud Security',
    title: 'Securing Your SAP BTP Environment: A Checklist',
    description:
      'A comprehensive checklist to ensure your Business Technology Platform is configured for maximum security.',
    imageUrl: 'https://picsum.photos/seed/sap5/600/400',
    stats: {
      views: '987',
      comments: '3',
      likes: '18',
    },
    time: '3 days ago',
  },
  {
    id: 6,
    category: 'Incident Response',
    title: 'Forensic Analysis of an SAP System Breach',
    description:
      'A step-by-step guide to investigating and responding to a security incident within your SAP landscape.',
    imageUrl: 'https://picsum.photos/seed/sap6/600/400',
    stats: {
      views: '2,845',
      comments: '15',
      likes: '55',
    },
    time: '1 week ago',
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
