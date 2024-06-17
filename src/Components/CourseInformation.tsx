import { Box, Button, CardMedia, Divider, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography, styled } from '@mui/material'
import { ChangeEvent, Component } from 'react'
import Switch from '@mui/material/Switch';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Theme1 from './Theme';
import Lesson1 from './Lesson';



interface Props {
  handleAddTheme: () => void; 
  handleAddLesson: (id: number) => void;
  handleDeleteTheme: (id: number) => void;
  handleDeleteLesson: (themeId: number, lessonIndex: number) => void;
  ThemeData: theme[]
 
}

interface theme {
  name : string
  LessonData: lesson[]
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
    const {handleAddTheme , ThemeData, handleAddLesson ,handleDeleteTheme, handleDeleteLesson} = this.props
    return (
      <Box sx={{width : '78vw'}}>
           <Box sx={{height : 'auto', padding : '1rem'}}>
        <Box sx={{ 
          height: 'auto', 
          width: {xs : '100vw', lg : '76vw'} , 
          display: 'flex', 
          flexDirection: { xs: 'column', lg: 'column' }, 
          alignItems: 'center', 
          marginTop: '18px', 
          backgroundColor: 'white' ,
          // border : '1px solid green',
          borderRadius : '20px',
          boxShadow: '5px 5px  rgba(0,0,0,0.1)'

        }}>
           
          <Box sx={{ 
            height: 'auto', 
            width: {xs : '100vw', lg : '76vw'},
            backgroundColor: 'transparent', 
            // borderRadius: '10px', 
            marginBottom: '10px' 
          }}>
            <Box sx={{ 
              display: 'flex', 
              
              flexDirection: { xs: 'row', sm: 'row' }, 
              justifyContent: 'space-between', 
              borderBottom: '1px solid gray', 
              padding: '12px', 
              marginBottom: '12px' ,
              fontSize : {xs : '10px'}
            }}>
              <Typography variant='h6' sx={{ fontWeight: 'normal' }}>Course Information</Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                alignItems: 'center', 
                gap: '16px' ,
                
              }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Stack direction="row" alignItems="center">
                    <StarOutlineIcon />
                    <Typography>10pts</Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center">
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
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' }, 
            justifyContent: 'space-between' ,
            width: {xs : '100vw', lg : '76vw'},
            backgroundColor : 'transparent',
            borderRadius : '20px'
          }}>
            <Box sx={{ 
              width: {xs : '100vw', lg : '35vw'},
              padding: '10px', 
              borderRight: { lg: '1px solid grey' } 
            }}>
              <TextField margin='dense' fullWidth label="Course Name" defaultValue='How the Wine is done ?' variant="outlined" />
              <Stack direction='row' sx={{ 
                display: 'flex', 
                gap: '24px', 
                marginTop: '10px', 
                flexDirection: { xs: 'column', sm: 'row' } 
              }}>
                <TextField sx={{ width: { xs: '100%', sm: '300px' } }} label="Duration" defaultValue='24h 30m' />
                <TextField sx={{ width: { xs: '100%', sm: '300px' } }} label="LeaderBoard Points" defaultValue='10pts' />
              </Stack>
              <Stack direction='row' sx={{ 
                display: 'flex', 
                gap: '24px', 
                marginTop: '10px', 
                flexDirection: { xs: 'column', sm: 'row' } 
              }}>
                <FormControl sx={{ width: { xs: '100%', sm: '300px' } }}>
                  <InputLabel id="demo-simple-select-label">Category</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Category" defaultValue={10}>
                    <MenuItem value={10}>Wine</MenuItem>
                    <MenuItem value={20}>Wine</MenuItem>
                    <MenuItem value={30}>Wine</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ width: { xs: '100%', sm: '300px' } }}>
                  <InputLabel id="demo-simple-select-label">Level</InputLabel>
                  <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Level" defaultValue={20}>
                    <MenuItem value={10}>Easy</MenuItem>
                    <MenuItem value={20}>Intermediate</MenuItem>
                    <MenuItem value={30}>Expert</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
              <FormControl margin='dense' fullWidth>
                <InputLabel id="demo-simple-select-label">Certificate</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" label="Certificate" defaultValue={20}>
                  <MenuItem value={10}>WSET</MenuItem>
                  <MenuItem value={20}>WSET</MenuItem>
                  <MenuItem value={30}>WSET</MenuItem>
                </Select>
              </FormControl>
            </Box>
            
            <Box sx={{ 
              width: { xs: '100vw', lg: '42vw' }, 
              padding: '10px' 
            }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'left', 
                flexDirection: { xs: 'column', sm: 'row' } 
              }}>
                <CardMedia
                  component="img"
                  sx={{ 
                    height: {xs : '20vh', lg : '110px'}, 
                    width: {xs : '85vw', lg : '200px'}, 
                    marginX: '1.5rem', 
                    marginBottom: '10px' 
                  }}
                  image={this.state.image}
                  alt="Media"
                />
                <Stack sx={{marginLeft : {xs :'18px'}}}>
                  <Typography variant='h6'>Overview Picture</Typography>
                  <Typography sx={{ fontSize: '12px', color: 'gray' }} variant='body2'>Minimal Resolution 343x193px</Typography>
                  <Typography sx={{ fontSize: '12px', color: 'gray' }} variant='body2'>Maximum Size: 5mb</Typography>
                  <Button 
                    sx={{ borderRadius: '10px', marginTop: '8px', color: 'black', borderColor: 'black' }} 
                    component="label" 
                    role={undefined} 
                    size='small' 
                    variant="outlined" 
                    tabIndex={-1} 
                    startIcon={<CloudUploadIcon />}
                  >
                    <input type="file" hidden onChange={this.handleFileChange}/>
                    Upload file
                    <VisuallyHiddenInput type="file" />
                  </Button>
                </Stack>
              </Box>
              <Stack sx={{ marginTop : {xs : '1rem'}}}>
                <TextField size='small' margin='dense' multiline label="Description" variant="outlined" defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, optio molestiae exercitationem iusto sequi," />
                <TextField size='small' margin='dense' multiline label="Information At Course End" variant="outlined" defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, optio molestiae exercitationem iusto sequi," />
              </Stack>
            </Box>
          </Box>
        </Box>
        
        <Box>
          {ThemeData.map((theme, theme_index) => (
            <div key={theme_index}>
              <Theme1 handleAddLesson={handleAddLesson} handleDeleteTheme={handleDeleteTheme}  theme_index={theme_index} />
              <Box>
                {theme.LessonData.map((lessonData, lesson_index) => (
                  <Lesson1 handleDeleteLesson={handleDeleteLesson} key={lesson_index}  theme_index={theme_index} lesson_index={lesson_index} />
                ))}
                <Stack sx={{marginLeft : '2rem'}} spacing={4} direction='row'>
                  <Button size="small" variant="contained" sx={{color: "black",bgcolor: "white",borderRadius: '20px'}}
                    startIcon={<AddCircleOutlineOutlinedIcon />}   onClick={() => handleAddLesson(theme_index)}>New Lesson</Button>
                  <Button size="small" variant="contained" sx={{color: "black",bgcolor: "white",borderRadius: '20px'}}
                    startIcon={<AddCircleOutlineOutlinedIcon />}  >Add Quiz</Button>
                  <Button size="small" variant="contained" sx={{color: "black",bgcolor: "white",borderRadius: '20px'}}
                    startIcon={<AddCircleOutlineOutlinedIcon />} >Add FlashCard</Button>
                
                </Stack>
              </Box>
            </div>
          ))}
        </Box>
        <Stack sx={{marginTop : '16px'}} direction='row' spacing={2}>
        <Button size="small" variant="contained" sx={{color: "black",bgcolor: "white",borderRadius: '20px'}}
         startIcon={<AddCircleOutlineOutlinedIcon />}onClick={handleAddTheme}>New Theme</Button>
        <Button size="small" variant="contained" sx={{color: "black",bgcolor: "white",borderRadius: '20px'}}
        startIcon={<AddCircleOutlineOutlinedIcon />} >New Mock Exam</Button>
        </Stack>
      </Box>
  

      </Box>
    )
  }
}
