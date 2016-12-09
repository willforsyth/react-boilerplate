import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      course: {title: ""}
    };

    // bind the state to this for the onClick define at the top for performance
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

// looks for change in the input and update the state
 onTitleChange(event){
   const course = this.state.course;
   course.title = event.target.value;
   this.setState({course:course});
 }

 onClickSave() {
   // call the redux action and pass in the value in this case its this.state.course
   this.props.dispatch(courseActions.createCourse(this.state.course));
 }

 courseRow(course, index){
   return <div key={index}>{course.title}</div>;
 }


  render(){
     return(
       <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />
        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save"
        />
       </div>
     );
  }
}


// define prop types
CoursesPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired
};

// connect to the redux store
function mapStateToProps(state, ownProps){
  return{
    courses: state.courses
  };
}


export default connect(mapStateToProps)(CoursesPage);
