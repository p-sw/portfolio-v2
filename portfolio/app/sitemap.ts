import {MetadataRoute} from "next";

export function url(loc?: string) {
    return (process.env.SITE_URL ?? "https://sserve.work/") + (loc ?? "")
}


export default function sitemap(): MetadataRoute.Sitemap {
    return [
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
        }
    ]
}