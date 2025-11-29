import Image from "next/image";
import Link from "next/link";

interface IappProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export function BlogPostCard({ data }: IappProps) {
  const isValidImage = data.imageUrl?.startsWith("http");

  
  const blogImage = isValidImage
    ? data.imageUrl
    : "https://via.placeholder.com/600x400?text=No+Image";

  const fallbackAuthorImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    data.authorName
  )}&background=random`;

  const authorFinalImage = data.authorImage || fallbackAuthorImage;

  return (
    <div className="group relative overflow-hidden rounded-lg border-gray-200 bg-white shadow-md transition-all hover:shadow-lg h-[420px] flex flex-col">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={blogImage}
            alt="Blog Image"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">
            {data.title}
          </h3>

          <p className="mb-4 text-lg text-gray-600 line-clamp-2 min-h-[42px]">
            {data.content}
          </p>

          <div className="mt-auto flex items-center justify-between pt-4">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={authorFinalImage}
                  alt={data.authorName}
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-sm font-medium text-gray-700">
                {data.authorName}
              </p>
            </div>

            <time className="text-xs text-gray-500">
              {data.createdAt.toDateString()}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
}
