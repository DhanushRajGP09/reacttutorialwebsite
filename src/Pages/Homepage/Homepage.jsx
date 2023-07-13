import React from 'react';
import "./Homepage.css"
import { useNavigate } from 'react-router';

export default function Homepage() {
    const navigate = useNavigate()
  return (
    <div className='Homepage'>
       
        <div className="homepageSelectionComponent">
            <div className="veryBasicDiv">
                <span className='veryBasicDescription'>
                    If you are new to Frontend development without the knowledge of HTML and CSS. Start your learning here.

                </span>
                <button className='beginHTML' onClick={()=>{
                    navigate("/learnhtmlandcss")
                }}><span>BEGIN HTML&CSS</span> </button>
            </div>
            <div className="veryBasicDiv">
            <span className='veryBasicDescription'>
                   If you have completed learning HTML and CSS. You can Start Your React journey here.

                </span>
                <button className='beginHTML' onClick={()=>{
                    navigate("/learnreact")
                }}><span>LEARN REACT</span> </button>
            </div>
        </div>
      
    </div>
  )
}
