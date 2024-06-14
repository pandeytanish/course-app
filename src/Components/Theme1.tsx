import { Box, Card, CardMedia, Typography, TextField, Select, MenuItem, Button, IconButton, InputLabel, FormControl, Stack, styled } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import React, { ChangeEvent, Component } from 'react'

interface Props {
  index : number
  theme: theme;
  handleDeleteTheme: (themeName: string) => void;
}

interface State {
  image : string
}
interface theme {
  name: string;
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

    return (
      <Box sx={{ height : '350px',width : '78vw',backgroundColor : '#f4f4f4', display : 'flex',justifyContent : 'center',alignContent : 'center', marginTop : '16px'}}>
      <Box sx={{backgroundColor : 'white' , width : '78vw', height : '320px',borderRadius : '10px'}}>
          <Box sx={{height: '36px',padding : '10px'}} display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Theme {this.props.index+1}</Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body1">5 pts</Typography>
          <IconButton aria-label="delete">
            <Button>Delete Theme <DeleteIcon color="error" /></Button>
          </IconButton>
        </Box>
      </Box>
 <Box sx={{display : 'flex', justifyContent : 'space-evenly',width : '80vw'}}>
  <Card variant="outlined" sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2}}>
      <TextField fullWidth  label="Title" variant="outlined" defaultValue="Planting a grape"  />
      <Box display="flex" justifyContent="space-between" alignItems="center" gap={2}>
        <TextField label="Leaderboard Points"  variant="outlined" defaultValue="5" type="number" sx={{ flex: 1 }}/>
        <TextField label="Order In The Course" variant="outlined" sx={{ flex: 1 }}/>
      </Box>
      <FormControl fullWidth variant="outlined">
        <InputLabel>Product Type</InputLabel>
        <Select defaultValue="Free" label="Product Type">
          <MenuItem value="Free">Free</MenuItem>
          <MenuItem value="Paid">Paid</MenuItem>
        </Select>
      </FormControl>
    </Card>
    <Box sx={{marginLeft : '2rem', width : '50%',borderLeft: '1px solid grey',padding : '20px'}} display="flex">
    <CardMedia
         component="img"
          sx={{height : '110px', width : '200px', marginX : '1rem', marginBottom : '10px'}}
         image={this.state.image}
        alt="Media"
       />
       <Stack>
            <Typography variant='h6'>Overview Picture</Typography>
            <Typography sx={{fontSize : '12px' , color : 'gray'}} variant='body2'>Minimal Resolution 343x193px</Typography>
            <Typography sx={{fontSize : '12px' , color : 'gray'}} variant='body2'>Maximum Size : 5mb</Typography>
            <Button sx={{borderRadius : '10px', marginTop : '8px', color : 'black', borderColor : 'black'}} component="label" role={undefined} size='small'  variant="outlined" tabIndex={-1} startIcon={<CloudUploadIcon />}>
            <input type="file" hidden onChange={this.handleFileChange}/>
            Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
          </Stack>
       
      </Box>
    </Box>
    </Box>
    </Box>
    )
  }
}

