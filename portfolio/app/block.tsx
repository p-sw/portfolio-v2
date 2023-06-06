"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  GridItem,
  useColorModeValue,
  IconButton,
  Icon,
  Box,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BsFillArrowRightCircleFill, BsFillXCircleFill } from "react-icons/bs";

interface BlockProps {
  children: React.ReactNode;
  spanW?: number;
  spanH?: number;
  secondary?: boolean;
  lnk?: string;
  bradi?: "tl" | "tr" | "bl" | "br" | ("tl" | "tr" | "bl" | "br")[];
  notAllowed?: boolean;
}

export default function Block({
  children,
  spanW,
  spanH,
  secondary,
  lnk,
  bradi,
  notAllowed,
}: BlockProps) {
  const text = useColorModeValue(
    secondary ? "text.1000" : "wtext.1000",
    "wtext.1000"
  );

  const router = useRouter();
  const rawSvgSize = useBreakpointValue({ base: "30px", md: "40px" });

  async function onClickHandle() {
    if (!lnk) return;
    await router.push(lnk);
  }

  return (
    <GridItem
      borderTopLeftRadius={
        (bradi && bradi === "tl") ||
        (Array.isArray(bradi) && bradi.includes("tl"))
          ? "5%"
          : ["5%", null, "15%"]
      }
      borderTopRightRadius={
        (bradi && bradi === "tr") ||
        (Array.isArray(bradi) && bradi.includes("tr"))
          ? "5%"
          : ["5%", null, "15%"]
      }
      borderBottomLeftRadius={
        (bradi && bradi === "bl") ||
        (Array.isArray(bradi) && bradi.includes("bl"))
          ? "5%"
          : ["5%", null, "15%"]
      }
      borderBottomRightRadius={
        (bradi && bradi === "br") ||
        (Array.isArray(bradi) && bradi.includes("br"))
          ? "5%"
          : ["5%", null, "15%"]
      }
      p={[2, 5, 10]}
      py={[4, null, 10]}
      bg={secondary ? "secondary.1000" : "primary.1000"}
      colSpan={spanW}
      rowSpan={spanH}
      color={text}
      transition={"all 0.4s ease-in-out"}
      willChange={"transform"}
      aspectRatio={[1 / 1.5, null, 1]}
      _hover={{
        transform: "scale(1.02)",
        transition: "all 0.4s ease-in-out",
      }}
    >
      {lnk ? (
        notAllowed ? (
          <Tooltip label={"Not Implemented Yet"}>
            <Box
              as={"span"}
              w={["30px", null, "60px"]}
              h={["30px", null, "40px"]}
              position={"absolute"}
              top={[1, null, 10]}
              right={[1, null, 10]}
              px={["0", null, "10px"]}
            >
              <Icon
                as={BsFillXCircleFill}
                width={["30px", null, "40px"]}
                height={["30px", null, "40px"]}
                aspectRatio={1}
              />
            </Box>
          </Tooltip>
        ) : (
          <IconButton
            aria-label={"Go to"}
            icon={<BsFillArrowRightCircleFill size={rawSvgSize} />}
            bg={"transparent"}
            _hover={{
              bg: "transparent",
              pl: ["0", null, "20px"],
              transition: ["none", null, "all 0.2s ease-out"],
            }}
            onClick={onClickHandle}
            position={"absolute"}
            top={[1, null, 10]}
            right={[1, null, 10]}
            w={["30px", null, "60px"]}
            pl={0}
            transition={"all 0.2s ease-out"}
            aspectRatio={1}
            verticalAlign={"left"}
          />
        )
      ) : null}
      {children}
    </GridItem>
  );
}
