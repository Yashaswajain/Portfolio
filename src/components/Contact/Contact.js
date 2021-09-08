import React,{useState}from 'react'
import './Contact.css'
import contactImg from './../../images/contact.PNG'
import complete from './../../images/complete.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Avatar} from '@material-ui/core'

function Contact() {
    const [message,setMessage]=useState()
    const [email,setEmail]=useState()
    const [name,setName]=useState()
    const handleSubmit=(e)=>{
         e.preventDefault()
         document.querySelector(".submitButton").style.display="none"
         setTimeout(()=>{document.querySelector(".complete").style.display="block"},1000)
         
    }
    return (
        <div className="contact" id="contact">
        <div className="leftContact">
        <img src={contactImg} className="contactImg"></img>
        <h4>Let's connect to share ideas... :)</h4>
        <hr></hr>
        <div className="socialIcons">
        <a href="https://www.instagram.com/could_i_be_anymore_yashaswa/" target="_blank" className="instagram"><InstagramIcon></InstagramIcon></a>
        <a href="https://twitter.com/YashaswaJ" target="_blank" className="twitter"><TwitterIcon></TwitterIcon></a>
        <a href="https://www.linkedin.com/in/yashaswa-jain-985093173/" target="_blank" className="linkedin"><LinkedInIcon></LinkedInIcon></a>
        <a href="https://github.com/Yashaswajain" target="_blank" className="github"><GitHubIcon></GitHubIcon></a>
        </div>
        </div>
        <div className="middleContact">
             <h1>OR</h1>
        </div>
        <form className="rightContact" onSubmit={handleSubmit}>
        <input type="text" required className="input Name" placeholder="Name"></input>
        <input type="email" required className="input Email" placeholder="Email"></input>
        <textarea placeholder="Message..." className="input Message"></textarea>
        <button type="submit" className="submitButton">Send</button>
        <Avatar className="complete" src={complete}></Avatar>
        </form>
            
            
        </div>
    )
}

export default Contact
