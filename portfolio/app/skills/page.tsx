"use client"

import {
  Card,
  CardBody,
  Flex,
  Heading
} from "@chakra-ui/react";

export default function Skills() {
  return <>
    <Heading>
      Languages
    </Heading>
    <Flex direction={"row"} justify={"flex-start"} align={"center"} maxW={"100vw"} overflowX={"auto"}>
      <Card>
        <CardBody>
          <Heading>Python</Heading>

        </CardBody>
      </Card>
    </Flex>
  </>
}