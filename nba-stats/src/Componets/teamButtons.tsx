import { Stack, Icon, useColorModeValue, Button, Flex } from '@chakra-ui/react';
import React, { ReactElement } from 'react'
import { IconType } from 'react-icons';


interface Props{
    conference:string;
    eastTeams:Array<IconType>;
    eastTeamsText:Array<string>
    onSelectedGenre:(team:string)=>void;


}




const TeamButtons = ({conference, eastTeams, eastTeamsText,onSelectedGenre}:Props) => {
    interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
    const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
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
      <text fontWeight={600}>{text}</text>
    </Stack>
  );
};

  return (
    <Stack direction="row" spacing={10}>
    <Stack direction="column">
      {eastTeams.slice(0, 7).map((team, index) => (
        <div>
          <Stack direction="row">
            <Feature
              icon={<Icon as={team} color={"yellow.500"} w={5} h={5} />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={""}
            />
            <Button
              fontWeight="light"
              fontSize="lg"
              key={eastTeamsText[index]}
              variant="link"
              onClick={() => {
                onSelectedGenre(eastTeamsText[index]);
                console.log(eastTeamsText[index])}}
            >
              {eastTeamsText[index]}
            </Button>
          </Stack>
        </div>
      ))}
    </Stack>
    <Stack direction="column">
      {eastTeams.slice(7, 14).map((team, index) => (
        <Stack direction="row">
          <Feature
            icon={<Icon as={team} color={"yellow.500"} w={5} h={5} />}
            iconBg={useColorModeValue("yellow.100", "yellow.900")}
            text={``}
          />
          <Button
            fontWeight="light"
            fontSize="lg"
            key={eastTeamsText[index + 7]}
            variant="link"
            onClick={() => { onSelectedGenre(eastTeamsText[index+7])
            ;
              console.log(eastTeamsText[index+7]);
            }}
          >
            {eastTeamsText[index + 7]}
          </Button>
        </Stack>
      ))}
    </Stack>
  </Stack>
  )
}

export default TeamButtons