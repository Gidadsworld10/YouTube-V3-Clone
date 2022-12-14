import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

import Videos from './Videos';
import { FetchFromApi } from '../utils/FetchFromApi';
import { useParams } from 'react-router-dom';




const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    FetchFromApi(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2}
      sx={{ overflowY: "auto", height: "95vh", flex: 2, }}>
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{
        color: "white"
      }}>
        Search Result For: <span style={{ color: "red" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} justifyContent="center" />
    </Box>
  );
}

export default SearchFeed;
