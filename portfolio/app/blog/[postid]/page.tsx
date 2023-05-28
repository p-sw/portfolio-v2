// noinspection JSUnusedGlobalSymbols

"use client";

import {
    Flex,
    Card,
    CardHeader,
    CardBody,
    Heading, useToast, SkeletonText, Skeleton, Icon, Text, Avatar,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import PostData from "./posttype";
import {IBM_Plex_Sans_KR, Nanum_Gothic} from "next/font/google";
import {BsCalendar3} from "react-icons/bs";

const titleFont = IBM_Plex_Sans_KR({
  display: "swap",
  weight: "400",
  subsets: ["latin-ext"]
})

const contentFont = Nanum_Gothic({
  display: "swap",
  weight: "400",
  subsets: ["latin"]
})

const contentTitleFont = Nanum_Gothic({
  display: "swap",
  weight: "700",
  subsets: ["latin"]
})

function stylish({fontStyle, fontFamily, fontWeight}: {fontFamily: string, fontWeight?: number, fontStyle?: string }) {
  return `font-family:${fontFamily};${fontStyle ? "font-style:"+fontStyle+";" : ""}${fontWeight ? "font-weight:"+fontWeight+";" : ""}`
}

export default function PostView({params}: {params: {postid: string}}) {
  const [post, setPost] = useState<PostData|undefined|null>(undefined)

  const toaster = useToast()
  let DomParser: DOMParser | null = null
  try {
    DomParser = new DOMParser()
  } catch (e) {}

  useEffect(() => {
    fetch(`/api/blog/${params.postid}`, {
      method: "GET",
    }).then(res => {
      if (!res.ok) {
        toaster({
          title: "Error while loading search result!",
          description: `${res.status}: ${res.statusText}`,
          status: "error",
          duration: 5000,
          isClosable: true
        })
        setPost(null)
        throw Error("Error while loading search result!")
      } else {
        return res.json()
      }

    }).then(data => {
      setPost({...data, content: DomParser?.parseFromString(data.content, "text/html").querySelector("body")?.innerHTML ?? "Failed to parse content."})
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.postid])

  return <Flex direction={"column"} justify={"flex-start"} align={"center"} w={"full"} h={"auto"} minH={"calc(100vh - 80px)"}>
    <style jsx global>{`
      #content h1,h2,h3,h4,h5,h6,p,span {
        background-color: transparent !important;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
      }
      #content h1 { font-size: var(--chakra-fontSizes-4xl); ${stylish(contentTitleFont.style)} }
      #content h2 { font-size: var(--chakra-fontSizes-3xl); ${stylish(contentTitleFont.style)} }
      #content h3 { font-size: var(--chakra-fontSizes-2xl); ${stylish(contentTitleFont.style)} }
      #content h4 { font-size: var(--chakra-fontSizes-xl); ${stylish(contentTitleFont.style)} }
      #content h5 { font-size: var(--chakra-fontSizes-lg); ${stylish(contentTitleFont.style)} }
      #content h6 { font-size: var(--chakra-fontSizes-md); ${stylish(contentTitleFont.style)} }
    `}</style>
    {
      !post
        ? <>
          <Card w={"95%"}>
            <CardHeader>
              <Skeleton w={"full"}>
                <Heading>A</Heading>
              </Skeleton>
            </CardHeader>
            <CardBody display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Skeleton h={8} w={32} />
              <Skeleton h={8} w={32} />
            </CardBody>
          </Card>
          <SkeletonText w={"95%"} mt={10} />
        </>
        : null
    }
    {
      post
        ? <>
          <Card w={"95%"}>
            <CardHeader>
              <Heading className={`${titleFont.className}`}>{post.title}</Heading>
            </CardHeader>
            <CardBody display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
              <Flex direction={"row"} justify={"center"} align={"center"} gap={2}><Icon as={BsCalendar3} /> {new Intl.DateTimeFormat('kr').format(new Date(post.updated))}</Flex>
              <Flex direction={"row"} justify={"center"} align={"center"} gap={2}><Avatar size={"sm"} name={post.author.displayName} src={post.author.image.url} /><Text>{post.author.displayName}</Text></Flex>
            </CardBody>
          </Card>
          <Flex id={"content"} mt={10} w={"95%"} direction={"column"} justify={"flex-start"} align={"flex-start"} className={`${contentFont.className}`} dangerouslySetInnerHTML={{__html: post.content}} />
        </> : null
    }
  </Flex>
}