import AddProject from "./AddProject"
import { FaGithub } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
function MyProject() {
  return (
    <div>
        
    <div className="d-flex justify-content-around">
    <h3>My Projects</h3>
        <AddProject/>
    </div>

    <div className="row m-5 pt-5">
        <div className="col-lg-6"><h3>Project Title</h3></div>
     
        <div className="col-lg-6 d-flex justify-content-evenly">
            <button className="btn"><FaGithub /></button>
            <button className="btn"><FaEdit /></button>
            <button className="btn"><RiDeleteBin5Line /></button>
        </div>

    </div>
    </div>
  )
}

export default MyProject