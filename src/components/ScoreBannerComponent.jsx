import React from "react";
import { Box, HStack, Center, Image } from "@chakra-ui/react";
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
    <Box bg="blue.100" w="100%" p={4} color="white" mb={10}>
      <Image
        src="http://astartuition.id/assets/front_page/template/astar/img/Logo_Baru.png"
        alt=""
        maxH={10}
        position="absolute"
        ml={2}
      />
      <Center>
        <HStack>
          {track?.map((el, index) => (
            <ScoreIndicatorComponent
              boxSize={8}
              color={giveColor(el)}
              key={index}
            />
          ))}
        </HStack>
      </Center>
    </Box>
  );
}
