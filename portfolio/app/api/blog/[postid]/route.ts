import PostData from "@/app/blog/[postid]/posttype";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: { postid: string } }
) {
  if (!/^\d+$/.test(context.params.postid)) {
    return NextResponse.json(
      {
        title: "Invalid PostID",
        description: "Failed to fetch post data due to invalid post id.",
      },
      { status: 400, statusText: "Invalid PostID" }
    );
  }

  if (!process.env.BLOGGER_BLOG_ID) {
    return NextResponse.json(
      {
        title: "Invalid blog id",
        description: "Invalid blog id set in server environment variable.",
      },
      { status: 500, statusText: "Invalid blog id" }
    );
  }

  if (!process.env.BLOGGER_API_KEY) {
    return NextResponse.json(
      {
        title: "Invalid blogger api key",
        description:
          "Invalid blogger api key set in server environment variable.",
      },
      { status: 500, statusText: "Invalid blogger api key" }
    );
  }

  const post_res = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOGGER_BLOG_ID}/posts/${context.params.postid}?key=${process.env.BLOGGER_API_KEY}`
  );

  if (!post_res.ok) {
    return NextResponse.json(
      {
        title: "Blogger API not ok",
        description: `${post_res.status}: ${post_res.statusText}`,
      },
      { status: post_res.status, statusText: post_res.statusText }
    );
  }

  const post_data: PostData = await post_res.json();

  return NextResponse.json(post_data, {
    status: post_res.status,
    statusText: post_res.statusText,
  });
}
