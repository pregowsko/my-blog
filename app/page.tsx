import { simpleBlogcard } from "./lib/interface";
import {client} from "./lib/sanity";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}


export default async function Home() {
  const data: simpleBlogcard[] = await getData();

  return (
    <div>
      <h1>hello form the index</h1>
    </div>
  )
}
