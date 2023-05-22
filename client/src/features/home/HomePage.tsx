import { Button, Col, Container, Row } from "react-bootstrap";

export default function HomePage() {
    
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                <div className='home-container'>
                 <p className="h1">Bothniabladet</p>
                <blockquote className="blockquote">
                    <p>The news magazine for your relevant news</p>
                </blockquote>
                <Button className="tipsa-btn"variant="primary">Send us tips</Button>{' '}
                </div>
                </Col>
            </Row>
            <img className="home-pic" src="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Home pic"></img>
        </Container>
    );
}