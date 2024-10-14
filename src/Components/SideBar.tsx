// import { BottomNavigation, Box, Button, Stack, Typography } from '@mui/material';
// import { Component } from 'react';


// interface Props {
//     handleAddData: () => void;
//     handleLesson: (id: number) => void;
//     ThemeData: theme[]
   
// }

// interface theme {
//     name: string
//     LessonData: lesson[]
// }

// interface lesson {
//     name: string
// }

// interface Course {
//     id: number;
//     name: string;
//     info: string;
// }

// interface SideBarState {
//     Theme2: Course[];
//     openSections: {
//         [key: string]: boolean;
//     };
// }
// const Theme2 = [
//     {
//         id: 1,
//         name: "Lesson 1",
//         info: 'Preparing the Barrel'
//     },
//     {
//         id: 2,
//         name: "Lesson 2",
//         info: 'How to Seal the barrel'
//     },
//     {
//         id: 3,
//         name: "Lesson3",
//         info: 'Where to keep the wine'
//     },
//     {
//         id: 4,
//         name: "Flash Cards",
//         info: 'Review the FlashCards'
//     },
//     {
//         id: 5,
//         name: "Quiz 1",
//         info: 'Take Quiz'
//     }
// ];

// export default class SideBar extends Component<Props, SideBarState> {
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             Theme2: Theme2,
//             openSections: {
//                 Theme1: false,
//                 Theme2: false,
//                 Theme3: false,
//                 MockExam1: false
//             }
//         };
//     }

//     handleBox = (section: string) => {
//         this.setState((prevState) => ({
//             openSections: {
//                 ...prevState.openSections,
//                 [section]: !prevState.openSections[section]
//             }
//         }));
//     };

//     render() {
//         const { openSections } = this.state;
//         const { handleAddData, ThemeData, handleLesson } = this.props
//         // console.log(AllData)

//         return (
//             <Box sx={{ p: 3, borderRight: '1px solid #ddd', width: '14vw', height: '74vh', display: { xs : 'none' , lg : 'flex'}, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#f7f7f7', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
//                 <Box sx={{ textAlign: 'left', flex: 1 }}>
//                     <Typography variant='h5' sx={{ marginBottom: '20px' }}>Courses</Typography>
//                     <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>How the wine is Done</Typography>

//                     <Box sx={{ paddingLeft: '18px' }}>
//                         {ThemeData.map((Data, index) => (
//                             <>
//                                 <Typography onClick={() => this.handleBox('Theme1')} variant='h6' sx={{ cursor: 'pointer', marginBottom: '10px', '&:hover': { color: 'primary.main' } }}>Theme {index + 1}</Typography>
//                                 <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>Planting A Grapes</Typography>
//                                 {Data.LessonData.map((data,index) => (
//                                     <Box>
//                                         {openSections.Theme1 && (
//                                             <Box sx={{ paddingLeft: '16px', marginBottom: '10px' }}>
//                                                 <Stack spacing={1}>
//                                                     <Typography variant='h6'>Lesson  {index + 1}</Typography>
//                                                     <Typography sx={{ fontSize: '14px', color: 'grey' }} variant='body2'>Introduction to Planting</Typography>
//                                                 </Stack>
//                                             </Box>
//                                         )}
//                                     </Box>
//                                 ))}


//                             </>
//                         ))}
//                     </Box>
//                 </Box>
//                 <BottomNavigation sx={{ backgroundColor : '#f4f4f4'}}>
//                     <Button onClick={handleAddData} sx={{ height: '40px', width: '120px', marginRight: '12px', fontSize: '10px',color:'black', borderColor : 'gray', borderRadius : '16px' }} size='small' variant='outlined'>New Theme</Button>
//                     <Button  sx={{ height: '40px', width: '120px', fontSize: '10px',color:'black', borderColor : 'gray', borderRadius : '16px',padding : '2px' }} size='small' variant='outlined'>New Mock Exam</Button>
//                 </BottomNavigation>
//             </Box>
//         );
//     }
// }



import { BottomNavigation, Box, Button, Stack, Typography } from '@mui/material';
import { Component } from 'react';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

interface Props {
    handleAddTheme: () => void;
    handleAddLesson: (id: number) => void;
    ThemeData: theme[]
}

interface theme {
    name: string
    LessonData: lesson[]
}
interface lesson {
    name: string
}

interface SideBarState {
    openSection: string | null;
}

export default class SideBar extends Component<Props, SideBarState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            openSection: null
        };
    }

    handleBox = (section: string) => {
        this.setState((prevState) => ({
            openSection: prevState.openSection === section ? null : section
        }));
    };

    render() {
        const { openSection } = this.state;
        const { handleAddTheme, ThemeData, handleAddLesson } = this.props;

        return (
            <Box sx={{height : 'auto',  width: '21vw', backgroundColor: 'white', boxShadow: '2px 0 5px rgba(0,0,0,0.1)'}}>
            <Box sx={{ p: 2, width: '285px', display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ textAlign: 'left', flex: 1 }}>
                    <Typography variant='h5' sx={{ marginBottom: '20px' }}>Courses</Typography>
                    <Box sx={{ paddingLeft: '18px' }}>
                        {ThemeData.map((Data, index) => (
                            <Box key={index}>
                                <Typography onClick={() => this.handleBox(`Theme${index + 1}`)} variant='h6' sx={{ cursor: 'pointer', marginBottom: '10px', '&:hover': { color: 'primary.main' } }}>Theme {index + 1}</Typography>
                                <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>{Data.name}</Typography>
                                {Data.LessonData.map((lesson, lessonIndex) => (
                                    <Box key={lessonIndex}>
                                        {openSection === `Theme${index + 1}` && (
                                            <Box sx={{ paddingLeft: '16px', marginBottom: '10px' }}>
                                                <Stack spacing={1}>
                                                    <Typography variant='h6'>Lesson {lessonIndex + 1}</Typography>
                                                    <Typography sx={{ fontSize: '14px', color: 'grey' }} variant='body2'>{lesson.name}</Typography>
                                                </Stack>
                                            </Box>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                        ))}
                    </Box>
                </Box>
                <Stack spacing={2} direction={'row'}>
                <Button size='small' variant="contained" sx={{color:"black",bgcolor:"white",borderRadius:'20px', whiteSpace: 'nowrap' }} startIcon={<AddCircleOutlineOutlinedIcon/>} onClick={handleAddTheme} >New Theme</Button>
                    <Button size='small' variant="contained" sx={{ color:"black", bgcolor:"white", borderRadius:'20px', whiteSpace: 'nowrap' }} startIcon={<AddCircleOutlineOutlinedIcon/>}>New Mock Exam</Button>
                </Stack>
                
            </Box>
            </Box>
        );
    }
}

