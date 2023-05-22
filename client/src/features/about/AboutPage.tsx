import { Button, Col, Container, Row } from "react-bootstrap";

export default function AboutPage() {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <div className='home-container'>
                        <p className="h1">About us</p>
                        <blockquote className="blockquote">
                            <p>Knowledge is power, and in the realm of news, it is our responsibility to empower minds. With unwavering dedication, we illuminate the world, one headline at a time. Together, let us shape perspectives, spark conversations, and inspire change. For in the realm of news, every word has the potential to reshape the course of history.</p>
                        </blockquote>
                    </div>
                </Col>
            </Row>
            <Row xs={1} sm ={1} md={1} lg={2}>
                <Col>
                    <img className="about-pic" src="https://images.unsplash.com/photo-1592036160420-8e862f871b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Home pic"></img>
                </Col>
                <Col>
                    <p>Bothniabladet first started... </p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nam, voluptatem, dicta fuga impedit placeat consequuntur cumque natus mollitia tempore nemo ullam accusantium dolorum, vitae ipsum sit quam delectus illo?
                    Odit excepturi cumque amet dolore fuga debitis, sapiente soluta aliquam quis voluptas tenetur quas modi obcaecati magnam ex.  <br /> <br />Distinctio facilis voluptatibus, et iure a recusandae repellendus nemo excepturi deleniti similique veniam.
                    Aspernatur temporibus odio dicta, maxime ullam consequuntur provident voluptates odit quae quidem dolorum rem repudiandae assumenda, quia natus mollitia itaque non soluta quaerat minima? Debitis obcaecati neque maxime quis. Architecto!
                    Consectetur ipsum voluptates vitae sit minima excepturi ut porro! Veritatis nesciunt quod architecto quae ea modi in hic id laborum dolor consequatur dolore sit nam ipsa harum, laudantium quis explicabo.</p>
                </Col>
            </Row>
        </Container>
    );
}