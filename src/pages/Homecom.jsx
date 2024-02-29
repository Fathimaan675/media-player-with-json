import React, { useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import Category from '../Components/Acategory'
import View from '../Components/View'

function Homecom() {
  const[RemoveCategoryVideoResponse,setRemoveCategoryVideoResponse]=useState("")
  const [uploadVideoResponse,setUploadVideoResponse] = useState("")
  return (
    <>
    <div className="container mt-5 d-flex justify-content-between">
      <Add setUploadVideoResponse = {setUploadVideoResponse}/>
      <Link to={'/watch'}>View History</Link>
    </div>
    <div className="container-fluid mt-5 mb-5 row">
      <div className="col-lg-6">
        <h3>All Videos</h3>
        <View uploadVideoResponse = {uploadVideoResponse} setRemoveCategoryVideoResponse={setRemoveCategoryVideoResponse}/>
      </div>
      <div className="col-lg-6">
          <Category RemoveCategoryVideoResponse={RemoveCategoryVideoResponse}/>
      </div>
    </div>
    </>
  )
}


export default Homecom