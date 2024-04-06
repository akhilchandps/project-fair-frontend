import ProjectCard from "../Components/ProjectCard"


function Projects() {
  return (
    <div>
      <h1 className="text-center m-5">All projects</h1>
      <div className="m-auto px-4 " style={{width:"500px"}}>
      <input type="text" className="form-control " placeholder="Search By Technology"/>
      </div>
    
    <div className="row">
     <div className=" col m-5" style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
      <ProjectCard/>
     </div>
     </div>

    </div>
  )
}

export default Projects