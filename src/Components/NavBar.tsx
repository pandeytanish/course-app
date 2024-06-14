import { Box, Button, Typography } from '@mui/material'
import React, { Component } from 'react'

export default class NavBar extends Component {
  render() {
    return (
      <Box sx={{height : '80px' , width : '97vw', display:'flex' , justifyContent: 'space-between' , alignItems : 'center',padding : '10px' , borderBottom : '1px solid grey'}}>
       <Typography sx={{fontWeight : 'bold'}} variant='h4'>Laura Test Course</Typography>
       
        <Button variant='outlined'>Save Changes</Button>
       
      </Box>
    )
  }
}
