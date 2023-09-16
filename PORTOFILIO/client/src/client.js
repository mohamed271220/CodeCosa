import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";
export const clients = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_PROJECT_TOKEN,
});
const builder = imageUrlBuilder(clients);
export const urlFor = (source) => builder.image(source);
