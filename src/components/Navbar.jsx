import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'






const Navbar = () => {
  return (
    <Stack direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000", top: "0",
        justifyContent: "space-between"
      }} >
      <Link to="/"
        style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} 
          alt="logo" height={45}  />
          <Typography variant='body1' fontWeight="bold"  sx={{display:{xs: "none", sm:"fixed"},color:"#fff", ml:"5px"}} >GidadoTube</Typography>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar