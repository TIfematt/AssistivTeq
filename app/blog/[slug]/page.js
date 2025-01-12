import React from "react";
import Link from "next/link";
import { getPostBySlug } from "@/sanity/lib/query";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

import ShareButtons from "../../../components/mainWebsite/ShareButton";
import Footer from '../../../components/mainWebsite/Footer';
import Nav from '../../../components/mainWebsite/Nav';


  export default async function BlogPage({ params }) {
    const post = await getPostBySlug(params.slug);
  
    if (!post) {
      return <div>Post not found</div>;
    }
  
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    };
  
    const postUrl = `https://assistivteq.com/blog/${post.currentSlug}`; // URL of the blog post
  

  return (
    <>
    <Nav/>
    <section className="max-w-screen-xl bg-white mt-10 md:py-20 py-10">
      <div className="mx-auto lg:w-11/12 px-4">
        <Link
          href="/blog"
          className="text-gray-800 flex gap-4 lg:w-10/12 mx-auto"
        >
          <FaArrowLeftLong className="text-2xl my-auto" />
          <h1 className="text-xl">Go Back</h1>
        </Link>

        <div className="lg:w-10/12 mx-auto">
          <div className="flex flex-col md:flex-row my-10 justify-between">
            <span className="text-gray-600 mr-2">Category: {post.categories[0].title}</span>
            <span className="text-gray-600 mr-2">
              Posted on {formatDate(post.publishedAt)}
            </span>
          </div>
          <Image
            className="w-full"
            src={post.image}
            alt="blog-image"
            width={300}
            height={300}
            priority
          />
          <div className="py-2 mt-6 mb-auto">
            <h1 className="font-extrabold text-black text-3xl md:text-4xl mb-2">
              {post.title}
            </h1>
          </div>
          <div className="space-y-6" style={{ whiteSpace: "pre-line" }}>
            {post.body && <PortableText value={post.body} />}
          </div>
          {/* Social media sharing buttons */}
          <ShareButtons
            postUrl={postUrl}
           
          />
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
}