// noinspection JSUnusedGlobalSymbols

import React from "react";
import {Metadata} from "next";
import {JSDOM} from "jsdom";
import PostData from "./posttype"


export async function generateMetadata({ params }: { params: {postid: string} }): Promise<Metadata> {
  if (!(/^\d+$/.test(params.postid))) {
    return {
      title: "Invalid PostID",
      description: "Failed to fetch post data due to invalid post id.",
    }
  }

  if (!process.env.BLOGGER_BLOG_ID) {
    return {
      title: "Invalid blog id",
      description: "Invalid blog id set in server environment variable."
    }
  }

  if (!process.env.BLOGGER_API_KEY) {
    return {
      title: "Invalid blogger api key",
      description: "Invalid blogger api key set in server environment variable."
    }
  }

  const post_res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOGGER_BLOG_ID}/posts/${params.postid}?key=${process.env.BLOGGER_API_KEY}`)

  if (!post_res.ok) {
    return {
      title: "Blogger API not ok",
      description: `${post_res.status}: ${post_res.statusText}`
    }
  }

  const post_data: PostData = await post_res.json()

  return {
    title: post_data.title,
    description: new JSDOM(post_data.content).window.document.querySelector(`body`)?.textContent?.slice(0, 100) ?? "Failed to parse post content."
  }
}

export default function PostViewLayout({children}: {children: React.ReactNode}) {
  return <>{children}</>
}