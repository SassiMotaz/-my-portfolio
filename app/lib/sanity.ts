import { createClient } from "next-sanity";

const projectId = "acvrl0c9";
const dataset = "production";
const apiVersion = "2023-08-25";

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
  });
  

