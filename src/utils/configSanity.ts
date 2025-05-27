import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "2wt3vq16",
  dataset: "production",
  apiVersion: "2025-05-27",
  useCdn: true,
});
