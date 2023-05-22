import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface Props {
  title: string,
}

function CategoryCard({ title }: Props) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1548504769-900b70ed122e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button variant="primary">Visit</Button>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;