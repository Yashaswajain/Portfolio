import React,{useState}from 'react'
import './Navbar.css'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
function Navbar() {
    const [flag,setFlag]=useState(true)
    const toggle=()=>{
        if(flag){
            document.querySelector(".hiddenOptions").style.display="flex"
            document.querySelector(".hamburger2").style.display="block"
            document.querySelector(".hamburger").style.display="none"
            setFlag(false)
        }else{
            document.querySelector(".hiddenOptions").style.display="none"
            document.querySelector(".hamburger2").style.display="none"
            document.querySelector(".hamburger").style.display="block"
            setFlag(true)
        }
    }
    return (
        <div className="navbar">
        <div className="leftNavbar">
            <span className="whiteleftNavbar">P</span>
            <span className="whiteleftNavbar">o</span>
            <span className="whiteleftNavbar">r</span>
            <span className="whiteleftNavbar">t</span>
            <span className="pinkleftNavbar">f</span>
            <span className="pinkleftNavbar">o</span>
            <span className="pinkleftNavbar">l</span>
            <span className="pinkleftNavbar">i</span>
            <span className="pinkleftNavbar">o</span>
            <a href="https://drive.google.com/file/d/1F1q0grPu4oL6p3IVqJU_px65LR-GE8OM/view?usp=sharing"
            className="resume" target="_blank">Resume</a>
        </div>
        <ul className="listItems">
            <li><a href="#home">.home()</a></li>
            <li><a href="#about">.skills()</a></li>
            <li><a href="#work">.work()</a></li>
            <li><a href="#contact">.contact()</a></li>
        </ul>
        <button className="hamburger" onClick={toggle}><MenuIcon></MenuIcon></button>
        <button className="hamburger2" onClick={toggle}><MenuOpenIcon></MenuOpenIcon></button>
        <div className="hiddenOptions">
        
            <a href="#home">.home()</a>
            <a href="#about">.skills()</a>
            <a href="#work">.work()</a>
            <a href="#contact">.contact()</a>
        
        </div>
        
        </div>
    )
}

export default Navbar
