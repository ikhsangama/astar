import React from "react";
import { Box, HStack, Center } from "@chakra-ui/react";
import { ScoreIndicatorComponent } from "./index";

export default function ScoreBannerComponent({ track }) {
  const giveColor = (el) => {
    if (el === true) {
      return "cyan.500";
    } else if (el === false) {
      return "red.500";
    }
    return;
  };
  return (
    <Box bg="blue.600" w="100%" p={4} color="white">
      <Center>
        <HStack>
          {track.map((el, index) => (
            <ScoreIndicatorComponent boxSize={8} color={giveColor(el)} />
          ))}
        </HStack>
      </Center>
    </Box>
  );
}
