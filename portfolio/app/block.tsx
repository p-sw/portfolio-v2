"use client"

import React from "react";
import {useRouter} from "next/navigation";
import {GridItem, useColorModeValue, IconButton} from "@chakra-ui/react";
import {BsFillArrowRightCircleFill} from "react-icons/bs";

interface BlockProps {
  children: React.ReactNode;
  spanW?: number;
  spanH?: number;
  secondary?: boolean;
  lnk?: string;
  bradi?: "tl" | "tr" | "bl" | "br" | ("tl" | "tr" | "bl" | "br")[];
}

export default function Block({children, spanW, spanH, secondary, lnk, bradi}: BlockProps) {
  const text = useColorModeValue(secondary ? "text.1000" : "wtext.1000", "wtext.1000")

  const router = useRouter()

  async function onClickHandle() {
    if (!lnk) return
    await router.push(lnk)
  }

  return <GridItem
    borderTopLeftRadius={bradi && bradi === "tl" || (Array.isArray(bradi) && bradi.includes("tl")) ? "5%" : "15%"}
    borderTopRightRadius={bradi && bradi === "tr" || (Array.isArray(bradi) && bradi.includes("tr")) ? "5%" : "15%"}
    borderBottomLeftRadius={bradi && bradi === "bl" || (Array.isArray(bradi) && bradi.includes("bl")) ? "5%" : "15%"}
    borderBottomRightRadius={bradi && bradi === "br" || (Array.isArray(bradi) && bradi.includes("br")) ? "5%" : "15%"}
    p={10}
    bg={secondary ? "secondary.1000" : "primary.1000"}
    colSpan={spanW}
    rowSpan={spanH}
    color={text}
    transition={"all 0.4s ease-in-out"}
    willChange={"transform"}
    aspectRatio={1}
    _hover={{
      transform: "scale(1.02)",
      transition: "all 0.4s ease-in-out",
    }}
  >
    {
      lnk
        ? <IconButton aria-label={"Go to"} icon={<BsFillArrowRightCircleFill size={"40px"} />} bg={"transparent"} _hover={{bg: "transparent", pl: "20px", transition:"all 0.2s ease-out"}} onClick={onClickHandle} position={"absolute"} top={10} right={10} w={"60px"} pl={0} transition={"all 0.2s ease-out"} aspectRatio={1} verticalAlign={"left"} />
        : null
    }
    {children}
  </GridItem>
}