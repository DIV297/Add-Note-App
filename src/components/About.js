const About = () => {
  // const a = useContext(noteContext);
  // useEffect(()=>{
  //   a.update()
  // },[])
  return (
    <>
    <div>
      
      <div className="container my-4" style={{'border':'2px solid lightgray'}}>
        <h2>About iNotebook</h2>
        This is Inotebook app where you can store important notes and data.You can able to edit, delete, add notes by simply in home page. It is single page application made with ReactJs, NodeJs, MongoDB. </div>
    </div>
    <div className="container my-4" style={{'border':'2px solid lightgray'}}>
      <h2>About Creater</h2>
      <div className="side" style={{'textAlign':'left'}}>This app is created by Divansh bajaj, having proficient knowlege of Web development, Python development, made many projects as follows:
      <li>SpeechToTextConversion</li>
      <li>School Management Calculator</li>
      <li>Attendance System</li>
      <li>FoodOrdering Website</li>
      </div>
    </div>
    </>
  )
}

export default About
