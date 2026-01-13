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
};

export const communityActivity: CommunityActivity[] = [
    {
        id: 1,
        title: "Optimizing SAP License Compliance Using STAR vs LAW",
        excerpt: "Has anyone successfully reduced indirect access exposure using LAW without triggering audit issues? Sharing our S/4HANA experience…",
        author: "Ramesh_K",
        authorRole: "SAP GRC Consultant",
        category: "License Compliance",
        postedTime: "18 mins ago",
        views: 124,
        replies: 6,
        likes: 14,
    },
    {
        id: 2,
        title: "Segregation of Duties conflicts in S/4HANA Public Cloud",
        excerpt: "We are facing SoD conflicts after moving to Public Cloud — how are teams handling role design without classic SUIM access?",
        author: "Ananya_S",
        authorRole: "Security Architect",
        category: "SAP GRC",
        postedTime: "32 mins ago",
        views: 89,
        replies: 4,
        likes: 9,
    },
    {
        id: 3,
        title: "Is SAP IAG enough without GRC AC?",
        excerpt: "For mid-size implementations, is IAG standalone sufficient or does it create audit gaps later?",
        author: "Michael_P",
        authorRole: "IAM Lead",
        category: "SAP IAG",
        postedTime: "1 hour ago",
        views: 201,
        replies: 12,
        likes: 21,
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
    {
        avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
        name: "Lakshmi_Pathi",
        role: "SAP IAM Specialist",
        likes: 34,
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