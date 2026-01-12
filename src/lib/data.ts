export type Article = {
  id: number;
  category: string;
  title: string;
  description: string;
  readTime: string;
  imageUrl: string;
};

export const articles: Article[] = [
  {
    id: 1,
    category: 'Threat Detection',
    title: 'Detecting Advanced Persistent Threats in SAP S/4HANA',
    description:
      'A deep dive into methodologies for identifying stealthy attackers within your core ERP system.',
    readTime: '12 min read',
    imageUrl: 'https://picsum.photos/seed/sap1/600/400',
  },
  {
    id: 2,
    category: 'Access Control',
    title: 'Best Practices for Segregation of Duties (SoD) in Fiori',
    description:
      'Learn how to implement robust SoD rules to mitigate fraud risk in modern SAP environments.',
    readTime: '8 min read',
    imageUrl: 'https://picsum.photos/seed/sap2/600/400',
  },
  {
    id: 3,
    category: 'Compliance',
    title: 'Automating GDPR Compliance Checks for SAP HR',
    description:
      'Strategies and tools for ensuring your SAP Human Capital Management system adheres to data privacy regulations.',
    readTime: '7 min read',
    imageUrl: 'https://picsum.photos/seed/sap3/600/400',
  },
  {
    id: 4,
    category: 'Code Security',
    title: 'Static Code Analysis for Custom ABAP Development',
    description:
      'Secure your custom code from vulnerabilities by integrating static analysis into your development lifecycle.',
    readTime: '10 min read',
    imageUrl: 'https://picsum.photos/seed/sap4/600/400',
  },
  {
    id: 5,
    category: 'Cloud Security',
    title: 'Securing Your SAP BTP Environment: A Checklist',
    description:
      'A comprehensive checklist to ensure your Business Technology Platform is configured for maximum security.',
    readTime: '9 min read',
    imageUrl: 'https://picsum.photos/seed/sap5/600/400',
  },
  {
    id: 6,
    category: 'Incident Response',
    title: 'Forensic Analysis of an SAP System Breach',
    description:
      'A step-by-step guide to investigating and responding to a security incident within your SAP landscape.',
    readTime: '15 min read',
    imageUrl: 'https://picsum.photos/seed/sap6/600/400',
  },
];

export const expertise = [
  {
    icon: 'UserCheck',
    title: 'SAP GRC',
    description:
      'Streamline Governance, Risk, and Compliance processes with our expert guidance.',
  },
  {
    icon: 'ShieldCheck',
    title: 'SAP IAM',
    description:
      'Implement robust Identity and Access Management solutions for your SAP systems.',
  },
  {
    icon: 'Users',
    title: 'Cybersecurity',
    description:
      'Protect your SAP landscape from internal and external threats.',
  },
  {
    icon: 'Briefcase',
    title: 'Secure Operations',
    description:
      'Ensure the ongoing security of your SAP systems with our operational best practices.',
  },
  {
    icon: 'Cloud',
    title: 'Cloud Security',
    description:
      'Secure your SAP applications and data in the cloud with our proven methodologies.',
  },
  {
    icon: 'Code',
    title: 'DevOps',
    description:
      'Integrate security into your SAP development lifecycle with our DevSecOps expertise.',
  },
];

export const testimonials = [
  {
    name: 'Real-World Experience',
    title: 'CISO, Fortune 500 Manufacturing',
    quote:
      "Their team's deep, hands-on experience in both SAP and cybersecurity is unparalleled. They don't just talk theory; they provide practical, actionable solutions that work in complex, real-world environments.",
  },
  {
    name: 'Threat-Informed',
    title: 'Head of SAP Security, Global Retailer',
    quote:
      'Their threat intelligence is always current and relevant. They help us stay ahead of attackers by understanding their tactics and techniques, allowing us to proactively defend our critical systems.',
  },
  {
    name: 'Actionable & Pragmatic',
    title: 'SAP Basis Manager, Healthcare Provider',
    quote:
      'What I appreciate most is their pragmatic approach. They provide clear, step-by-step guidance that our team can actually implement. No fluff, just results.',
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
