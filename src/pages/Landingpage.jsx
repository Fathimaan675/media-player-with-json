import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landingpage() {
  const navigate=useNavigate()
  const handleNavigate= ()=>{
    navigate('/home')
  }
  return (
   <>
   <div className='container mt-5'>
    <div className="header row align-items-center">
            <div className="col-lg-5"><h3>Welcome to <br /><span className='text-warning'> media player</span></h3> 
            <p style={{textAlign:'justify'}} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti animi in quibusdam exercitationem harum voluptates eveniet fugit recusandae eaque sit dicta, laudantium praesentium cupiditate obcaecati quae explicabo ipsum laborum at.</p>
            <button className='btn btn-info'onClick={handleNavigate} >Get started</button>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="" />
            </div>
      </div>
    <div className="features">
      <h3 className="text-center">Features</h3>
     <div className="row">
      <div className="col-lg-4">
      <Card >
      <Card.Img variant="top" src="https://cdn.pixabay.com/animation/2023/06/13/15/13/15-13-46-857_512.gif" />
      <Card.Body>
        <Card.Title>Managing video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
      <div className="col-lg-4">
      <Card>
      <Card.Img variant="top" src="https://i.gifer.com/Up2T.gif" />
      <Card.Body>
        <Card.Title>Categorize videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
  
      </Card.Body>
    </Card>
      </div>
      <div className="col-lg-4">
      <Card >
      <Card.Img variant="top" src="https://i.gifer.com/origin/9d/9dc2aec2fb4b0948a9a2675606ff5f75_w200.gif" />
      <Card.Body>
        <Card.Title>watch history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
      </div>
     </div>
    </div>
    <div className="row videos border p-5 mt-5 rounded">
      <div className="col-lg-5">
        <h3 className='text-warning'>Simple,fast and powerful</h3>
        <p style={{textAlign:'justify'}}><span className='fs-4' > play everything:</span> Some quick example text to build on the card title and make up the
          bulk of the card's content. </p>
          <p style={{textAlign:'justify'}}><span className='fs-4' > categorized video:</span> Some quick example text to build on the card title and make up the
          bulk of the card's content. </p>
          <p style={{textAlign:'justify'}}><span className='fs-4' > play everything:</span> Some quick example text to build on the card title and make up the
          bulk of the card's content. </p>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-6"> 
      <iframe width="875" height="366" src="https://www.youtube.com/embed/ZdMZ40GSVmc" title="Leo - Badass Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
   </div>
   </>
  )
}

export default Landingpage