import React from 'react'
import './About.css'
import {Avatar} from '@material-ui/core'
import C from './../../images/c.png'
import CPP from './../../images/cpp.png'
import HTML from './../../images/html.png'
import CSS from './../../images/css.png'

import EXPRESS from './../../images/express.png'

import MySQL from './../../images/mysql.png'
import Github from './../../images/github.png'
import Photoshop from './../../images/photoshop.png'
import Javascript from './../../images/javascript.png'
import Inkscape from './../../images/inkscape.png'
import REACT from './../../images/react.png'
import Node from './../../images/node.png'
import MONGODB from './../../images/mongo.png'
import SQL from './../../images/sql.png'
function About() {
    return (
        <div className="about" id="about">
        <img src={C} className="partOfSkill" id="c"></img>
        <img src={CPP} className="partOfSkill" id="cpp"></img>
        <img src={HTML} className="partOfSkill" id="html"></img>
        <img src={CSS} className="partOfSkill" id="css"></img>
        <img src={EXPRESS} className="partOfSkill" id="express"></img>
        <img src={MySQL} className="partOfSkill" id="mysql"></img>
        <img src={Github} className="partOfSkill" id="github"></img>
        <img src={Photoshop} className="partOfSkill" id="photoshop"></img>
        <img src={Inkscape} className="partOfSkill" id="inkscape"></img>
        <img src={Javascript} className="partOfSkill" id="js"></img>
        <img src={REACT} className="partOfSkill" id="react"></img>
        <img src={Node} className="partOfSkill" id="node"></img>
        <img src={MONGODB} className="partOfSkill" id="mongo"></img>
        <img src={SQL} className="partOfSkill" id="sql"></img>
        
        </div>
    )
}

export default About
