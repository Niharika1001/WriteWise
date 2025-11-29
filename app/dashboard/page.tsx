// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
// import { redirect } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { prisma } from "@/app/utils/db";   
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { BlogPostCard } from "@/components/general/BlogPostCard";
import { redirect } from "next/navigation";

async function getData(userId:string){
    await new Promise((resolve)=>setTimeout(resolve,2000))
    const data=await prisma.blogPost.findMany({
        where:{
            authorId:userId,
        },
        orderBy:{
            createdAt:"desc",
        },
    });
    return data;
}
export default async function dashboardRoute(){
    const{getUser}=getKindeServerSession();
    const user=await getUser();
    if(!user){
        return redirect("/api/auth/register")
    }
    const data= await getData(user?.id);

    // We have added authentication check in middleware.ts to protect /dashboard route
    return (
        <>
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-medium">Your <span className="text-teal-600">Blog</span> Articles</h2>
            <Link className={`${buttonVariants({variant:"default"})}font-bold text-xl`  }href='/dashboard/create'>+</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item)=>(
                <div key={item.id}>
                <BlogPostCard data={item} key={item.id}/>
                </div>
            ))}
        </div>
        </>
    )
}