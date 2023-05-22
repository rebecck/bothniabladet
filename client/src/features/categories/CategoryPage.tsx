import { useEffect, useState } from "react";
import { Category } from "../../app/models/category";
import agent from "../../app/api/agent";
import CategoryCard from "./Card";
import { Grid } from "@mui/material";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function CategoryPage() {

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        agent.Category.list().then(categories => setCategories(categories))
    }, [])

    return (
        <>
            
            <Container className="category-grid">
                <div className="cat-header">
                    <h1>Categories</h1>
                    <Button className="addCat-btn" href="#">Add Category</Button>
                </div>
            
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row xs={1} md={4} className="g-4 card-row">
                {categories.map(category => (
                    <Col>
                    <CategoryCard key={category.id} title={category.name}/>
                    </Col>
                ))}
            </Row>
        </Container>
        </>
        








        
    )

        
            
        



    //const [categories, setCategories] = useState<Category[]>([]);

    /*useEffect(() => {
        fetch('http://localhost:5000/api/images')
        .then(response => response.json())
        .then(data => setCategories(data))
      }, []) // avoid infinity loop 

    return (
        <div>
            Category Page
        </div>
    )*/
}