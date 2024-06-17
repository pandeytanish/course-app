import { Box, Card, CardMedia, Typography, TextField, Select, MenuItem, Button, IconButton, InputLabel, FormControl, Stack, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import React, { ChangeEvent, Component } from 'react'

interface Props {
  theme_index : number
  handleDeleteTheme: (id:number) => void;
  handleAddLesson: (id: number) => void;
}

interface State {
  image : string
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default class Theme1 extends Component<Props,State> {
  constructor(props : Props){
    super(props);
    this.state = {
      image : 'https://via.placeholder.com/343x193'
    }
  }
  
    handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0]; 
          this.setState({ image: URL.createObjectURL(file) });
      }
  }
  render() {
    const {handleDeleteTheme,theme_index} = this.props
    return (
      <Box 
      sx={{ 
        height: { xs: 'auto', md: '320px' }, 
        width: '100%', 
        backgroundColor: 'white', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '24px',
        marginBottom : '24px',
        borderRadius : '20px',
        boxShadow: '5px 5px  rgba(0,0,0,0.1)'
        
      }}
    >
      <Box 
        sx={{ 
          backgroundColor: 'white', 
          width: { xs: '92vw', md: '78vw' }, 
          height: { xs: 'auto', md: '300px' }, 
          borderRadius: '10px', 
          padding: { xs: 2, md: 0 } 
        }}
      >
        <Box 
          sx={{ height: '10px', padding: '20px', borderBottom : '1px solid grey' }} 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center"
        >
          <Typography variant="h6">Theme {theme_index + 1}</Typography>
          <Box display="flex" alignItems="center" gap={1}>
          <StarOutlineIcon />
            <Typography variant="body1">5 pts</Typography>
            <IconButton aria-label="delete">
              <Button color="error" size='small' variant='outlined' sx={{borderRadius : '10px'}} onClick={()=>handleDeleteTheme(theme_index)}>Delete Theme <DeleteIcon color="error" /></Button>
            </IconButton>
          </Box>
        </Box>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            justifyContent: 'space-evenly', 
            width: '100%' 
          }}
        >
          <Card 
            variant="outlined" 
            sx={{ 
              padding : '20px',
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2, 
              width: { xs: '100%', md: '40%' },
              border : 'none'
            }}
          >
            <TextField fullWidth label="Title" variant="outlined" defaultValue="Planting a grape" />
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={2}>
              <TextField label="Leaderboard Points" variant="outlined" defaultValue="5" type="number" sx={{ flex: 1 }} />
              <TextField label="Order In The Course" variant="outlined" sx={{ flex: 1 }} />
            </Box>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Product Type</InputLabel>
              <Select defaultValue="Free" label="Product Type">
                <MenuItem value="Free">Free</MenuItem>
                <MenuItem value="Paid">Paid</MenuItem>
              </Select>
            </FormControl>
          </Card>
          <Box 
            sx={{ 
              marginLeft: { xs: 0, md: '2rem' }, 
              width: { xs: '100%', md: '50%' }, 
              borderLeft: { xs: 'none', md: '1px solid grey' }, 
              padding: '20px', 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'center', md: 'flex-start' }
            }}
          >
            <CardMedia
              component="img"
              sx={{ height: '110px', width: '200px', marginX: '1rem', marginBottom: '10px' }}
              image={this.state.image}
              alt="Media"
            />
            <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant='h6'>Overview Picture</Typography>
              <Typography sx={{ fontSize: '12px', color: 'gray' }} variant='body2'>Minimal Resolution 343x193px</Typography>
              <Typography sx={{ fontSize: '12px', color: 'gray' }} variant='body2'>Maximum Size : 5mb</Typography>
              <Button 
                sx={{ 
                  borderRadius: '10px', 
                  marginTop: '8px', 
                  color: 'black', 
                  borderColor: 'black' 
                }} 
                component="label" 
                size='small' 
                variant="outlined" 
                startIcon={<CloudUploadIcon />}
              >
                <input type="file" hidden onChange={this.handleFileChange} />
                Upload file
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
    )
  }
}

