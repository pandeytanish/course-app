import { BottomNavigation, Box, Button, Stack, Typography } from '@mui/material';
import { Component } from 'react';



interface Props {
    handleAddData: () => void;
    handleLesson: () => void;
    ThemeData: theme[]
    LessonData: lesson[]
}

interface theme {
    name: string
}

interface lesson {
    name: string
}

interface Course {
    id: number;
    name: string;
    info: string;
}

interface SideBarState {
    Theme2: Course[];
    openSections: {
        [key: string]: boolean;
    };
}
const Theme2 = [
    {
        id: 1,
        name: "Lesson 1",
        info: 'Preparing the Barrel'
    },
    {
        id: 2,
        name: "Lesson 2",
        info: 'How to Seal the barrel'
    },
    {
        id: 3,
        name: "Lesson3",
        info: 'Where to keep the wine'
    },
    {
        id: 4,
        name: "Flash Cards",
        info: 'Review the FlashCards'
    },
    {
        id: 5,
        name: "Quiz 1",
        info: 'Take Quiz'
    }
];

export default class SideBar extends Component<Props, SideBarState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            Theme2: Theme2,
            openSections: {
                Theme1: false,
                Theme2: false,
                Theme3: false,
                MockExam1: false
            }
        };
    }

    handleBox = (section: string) => {
        this.setState((prevState) => ({
            openSections: {
                ...prevState.openSections,
                [section]: !prevState.openSections[section]
            }
        }));
    };

    render() {
        const { openSections } = this.state;
        const { handleAddData, ThemeData, LessonData, handleLesson } = this.props
        // console.log(AllData)

        return (
            <Box sx={{ p: 3, borderRight: '1px solid #ddd', width: '14vw', height: '74vh', display: { xs : 'none' , lg : 'flex'}, flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#f7f7f7', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
                <Box sx={{ textAlign: 'left', flex: 1 }}>
                    <Typography variant='h5' sx={{ marginBottom: '20px' }}>Courses</Typography>
                    <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>How the wine is Done</Typography>

                    <Box sx={{ paddingLeft: '18px' }}>
                        {ThemeData.map((Data, index) => (
                            <>
                                <Typography onClick={() => this.handleBox('Theme1')} variant='h6' sx={{ cursor: 'pointer', marginBottom: '10px', '&:hover': { color: 'primary.main' } }}>Theme {index + 1}</Typography>
                                <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>Planting A Grapes</Typography>
                                {LessonData.map((data,index) => (
                                    <Box>
                                        {openSections.Theme1 && (
                                            <Box sx={{ paddingLeft: '16px', marginBottom: '10px' }}>
                                                <Stack spacing={1}>
                                                    <Typography variant='h6'>Lesson  {index + 1}</Typography>
                                                    <Typography sx={{ fontSize: '14px', color: 'grey' }} variant='body2'>Introduction to Planting</Typography>
                                                </Stack>
                                            </Box>
                                        )}
                                    </Box>
                                ))}


                            </>
                        ))}
                        {/* <Typography onClick={() => this.handleBox('Theme2')} variant='h6' sx={{ cursor: 'pointer', marginBottom: '10px', '&:hover': { color: 'primary.main' } }}>Theme 2</Typography>
                        <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>Vintage</Typography>
                        {openSections.Theme2 && (
                            <Box sx={{ paddingLeft: '16px', marginBottom: '10px' }}>
                                {this.state.Theme2.map(theme => (
                                    <Stack key={theme.id} spacing={1}>
                                        <Typography variant='h6'>{theme.name}</Typography>
                                        <Typography sx={{ fontSize: '14px', color: 'grey' }} variant='body2'>{theme.info}</Typography>
                                    </Stack>
                                ))}
                            </Box>
                        )} */}

                        {/* <Typography onClick={() => this.handleBox('Theme3')} variant='h6' sx={{ cursor: 'pointer', marginBottom: '10px', '&:hover': { color: 'primary.main' } }}>Theme 3</Typography>
                        <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>Description</Typography>
                        {openSections.Theme3 && (
                            <Box sx={{ paddingLeft: '16px', marginBottom: '10px' }}>
                                <Stack spacing={1}>
                                    <Typography variant='h6'>Lesson 1</Typography>
                                    <Typography sx={{ fontSize: '14px', color: 'grey' }} variant='body2'>Details of Theme 3</Typography>
                                </Stack>
                            </Box>
                        )} */}

                        {/* {/* <Typography onClick={() => this.handleBox('MockExam1')} variant='h6' sx={{ cursor: 'pointer', marginBottom: '10px', '&:hover': { color: 'primary.main' } }}>Mock Exam 1</Typography>
                        <Typography sx={{ fontSize: '14px', color: 'gray', marginBottom: '10px' }} variant='body2'>Description</Typography>
                        {openSections.MockExam1 && (
                            <Box sx={{ paddingLeft: '16px', marginBottom: '10px' }}>
                                <Stack spacing={1}>
                                    <Typography variant='h6'>Mock Exam 1 Details</Typography>
                                    <Typography sx={{ fontSize: '14px', color: 'grey' }} variant='body2'>Description of Mock Exam 1</Typography>
                                </Stack>
                            </Box>
                        )}  */}
                    </Box>
                </Box>
                <BottomNavigation sx={{ backgroundColor : '#f4f4f4'}}>
                    <Button onClick={handleAddData} sx={{ height: '40px', width: '120px', marginRight: '12px', fontSize: '10px',color:'black', borderColor : 'gray', borderRadius : '16px' }} size='small' variant='outlined'>New Theme</Button>
                    <Button  sx={{ height: '40px', width: '120px', fontSize: '10px',color:'black', borderColor : 'gray', borderRadius : '16px',padding : '2px' }} size='small' variant='outlined'>New Mock Exam</Button>
                </BottomNavigation>
            </Box>
        );
    }
}
