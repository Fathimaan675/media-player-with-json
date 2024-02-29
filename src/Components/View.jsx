import React, { useEffect,useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './Videocard'
import { getAllVideosAPI, getSingleCategoryAPI,updateCategoryAPI } from '../services/allAPI'



function View({uploadVideoResponse,setRemoveCategoryVideoResponse}) {

  const [allVideos,setAllVideos] = useState()
  const [deleteVideoResponse,setDeleteVideoResponse] = useState("")

  const getAllVideos = async ()=>{
    const result = await getAllVideosAPI()
    // console.log(result);
    if(result?.status==200){
      setAllVideos(result?.data);
    }
  }

  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse,deleteVideoResponse])

  // console.log(allVideos);
  const dragOverView=(e)=>{
    e.preventDefault()
  }
 const handleCategoryVideo=async(e)=>{
  const {videoId,categoryId}=JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
  console.log(`remove video id:${videoId}from categoryid:${categoryId}`);

//g et a category
 const {data}=await getSingleCategoryAPI(categoryId)
 const updatedCategoryList=data.allVideos.filter(item=>item.id!=videoId)
 console.log(updatedCategoryList);
 const {id,categoryName}=data
  const result=  await updateCategoryAPI(categoryId,{id,categoryName,allVideos:updatedCategoryList}) 
  setRemoveCategoryVideoResponse(result.data)
}

  return (
    <>
    <Row droppable="true" onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}>
        { allVideos?.length>0? allVideos?.map((video,index)=>(
          <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
            <VideoCard displayData={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
        </Col>
        ))
         :
         <div className='text-denger fw-bolder'>No Videos are uploaded yet!!! </div> 
         }
    </Row>
    </>
  )
}

export default View