import React from 'react'
import { Link } from 'react-router-dom'

function Mfooter() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
 <div  className="footer-content d-flex justify-content-between">
            <div style={{width:'400px'}}className="media"><h5><i className="fa-solid fa-cloud-arrow-up"></i>Media player</h5>
            <p style={{textAlign:'justify'}}>cvf vdsfg dsfg sdfgfhgf vgbhnj  dghd dferh ert6y drftgyfathimeas dwerfvrf ewirhr hrer</p>
            <span>code licenced MIT,docs</span>
            </div>
    <div  className="links d-flex flex-column">
        
        <h5>Links</h5>
        <Link to={'/'}style={{textDecoration:'none',color:'white'}}>Landing page</Link>
        <Link to={'/home'}style={{textDecoration:'none',color:'white'}}>home page</Link>
        <Link to={'/watch'}style={{textDecoration:'none',color:'white'}}>watch history</Link>
        </div>
    <div className="guides d-flex flex-column">
        <h5>guides</h5>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
        <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration:'none',color:'white'}}>ReactRouting</a>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
        </div>
        <div className="contact">
                <h5>Contact Us</h5>
                <div className='d-flex'>
                    <input type="text" className='form-control me-1' placeholder='Email Id Please' />
                    <button className='btn btn-info'><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className='icons d-flex justify-content-between mt-3'>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i class="fa-brands fa-twitter"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i class="fa-brands fa-twitter"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i class="fa-brands fa-twitter"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i class="fa-brands fa-twitter"></i></a>
                    <a href="http://react.dev/" target='_blank' style={{textDecoration: 'none',color: 'white'}}><i class="fa-brands fa-twitter"></i></a>
                </div>
            </div>
 </div>
 <p className='text-center mt-5'>copyright @copy; 2024 media player. built with React</p>
    </div>
  )
}

export default Mfooter