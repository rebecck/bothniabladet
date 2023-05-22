import { useState } from "react";
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import SearchIcon from '@mui/icons-material/Search';
import agent from "../../app/api/agent";
import ImageResultTable from "./ImageResultTable";

export default function() {

    const [searchTerm, setSearchTerm] = useState('');
    const [images, setImages] = useState([]);

    const handleSearch = () => {
        // search logic will go here?

        const fetchData = async () => {
            try {
              const fetchedimages = await agent.ImageCatalog.list( searchTerm );
              setImages(fetchedimages);
            } catch (error) {
              // Handle error case
              console.error('Failed to fetch images', error);
            }
          };
        
          fetchData();


    }

    return (
        <Container className="search-grid">
            <Row className="search-row">
                <Col xs={8} md={6} lg={8}>
                    <InputGroup size="lg">
                        <InputGroup.Text id="inputGroup-sizing-lg"> <SearchIcon /> </InputGroup.Text>
                        <Form.Control
                        aria-label="Large"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder="Search.."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </InputGroup>
                </Col>
                <Col>
                <Button onClick={handleSearch} className="search-btn" variant="success">Search</Button>{' '}
                {/* <Button className="search-btn" type="submit">Search</Button>{' '} */}
                </Col>
            </Row>
            <Row>
                <ImageResultTable images={images} />
            </Row>
        </Container>
    )
}

/*
<Form onSubmit={handleSearch}>
            <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
             />
            <Button type="submit" variant="outline-primary">Search</Button>
        </Form>
*/