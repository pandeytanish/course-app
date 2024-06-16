import { Box, Button, CardMedia, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, TextField, ThemeProvider, Typography, createTheme, styled } from '@mui/material'
import React, { ChangeEvent, Component } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import MUIRichTextEditor from 'mui-rte';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const myTheme = createTheme({
  // Set up your custom MUI theme here
})

interface Props {
  theme_index : number
  lesson_index : number
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

export default class Lesson1 extends Component<Props,State> {
  constructor(props : Props){
    super(props);
    this.state = {
      image : 'https://via.placeholder.com/'
    }
  }
    handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0]; 
          this.setState({ image: URL.createObjectURL(file) });
      }
  }
  render() {
    const {theme_index, lesson_index} = this.props
    return (
      <Box 
      key={lesson_index}
      sx={{
        height: {xs : '105vh',lg : '550px'},
        width: { xs: '100%', sm: '90vw', md: '76vw' },
        backgroundColor: '',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: { xs: 0, md: '2rem' },
        marginBottom : {xs : '0rem', lg : '0px'}
      }}
    >
      <Box 
        sx={{
          width: { xs: '95vw', sm: '85vw', md: '78vw' },
          backgroundColor: 'white',
          height: '500px',
          borderRadius: '10px'
        }}
      >
        <Box 
          sx={{ padding: '10px' }} 
          display="flex" 
          justifyContent="space-between" 
          alignItems="center"
        >
          <Typography variant="h6">Lesson {lesson_index + 1}</Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body1">5 pts</Typography>
            <IconButton aria-label="delete">
              <Button>
                Delete Theme 
                <DeleteIcon color="error" />
              </Button>
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between' }}>
          <Box 
            sx={{ 
              width: { xs: '100%', md: '35vw' }, 
              height: '400px', 
              padding: '10px' 
            }}
          >
            <TextField 
              sx={{ marginY: '12px' }} 
              margin='dense' 
              fullWidth 
              label='Title' 
              defaultValue='Planting the grapes'
            />
            <Stack spacing={2} direction='row'>
              <TextField 
                sx={{ marginY: '12px' }} 
                margin='dense' 
                fullWidth 
                label='Leaderboard Points' 
                defaultValue='5'
              />
              <TextField 
                sx={{ marginY: '12px' }} 
                margin='dense' 
                fullWidth 
                defaultValue='Order In The Theme'
              />
            </Stack>
            <FormControl sx={{ marginY: '12px' }} fullWidth>
              <InputLabel id="demo-simple-select-label">Product Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Product Type"
                value={10}
              >
                <MenuItem value={10}>Free</MenuItem>
                <MenuItem value={20}>Paid</MenuItem>
              </Select>
            </FormControl>
            <Box 
              sx={{ 
                marginLeft: { xs: 0, md: '2rem' }, 
                padding: '20px' 
              }} 
              display="flex" 
              gap={4}
            >
              <CardMedia
                component="img"
                sx={{ height: '110px', width: '100px', marginX: '1rem', marginBottom: '10px' }}
                image={this.state.image}
                alt="Media"
              />
              <Box>
                <Typography variant='h6'>Heading Media</Typography>
                <Typography variant='body2'>(picture, audio, video)</Typography>
                <Typography variant='body2'>Minimal Resolution: 343x193px</Typography>
                <Button 
                  sx={{ borderRadius: '10px', marginTop: '8px', color: 'black', borderColor: 'black' }} 
                  component="label" 
                  role={undefined} 
                  size='small' 
                  variant="outlined" 
                  tabIndex={-1} 
                  startIcon={<CloudUploadIcon />}
                >
                  <input type="file" hidden onChange={this.handleFileChange} />
                  Upload file
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
            </Box>
          </Box>
          <Box 
            sx={{ 
              border: '1px solid grey', 
              marginTop : {xs : '2rem', lg : '0px'},
              borderRadius: '10px', 
              marginRight: { xs: 0, md: '10px' }
            }}
          >
            <Box 
              sx={{ 
                width: { xs: '100%', md: '35vw' }, 
                height: {xs : '200px', lg : '400px'}, 
                padding: '10px' 
              }}
            >
              <Typography variant='body1'>Lesson Content</Typography>
              <ThemeProvider theme={myTheme}>
                <MUIRichTextEditor label="Start typing..." />
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    
    )
  }
}
