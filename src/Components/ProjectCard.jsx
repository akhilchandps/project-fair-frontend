import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa6";
function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
       <Card style={{ width: '18rem' }} onClick={handleShow}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-vector/developer-icon-design_24911-26699.jpg?w=740" />
      <Card.Body>
        <Card.Title className='text-center'> Project Title</Card.Title>
      </Card.Body>
    </Card>


    <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className="row">
          <div className="col-6">
            <img src="https://img.freepik.com/premium-vector/developer-icon-design_24911-26699.jpg?w=740" alt="" width={"100%"}/>
          </div>
          <div className="col-6">
            <h4>Project Title</h4>
            <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet incidunt assumenda enim voluptatum culpa quasi omnis voluptates, consectetur impedit facere, tempore quia fugiat magnam repellendus unde officiis doloremque sequi!</p>
            <p>Technologies used: <b>React,Node</b></p>
          </div>
         </div>
        </Modal.Body>
        <Modal.Footer>

          <div >
          <Button variant="dark" className='me-5' >
           <a href=""><SiGithub /></a>
          </Button>
          <Button variant="dark" className='me-5'>
            <a href=""><FaLink /></a>
          </Button>
          <Button variant="secondary"className='me-5' onClick={handleClose}>
            Close
          </Button>
          </div>
    
       
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard