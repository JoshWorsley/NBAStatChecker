import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import apiClient from '../Services/api-client'
  
  interface StatsCardProps {
    title: string
    stat: string
  }
  function StatsCard(props: StatsCardProps) {
    const { title, stat } = props
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    )
  }

  interface PlayerInfo { 0:{
    id: number;
    last_name: string;
    pts:number;
    min:string;
    turnover:number;


}
}



interface data{
    data:PlayerInfo
}
interface BasicStatisticsProps {
    full_name: string;
    season:string
  }  



  export default function BasicStatistics({full_name , season}:BasicStatisticsProps) {
    // const searchName = full_name.replace(' ', '%20');

    const [playerid,setPlayerid] =useState<number>()
    const [stats, setStats] = useState<(number | string | null)[]>([]);
    useEffect(()=>{
        apiClient.get<data>(`players?search=${full_name}`)
        .then((res)=>{ setPlayerid(res.data.data[0].id)
        console.log(playerid)}
        )
        
    },[full_name,playerid,season])
    useEffect(()=>{
        apiClient.get<data>(`season_averages?season=${season}&player_ids[]=${playerid}`)
        .then((res)=> setStats([res.data.data[0].pts,res.data.data[0].min,res.data.data[0].turnover]))
        
    }
    ,[full_name,playerid,season])
    const name = full_name.split(' ')
    const capitalizedWords = name.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedName = capitalizedWords.join(' ');
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
        {capitalizedName.length > 1 ? `${capitalizedName} ${season} Stats` : " "}
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard title={'Points'} stat={stats[0]!=null?stats[0].toString():""} />
          <StatsCard title={'Minutes'} stat={stats[1]!=null?stats[1].toString():""} />
          <StatsCard title={'Turnovers'} stat={stats[2]!=null?stats[2].toString():""}  />
        </SimpleGrid>
      </Box>
    )
  }