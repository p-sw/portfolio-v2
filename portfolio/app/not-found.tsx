"use client"

import {Flex, Heading} from "@chakra-ui/react";

export default function NotFound() {
  return (
    <Flex direction={"row"} justify={"center"} align={"center"} w={"full"} h={"calc(100vh - 80px)"}>
      <Heading>Location Not Found</Heading>
    </Flex>
  )
}