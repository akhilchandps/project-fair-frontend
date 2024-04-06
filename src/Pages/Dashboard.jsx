
import MyProject from "../Components/MyProject"
import Profile from "../Components/Profile"

function Dashboard() {
  return (
    <div>
      <div className="row">
        <h2 className="text-center my-3">Welcome User</h2>
        <div className="col-lg-6">
        <MyProject/>
        </div>
        <div className="col-lg-6">
         <Profile/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard