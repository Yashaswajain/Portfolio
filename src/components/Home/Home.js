import React,{useEffect,useRef} from 'react'
import './Home.css'
import { Avatar } from '@material-ui/core'
import { init } from 'ityped'
import img from './../../images/programmer.jpeg'
function Home() {
    const textRef=useRef()
    useEffect(()=>{
        init(textRef.current, { showCursor: false, strings: ['Frontend Developer', 'Backend Developer','Logo Designer','T-shirt Designer' ] })
    },[])
    return (
        <div className="home" id="home">
            <div className="blurredBox">
                <Avatar src={img}></Avatar>
                <h1 className="greeting">Hi there, I'm</h1>
                <span className="myName">
                    <span style={{color:"#4885ed"}}>Y</span>
                    <span style={{color:"#db3236"}}>a</span>
                    <span style={{color:"#f4c20d"}}>s</span>
                    <span style={{color:"#4885ed"}}>h</span>
                    <span style={{color:"#3cba54"}}>a</span>
                    <span style={{color:"#db3236"}}>s</span>
                    <span style={{color:"#f4c20d"}}>w</span>
                    <span style={{color:"#4885ed"}}>a</span>
                    <span style={{color:"#3cba54"}}>  </span>
                    <span style={{color:"#3cba54"}}>J</span>
                    <span style={{color:"#db3236"}}>a</span>
                    <span style={{color:"#f4c20d"}}>i</span>
                    <span style={{color:"#4885ed"}}>n</span>
                </span>
                <h1 className="skillHead">I am a <span ref={textRef} className="skills"></span></h1>
                <h1 className="interests"><span style={{color:"#034efc"}}>const</span> <span style={{color:"#67b0f5"}}>my_interests</span> = [<span style={{color:"#99421a"}}> "Travelling" , "Singing" , "Guitar" , "Book Reading" , "Stocks" </span>]</h1>
            </div>
        </div>
    )
}

export default Home
