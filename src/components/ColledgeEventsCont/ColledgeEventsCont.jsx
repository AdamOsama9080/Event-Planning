import React from 'react';
import ColledgeEventCard from '../ColledgeEventCard/ColledgeEventCard';
import { Container, Row } from "react-bootstrap";

const ColledgeEventsCont = () => {
    let numOfCards = [1,2,3,4,5,6,7,8,9,10,11,12];   
    return (
        <div className="bg-light p-3" >
                        <Container>
            <Row className="g-3" style={{justifyContent:"center"}}>
                {
                    numOfCards.map((el)=>{
                        return(
                            <ColledgeEventCard key={el}></ColledgeEventCard>
                        )
                    })
                }
            </Row>
        </Container>
        </div>

    );
}

export default ColledgeEventsCont;
