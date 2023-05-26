// noinspection JSUnusedGlobalSymbols

"use client"

import React, {useEffect, useState} from "react";
import {Flex, Text, Icon, useDisclosure, Heading, useColorModeValue, Grid, GridItem} from "@chakra-ui/react";
import {AiFillInfoCircle, AiFillGithub} from "react-icons/ai";
import {MdClose} from "react-icons/md";
import {IconBaseProps} from "react-icons";
import {useRouter} from "next/navigation";


interface ProjectProps {
  title: string;
  children: React.ReactNode;
  github?: string;
  link?: string;
  setAppOpen: () => void;
  setAppContent: (content: React.ReactNode) => void;
  setAppHref: (href?: string) => void;
}

interface AppProps {
  href?: string;
  children: React.ReactNode;
  appOpen: boolean;
  appClose: () => void;
}


function SvgLinkIcon(props: IconBaseProps) {
  return <svg width={props.width} height={props.height} fill={"currentColor"} viewBox="-1 0 19 19" xmlns="http://www.w3.org/2000/svg" style={{color: props.color}}>
    <path d="M16.5 9.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-2.97.006a5.03 5.03 0 1 0-5.03 5.03 5.03 5.03 0 0 0 5.03-5.03zm-7.383-.4H4.289a4.237 4.237 0 0 1 2.565-3.498q.1-.042.2-.079a7.702 7.702 0 0 0-.907 3.577zm0 .8a7.7 7.7 0 0 0 .908 3.577q-.102-.037-.201-.079a4.225 4.225 0 0 1-2.565-3.498zm.8-.8a9.04 9.04 0 0 1 .163-1.402 6.164 6.164 0 0 1 .445-1.415c.289-.615.66-1.013.945-1.013.285 0 .656.398.945 1.013a6.18 6.18 0 0 1 .445 1.415 9.078 9.078 0 0 1 .163 1.402zm3.106.8a9.073 9.073 0 0 1-.163 1.402 6.187 6.187 0 0 1-.445 1.415c-.289.616-.66 1.013-.945 1.013-.285 0-.656-.397-.945-1.013a6.172 6.172 0 0 1-.445-1.415 9.036 9.036 0 0 1-.163-1.402zm1.438-3.391a4.211 4.211 0 0 1 1.22 2.591h-1.858a7.698 7.698 0 0 0-.908-3.577q.102.037.201.08a4.208 4.208 0 0 1 1.345.906zm-.638 3.391h1.858a4.238 4.238 0 0 1-2.565 3.498q-.1.043-.2.08a7.697 7.697 0 0 0 .907-3.578z"/>
  </svg>
}


function FullscreenApp({href, children, appOpen, appClose}: AppProps) {
  const router = useRouter();

  let { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (appOpen && href) router.push(href)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appOpen, href])

  useEffect(() => {
    if (appOpen) onOpen()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appOpen])

  return <>
    <Flex w={"100vw"} h={"100vh"} position={"fixed"} top={0} left={0} bg={"background.1000"} direction={"column"} className={`proj ${isOpen ? "visible" : ""}`} zIndex={15}>
      <Icon as={MdClose} position={"fixed"} top={4} right={4} w={8} h={8} color={"text.1000"} cursor={"pointer"} onClick={() => {onClose();appClose();}} />
      <Flex w={"full"} h={"full"} p={12} justify={"center"} align={"center"} textAlign={"center"}>
        {href ? "Opening external link..." : children}
      </Flex>
    </Flex>
  </>
}


