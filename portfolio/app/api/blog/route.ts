// noinspection JSUnusedGlobalSymbols

import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("search");

  if (!(process.env.BLOGGER_API_KEY && process.env.BLOGGER_BLOG_ID)) {
    return NextResponse.next({
      status: 500,
      statusText: "Blog key not set in server."
    })
  }

  const api_res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOGGER_BLOG_ID}/posts/search?q=${search ?? ""}&key=${process.env.BLOGGER_API_KEY}`)

  return NextResponse.json(await api_res.json(), {status: api_res.status, statusText: api_res.statusText})
}