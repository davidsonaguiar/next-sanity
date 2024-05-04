import { client, urlFor } from "@/app/lib/sanity";
import H1 from "@/components/ui/h1";
import H2 from "@/components/ui/h2";
import Small from "@/components/ui/small";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

export async function getPost(slug: string) {
  const query = `
    *[_type == "blog"][slug.current == "${slug}"] {
      title,
      content,
      _createdAt,
      "titleImage": titleImage.asset._ref
    }[0]
  `
  const data = await client.fetch(query);
  return data;
}

interface Post {
  title: string;
  content: any;
  titleImage: string;
  _createdAt: string;
}

export default async function Page(props: Readonly<Props>) {
  const data: Post = await getPost(props.params.slug);
  const date = format(new Date(data?._createdAt), "dd/MM/yyyy");
  return (
    <article className="w-full py-4 px-7">
      <H2 className="text-primary mb-5">{data?.title}</H2>
      <Image 
        src={urlFor(data?.titleImage).url()} 
        alt="" 
        width={1000} 
        height={1000} 
        className="w-full h-80 mb-3 object-cover rounded-lg" 
      />
      <Small className="mb-3 block">Publicado em: {date}</Small>
      <div className="w-full prose prose-xl prose-blue dark:prose-invert prose-li:marker:text-primary prose-a:text-primary prose-a:hover:underline ">
        <PortableText value={data?.content}/>
      </div>
    </article>
  );
}