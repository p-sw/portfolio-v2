"use client";

import Block from "./block";
import { Flex, Grid, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { THeading, TText } from "@/app/t";

export default function Page() {
  const borderBr: "br" | undefined = useBreakpointValue({
    base: undefined,
    md: "br",
  });
  const borderBl: "bl" | undefined = useBreakpointValue({
    base: undefined,
    md: "bl",
  });
  const borderTr: "tr" | undefined = useBreakpointValue({
    base: undefined,
    md: "tr",
  });
  const borderTl: "tl" | undefined = useBreakpointValue({
    base: undefined,
    md: "tl",
  });

  return (
    <Flex
      w={"full"}
      h={"calc(100vh - 80px)"}
      justify={"center"}
      align={"center"}
    >
      <Grid
        w={"95%"}
        maxW={"600px"}
        m={"0 auto"}
        gridTemplateColumns={"repeat(2, 1fr)"}
        aspectRatio={1}
        gridTemplateRows={"repeat(2, 1fr)"}
        gridGap={4}
        userSelect={"none"}
      >
        <Block spanH={1} spanW={1} bradi={borderBr}>
          <THeading>Ritonis</THeading>
          <TText>Ordinary student-like developer</TText>
          <TText>Currently working in DevBench Team</TText>
        </Block>
        <Block spanH={1} spanW={1} secondary bradi={borderBl} lnk={"/projects"}>
          <THeading>Projects</THeading>
          <TText>
            &ldquo;Temporary failure becomes permanent only when one decides to
            quit trying and persevering.&rdquo; - Napoleon Hill
          </TText>
        </Block>
        <Block spanH={1} spanW={1} secondary bradi={borderTr} lnk={"/skills"}>
          <THeading>Skills</THeading>
          <TText>
            &ldquo;What does not kill me makes me stronger.&rdquo; - Friedrich
            Nietzsche
          </TText>
        </Block>
        <Block spanH={1} spanW={1} bradi={borderTl} lnk={"/"}>
          <THeading>Blog</THeading>
          <TText>
            &ldquo;Records are the necessary link we must keep hold of our past
            experience, and push onward to improve.&rdquo; - Edmund Burke
          </TText>
        </Block>
      </Grid>
    </Flex>
  );
}
