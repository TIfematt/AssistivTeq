"use client";

import React, { useState, useEffect } from "react";
// import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaHeart, FaShare } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Newsletter from "./Newsletter";
// import { getPosts } from "../../sanity/lib/query";
// import imageUrlBuilder from "@sanity/image-url";
import PostCard from "./PostCard";

// import { createClient } from "next-sanity";



// creating client

// const client = createClient({
//   projectId: "3uqxlvwh",
//   dataset: "production",
//   apiVersion: "2022-03-25",
//   useCdn: false,
// });

// const builder = imageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);

// // querying 
// const getData = async () => {
//   try {
//     const res = await client.fetch(
//       `*[_type == 'post']`,
//       {},
//       {
//         // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
//         cache: "force-cache",
//         next: { tags: ["post"] },
//       }
//     );
//     console.log(res)
//     return res;
//   } catch (error) {
//     console.log(error);
//     return;
//   }
// };


const Blog =  () => {


  const [posts, setPosts] = useState([]);

  

  const [mappedPosts, setMappedPosts] = useState([]);


  // const data = await getData()

  return (
    <section className="pt-10 bg-gray-50 sm:pt-16 lg:pt-14">
      <div className="bg-zinc-100 flex flex-col">
        <div className="justify-center items-center bg-white self-stretch flex w-full flex-col px-16 py-9 max-md:max-w-full max-md:px-5">
          <div className="items-stretch flex w-full max-w-[1200px] justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <div className="text-neutral-800 text-2xl font-bold tracking-wider whitespace-nowrap">
              Blog
            </div>
            <div className="text-neutral-800 text-opacity-40 text-base font-semibold tracking-wider self-center whitespace-nowrap my-auto">
              HOME / BLOG
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1199px] mt-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[25%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-5">
                {/* search  */}
                <div className="items-center bg-white px-2 flex justify-between rounded-2xl border focus:border-primary focus-visible:shadow-none">
                  <input
                    placeholder="Search"
                    className=" my-auto shadow-one bg-white text-base gap-5 px-7 py-3.5 max-md:px-5 outline-none text-heading text-[1rem] rounded-[0.5rem] "
                  />
                  <IoIosSearch className="text-3xl text-primary" />
                </div>
                <div className="justify-end items-stretch bg-white flex flex-col mt-10 pt-6 pb-8 px-8 rounded-2xl max-md:px-5">
                  {/* category */}
                  <div className="text-neutral-800 text-2xl font-bold tracking-wider whitespace-nowrap">
                    <Link href="">Category</Link>
                  </div>
                  <div className="text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-6">
                    <Link href="">Technology</Link>
                  </div>
                  <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3" />
                  <div className="text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-3">
                    <Link href="">Events & Community News</Link>
                  </div>
                  <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3" />
                  <div className="text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-3">
                    <Link href="">Personal Stories</Link>
                  </div>
                  <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3" />
                  <div className="text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-3">
                    <Link href="">Health & Wellness</Link>
                  </div>
                  <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3" />
                  <div className="text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-3">
                    <Link href="">Education & Employment</Link>
                  </div>
                  <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3" />
                  <div className="text-neutral-800 text-[.85rem] tracking-wider whitespace-nowrap mt-3">
                    <Link href="">Creativity & Support</Link>
                  </div>
                </div>
                <div className="bg-white flex flex-col items-stretch mt-10 px-6 py-6 rounded-2xl max-md:px-3">
                  {/* Recent Posts */}
                  <div className="text-neutral-800 text-2xl font-bold tracking-wider whitespace-nowrap">
                    Recent Posts
                  </div>
                  <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider mt-5">
                    <Link href="">
                      <span className="text-neutral-800">
                        The Impact of Hearing Aids on Everyday Life: A User's
                        Perspective
                        <br />
                        <br />
                      </span>
                      <span className="text-neutral-800 text-opacity-60">
                        HEARING IMPAIRED - DEC 3, 2023
                      </span>
                    </Link>
                  </div>{" "}
                  <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-4" />{" "}
                  <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider mt-6">
                    <Link href="">
                      <span className="text-neutral-800">
                        The Latest Innovations in Mobility Assistants: A
                        Comprehensive Guide
                        <br />
                        <br />
                      </span>
                      <span className="text-neutral-800 text-opacity-60">
                        HEARING IMPAIRED - DEC 3, 2023
                      </span>
                    </Link>
                  </div>{" "}
                  <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3.5" />{" "}
                  <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider mt-6">
                    <Link href="">
                      <span className="text-neutral-800">
                        The Role of Robotics in Assisting Daily Tasks for
                        Individuals with Disabilities
                        <br />
                        <br />
                      </span>
                      <span className="text-neutral-800 text-opacity-60">
                        HEARING IMPAIRED - DEC 3, 2023
                      </span>
                    </Link>
                  </div>{" "}
                  <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-4" />{" "}
                  <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider mt-6">
                    <Link href="">
                      <span className="text-neutral-800">
                        Advocacy in Action: Promoting Inclusivity in the
                        Assistive Tech Community
                        <br />
                        <br />
                      </span>
                      <span className="text-neutral-800 text-opacity-60">
                        HEARING IMPAIRED - DEC 3, 2023
                      </span>
                    </Link>
                  </div>
                </div>{" "}
                {/* Top Posts */}
                <div className="bg-white flex flex-col items-stretch mt-10 px-6 py-6 rounded-2xl max-md:px-3">
                  <div className="text-neutral-800 text-2xl font-bold tracking-wider whitespace-nowrap">
                    Top Posts
                  </div>
                  <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider mt-5">
                    <Link href="">
                      <span className="text-neutral-800">
                        The Impact of Hearing Aids on Everyday Life: A User's
                        Perspective
                        <br />
                        <br />
                      </span>
                      <span className="text-neutral-800 text-opacity-60">
                        HEARING IMPAIRED - DEC 3, 2023
                      </span>
                    </Link>
                  </div>{" "}
                  <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-4" />{" "}
                  <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider mt-6">
                    <Link href="">
                      <span className="text-neutral-800">
                        The Latest Innovations in Mobility Assistants: A
                        Comprehensive Guide
                        <br />
                        <br />
                      </span>
                      <span className="text-neutral-800 text-opacity-60">
                        HEARING IMPAIRED - DEC 3, 2023
                      </span>
                    </Link>
                  </div>{" "}
                  <div className="bg-neutral-800 bg-opacity-10 shrink-0 h-px mt-3.5" />{" "}
                  <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider mt-6">
                    <Link href="">
                      <span className="text-neutral-800">
                        The Role of Robotics in Assisting Daily Tasks for
                        Individuals with Disabilities
                        <br />
                        <br />
                      </span>
                      <span className="text-neutral-800 text-opacity-60">
                        HEARING IMPAIRED - DEC 3, 2023
                      </span>
                    </Link>
                  </div>{" "}
                </div>{" "}
              </div>
            </div>
            {/* Main Posts  */}
            <div className="flex flex-col items-stretch w-[67%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-5">
                <div className="max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    {/* <div className="flex flex-col items-stretch w-5/12 max-md:w-full max-md:ml-0">
                      {mappedPosts.length > 0 ? (
                        mappedPosts.map((post, index) => (
                          // <PostCard data={post} key={index} />
                          <h1 className="text-red-600 absolute top-0 z-50 text-[5rem]">{post}</h1>
                        ))
                      ) : (
                        <p className="text-red-600 absolute top-0 z-50 text-[5rem]">No posts available</p>
                      )}
                    </div>{" "} */}
                    {/* <h1 className="text-red-600 absolute top-0 z-50 text-[5rem]">
                      {data.title}
                    </h1> */}
                    
                  
                    <div className="flex flex-col items-stretch w-5/12 max-md:w-full max-md:ml-0">
                      <div className=" bg-white flex w-full flex-col mx-auto rounded-2xl">
                        <Image
                          loading="lazy"
                          unoptimized
                          src="/images/gallery_1.png"
                          width={300}
                          height={200}
                          className="aspect-[1.34] object-cover object-center w-full overflow-hidden self-stretch"
                        />
                        <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider px-5 whitespace-nowrap mt-5">
                          HEARING IMPAIRED - DEC 3, 2024
                        </div>
                        <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider px-5 whitespace-nowrap mt-2.5">
                          POSTED BY Boluwatife Oladejo
                        </div>
                        <div className="text-neutral-800 text-[1rem] px-5 font-medium tracking-wider w-[331px] mt-1.5">
                          <Link href="">
                            The Impact of Hearing Aids on Everyday Life: A
                            User's Perspective
                          </Link>
                        </div>{" "}
                        <div className="text-neutral-800 px-5 text-opacity-80 text-[.85rem] tracking-wider mt-2">
                          Hearing Beyond Sound: Personal Stories of
                          Transformation and Connection
                        </div>{" "}
                        <div className="flex w-full justify-between gap-24 my-6">
                          <div className="justify-center items-stretch flex gap-5">
                            <div className="items-stretch flex justify-between gap-2 pl-5">
                              <FaHeart className="text-xl text-primary" />{" "}
                              <div className=" text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider grow whitespace-nowrap">
                                36
                              </div>
                            </div>{" "}
                            <div className="items-stretch flex justify-between gap-2">
                              <FaShare className="text-xl text-primary" />{" "}
                              <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider grow whitespace-nowrap">
                                36
                              </div>
                            </div>
                          </div>{" "}
                          <div className="text-purple-900 text-[.85rem] font-bold tracking-wider self-stretch grow whitespace-nowrap">
                            <Link href="#">Read More</Link>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <div className="mt-5 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-5/12 max-md:w-full max-md:ml-0">
                      <div className=" bg-white flex w-full flex-col mx-auto rounded-2xl">
                        <Image
                          loading="lazy"
                          unoptimized
                          src="/images/gallery_1.png"
                          width={300}
                          height={200}
                          className="aspect-[1.34] object-cover object-center w-full overflow-hidden self-stretch"
                        />
                        <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider px-5 whitespace-nowrap mt-5">
                          HEARING IMPAIRED - DEC 3, 2023
                        </div>
                        <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider px-5 whitespace-nowrap mt-2.5">
                          POSTED BY JOHN DOE
                        </div>
                        <div className="text-neutral-800 text-[1rem] px-5 font-medium tracking-wider w-[331px] mt-1.5">
                          <Link href="">
                            The Impact of Hearing Aids on Everyday Life: A
                            User's Perspective
                          </Link>
                        </div>{" "}
                        <div className="text-neutral-800 px-5 text-opacity-80 text-[.85rem] tracking-wider mt-2">
                          Hearing Beyond Sound: Personal Stories of
                          Transformation and Connection
                        </div>{" "}
                        <div className="flex w-full justify-between gap-24 my-6">
                          <div className="justify-center items-stretch flex gap-5">
                            <div className="items-stretch flex justify-between gap-2 pl-5">
                              <FaHeart className="text-xl text-primary" />{" "}
                              <div className=" text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider grow whitespace-nowrap">
                                36
                              </div>
                            </div>{" "}
                            <div className="items-stretch flex justify-between gap-2">
                              <FaShare className="text-xl text-primary" />{" "}
                              <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider grow whitespace-nowrap">
                                36
                              </div>
                            </div>
                          </div>{" "}
                          <div className="text-purple-900 text-[.85rem] font-bold tracking-wider self-stretch grow whitespace-nowrap">
                            <Link href="#">Read More</Link>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-5/12 max-md:w-full max-md:ml-0">
                      <div className=" bg-white flex w-full flex-col mx-auto rounded-2xl">
                        <Image
                          loading="lazy"
                          unoptimized
                          src="/images/gallery_1.png"
                          width={300}
                          height={200}
                          className="aspect-[1.34] object-cover object-center w-full overflow-hidden self-stretch"
                        />
                        <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider px-5 whitespace-nowrap mt-5">
                          HEARING IMPAIRED - DEC 3, 2023
                        </div>
                        <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider px-5 whitespace-nowrap mt-2.5">
                          POSTED BY JOHN DOE
                        </div>
                        <div className="text-neutral-800 text-[1rem] px-5 font-medium tracking-wider w-[331px] mt-1.5">
                          <Link href="">
                            The Impact of Hearing Aids on Everyday Life: A
                            User's Perspective
                          </Link>
                        </div>{" "}
                        <div className="text-neutral-800 px-5 text-opacity-80 text-[.85rem] tracking-wider mt-2">
                          Hearing Beyond Sound: Personal Stories of
                          Transformation and Connection
                        </div>{" "}
                        <div className="flex w-full justify-between gap-24 my-6">
                          <div className="justify-center items-stretch flex gap-5">
                            <div className="items-stretch flex justify-between gap-2 pl-5">
                              <FaHeart className="text-xl text-primary" />{" "}
                              <div className=" text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider grow whitespace-nowrap">
                                36
                              </div>
                            </div>{" "}
                            <div className="items-stretch flex justify-between gap-2">
                              <FaShare className="text-xl text-primary" />{" "}
                              <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider grow whitespace-nowrap">
                                36
                              </div>
                            </div>
                          </div>{" "}
                          <div className="text-purple-900 text-[.85rem] font-bold tracking-wider self-stretch grow whitespace-nowrap">
                            <Link href="#">Read More</Link>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
                <div className="mt-5 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-5/12 max-md:w-full max-md:ml-0">
                      <div className=" bg-white flex w-full flex-col mx-auto rounded-2xl">
                        <Image
                          loading="lazy"
                          unoptimized
                          src="/images/gallery_1.png"
                          width={300}
                          height={200}
                          className="aspect-[1.34] object-cover object-center w-full overflow-hidden self-stretch"
                        />
                        <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider px-5 whitespace-nowrap mt-5">
                          HEARING IMPAIRED - DEC 3, 2023
                        </div>
                        <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider px-5 whitespace-nowrap mt-2.5">
                          POSTED BY JOHN DOE
                        </div>
                        <div className="text-neutral-800 text-[1rem] px-5 font-medium tracking-wider w-[331px] mt-1.5">
                          <Link href="">
                            The Impact of Hearing Aids on Everyday Life: A
                            User's Perspective
                          </Link>
                        </div>{" "}
                        <div className="text-neutral-800 px-5 text-opacity-80 text-[.85rem] tracking-wider mt-2">
                          Hearing Beyond Sound: Personal Stories of
                          Transformation and Connection
                        </div>{" "}
                        <div className="flex w-full justify-between gap-24 my-6">
                          <div className="justify-center items-stretch flex gap-5">
                            <div className="items-stretch flex justify-between gap-2 pl-5">
                              <FaHeart className="text-xl text-primary" />{" "}
                              <div className=" text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider grow whitespace-nowrap">
                                36
                              </div>
                            </div>{" "}
                            <div className="items-stretch flex justify-between gap-2">
                              <FaShare className="text-xl text-primary" />{" "}
                              <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider grow whitespace-nowrap">
                                36
                              </div>
                            </div>
                          </div>{" "}
                          <div className="text-purple-900 text-[.85rem] font-bold tracking-wider self-stretch grow whitespace-nowrap">
                            <Link href="#">Read More</Link>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-5/12 max-md:w-full max-md:ml-0">
                      <div className=" bg-white flex w-full flex-col mx-auto rounded-2xl">
                        <Image
                          loading="lazy"
                          unoptimized
                          src="/images/gallery_1.png"
                          width={300}
                          height={200}
                          className="aspect-[1.34] object-cover object-center w-full overflow-hidden self-stretch"
                        />
                        <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider px-5 whitespace-nowrap mt-5">
                          HEARING IMPAIRED - DEC 3, 2023
                        </div>
                        <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider px-5 whitespace-nowrap mt-2.5">
                          POSTED BY JOHN DOE
                        </div>
                        <div className="text-neutral-800 text-[1rem] px-5 font-medium tracking-wider w-[331px] mt-1.5">
                          <Link href="">
                            The Impact of Hearing Aids on Everyday Life: A
                            User's Perspective
                          </Link>
                        </div>{" "}
                        <div className="text-neutral-800 px-5 text-opacity-80 text-[.85rem] tracking-wider mt-2">
                          Hearing Beyond Sound: Personal Stories of
                          Transformation and Connection
                        </div>{" "}
                        <div className="flex w-full justify-between gap-24 my-6">
                          <div className="justify-center items-stretch flex gap-5">
                            <div className="items-stretch flex justify-between gap-2 pl-5">
                              <FaHeart className="text-xl text-primary" />{" "}
                              <div className=" text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider grow whitespace-nowrap">
                                36
                              </div>
                            </div>{" "}
                            <div className="items-stretch flex justify-between gap-2">
                              <FaShare className="text-xl text-primary" />{" "}
                              <div className="text-neutral-800 text-opacity-60 text-[.85rem] font-medium tracking-wider grow whitespace-nowrap">
                                36
                              </div>
                            </div>
                          </div>{" "}
                          <div className="text-purple-900 text-[.85rem] font-bold tracking-wider self-stretch grow whitespace-nowrap">
                            <Link href="#">Read More</Link>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-center flex gap-4 my-10 max-md:justify-center">
          <div className="text-white text-xl font-medium tracking-wider justify-center items-center bg-purple-900 p-3 rounded-lg">
            1
          </div>
          <div className="text-primary text-xl font-medium tracking-wider justify-center items-center bg-white p-3 rounded-lg">
            2
          </div>
          <div className="text-primary text-xl font-medium track3ing-wider justify-center items-center bg-white p-3 rounded-lg">
            3
          </div>
          <div className="text-primary text-xl font-medium tracking-wider justify-center items-center bg-white text-center p-3 rounded-lg">
            4
          </div>
          <div className="text-purple-900 text-xl font-medium tracking-wider justify-center items-center bg-white p-3 rounded-lg">
            5
          </div>
        </div>
      </div>
      <Newsletter />
    </section>
  );
};

// fetching posts
// export async function getStaticProps () {
//   try {
//     const posts = await client.fetch(`*[_type == 'post']`)
//     console.log(posts)
//     return {
//       props: {
//         posts
//       }
//     };
//   } catch (error) {
//     console.log(error)
//     return {
//       props: {
//         posts: []
//       }
//     };
//   }
// }

export default Blog;
