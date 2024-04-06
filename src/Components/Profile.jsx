
import Swal from 'sweetalert2'
function Profile() {

  const UpdateProfile =()=>
  {
    Swal.fire({
      title: 'Success',
      text: 'User Details Updated',
      icon: 'success',
      confirmButtonText: 'Back'
    })
  }
  return (
    <div>
      <div className="text-center">
        <h3 className='py-4'>My Profile</h3>
        <label>
          <input type="file"style={{display:"none"}} />
          <img src="https://cdn-icons-png.flaticon.com/512/1177/1177577.png" alt="" width={"200px"}/>
        </label>
        <div className="m-5 px-5"> 
          <input type="text" placeholder="Name" className="form-control mb-2" />
          <input type="text" placeholder="Git Hub" className="form-control mb-2" />
          <input type="text" placeholder="Live link" className="form-control mb-2" />
          <button className="btn btn-dark m-4" onClick={UpdateProfile}>Update</button>
        </div>
      </div>
    </div>
  )
}

export default Profile