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
    handleAddData = () => {
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
      }

      handleLesson = (id: number) => {
        console.log("lesson function clicked")
        const { ThemeData, Lesson } = this.state;
      
        if (id >= 0 && id < ThemeData.length) {
          const updatedCourseThemes = [...ThemeData];
          const updatedTheme = { ...updatedCourseThemes[id] };
          updatedTheme.LessonData = [...updatedTheme.LessonData, Lesson];
          updatedCourseThemes[id] = updatedTheme;
          this.setState({ ThemeData: updatedCourseThemes });
        }
      }
 
      // handleLesson = () => {
      //   const {LessonData,Lesson} = this.state
      //   this.setState({LessonData:[...LessonData,Lesson]})
      //   console.log("Lesson Added")
      // }
  render() {
    return (
      <>
      {/* ,backgroundColor : '#f4f4f4 */}
      <div style={ {display : 'flex', justifyContent : 'space-around', width : '100%'}}>
      <SideBar handleLesson={this.handleLesson} handleAddData={this.handleAddData} ThemeData={this.state.ThemeData}/>
      <CourseInformation handleDeleteTheme={this.handleDeleteTheme}  handleLesson={this.handleLesson} handleAddData={this.handleAddData}  ThemeData={this.state.ThemeData}  />
     
      </div>
      </>
    )
  }
}
