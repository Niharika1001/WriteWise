import { notFound } from "next/navigation";
import { prisma } from "@/app/utils/db";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store"; 

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: { 
        id
     },
  });

  if (!data) notFound();
  return data;
}

export default async function IdPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const data = await getData(id);

  return (
    <>
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link href='/' className={buttonVariants({variant:"secondary"})}> Back to posts</Link>
    </div>
     <main className="max-w-3xl mx-auto py-10 px-4">
     
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

      <div className="flex items-center gap-3 mb-6">
        <Image
          src={data.authorImage}
          alt={data.authorName}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div>
          <p className="font-semibold">{data.authorName}</p>
          <p className="text-sm text-gray-500">
            {new Date(data.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
      <Image
        src={data.imageUrl}
        alt={data.title}
        width={1000}
        height={600}
        className="rounded-lg mb-6"
      />
      <article className="prose prose-lg max-w-none text-gray-700">
        {data.content}
      </article>
    </main>
    </>
  );
}
