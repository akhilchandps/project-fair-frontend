import {Link} from 'react-router-dom'
import develop from'../assets/develop.webp'
import ProjectCard from '../Components/ProjectCard'
function Home() {
  return (
    <div>
        <div className="row">
            <div className="col-sm-6 mt-4">
            <h1 className="text-center">Project fair</h1>
        <p  className="m-5" style={{textAlign:
        "justify"}}>Project management involves the planning and organization of a company  resources to move a specific task, event, or duty toward completion. It can involve a one-time project or an ongoing activity, and resources managed include personnel, finances, technology, and intellectual property.</p>
        
        
        <div className="text-center ">
            <Link to={'/login'}>
            <button className="btn btn-dark">Get Start</button>
            </Link>
        
        </div>
         </div>

       <div className='col'>
        <img src={develop} alt="" />
       </div>




        </div>
<div className='row'>
    <h1 className='text-center mt-5'>Explore projects</h1>

    <div className="col">
      <marquee width="100%" direction="left" height="100%">
       <div className='mt-5'>
        <ProjectCard/>
       </div>
</marquee>
    </div>
</div>


<div className="row mb-4">
  <h1 className='text-center  py-5'>Our Services</h1>
  <div className="col-md-4 ">

 <div className='card  text-center shadow m-4 p-4'> 
 <h1>Web designing</h1>
 <p className='py-4' style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ducimus expedita voluptatem provident doloremque quo ex, sunt excepturi possimus placeat aperiam enim qui rerum nam. Distinctio pariatur tempora consequuntur laborum?</p>
 </div>
  </div>
  <div className="col-md-4">

  <div className='card text-center shadow m-4 p-4'> 
 <h1>Single page Application</h1>
 <p  className='py-4' style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ducimus expedita voluptatem provident doloremque quo ex, ?</p>
 </div>
  </div>
  <div className="col-md-4">
  <div className='card  text-center shadow m-4 p-4'> 
 <h1>Backend Services</h1>
 <p  className='py-4'style={{textAlign:"justify"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ducimus expedita voluptatem provident doloremque quo ex, sunt excepturi possimus placeat aperiam enim qui rerum nam. Distinctio pariatur tempora consequuntur laborum?</p>
 </div>
  </div>

</div>












    </div>
  )
}

export default Home