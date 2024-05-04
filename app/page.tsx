import Image from "next/image";
import Navbar from "../components/navbar";
import { client, urlFor } from "./lib/sanity";
import { PostView } from "./lib/interface";
import PostCard from "../components/post-card";


export async function getPosts() {
  const query = `
    *[_type == "blog"] | order(_createAt desc) {
      title,
      smallDescription,
      "slug": slug.current,
      "titleImage": titleImage.asset._ref
    }
  `
  const data = await client.fetch(query);
  return data;
}


export default async function Home() {
  const data: PostView[] = await getPosts();

  return (
    <div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {
          data?.map((post) => {
            const { slug, title, smallDescription, titleImage } = post;
            return (
              <PostCard
                key={slug + "post-view"}
                slug={slug}
                title={title}
                smallDescription={smallDescription}
                titleImage={urlFor(titleImage).url()}
              />
            )
          })
        }
      </div>
    </div>
  );
}
