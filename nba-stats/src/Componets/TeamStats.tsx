import React, { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { Heading, Highlight, Stack } from "@chakra-ui/react";

interface TeamStatsProps {
  id: number;
}

interface Data {
  data: {
    0: {
      home_team: {
        full_name: string;
      };
      home_team_score: string;
      visitor_team: {
        full_name: string;
      };
      visitor_team_score: string;
    };
  };
}

const TeamStats: React.FC<TeamStatsProps> = ({ id }) => {
  const [city, setCity] = useState<string[]>([]);
  useEffect(() => {
    apiClient
      .get<Data>("games", {
        params: {
          start_date: "2023-11-10",
          end_date: "2023-11-21",
          "team_ids[]": id,
        },
      })
      .then((res) =>{
        setCity([
          res.data.data[0].home_team.full_name,
          res.data.data[0].visitor_team.full_name,
          res.data.data[0].home_team_score,
          res.data.data[0].visitor_team_score
        ])
    console.log(id)
    }
      );
    // You may want to use res.data or res.data.someProperty depending on your API response structure
  }, [id]); // Include id in the dependency array if you want to run the effect when id changes

  // Return some JSX here if needed
  return (
    <div>
      {city.length > 1 && (
        <Stack>
          <Heading lineHeight="tall" fontSize={"xx-large"}>
            {city[0]} VS {city[1]}
          </Heading>
          <Heading fontSize={"large"}>Score {city[2]}:{city[3]}</Heading>
        </Stack>
      )}
    </div>
  );
};

export default TeamStats;
