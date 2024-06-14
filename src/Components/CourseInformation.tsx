import { Box, Button, CardMedia, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography, styled } from '@mui/material'
import { ChangeEvent, Component } from 'react'
import Switch from '@mui/material/Switch';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Theme1 from './Theme1';
import Lesson1 from './Lesson1';



interface Props {
  handleAddData: () => void; 
  handleLesson: () => void;
  handleDeleteTheme: (themeName: string) => void;
  ThemeData: theme[]
  LessonData: lesson[]
}

interface theme {
  name : string
}

interface lesson {
  name: string
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

export default class CourseInformation extends Component<Props,State> {
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
    const {handleAddData , ThemeData, handleLesson, LessonData,handleDeleteTheme} = this.props
    return (
      <Box>
      <Box sx={{ height : 'auto' , width : '80vw', display : 'flex', flexDirection : 'column' ,alignItems: 'center',marginTop : '18px', backgroundColor : '#f4f4f4'}}>
        <Box sx={{height : '350px', width : '78vw', backgroundColor : 'white', borderRadius : '10px', marginBottom : '10px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray', padding: '6px' , marginBottom : '12px' }}>
      <Typography variant='h6' sx={{fontWeight : 'normal'}} >Course Information</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px'}}>
      <Stack direction="row" spacing={2} alignItems="center">
      <Stack direction="row" alignItems="center">
        <StarOutlineIcon />
        <Typography>10pts</Typography>
      </Stack>
      <Stack direction="row"  alignItems="center">
        <AccessTimeIcon />
        <Typography>24h 30m</Typography>
      </Stack>
    </Stack>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>Active</Typography>
          <Switch />
        </Box>
      </Box>
    </Box>
       <Box sx={{ display : 'flex', justifyContent : 'space-between'}}>
       <Box sx={{width : '35vw' , padding : '10px' , borderRight : '1px solid grey'}}>
       <TextField margin='dense' fullWidth  label="Course Name" defaultValue='How the Wine is done ?' variant="outlined" />
       <Stack direction='row' sx={{display : 'flex', gap : '24px', marginTop : '10px'}}>
        <TextField sx={{width : "300px"}} label="Duration" defaultValue='24h 30m'/>
        <TextField sx={{width : "300px"}} label="LeaderBoard Points" defaultValue='10pts'/>
       </Stack>
       <Stack direction='row' sx={{display : 'flex', gap : '24px', marginTop : '10px'}}>
        <FormControl sx={{width : '300px'}}>
       <InputLabel id="demo-simple-select-label">Category</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Category"
    defaultValue={10}
  >
    <MenuItem value={10}>Wine</MenuItem>
    <MenuItem value={20}>Wine</MenuItem>
    <MenuItem value={30}>Wine</MenuItem>
  </Select>
  </FormControl>
  <FormControl sx={{width : '300px'}}>
       <InputLabel id="demo-simple-select-label">Level</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Level"
    defaultValue={20}
  >
    <MenuItem value={10}>Easy</MenuItem>
    <MenuItem value={20}>Intermediate</MenuItem>
    <MenuItem value={30}>Expert</MenuItem>
  </Select>
  </FormControl>
       </Stack>
       <FormControl margin='dense' fullWidth>
       <InputLabel id="demo-simple-select-label">Certificate</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Certificate"
    defaultValue={20}
  >
    <MenuItem value={10}>WSET</MenuItem>
    <MenuItem value={20}>WSET</MenuItem>
    <MenuItem value={30}>WSET</MenuItem>
  </Select>
  </FormControl>
       </Box>
       <Box sx={{width : '42vw' , padding : '10px'}}>
        <Box sx={{display: 'flex', justifyContent : 'left',}}>
        <CardMedia
         component="img"
          sx={{height : '110px', width : '200px', marginX : '1.5rem', marginBottom : '10px'}}
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

        <Stack>
        <TextField size='small' sx={{}} margin='dense' multiline  label="Description" variant="outlined" defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, optio molestiae exercitationem iusto sequi," />
        <TextField size='small' margin='dense' multiline  label="Information At Course End" variant="outlined" defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, optio molestiae exercitationem iusto sequi," />
        </Stack>
       </Box>
        </Box>

        </Box>
     <Box>
     {ThemeData.map((Data,index) => (
      <>
      <Theme1 theme={Data} handleDeleteTheme={handleDeleteTheme} index={index} />
      <Box>
      {LessonData.map((Data,index) => (
        <Lesson1 index={index}/>
      ))}
    </Box>
    </>
     ))}
    
  </Box>
 
      </Box>
  <Button size='small' sx={{borderColor : 'black', color : 'black', borderRadius :'16px', left : "1.5rem",marginLeft : '10px'}} variant='outlined' onClick={handleAddData}>New Theme</Button>
  <Button size='small' sx={{borderColor : 'black', color : 'black', borderRadius :'16px', left : "1.5rem",marginLeft : '10px'}} variant='outlined' onClick={handleLesson}>New Lesson</Button>

      </Box>
    )
  }
}
