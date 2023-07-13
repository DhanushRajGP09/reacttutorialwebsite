import React, { useEffect } from 'react'
import "./Sidebar.css"
import plus from "../../../Assets/Icons/down-chevron.png"
import minus from "../../../Assets/Icons/up-chevron.png";
import { useDispatch, useSelector } from 'react-redux';
import { addChapterData, addImageArray, addfillArray, getFillArray, getImageArray } from '../../../features/Course/CourseSlice';
import closemodal from "../../../Assets/Icons/close.png";

export default function Sidebar({modal,showModal,array,setShowContent,
    setURL,
    setVideoNumber}) {
    const dispatch = useDispatch();
    const getfillarr = useSelector(getFillArray);
    const getimagearray = useSelector(getImageArray);
   
    useEffect(()=>{
        for(let i=0;i<array.length;i++){
            dispatch(addfillArray(`weekcontentmobile${i}`));
            dispatch(addImageArray(`iconmobile${i}`))
        }
    },[])

    const handleOther = (index) => {
        for (let i = 0; i < getfillarr.length; i++) {
          if (getfillarr[i] !== `weekcontentmobile${index}`) {
            document.getElementById(`${getfillarr[i]}`).style.display = "none";
          }
          else{ 
              document.getElementById(`weekcontentmobile${index}`).style.display = "flex";
          }
        }
        handleImage(index);
      };
  
      const handleImage = (index) => {
          console.log(getimagearray,"hhhhh")
          for (let i = 0; i < getfillarr.length; i++) {
  
            if (getimagearray[i] !== `iconmobile${index}`) {
              document.getElementById(`${getimagearray[i]}`).src = plus;
            }
            else{
              
              document.getElementById(`${getimagearray[i]}`).src = minus;
            }
          }
        };

  return (
    <div>
      <div
        className="createTestmodal"
        style={{ display: modal ? "flex" : "none" }}
      >
        <div className="createTestoverlay">
          <div className="createTestmodal-content">
            
            <div className="createTestmodal-inner-content">
                <img src={closemodal} style={{height:"25px",width:"25px",marginTop:"2%",marginLeft:"90%"}} onClick={()=>{
                    showModal(false)
                }}></img>
            <div className="mobileSidebar">
            <div className='mobilecurriculumSidebarContent'>
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
                    id={`iconmobile${index}`}  onClick={() =>  {
                        if (
                          document.getElementById(`weekcontentmobile${index}`).style.display ==
                          "none"
                        ) {
                          document.getElementById(`weekcontentmobile${index}`).style.display =
                            "flex";
                          document.getElementById(`iconmobile${index}`).src = minus;
                        } else {
                          document.getElementById(`weekcontentmobile${index}`).style.display =
                            "none";
                          document.getElementById(`iconmobile${index}`).src = plus;
                        }
      
                        handleOther(index);
                      }}></img>
                </div>
                <div className='weekContentDiv' id={`weekcontentmobile${index}`}>
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
             
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
