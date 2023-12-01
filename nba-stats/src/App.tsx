import { useState } from "react";
import reactLogo from "./assets/react.svg";
import {
  Button,
  ButtonGroup,
  Container,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Select,
  Show,
  Stack,
  Text,
  HStack
} from "@chakra-ui/react";

import "./App.css";
import BasicStatistics from "./Componets/Stats";
import SearchBAr from "./Componets/SearchBAr";
import SeasonSelector from "./Componets/SeasonSelector";
import SplitWithImage from "./Componets/Team";
import NavBar from "./Componets/NavBar";
import TeamStats from "./Componets/TeamStats";

function App() {
  const [vision, setVision] = useState(false);
  const [player, setPlayer] = useState<string>("");
  const [season,setSeason] = useState<string>("")
  const [display,setDisplay] = useState(false)

  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        
        <HStack><NavBar/>
          <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          NBA Stats{" "}
          <Text as={"span"} color={"red.400"}>
            made easy
          </Text>
        </Heading>
        </HStack>
        <Text>
          Always stay ahead of the game. Never be caught unprepared for changing
          player performances. Keep tabs on the stats and receive timely
          updates. Check your personalized "Daily NBA Stats Outlook" every
          morning.
        </Text>
        <SeasonSelector onSearch={setSeason}/>
        <HStack alignContent='center'><SearchBAr onSearch={setPlayer}/></HStack>
        
        <Stack spacing={6} direction={"row"}>
          <Button
            onClick={() => 
              setDisplay(!display)}
            rounded={"full"}
            px={6}
            colorScheme={"red"}
            bg={"red.400"}
            _hover={{ bg: "red.500" }}
          >
            {display ? "Clear" : "Show Me!"}
          </Button>
          <Button rounded={"full"} px={6} bg={"black"}>
            Learn more
          </Button>
        </Stack>

        {display && <BasicStatistics season={season} full_name={player} />}
        <SplitWithImage/>
        
      </Stack>
      
    </Container>
  );
}
export default App;
