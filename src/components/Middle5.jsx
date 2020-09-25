import React from 'react'
import Carousel from "react-elastic-carousel";
import Item from "./Item.jsx";
import { Card, Button } from "react-bootstrap";
import attend1 from "./assets/attend1.png";
import attend2 from "./assets/attend2.png";
import style from './css/Middle4.module.css'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

const Middle5 = () => {
    return (
        <>
        <div className="carou">
        <br />
        <br />
        <span className="badge badge-success text-success">********</span>
        <br />
        <br />
        <h3 className={style.heading}>What are the Post-Class Assignments?</h3>
        <br />
        <Carousel breakPoints={breakPoints}>
          <Item>
            <Card style={{ width: "18rem",borderRadius:'10px',boxShadow: '2px 2px 8px #6997A1'}} >
              <Card.Img variant="top" src={attend1} className={style.img} />
              <Card.Body>
                <Card.Title>STEP 1</Card.Title>
              </Card.Body>
            </Card>
          </Item>
          <Item>
          <Card style={{ width: "18rem",borderRadius:'10px',boxShadow: '2px 2px 8px #6997A1'}}>
              <Card.Img variant="top" src={attend2} />
              <Card.Body>
                <Card.Title>STEP 2</Card.Title>
              </Card.Body>
            </Card>
          </Item>

          <Item>
          <Card style={{ width: "18rem",borderRadius:'10px',boxShadow: '2px 2px 8px #6997A1'}}>
              <Card.Img variant="top" src={attend1} />
              <Card.Body>
                <Card.Title>STEP 3</Card.Title>
              </Card.Body>
            </Card>
          </Item>

          <Item>
          <Card style={{ width: "18rem",borderRadius:'10px',boxShadow: '2px 2px 8px #6997A1'}}>
              <Card.Img variant="top" src={attend2} />
              <Card.Body>
                <Card.Title>STEP 4</Card.Title>
              </Card.Body>
            </Card>
          </Item>
        </Carousel>
      </div>
        </>
    )
}

export default Middle5
