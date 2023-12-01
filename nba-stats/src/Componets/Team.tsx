import TeamButtons from "./teamButtons";
import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Select,
  Button,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import {
  ATL,
  BKN,
  BOS,
  CHA,
  CHI,
  CLE,
  DAL,
  DEN,
  DET,
  GSW,
  HOU,
  IND,
  LAC,
  LAL,
  MEM,
  MIA,
  MIL,
  MIN,
  NOP,
  NYK,
  OKC,
  ORL,
  PHI,
  PHX,
  POR,
  SAC,
  SAS,
  TOR,
  UTA,
  WAS,
} from "react-nba-logos";
import { ReactElement, useState } from "react";
import { IconType } from "react-icons";
import TeamStats from "./TeamStats";
  const westTeams = [
    DAL,
    DEN,
    GSW,
    HOU,
    LAC,
    LAL,
    MEM,
    MIN,
    NOP,
    OKC,
    PHX,
    POR,
    SAC,
    SAS,
    UTA,
  ];

  const nbaTeamsDictionary: Record<string, number> = {
    'ATL': 1,
    'BKN': 2,
    'BOS': 3,
    'CHA': 4,
    'CHI': 5,
    'CLE': 6,
    'DAL': 7,
    'DEN': 8,
    'DET': 9,
    'GSW': 10,
    'HOU': 11,
    'IND': 12,
    'LAC': 13,
    'LAL': 14,
    'MEM': 15,
    'MIA': 16,
    'MIL': 17,
    'MIN': 18,
    'NOP': 19,
    'NYK': 20,
    'OKC': 21,
    'ORL': 22,
    'PHI': 23,
    'PHX': 24,
    'POR': 25,
    'SAC': 26,
    'SAS': 27,
    'TOR': 28,
    'UTA': 29,
    'WAS': 30,
  };

  const westTeamsNames = [
    "DAL",
    "DEN",
    "GSW",
    "HOU",
    "LAC",
    "LAL",
    "MEM",
    "MIN",
    "NOP",
    "OKC",
    "PHX",
    "POR",
    "SAC",
    "SAS",
    "UTA",
  ];

  // Eastern Conference Teams
  const eastTeams: Array<IconType> = [
    ATL,
    BKN,
    BOS,
    CHA,
    CHI,
    CLE,
    DET,
    IND,
    MIA,
    MIL,
    NYK,
    ORL,
    PHI,
    TOR,
    WAS,
  ];

  const eastTeamsText: Array<string> = [
    "ATL",
    "BKN",
    "BOS",
    "CHA",
    "CHI",
    "CLE",
    "DET",
    "IND",
    "MIA",
    "MIL",
    "NYK",
    "ORL",
    "PHI",
    "TOR",
    "WAS",
  ];
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <>
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
    


    

    </>
  );
};

export default function SplitWithImage() {
  const [confence, setConfrence] = useState("East");
  const [Cteam, setTeam] = useState<string>("CHA");
  const [display, setDisplay] = useState(false)
  const[scoreView,setScoreView]=useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setConfrence(selectedValue);
    setDisplay(!display);

    
  };


  return (
    <Container maxW={"5xl"} py={12} border="1px solid" borderRadius={20}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Heading>Team Stats</Heading>
          <Text color={"gray.500"} fontSize={"xl"}>
            Want to find real time stats of your team?, Your in the right place!
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<Icon as={TOR} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Chose your Confence"}
            />

            <Select
              width={300}
              borderRadius={30}
              placeholder="None"
              onChange={handleChange}
            >
              <option value="West">West</option>
              <option value="East">East</option>
            </Select>
          </Stack>
          
        </Stack>
        {display && (
  <>
    {confence === "East" && (
      <TeamButtons conference={confence} eastTeams={eastTeams} eastTeamsText={eastTeamsText} onSelectedGenre={(team)=>{setTeam(team)}} />
    )}
    {confence === "West" && (
      <TeamButtons conference={confence} eastTeams={westTeams} eastTeamsText={westTeamsNames} onSelectedGenre={(team)=>{setTeam(team);}}/>
    )}
  </>

)}

      </SimpleGrid>

      {display && <TeamStats id={nbaTeamsDictionary[Cteam]}/>}
    </Container>
    
  );
}
