"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex
      direction={"column"}
      justify={"flex-start"}
      align={"center"}
      w={"full"}
      h={"auto"}
      minH={"calc(100vh - 80px)"}
    >
      <Card w={"95%"}>
        <CardHeader>
          <Skeleton w={"full"}>
            <Heading>A</Heading>
          </Skeleton>
        </CardHeader>
        <CardBody
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Skeleton h={8} w={32} />
          <Skeleton h={8} w={32} />
        </CardBody>
      </Card>
      <SkeletonText w={"95%"} mt={10} />
    </Flex>
  );
}
