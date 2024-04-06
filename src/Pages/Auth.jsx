import { Link } from "react-router-dom"

function Auth({register}) {
  return (
    <div>
      <div className="row">
        <div className="col-lg-5 m-5">
          <img src="https://i.pinimg.com/originals/0d/45/4e/0d454efdcfe616f5751612ec01aa22ee.gif" alt="" width={"100%"} />
        </div>
        <div className="col-lg-5 m-5">
          <form>
         <h2 className="text-center">Project fair</h2>
          <h4  className="text-center p-4">
            {
              register? "Register Here...." : "Login Here...."
            }
          </h4>

          <div>
            {
              register &&
             <input type="text" className='form-control m-2' placeholder='Username' />
         

            }
             <input type="text" className='form-control m-2' placeholder='Email' />
             <input type="text" className='form-control m-2' placeholder='Password' />
          </div>


          <div>
            {
              register ?
              <div className="text-center">
                <button className="btn btn-dark m-4">Register Here</button>
                <p>Already Registered?<Link to={'/login'}>Login here..</Link></p>
              </div>
              :
              <div  className="text-center">
              <button className="btn btn-dark m-4">Login Here</button>
              <p>New to here? <Link to={'/register'}>Registered here....</Link></p>
            </div>

            }
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Auth