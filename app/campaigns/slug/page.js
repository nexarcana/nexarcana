"use client";
import { useParams } from "next/navigation";

const campaignsMap = {
  "neural-nexus": {
    title: "Neural Nexus",
    knight: "Lady Neuralis",
    mission: "Explore Deep Learning & Neural Networks",
  },
  "market-machina": {
    title: "Market Machina",
    knight: "Sir Strategem",
    mission: "Master Finance & Strategic Marketing",
  },
  "codebane-arena": {
    title: "Codebane Arena",
    knight: "Sir Codebane",
    mission: "Conquer Programming & Debugging Challenges",
  },
  "arithmetix": {
    title: "Arithmetix",
    knight: "Dame Arithmia",
    mission: "Command Data & Logical Analysis",
  },
  "shadow-circuit": {
    title: "Shadow Circuit",
    knight: "Shadowhound",
    mission: "Automate Web Systems & Integrations",
  },
  "oracle-sanctum": {
    title: "Oracle Sanctum",
    knight: "The Oracle",
    mission: "Boost Cognitive Agility & Mental Sharpness",
  },
};

export default function CampaignPage() {
  const { slug } = useParams();

  const campaign = campaignsMap[slug];

  if (!campaign) {
    return <div className="text-white p-6">⚠️ Campaign not found.</div>;
  }

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-2">{campaign.title}</h1>
      <p className="mb-2">
        Knight: <span className="text-purple-400">{campaign.knight}</span>
      </p>
      <p className="text-gray-400">{campaign.mission}</p>
    </div>
  );
}
