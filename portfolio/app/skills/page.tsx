// noinspection JSUnusedGlobalSymbols

"use client";

import { As, Flex, Heading, Icon, Tooltip, Box } from "@chakra-ui/react";
import { IoLogoPython, IoLogoJavascript } from "react-icons/io";
import { IoLogoReact, IoLogoDocker } from "react-icons/io5";
import {
  SiTypescript,
  SiDjango,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiFlask,
  SiFastapi,
  SiPm2,
} from "react-icons/si";
import React from "react";
import { Rubik } from "next/font/google";

const categoryTitle = Rubik({
  display: "swap",
  weight: "400",
  subsets: ["latin-ext"],
});

function Category({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <Heading
        className={`${categoryTitle.className}`}
        w={"90%"}
        maxW={"600px"}
        textAlign={["center", null, "left"]}
        mx={"auto"}
        fontSize={["2xl", null, "4xl"]}
      >
        {title}
      </Heading>
      <Flex
        direction={"row"}
        justify={["center", null, "flex-start"]}
        align={"center"}
        w={"90%"}
        maxW={"600px"}
        overflowX={"auto"}
        mx={"auto"}
        my={10}
        gap={5}
        pb={3}
      >
        {children}
      </Flex>
    </>
  );
}

function CategoryIcon({ name, children }: { name: string; children: As }) {
  return (
    <Tooltip label={name}>
      <Box as={"span"}>
        <Icon as={children} w={12} h={12} />
      </Box>
    </Tooltip>
  );
}

export default function Skills() {
  return (
    <Flex direction={"column"} justify={"center"} align={"flex-start"}>
      <Category title={"Languages"}>
        <CategoryIcon name={"Python"}>{IoLogoPython}</CategoryIcon>
        <CategoryIcon name={"Javascript"}>{IoLogoJavascript}</CategoryIcon>
        <CategoryIcon name={"Typescript"}>{SiTypescript}</CategoryIcon>
      </Category>
      <Category title={"Fullstack Framework"}>
        <CategoryIcon name={"Django"}>{SiDjango}</CategoryIcon>
        <CategoryIcon name={"Next.JS"}>{SiNextdotjs}</CategoryIcon>
      </Category>
      <Category title={"Frontend Framework"}>
        <CategoryIcon name={"React"}>{IoLogoReact}</CategoryIcon>
        <CategoryIcon name={"TailwindCSS"}>{SiTailwindcss}</CategoryIcon>
        <CategoryIcon name={"Chakra-UI"}>{SiChakraui}</CategoryIcon>
      </Category>
      <Category title={"Backend Framework"}>
        <CategoryIcon name={"Flask"}>{SiFlask}</CategoryIcon>
        <CategoryIcon name={"FastAPI"}>{SiFastapi}</CategoryIcon>
      </Category>
      <Category title={"Deployment"}>
        <CategoryIcon name={"Docker"}>{IoLogoDocker}</CategoryIcon>
        <CategoryIcon name={"PM2"}>{SiPm2}</CategoryIcon>
      </Category>
    </Flex>
  );
}