function Project({ title, children, github, link, setAppContent, setAppHref, setAppOpen }: ProjectProps) {
  let { isOpen, onOpen, onClose } = useDisclosure();

  const svgColor = useColorModeValue("text.1000", "wtext.1000");
  const rawSvgColor = useColorModeValue("var(--chakra-colors-text-1000)", "var(--chakra-colors-wtext-1000)");

  return <GridItem colSpan={1} rowSpan={1} display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"flex-start"}>
    <Flex direction={"column"} align={"center"} gap={1} w={"full"} maxW={"100px"}>
      <style jsx global>
        {`
          .proj {
            transform: scale(0.95);
            opacity: 0;
            transition: all 0.25s ease-in-out;
            pointer-events: none;
          }
          .proj.visible {
            transform: scale(1);
            opacity: 1;
            transition: all 0.25s ease-in-out;
            pointer-events: all;
          }
          .proj-folder {
            opacity: 0;
            transition: all 0.25s ease-in-out;
            pointer-events: none;
          }
          .proj-folder.visible {
            opacity: 1;
            transition: all 0.25s ease-in-out;
            pointer-events: all;
          }
        `}
      </style>
      <Grid gridTemplateColumns={"repeat(2, 45%)"} gridTemplateRows={"repeat(2, 45%)"} gap={1} w={"full"} aspectRatio={1} bg={"secondary.700"} backdropFilter={"auto"} backdropBlur={"2px"} borderRadius={"15%"} p={4} cursor={"pointer"} onClick={onOpen}>
        <GridItem colSpan={1} rowSpan={1}><Icon as={AiFillInfoCircle} w={"full"} h={"full"} color={"wtext.1000"} /></GridItem>
        {
          github ? <GridItem colSpan={1} rowSpan={1}><Icon as={AiFillGithub} w={"full"} h={"full"} color={"wtext.1000"} /></GridItem> : null
        }
        {
          link ? <GridItem colSpan={1} rowSpan={1}><SvgLinkIcon width={"full"} height={"full"} color={"var(--chakra-colors-wtext-1000)"} /></GridItem> : null
        }
      </Grid>
      <Flex w={"100vw"} h={"100vh"} position={"fixed"} top={0} left={0} bg={"accent.500"} backdropFilter={"auto"} backdropBlur={"2px"} direction={"column"} justify={"center"} align={"center"} gap={12} onClick={onClose} zIndex={10} className={`proj-folder${isOpen ? " visible" : ""}`}>
        <Heading as={"h1"} color={"#fff"} textAlign={"center"} w={"full"} px={4}>{title}</Heading>
        <Flex direction={"row"} justify={"space-between"} wrap={"wrap"} gap={1} w={["50%", "30%", "20%"]} maxW={"250px"} aspectRatio={1} bg={"#fff"} borderRadius={"15%"} p={6} onClick={(e) => e.stopPropagation()}>
          <Icon
            as={AiFillInfoCircle}
            w={"40%"}
            h={"40%"}
            color={svgColor}
            cursor={"pointer"}
            onClick={() => {setAppHref(undefined);setAppContent(children);setAppOpen()}}
          />
          {
            github
              ? <>
                <Icon
                  as={AiFillGithub}
                  w={"40%"}
                  h={"40%"}
                  color={svgColor}
                  cursor={"pointer"}
                  onClick={() => {setAppHref(github);setAppOpen();}} />
              </> : null
          }
          {
            link
              ? <>
                <SvgLinkIcon
                  width={"40%"}
                  height={"40%"}
                  color={rawSvgColor}
                  cursor={"pointer"}
                  onClick={() => {setAppHref(link);setAppOpen();}}
                />
              </> : null
          }
        </Flex>
      </Flex>
      <Text textAlign={"center"}>
        {title}
      </Text>
    </Flex>
  </GridItem>
}


export default function Projects() {
  let [ {href, children, appOpen}, setAppState ] = useState<AppProps>({href: undefined, children: "", appOpen: false, appClose: () => {}});

  function setAppContent(content: React.ReactNode) {
    setAppState(prev => ({...prev, children: content}));
  }

  function setHref(content?: string) {
    setAppState(prev => ({...prev, href: content}));
  }

  function setAppOpen() {
    setAppState(prev => ({...prev, appOpen: true}));
  }

  return <>
    <FullscreenApp appOpen={appOpen} href={href} appClose={() => setAppState(prev => ({...prev, appOpen: false}))}>
      {children}
    </FullscreenApp>
    <Grid gridTemplateColumns={"repeat(auto-fit, minmax(var(--chakra-space-24), 1fr))"} gridGap={6} w={"full"} p={[6, null, 12]} justifyContent={"center"}>
      <Project title={"Nyanlang"} github={"https://github.com/nyanlang/nyanlang"} link={"https://nyanlang.org"} setAppContent={setAppContent} setAppHref={setHref} setAppOpen={setAppOpen}>
        <Text>
          Nyanlang is a programming language highly inspired by the Brainfuck programming language.
        </Text>
      </Project>
      <Project title={"Nyanlang Extension"} github={"https://github.com/nanlang/nyanlang-vscode-ext"} setAppContent={setAppContent} setAppHref={setHref} setAppOpen={setAppOpen}>
        <Text>
          VSCode syntax highlighting extension for Nyanlang.
        </Text>
      </Project>
      <Project title={"DodgeGame"} github={"https://github.com/sserve-kr/DodgeGame"} setAppContent={setAppContent} setAppHref={setHref} setAppOpen={setAppOpen}>
        <Text>
          DodgeGame made for Bupyeong High School festival.<br/>
          Leaderboard API backend is included in this project repository.<br/>
          API backend is used by DodgeGameLeaderboard.
        </Text>
      </Project>
      <Project title={"Dodge Game Leaderboard"} github={"https://github.com/sserve-kr/dodge-game-leaderboard"} setAppContent={setAppContent} setAppHref={setHref} setAppOpen={setAppOpen}>
        <Text>
          Leaderboard web app for DodgeGame.<br/>
          Reading game data from API backend server, display it in frontend.
        </Text>
      </Project>
      <Project title={"Simple Calculator"} github={"https://github.com/sserve-kr/simple-calculator"} setAppContent={setAppContent} setAppHref={setHref} setAppOpen={setAppOpen}>
        <Text>
          Simple calculator GUI written in Python, Pygame.
        </Text>
      </Project>
      <Project title={"Shylily Womp Counter"} github={"https://github.com/sserve-kr/womp"} setAppContent={setAppContent} setAppHref={setHref} setAppOpen={setAppOpen}>
        <Text>
          Womp sound, global counter.<br/>
          It&amp;s working, but not online because I messed up it&amp;s nginx configuration.
        </Text>
      </Project>
      <Project title={"Stdict Word DB"} github={"https://github.com/sserve-kr/STDICT_WORD_DB"} setAppContent={setAppContent} setAppHref={setHref} setAppOpen={setAppOpen}>
        <Text>
          Word database project, using Standard Korean Dictionary OpenAPI.
        </Text>
      </Project>
    </Grid>
  </>
}