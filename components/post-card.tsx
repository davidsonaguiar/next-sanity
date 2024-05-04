import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Paragraph from "./ui/paragraph";

interface Props {
  slug: string;
  title: string;
  smallDescription: string;
  titleImage: string;
}

export default function PostCard(props: Readonly<Props>) {
  const { slug, title, smallDescription, titleImage } = props;
  return (
    <Card className="overflow-ellipsis">
      <Image
        src={titleImage}
        alt={title}
        width={320}
        height={320}
        className="w-full h-full max-h-[200px] rounded-t-lg object-cover"
      />
      <CardHeader>
        <CardTitle className="line-clamp-3">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Paragraph className="text-sm line-clamp-3">
          {smallDescription}
        </Paragraph>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button asChild className="w-full">
          <Link href={`/posts/${slug}`}>
            Leia mais
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}