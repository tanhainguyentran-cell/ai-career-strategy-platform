import { UserProfile } from "@/app/hooks/useUserProfile";

export default function buildAIContext(
  profile: UserProfile | null
) {
  if (!profile) {
    return "";
  }

  return `
User Profile:

Full Name:
${profile.fullName || "Unknown"}

Target Company:
${profile.targetCompany || "Unknown"}

Target Role:
${profile.targetRole || "Unknown"}

Experience Level:
${profile.experienceLevel || "Unknown"}

Career Goals:
${
  profile.careerGoals?.join(", ") ||
  "Unknown"
}

The AI should provide:
- personalized career guidance
- strategic recommendations
- hiring preparation advice
- roadmap optimization
- AI-native growth strategies
`;
}