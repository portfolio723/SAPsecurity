export type Article = {
  id: number;
  category: string;
  title: string;
  description: string;
  readTime: string;
};

export const articles: Article[] = [
  {
    id: 1,
    category: "Threat Detection",
    title: "Detecting Advanced Persistent Threats in SAP S/4HANA",
    description: "A deep dive into methodologies for identifying stealthy attackers within your core ERP system.",
    readTime: "12 min read",
  },
  {
    id: 2,
    category: "Access Control",
    title: "Best Practices for Segregation of Duties (SoD) in Fiori",
    description: "Learn how to implement robust SoD rules to mitigate fraud risk in modern SAP environments.",
    readTime: "8 min read",
  },
  {
    id: 3,
    category: "Compliance",
    title: "Automating GDPR Compliance Checks for SAP HR",
    description: "Strategies and tools for ensuring your SAP Human Capital Management system adheres to data privacy regulations.",
    readTime: "7 min read",
  },
  {
    id: 4,
    category: "Code Security",
    title: "Static Code Analysis for Custom ABAP Development",
    description: "Secure your custom code from vulnerabilities by integrating static analysis into your development lifecycle.",
    readTime: "10 min read",
  },
  {
    id: 5,
    category: "Cloud Security",
    title: "Securing Your SAP BTP Environment: A Checklist",
    description: "A comprehensive checklist to ensure your Business Technology Platform is configured for maximum security.",
    readTime: "9 min read",
  },
  {
    id: 6,
    category: "Incident Response",
    title: "Forensic Analysis of an SAP System Breach",
    description: "A step-by-step guide to investigating and responding to a security incident within your SAP landscape.",
    readTime: "15 min read",
  },
];
