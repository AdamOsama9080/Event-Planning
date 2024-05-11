import { Col } from "react-bootstrap";


function SocialLogos ({logo}) {
   
        return (
            <>
                <Col xs={12} md={6} lg={3}>
                    <img src={logo} style={{width:"10rem"}} height={100}/>
                </Col>
            </>

        );
    
}

export default SocialLogos;