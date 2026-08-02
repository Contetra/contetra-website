import rawClientStories from "@/data/client-stories.json";

export interface ClientStory {
  Client: string;
  Industry: string;
  Business: string;
  Problem: string;
  Solution: string;
  Outcome: string;
  Win1: string;
  Win2: string;
  Win3: string;
  NewFiles: string;
  FeedbackClient: string;
  FeedbackTeam: string;
  Service: "ERP" | "FP&A" | "Technical Accounting";
}

export const clientStories: ClientStory[] = rawClientStories as ClientStory[];
