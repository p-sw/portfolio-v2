// noinspection JSUnusedGlobalSymbols

import {MetadataRoute} from "next";

export function url(loc?: string) {
  return (process.env.SITE_URL ?? "https://sserve.work/") + (loc ?? "")
}

const maxItemPerRequest = 2

type sitemapUrl = {
  url: string,
  lastModified: Date
}

async function blogPosts(): Promise<sitemapUrl[]> {
  let pageToken;
  let newbase: sitemapUrl[] = []

  while (true) {
    let apiRes = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOGGER_BLOG_ID}/posts?key=${process.env.BLOGGER_API_KEY}&maxResult=${maxItemPerRequest}${pageToken ? "&pageToken="+pageToken : ""}&status=live`, {
      method: "GET"
    })
    if (!apiRes.ok) {
      return newbase
    }
    let data = await apiRes.json()
    pageToken = data.pageToken
    for (let item of data.items) {
      newbase.push({url: url(`blog/${item.id}`), lastModified: new Date(item.updated)})
    }
    if (!pageToken) return newbase;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = [
    {
      url: url(),
      lastModified: new Date()
    },
    {
      url: url("projects"),
      lastModified: new Date()
    },
    {
      url: url("skills"),
      lastModified: new Date()
    },
    {
      url: url("blog"),
      lastModified: new Date()
    },
    ...(await blogPosts())
  ]
  return pages
}