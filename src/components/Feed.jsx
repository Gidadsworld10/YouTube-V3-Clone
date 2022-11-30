import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { FetchFromApi } from '../utils/FetchFromApi';


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    FetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data)=> setVideos(data.items))
  },[selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }} >
      <Box sx={{
        height: { md: "92vh" },
        borderRight: "10px solid #3d3d3d", pb: { xs: 0, md: 2 }
      }}>
        <Sidebar 
        selectedCategory={selectedCategory}
         setSelectedCategory={setSelectedCategory}
        />
        <Typography className='copyright' variant='body2'
          sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2022 GIDADO Media
        </Typography>
      </Box>
      <Box p={2}
        sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{
          color: "white"
        }}>
          {selectedCategory} <span style={{color: "red"}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
}

export default Feed;
