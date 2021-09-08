import React from 'react'
import './Work.css'
import t1 from './../../Portfolio material/Tshirt/t1.png'
import t2 from './../../Portfolio material/Tshirt/t2.png'
import t3 from './../../Portfolio material/Tshirt/t3.png'
import t4 from './../../Portfolio material/Tshirt/t4.png'
import t5 from './../../Portfolio material/Tshirt/t5.png'
import l1 from './../../Portfolio material/Logo/l1.png'
import l2 from './../../Portfolio material/Logo/l2.png'
import l3 from './../../Portfolio material/Logo/l3.png'
import l4 from './../../Portfolio material/Logo/l4.png'
import l5 from './../../Portfolio material/Logo/l5.png'
import sortingVisual from './../../images/sortingVisual.jpg'
import Insta from './../../images/insta.jpg'
import Card from './ProjectCard'
import Covid from './../../images/covid.jpg'
import GoogleKeep from './../../images/GoogleKeep.jpg'
function Work() {
    
    return (
        <div className="work" id="work">
            <div className="switchButtons">
                <button type="button" className="projects" 
                onClick={()=>{document.querySelector(".projectContainer").style.display="block"
                document.querySelector(".tsContainer").style.display="none"
                document.querySelector(".logoContainer").style.display="none"
                document.querySelector(".tshirt").style.borderColor="#c40866"
                document.querySelector(".logo").style.borderColor="#c40866"
                document.querySelector(".projects").style.borderColor="blue"
                }}>Projects</button>

                <button type="button" className="logo" 
                onClick={()=>{document.querySelector(".logoContainer").style.display="block"
                document.querySelector(".tsContainer").style.display="none"
                document.querySelector(".projectContainer").style.display="none"
                document.querySelector(".tshirt").style.borderColor="#c40866"
                document.querySelector(".logo").style.borderColor="blue"
                document.querySelector(".projects").style.borderColor="#c40866"}}>Logo Designs</button>

                <button type="button" className="tshirt" 
                onClick={()=>{document.querySelector(".tsContainer").style.display="block"
                document.querySelector(".projectContainer").style.display="none"
                document.querySelector(".logoContainer").style.display="none"
                document.querySelector(".tshirt").style.borderColor="blue"
                document.querySelector(".logo").style.borderColor="#c40866"
                document.querySelector(".projects").style.borderColor="#c40866"}}>T-shirt Designs</button>
            </div>

            <div className="projectContainer">
            <div className="upper">
            <Card title="Sorting Visualizer" live="https://a3dwotnnjmqvyqlxs80olq-on.drv.tw/sorting_visualizer-/show.html" 
            code="https://github.com/Yashaswajain/sorting_visualizer-" image={sortingVisual} colorName="white"></Card>
            <Card title="Instagram Clone" live="https://github.com/Yashaswajain/INSTRAGRAM-CLONE" 
            code="https://github.com/Yashaswajain/INSTRAGRAM-CLONE" image={Insta}></Card>
            <Card title="Covid-19 Tracker" live="https://github.com/Yashaswajain/Covid-19-Live-Tracker" 
            code="https://github.com/Yashaswajain/Covid-19-Live-Tracker" image={Covid} colorName="white"></Card>
            <Card title="Google Keep Clone" live="https://a3dwotnnjmqvyqlxs80olq-on.drv.tw/GOOGLE%20KEEP%20CLONE/" 
            code="https://github.com/Yashaswajain/GOOGLE-KEEP-CLONE" image={GoogleKeep}></Card>
            </div>
            </div>
            <div className="logoContainer">
            <img src={l1}></img>
            <img src={l2}></img>
            <img src={l3}></img>
            <img src={l4}></img>
            <img src={l5}></img>
            </div>
            <div className="tsContainer">
            <img src={t1}></img>
            <img src={t2}></img>
            <img src={t3}></img>
            <img src={t4}></img>
            <img src={t5}></img>
            </div>
        </div>
    )
}

export default Work
