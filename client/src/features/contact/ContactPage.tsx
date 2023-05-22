import { Col, Container, Row } from "react-bootstrap";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BusinessIcon from '@mui/icons-material/Business';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function ContactPage() {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <div className='home-container'>
                        <p className="h1">Contact us</p>
                    </div>
                </Col>
            </Row>
            <div className="contact-container"></div>
            <div className="con-name">
                <AccountCircleIcon />
                <p>Bothniabladet</p>
            </div>
            <div className="con-email">
                <AlternateEmailIcon />
                <p>info@bothniabladet.com</p>
            </div>
            <div className="con-phone">
                <PhoneIphoneIcon />
                <p>0712 34 56 78</p>
            </div>
            <div className="con-address">
                <BusinessIcon />
                <p>Newsgate 12 | 500 00 | News Town</p>
            </div>
            
        </Container>
    )
}