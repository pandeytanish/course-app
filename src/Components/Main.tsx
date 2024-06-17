import  { Component } from 'react'
import SideBar from './SideBar'
import CourseInformation from './CourseInformation'

interface State {
    DataFirst : theme,
    ThemeData : theme[],
    Lesson : lesson
    
} 
interface theme {
    name : string
    LessonData : lesson[]
}
interface lesson {
    name : string
}
export default class Main extends Component<{},State> {
    constructor(props : {}){
        super(props);
        this.state = {
            DataFirst : {
                name : 'Theme',
                LessonData : []
            },
            ThemeData : [],
            Lesson : {
                name : 'Lesson'
            }
        }
    }
    handleAddTheme = () => {
        const {ThemeData,DataFirst} = this.state
        this.setState({ThemeData:[...ThemeData,DataFirst]})
        console.log("Theme Added")
     
    }

    handleDeleteTheme = (id:number) =>{
        const {ThemeData} = this.state
        let new_courses_themes = ThemeData.filter((_,index)=>{
          return index !== id
        })
        this.setState({ThemeData:[...new_courses_themes]})
        console.log(`theme ${id + 1} Deleted`)
      }

      handleAddLesson = (id: number) => {
        console.log(`lesson added `)
        const { ThemeData, Lesson } = this.state;
      
        if (id >= 0 && id < ThemeData.length) {
          const updatedCourseThemes = [...ThemeData];
          const updatedTheme = { ...updatedCourseThemes[id] };
          updatedTheme.LessonData = [...updatedTheme.LessonData, Lesson];
          updatedCourseThemes[id] = updatedTheme;
          this.setState({ ThemeData: updatedCourseThemes });
        }
      }

      handleDeleteLesson = (themeId: number, lessonIndex: number) => {
        console.log(`lesson ${lessonIndex + 1} in theme ${themeId + 1} deleted`);
        const { ThemeData } = this.state;
      
        if (themeId >= 0 && themeId < ThemeData.length) {
          const updatedCourseThemes = [...ThemeData];
          const updatedTheme = { ...updatedCourseThemes[themeId] };
      
          if (lessonIndex >= 0 && lessonIndex < updatedTheme.LessonData.length) {
            updatedTheme.LessonData.splice(lessonIndex, 1);
            updatedCourseThemes[themeId] = updatedTheme;
            this.setState({ ThemeData: updatedCourseThemes });
          }
        }
      }
    
  
  render() {
    return (
      <>
      
      <div style={ {display : 'flex', justifyContent : 'space-around', width : '100%', backgroundColor : '#f4f4f4', }}>
      <SideBar handleAddLesson={this.handleAddLesson} handleAddTheme={this.handleAddTheme} ThemeData={this.state.ThemeData}/>
      <CourseInformation handleDeleteLesson={this.handleDeleteLesson} handleDeleteTheme={this.handleDeleteTheme}  handleAddLesson={this.handleAddLesson} handleAddTheme={this.handleAddTheme}  ThemeData={this.state.ThemeData}  />
     
      </div>
      </>
    )
  }
}
