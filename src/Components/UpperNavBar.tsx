import { Box, Typography } from '@mui/material'
import '../App.css'
import React, { Component } from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import InfoIcon from '@mui/icons-material/Info';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import TranslateIcon from '@mui/icons-material/Translate';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NoteIcon from '@mui/icons-material/Note';

export default class UpperNavBAr extends Component {
  render() {
    return (
        
      <Box sx={{height : '40px', width : '100%' , display : 'flex', justifyContent: 'space-around', marginTop : '6px'}}>
         <Box sx={{borderRight : '1px solid grey'}} className="iconTextContainer">
            <Typography sx={{color: "red", fontWeight : 'bold'}} variant='h5'>ETOH</Typography>
         </Box>
         <Box className="iconTextWrapper">
            <Box className="iconTextContainer">
            <GridViewIcon/>
        <Typography>Dashboard</Typography>
            </Box>
            <Box className="iconTextContainer">
            <InfoIcon/>
            <Typography>App Details</Typography>  
            </Box>
            <Box className="iconTextContainer">
            <ModeCommentIcon/>
        <Typography>Contact Us</Typography>
            </Box>
            <Box className="iconTextContainer">
            <TranslateIcon/>
        <Typography>Language</Typography>
            </Box>
            <Box className="iconTextContainer">
            <StickyNote2Icon/>
           <Typography>Course</Typography>
            </Box>
            <Box className="iconTextContainer">
            <ContactMailOutlinedIcon/>
        <Typography>Certifications</Typography>
            </Box>
            <Box className="iconTextContainer">
            <AddCircleOutlineIcon/>
        <Typography>Subcriptions</Typography>
            </Box>
            <Box className="iconTextContainer">
            <PersonOutlineIcon/>
        <Typography>Users</Typography>
            </Box>
            <Box className="iconTextContainer">
            < NoteIcon/>
        <Typography>Term and Conditions</Typography>
            </Box>
        </Box>
        <Box className="iconTextContainer">
            <Typography>Admin@example.com</Typography>
        </Box>

      </Box>
    )
  }
}
