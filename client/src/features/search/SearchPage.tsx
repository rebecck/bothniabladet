import { Container } from "react-bootstrap";
import SearchField from "./SearchField";

export default function SearchPage() {
    return (
        <Container className="search-container">
            <h1 className="search-h1">Search</h1>
            <SearchField />
        </Container>
    )
}