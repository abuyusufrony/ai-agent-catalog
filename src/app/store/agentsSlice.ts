import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Agent = {
    id: string;
    name: string;
    type: string;
    description: string;
    image: string;
};

const initialAgents: Agent[] = [
    {
        id: "1",
        name: "Oracle Miracle Agent",
        type: "Data Analyst",
        description: "Automates workflows in finance, HR, and supply chain within Oracle's Fusion Cloud, processing structured and unstructured data for actionable insights.",
        image: "/ora.jpg",
        features: [
            "Automates finance workflows",
            "Supports structured & unstructured data",
            "Built for Oracle Fusion Cloud",
        ],
        tags: ["Finance", "Workflow", "Oracle"],
        link: "https://www.oracle.com/cloud/",
    },
    {
        id: "2",
        name: "Microsoft Copilot Vision",
        type: "Data Analyst",
        description: "Integrated with Microsoft Dynamics 365, autonomously manages CRM data, sales analytics, and custom workflows via Copilot Studio.",
        image: "/co.png",
        features: [
            "CRM data automation",
            "Sales analytics",
            "Custom workflow creation",
        ],
        tags: ["CRM", "Sales", "Microsoft"],
        link: "https://dynamics.microsoft.com/",
    },
    {
        id: "3",
        name: "SAP Joule",
        type: "Data Analyst",
        description: "Embedded in SAP’s enterprise suite, provides predictive analytics and streamlines business processes with data-driven insights using Meta’s Llama 3.",
        image: "/Joule.png",
        features: [
            "Predictive analytics",
            "Business process optimization",
            "Powered by Llama 3",
        ],
        tags: ["Analytics", "Business", "SAP"],
        link: "https://www.sap.com/products/joule.html",
    },
    {
        id: "4",
        name: "AutoGPT",
        type: "Data Analyst",
        description: "Enables developers to create custom AI agents for research, planning, and data analysis with a modular design for tailored workflows.",
        image: "/AutoGPT.png",
        features: [
            "Custom AI agents",
            "Research and planning",
            "Modular workflow design",
        ],
        tags: ["AI", "Customization", "Open Source"],
        link: "https://autogpt.com/",
    },
    {
        id: "5",
        name: "xAI Grok DeepSearch",
        type: "Data Analyst",
        description: "Iteratively searches the web and analyzes data for comprehensive research, ideal for data-heavy tasks, activated via DeepSearch mode on grok.com.",
        image: "/grok.jpg",
        features: [
            "Iterative web search",
            "Comprehensive data analysis",
            "Ideal for data-heavy research",
        ],
        tags: ["Search", "Research", "xAI"],
        link: "https://grok.com/",
    },
    {
        id: "6",
        name: "Chatsonic",
        type: "Marketing",
        description: "Combines GPT-4o, Claude, and Gemini with tools like Ahrefs to research, create, and optimize marketing content for SEO and publishing.",
        image: "/chatsonic.jpg",
        features: [
            "Multi-model AI integration",
            "SEO content optimization",
            "Marketing research tools",
        ],
        tags: ["Marketing", "SEO", "Content"],
        link: "https://writesonic.com/chatsonic",
    },
    {
        id: "7",
        name: "Aomni",
        type: "Marketing",
        description: "Automates research and sales development by browsing real-time web data, enhancing B2B marketing and sales strategies.",
        image: "/Aomni.png",
        features: [
            "Real-time web browsing",
            "Sales development automation",
            "B2B marketing enhancement",
        ],
        tags: ["Sales", "B2B", "Marketing"],
        link: "https://aomni.ai/",
    },
    {
        id: "8",
        name: "Jasper AI Agent",
        type: "Marketing",
        description: "Automates content creation for blogs, social media, and ads with brand voice customization and marketing platform integrations.",
        image: "/jasper_ai_agent.jpg",
        features: [
            "Content creation automation",
            "Brand voice customization",
            "Multi-platform integrations",
        ],
        tags: ["Content", "Social Media", "Automation"],
        link: "https://www.jasper.ai/",
    },
    {
        id: "9",
        name: "Hootsuite AI",
        type: "Marketing",
        description: "Automates social media campaign management, schedules posts, and analyzes engagement metrics to optimize marketing strategies.",
        image: "/hootsuite_ai.jpg",
        features: [
            "Campaign management automation",
            "Post scheduling",
            "Engagement analytics",
        ],
        tags: ["Social Media", "Analytics", "Marketing"],
        link: "https://hootsuite.com/",
    },
    {
        id: "10",
        name: "HubSpot AI Agent",
        type: "Marketing",
        description: "Powers marketing automation with personalized email campaigns, lead scoring, and content optimization for inbound marketing success.",
        image: "/hubspot_ai_agent.jpg",
        features: [
            "Email campaign automation",
            "Lead scoring",
            "Content optimization",
        ],
        tags: ["Inbound", "Email", "Marketing"],
        link: "https://www.hubspot.com/products/marketing",
    },
    {
        id: "11",
        name: "Lindy",
        type: "Customer Support",
        description: "No-code platform with 2,500+ integrations, automates emails, meeting notes, and customer support workflows for efficient service.",
        image: "/lindy.png",
        features: [
            "No-code integrations",
            "Email automation",
            "Meeting notes automation",
        ],
        tags: ["Customer Support", "Automation", "No-Code"],
        link: "https://lindy.com/",
    },
    {
        id: "12",
        name: "Otter AI Sales Agent",
        type: "Customer Support",
        description: "Provides real-time sales coaching, generates call summaries, and drafts follow-up emails, integrating with CRM for customer support.",
        image: "/otter_sales_agent.jpg",
        features: [
            "Real-time sales coaching",
            "Call summary generation",
            "CRM integration",
        ],
        tags: ["Sales", "CRM", "Support"],
        link: "https://otter.ai/sales",
    },
    {
        id: "13",
        name: "Zendesk AI Agent",
        type: "Customer Support",
        description: "Automates ticket resolution, customer query responses, and live chat support, enhancing customer service efficiency with AI insights.",
        image: "/zendesk_ai_agent.jpg",
        features: [
            "Ticket resolution automation",
            "Live chat support",
            "Customer query handling",
        ],
        tags: ["Support", "Chat", "Automation"],
        link: "https://www.zendesk.com/ai/",
    },
    {
        id: "14",
        name: "Intercom AI Bot",
        type: "Customer Support",
        description: "Handles customer inquiries via chat, provides 24/7 support, and integrates with CRM to personalize customer interactions.",
        image: "/intercom_ai_bot.jpg",
        features: [
            "24/7 chat support",
            "Customer inquiry handling",
            "CRM personalization",
        ],
        tags: ["Chatbot", "Support", "CRM"],
        link: "https://www.intercom.com/",
    },
    {
        id: "15",
        name: "Freshdesk AI",
        type: "Customer Support",
        description: "Automates helpdesk tasks, resolves repetitive customer queries, and provides analytics for improving support team performance.",
        image: "/freshdesk_ai.jpg",
        features: [
            "Helpdesk automation",
            "Query resolution",
            "Support analytics",
        ],
        tags: ["Helpdesk", "Support", "Analytics"],
        link: "https://freshdesk.com/ai",
    },
];

interface AgentsState {
    agents: Agent[];
    filterType: string | null;
    searchQuery: string;
    selectedAgent: Agent | null;
}

const initialState: AgentsState = {
    agents: initialAgents,
    filterType: null,
    searchQuery: "",
    selectedAgent: null,
};

export const agentSlice = createSlice({
    name: "agents",
    initialState,
    reducers: {
        setFilterType: (state, action: PayloadAction<string | null>) => {
            state.filterType = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setSelectedAgent: (state, action: PayloadAction<Agent | null>) => {
            state.selectedAgent = action.payload;
        },
    },
});


export const { setFilterType, setSearchQuery, setSelectedAgent } = agentSlice.actions;

export const selectFilteredAgents = (state: AgentState) => {
    return state.agents.filter((agent) => {
        const matchesSearch = agent.name
            .toLowerCase()
            .includes(state.searchQuery.toLowerCase());
        const matchesFilter =
            !state.filterType || agent.type === state.filterType;
        return matchesSearch && matchesFilter;
    });
};

export default agentSlice.reducer;
