import React, { useEffect, useState } from 'react';
import "./Learnreact.css";
import plus from "../../Assets/Icons/down-chevron.png"
import minus from "../../Assets/Icons/up-chevron.png";
import { useDispatch, useSelector } from 'react-redux';
import { addChapterData, addImageArray, addfillArray, getChapterData, getFillArray, getImageArray} from '../../features/Course/CourseSlice';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import menu from "../../Assets/Icons/icons8-menu-30.png"
import Sidebar from '../../Components/Modals/Sidebarmodal/Sidebar';

export default function Learnreact() {
    const array = [{
        heading:"Week1",
        index:0,
        contents:[{
            contentHeading:"Introduction to html",
            content:{
                description:"In this section you will learn about basic html body",
                summary:"after learning you will be having knowledge about the basic skeleton of html after learning you will be having knowledge about the basic skeleton of html skeleton of html after learning you will be having knowledge about the basic skeleton of html",
                url:[
                    {link:"https://www.youtube.com/watch?v=EFHoH15i4Zg&pp=ygURaHRtbCBpbnRyb2R1Y3Rpb24%3D",about:"hehe"},
                    {link:"https://www.youtube.com/watch?v=MDLn5-zSQQI&pp=ygURaHRtbCBpbnRyb2R1Y3Rpb24%3D",about:"hehe"},
                    {link:"https://www.youtube.com/watch?v=NAEHbzXMNpA&pp=ygURaHRtbCBpbnRyb2R1Y3Rpb24%3D",about:"hehe"}
                ],
                resourceLinks:[
                  "https://www.w3schools.com/html/default.asp",
                  "https://www.w3schools.com/html/default.asp",
                  "https://www.w3schools.com/html/default.asp",
                  "https://www.w3schools.com/html/default.asp",
                  
                ]

            }
        },{contentHeading:"Introduction to html tags",
        content:{
            description:"In this section you will learn about basic html tags",
            summary:"after learning you will be having knowledge about the basic of html tags",
            url:[
              {link:"https://www.youtube.com/watch?v=EFHoH15i4Zg&pp=ygURaHRtbCBpbnRyb2R1Y3Rpb24%3D",about:"hehe"},
              {link:"https://youtu.be/iYueDsR5-Sk",about:"hehe"}
          ]
        }
        }]
    },{
        heading:"Week2",
        index:1,
        contents:[{
            contentHeading:"Introduction to html",
            content:{
                description:"In this section you will learn about basic html tags",
                summary:"after learning you will be having knowledge about the basic skeleton of html",
                url:[
                  {link:"https://www.youtube.com/watch?v=EFHoH15i4Zg&pp=ygURaHRtbCBpbnRyb2R1Y3Rpb24%3D",about:"hehe"},
                  {link:"https://youtu.be/iYueDsR5-Sk",about:"hehe"}
              ]
            }
        },{contentHeading:"Introduction to html tags",
        content:{
            description:"In this section you will learn about basic html body",
            summary:"after learning you will be having knowledge about the basic of html tags",
            url:[
              {link:"https://www.youtube.com/watch?v=EFHoH15i4Zg&pp=ygURaHRtbCBpbnRyb2R1Y3Rpb24%3D",about:"hehe"},
              {link:"https://youtu.be/iYueDsR5-Sk",about:"hehe"}
          ]
        }
        }]
    },{
        heading:"Week3",
        index:2,
        contents:[{
            contentHeading:"Introduction to html",
            content:{
                description:"In this section you will learn about basic html tags",
                summary:"after learning you will be having knowledge about the basic skeleton of html",
                url:[
                  {link:"https://www.youtube.com/watch?v=EFHoH15i4Zg&pp=ygURaHRtbCBpbnRyb2R1Y3Rpb24%3D",about:"hehe"},
                  {link:"https://youtu.be/iYueDsR5-Sk",about:"hehe"}
              ]
            }
        },{contentHeading:"Introduction to html tags",
        content:{
            description:"In this section you will learn about basic html body",
            summary:"after learning you will be having knowledge about the basic of html tags",
            url:[
              {link:"https://www.youtube.com/watch?v=EFHoH15i4Zg&pp=ygURaHRtbCBpbnRyb2R1Y3Rpb24%3D",about:"hehe"},
              {link:"https://youtu.be/iYueDsR5-Sk",about:"hehe"}
          ]
        }
        }]
    }]

    const getfillarr = useSelector(getFillArray);
    const getimagearray = useSelector(getImageArray);
   
    useEffect(()=>{
        for(let i=0;i<array.length;i++){
            dispatch(addfillArray(`weekcontent${i}`));
            dispatch(addImageArray(`icon${i}`))
        }
    },[])
    


    const handleOther = (index) => {
      for (let i = 0; i < getfillarr.length; i++) {
        if (getfillarr[i] !== `weekcontent${index}`) {
          document.getElementById(`${getfillarr[i]}`).style.display = "none";
        }
        else{ 
            document.getElementById(`weekcontent${index}`).style.display = "flex";
        }
      }
      handleImage(index);
    };

    const handleImage = (index) => {
        console.log(getimagearray,"hhhhh")
        for (let i = 0; i < getfillarr.length; i++) {

          if (getimagearray[i] !== `icon${index}`) {
            document.getElementById(`${getimagearray[i]}`).src = plus;
          }
          else{
            
            document.getElementById(`${getimagearray[i]}`).src = minus;
          }
        }
      };

      const handleCurrent = (index) =>{
        document.getElementById(`weekcontent${index}`).style.display = "none";
        document.getElementById(`icon${index}`).src = plus;
      }

      const getchapterdata = useSelector(getChapterData);
      console.log(getchapterdata,"hi")

      const dispatch = useDispatch();


      useEffect(()=>{
        dispatch(addChapterData(array[0].contents[0]));
      },[])
      

      const [showcontent,setShowContent] = useState(true);
      const [url,setURL] = useState(array[0].contents[0].content.url[0].link)
      
      const [videoNumber,setVideoNumber] = useState(0);
      console.log("videonumber",videoNumber)
      const [modal,showModal] = useState(false);

  return (
    <div className="learnReact">
      <Sidebar modal={modal} 
      showModal={showModal} 
      array={array}  
      setShowContent={setShowContent}
      setURL= {setURL}
      setVideoNumber={setVideoNumber} 
      handleOther={handleOther}/>
        <div className='navbar'>
          <img src={menu} style={{width:"30px",height:"30px",cursor:"pointer"}} onClick={()=>{
            showModal(true)
          }}></img>
          <span className="navText"> React</span>
        </div>
        <div className="curriculumSidebar">
            <div className='curriculumSidebarContent'>
               {
                array.map((data,index)=>{
                    return(
                        <>
                        <div className='weekHeader' onClick={()=>{
                            handleOther(index)
                        }}>
                    <span>{data.heading}</span>
                    <img
                    src={plus}
                    style={{height:"20px",width:"20px"}}
                    id={`icon${index}`}  onClick={() =>  {
                        if (
                          document.getElementById(`weekcontent${index}`).style.display ==
                          "none"
                        ) {
                          document.getElementById(`weekcontent${index}`).style.display =
                            "flex";
                          document.getElementById(`icon${index}`).src = minus;
                        } else {
                          document.getElementById(`weekcontent${index}`).style.display =
                            "none";
                          document.getElementById(`icon${index}`).src = plus;
                        }
      
                        handleOther(index);
                      }}></img>
                </div>
                <div className='weekContentDiv' id={`weekcontent${index}`}>
                    {
                        data.contents.map((data,index)=>{
                            return (
                                <div className="weekContent" onClick={()=>{
                                        dispatch(addChapterData(data));
                                        setShowContent(true)
                                        setURL( data?.content?.url[0]?.link)
                                        setVideoNumber(0)
                                }}>{data.contentHeading}
                                </div>
                            )
                        })
                    }
                   

                </div>
                        </>
                    )
                })
               }
                
            </div>
        </div>
               {
                showcontent ? (
                    <div className='curriculumContentDiv'>
                    <span className='contentDescription'>{getchapterdata?.content?.description}</span>
                    <span className='contentSummary'>{getchapterdata?.content?.summary}</span>
                    <div className='videodetailsDiv'>
                    <div className="reactPlayerDiv">
                     <ReactPlayer url={url} width={"100%"} height={"100%"} controls={true}></ReactPlayer>
                    </div>
                    
                    <div className='nextprevButtonDiv'>
                    {getchapterdata?.content?.url[0].link === url ? (
                    <div style={{ height:"50px",display: "flex",width: "100px"}}></div>) 
                    : 
                    (<div className='nextButton' onClick={()=>{
                       setVideoNumber(videoNumber - 1);
                       setURL(videoNumber==0 ? getchapterdata?.content?.url[videoNumber].link : getchapterdata?.content?.url[videoNumber - 1].link)
                      }}>Prev</div>
                    )}
                    {
                      getchapterdata?.content?.url[getchapterdata?.content?.url.length - 1].link === url ? (
                      <div style={{ height:"50px",
                        display: "flex",
                        width: "100px"}}>  
                      </div>)
                      :
                      (<div className='nextButton' onClick={()=>{
                        setVideoNumber(videoNumber + 1)
                        setURL(getchapterdata?.content?.url[videoNumber + 1].link)
                      }}>Next</div>)
                    }
                        
                       
                    </div>
                    </div>
                   <div className='resourceLinksDiv'>
                    Resource Links:
                    {
                      getchapterdata?.content?.resourceLinks?.map((data,index)=>{
                        return (

                          <a href={data} style={{color:"white",width:"50%"}}>{index + 1}. {data}
                          </a>
                        )
                      })
                    }
                   </div>
                    
                    
             </div>
                ):( 
                    <div className='curriculumContentDiv'>  
                    <span className='contentDescriptionWelcome'>Welcome To react tutorial
                    </span>
                    <span className='modulelearningText'>Before starting react You will learn about Javascript programming.</span>
                    <span className='modulelearningText'>Build powerful, fast, user-friendly and reactive web apps</span> 
                    <span className='modulelearningText'>Provide amazing user experiences by leveraging the power of JavaScript with React</span>
                    <span className='modulelearningText'>Build multiple demo projects & explore realistic examplesFollow along locally</span>
                    <span className='modulelearningText'>Learn about React Hooks and React Components</span>
                    <span className='modulelearningText'>Build standalone React apps & applications connected to a backend via HTTP</span>
                    <span className='modulelearningText'>Learn about routing & route-related data fetching with React Router</span>





                    </div>
                )
               }
       

      
    </div>
  )
}
