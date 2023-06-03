"use client";

import {
  Flex,
  Heading,
  useColorMode,
  Tooltip,
  IconButton,
  Highlight,
} from "@chakra-ui/react";
import { IBM_Plex_Mono } from "next/font/google";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import React from "react";
import { useRouter } from "next/navigation";

const ibmPlexMono = IBM_Plex_Mono({
  display: "swap",
  subsets: ["latin-ext"],
  weight: "400",
});

export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();

  const router = useRouter();

  return (
    <Flex
      direction={"row"}
      p={5}
      px={[6, 12, 24]}
      w={"full"}
      h={"80px"}
      justify={"space-between"}
      align={"center"}
      backdropFilter={"auto"}
      backdropBlur={"2px"}
      bg={"transparent"}
      userSelect={"none"}
      position={"fixed"}
      top={0}
      left={0}
      zIndex={5}
    >
      <Heading
        className={`${ibmPlexMono.className}`}
        as={"h1"}
        size={"xl"}
        color={"accent.1000"}
        cursor={"pointer"}
        onClick={async () => {
          await router.push("/");
        }}
      >
        <Highlight query={".Work"} styles={{ color: "secondary.1000" }}>
          SSerVe.Work
        </Highlight>
      </Heading>
      <Flex direction={"row"} justify={"center"} align={"center"} gap={"2"}>
        <Tooltip label={"Dark/Light Theme"}>
          <IconButton
            aria-label={"Theme Toggle"}
            icon={colorMode === "dark" ? <BsFillMoonFill /> : <BsFillSunFill />}
            onClick={toggleColorMode}
            bg={"transparent"}
            _hover={{ bg: "transparent" }}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
}
