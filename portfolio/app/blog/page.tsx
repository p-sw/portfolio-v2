// noinspection JSUnusedGlobalSymbols

"use client"

import {
  Flex,
  Input,
  IconButton,
  Icon,
  useToast,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Avatar,
  LinkBox,
  LinkOverlay,
  Spinner
} from "@chakra-ui/react";
import {BiSearch} from "react-icons/bi";
import {useEffect, useState} from "react";
import {BsFillChatLeftTextFill, BsCalendar3} from "react-icons/bs";
import {IBM_Plex_Sans_KR, Nanum_Gothic} from "next/font/google";

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

interface Post {
  kind: string,
  id: string,
  blog: {id: string},
  published: string,
  updated: string,
  url: string,
  selfLink: string,
  title: string,
  content: string,
  author: {
    id: string,
    displayName: string,
    url: string,
    image: {
      url: string,
    }
  },
  replies: {
    totalItems: string,
    selfLink: string,
  }
}

export default function Page() {
  let [searchInput, setSearchInput] = useState<string>("")
  let [searching, setSearchState] = useState<boolean>(false)
  let [posts, setPosts] = useState<Post[]>([])
  let [firstSearch, setSearched] = useState<boolean>(false);

  const toaster = useToast()

  let DomParser: DOMParser | null = null
  try {
    DomParser = new DOMParser()
  } catch (e) {}

  useEffect(() => {
    if (!searching) return;
    fetch(`/api/blog?search=${searchInput}`, {
      method: "GET"
    }).then(res => {
      if (!res.ok) {
        toaster({
          title: "Error while loading search result!",
          description: `${res.status}: ${res.statusText}`,
          status: "error",
          duration: 5000,
          isClosable: true
        })
        throw Error("Error while loading search result!")
      } else {
        return res.json()
      }
    }).then(data => {
      if (!data.items || !Array.isArray(data.items)) return [];

      let items: Post[] = [];

      for (let item of data["items"]) {
        items.push({...item, content: DomParser?.parseFromString(item.content, "text/html").querySelector("body")?.textContent?.slice(0, 500) ?? "Failed to parse content."})
      }

      return items
    }).then(items => {
      setPosts(items)
      setSearchState(false);
      setSearched(true);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, searching])

  return <Flex direction={"column"} justify={posts.length <= 0 && !searching ? "center" : "flex-start"} align={"center"} w={"full"} h={"calc(100vh - 80px)"} pt={10}>
    <Flex position={"sticky"} top={"80px"} left={0} zIndex={5} direction={"row"} w={"full"} h={"50px"} justify={"center"} align={"center"} bg={"transparent"} backdropFilter={"auto"} backdropBlur={"2px"}>
      <Flex bg={"background.1000"} direction={"row"} justify={"space-between"} align={"center"} p={1} borderRadius={"full"} w={"85%"} maxW={"800px"} h={"50px"} border={"1px solid"} borderColor={"reversebg.1000"}>
        <Input value={searchInput} placeholder={"Post Search"} borderRadius={"full"} w={"full"} border={"none"} onChange={(e) => {setSearchInput(e.currentTarget.value)}} />
        <IconButton type={"submit"} icon={<BiSearch color={"var(--chakra-colors-wtext-1000)"} />} aria-label={"Search"} borderRadius={"full"} aspectRatio={1} bg={"primary.1000"} _hover={{bg: "primary.500"}} onClick={() => {setPosts([]);setSearchState(true)}} />
      </Flex>
    </Flex>
    <Flex direction={"column"} justify={"flex-start"} align={"center"} w={"85%"} maxW={"800px"} h={"auto"} gap={3} pb={10} pt={5}>
      {
        DomParser ? posts.map((post, index) => {
          return <LinkBox key={index}>
            <Card w={"full"} transition={"all 0.2s"} _hover={{transform: "scale(0.98) translateY(-5px)"}}>
              <CardHeader display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"}>
                <Heading className={`${titleFont.className}`}>
                  <LinkOverlay href={`/blog/${post.id}`} _before={{zIndex: 1}}>
                    {post.title}
                  </LinkOverlay>
                </Heading>
                <LinkBox>
                  <LinkOverlay href={post.author.url} _before={{zIndex: 2}}><Flex direction={"row"} justify={"center"} align={"center"} gap={2}><Avatar size={"sm"} name={post.author.displayName} src={post.author.image.url} /><Text>{post.author.displayName}</Text></Flex></LinkOverlay>
                </LinkBox>
              </CardHeader>
              <CardBody position={"relative"} pb={0} className={`${contentFont.className}`}>
                <Text _after={{content: '""', w: "full", h: "80px", bg: "linear-gradient(to top, #ffffffff 20%, #ffffff00 100%)", position: "absolute", bottom: 0, left: 0}}>{post.content}</Text>
              </CardBody>
              <CardFooter display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems={"center"} pt={0}>
                <Flex direction={"row"} justify={"center"} align={"center"} gap={2}><Icon as={BsCalendar3} /><Text>{new Intl.DateTimeFormat('kr').format(new Date(post.updated))}</Text></Flex>
                <Flex direction={"row"} justify={"center"} align={"center"} gap={2}><Icon as={BsFillChatLeftTextFill} /><Text>{post.replies.totalItems} Replies</Text></Flex>
              </CardFooter>
            </Card>
          </LinkBox>
        }) : null
      }
      {
        posts.length <= 0 && searching
          ? <Spinner /> : null
      }
      {
        posts.length <= 0 && !searching && firstSearch ? <Text>Post Not Found.</Text> : null
      }
    </Flex>
  </Flex>
}