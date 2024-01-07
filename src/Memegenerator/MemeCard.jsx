import React from "react";
import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { ClassNames } from "@emotion/react";

const MemeCard=(props)=>{

const navigate = useNavigate();


    return (
        <>
 <Card style={{width: '12rem',height:'15rem',alignItems:"center",margin:"6rem 1rem",boxShadow:'2px 2px 20px 2px' }  }>

      <Card.Img variant="top"   src={props.img}  style={{width:'10rem',height:'10rem'}} />
      <Card.Body >
        <Card.Title style={{fontSize:"15px",margin:'1px',width:'auto'}}>{props.title}</Card.Title>
        
        <Button style={{fontSize:"10px",margin:'1px'}} variant="primary" onClick ={(e) => navigate(`/edit?url=${props.img}`)}> Edit </Button>
      </Card.Body>
    </Card>
        </>
    )
}
export default MemeCard;