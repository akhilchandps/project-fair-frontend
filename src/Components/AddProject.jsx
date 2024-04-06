import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';


function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className="btn btn-dark" onClick={handleShow}>Add projects</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-lg-6 m-auto">
          <label>
          <input type="file"style={{display:"none"}} />
          <img src="https://miro.medium.com/max/1272/1*ZSVmWGcc1weENb0ShawWxw.gif" alt="" width={"300px"}/>
        </label>
          </div>
          <div className="col-lg-6">
          <div className=""> 
          <input type="text" placeholder="project Title" className="form-control mb-2" />
          <input type="text" placeholder="Languages" className="form-control mb-2" />
          <input type="text" placeholder="Git Hub" className="form-control mb-2" />
          <input type="text" placeholder="Live link" className="form-control mb-2" />
          <input type="text" placeholder="Over Vi" className="form-control mb-2" />
        </div>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer className='justify-content-between'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  )
}

export default AddProject