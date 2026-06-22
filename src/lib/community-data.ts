export type CommunityActivity = {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    authorRole: string;
    category: string;
    postedTime: string;
    views: number;
    replies: number;
    likes: number;
    isExclusive?: boolean;
};

export const communityActivity: CommunityActivity[] = [
    {
        id: 1,
        title: "When Agents Become Users: Governing Non-Human Identities in SAP's...",
        excerpt: "As SAP's Autonomous Enterprise vision becomes reality, AI agents are emerging as a new class of iden...",
        author: "Raghu Boddu",
        authorRole: "SAP Security Expert",
        category: "EXPERT-RECOMMENDATIONS",
        postedTime: "June 10, 2026",
        views: 452,
        replies: 18,
        likes: 45,
        isExclusive: false
    },
    {
        id: 2,
        title: "Your SAP Process Control Is a Filing Cabinet. It Was Built to Be a Watchdog",
        excerpt: "Most SAP Process Control environments are used to collect evidence and support audits. Continuous Co...",
        author: "Raghu Boddu",
        authorRole: "SAP Security Expert",
        category: "PROCESS-CONTROL",
        postedTime: "June 7, 2026",
        views: 312,
        replies: 9,
        likes: 24,
        isExclusive: true
    },
    {
        id: 3,
        title: "Who Owns Your SAP BTP? A Practical Governance Framework",
        excerpt: "SAP BTP enables rapid innovation, but without governance it can quickly become fragmented, costly, a...",
        author: "Raghu Boddu",
        authorRole: "SAP Security Expert",
        category: "BTP-SECURITY",
        postedTime: "June 5, 2026",
        views: 289,
        replies: 14,
        likes: 31,
        isExclusive: true
    },
];

export const trendingTopics: string[] = [
    "#SAPGRC",
    "#LicenseCompliance",
    "#S4HANASecurity",
    "#SAPPublicCloud",
    "#IAM",
    "#SoD",
];

export type TopContributor = {
    avatarUrl: string;
    name: string;
    role: string;
    likes: number;
};

export const topContributors: TopContributor[] = [
    {
        avatarUrl: "https://i.pravatar.cc/150?u=raghu",
        name: "Raghu Boddu",
        role: "SAP Security Expert",
        likes: 124,
    },
    {
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        name: "Ramesh_K",
        role: "SAP GRC Consultant",
        likes: 46,
    },
    {
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
        name: "Sandra_Rossi",
        role: "GRC Architect",
        likes: 39,
    },
];

export type Announcement = {
    title: string;
    date: string;
    likes: number;
    comments: number;
};

export const announcements: Announcement[] = [
    {
        title: "10 Best Practices for SAP GRC Role Design",
        date: "April 2026",
        likes: 18,
        comments: 7,
    },
    {
        title: "SAP IAG Roadmap – What to Expect Next",
        date: "March 2026",
        likes: 23,
        comments: 11,
    }
];

export type CommunityGroup = {
    avatarUrl: string;
    name: string;
    status: string;
};

export const communityGroups: CommunityGroup[] = [
    {
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026707d",
        name: "SAP GRC Practitioners",
        status: "🟢 Active 20 mins ago",
    },
    {
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026708d",
        name: "SAP Cloud Security",
        status: "🟡 Active 3 hours ago",
    },
    {
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026709d",
        name: "SAP License Optimization",
        status: "🟢 Active today",
    },
    {
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026710d",
        name: "IAM & IAG Experts",
        status: "🟡 Active yesterday",
    },
];
