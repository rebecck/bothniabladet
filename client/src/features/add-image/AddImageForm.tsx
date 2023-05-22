import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';

const AddImageForm = () => {
  const [formData, setFormData] = useState({
    ImgName: '',
    FilePath: '',
    Description: '',
    Longitude: 0,
    Latitude: 0,
    IsExtern: false,
    PublicationLimit: 0,
    TimesPublicated: 0,
    Width: 0,
    Height: 0,
    FileSizeKB: 0,
    Resolution: 0,
    Camera: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform your form submission or API call here using the formData state
    console.log(formData);
    // Reset the form
    setFormData({
      ImgName: '',
      FilePath: '',
      Description: '',
      Longitude: 0,
      Latitude: 0,
      IsExtern: false,
      PublicationLimit: 0,
      TimesPublicated: 0,
      Width: 0,
      Height: 0,
      FileSizeKB: 0,
      Resolution: 0,
      Camera: ''
    });
  };

  return (
    <Container className="add-container">
        <h1>Upload Image</h1>
        <Form onSubmit={handleSubmit} className="add-form">
        <Row>
            <Col md={6}>
            <Form.Group controlId="formImgName">
                <Form.Label>Image Name</Form.Label>
                <Form.Control
                type="text"
                name="ImgName"
                value={formData.ImgName}
                onChange={handleChange}
                required
                />
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group controlId="formFilePath">
                <Form.Label>File Path</Form.Label>
                <Form.Control
                type="text"
                name="FilePath"
                value={formData.FilePath}
                onChange={handleChange}
                required
                />
            </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col md={6}>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                as="textarea"
                rows={3}
                name="Description"
                value={formData.Description}
                onChange={handleChange}
                required
                />
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group controlId="formLongitude">
                <Form.Label>Longitude</Form.Label>
                <Form.Control
                type="number"
                name="Longitude"
                value={formData.Longitude}
                onChange={handleChange}
                required
                />
            </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col md={6}>
            <Form.Group controlId="formLatitude">
                <Form.Label>Latitude</Form.Label>
                <Form.Control
                type="number"
                name="Latitude"
                value={formData.Latitude}
                onChange={handleChange}
                required
                />
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group controlId="formIsExtern">
                <Form.Check
                type="checkbox"
                label="Is External"
                name="IsExtern"
                checked={formData.IsExtern}
                onChange={(e) =>
                    setFormData({ ...formData, IsExtern: e.target.checked })
                }
                />
            </Form.Group>
            </Col>
        </Row>

        {/* Add more form controls for the remaining properties */}
        
        <Row>
            <Col md={6}>
            <Form.Group controlId="formPublicationLimit">
                <Form.Label>Publication Limit</Form.Label>
                <Form.Control
                type="number"
                name="PublicationLimit"
                value={formData.PublicationLimit}
                onChange={handleChange}
                required
                />
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group controlId="formTimesPublicated">
                <Form.Label>Times Publicated</Form.Label>
                <Form.Control
                type="number"
                name="TimesPublicated"
                value={formData.TimesPublicated}
                onChange={handleChange}
                required
                />
            </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col md={6}>
            <Form.Group controlId="formWidth">
                <Form.Label>Width</Form.Label>
                <Form.Control
                type="number"
                name="Width"
                value={formData.Width}
                onChange={handleChange}
                required
                />
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group controlId="formHeight">
                <Form.Label>Height</Form.Label>
                <Form.Control
                type="number"
                name="Height"
                value={formData.Height}
                onChange={handleChange}
                required
                />
            </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col md={6}>
            <Form.Group controlId="formFileSizeKB">
                <Form.Label>File Size (KB)</Form.Label>
                <Form.Control
                type="number"
                name="FileSizeKB"
                value={formData.FileSizeKB}
                onChange={handleChange}
                required
                />
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group controlId="formResolution">
                <Form.Label>Resolution</Form.Label>
                <Form.Control
                type="number"
                name="Resolution"
                value={formData.Resolution}
                onChange={handleChange}
                required
                />
            </Form.Group>
            </Col>
        </Row>

        <Row>
            <Col md={6}>
            <Form.Group controlId="formCamera">
                <Form.Label>Camera</Form.Label>
                <Form.Control
                type="text"
                name="Camera"
                value={formData.Camera}
                onChange={handleChange}
                required
                />
            </Form.Group>
            </Col>
        </Row>

        <Button variant="primary" type="submit" className="add-btn">
            Add Image
        </Button>
        </Form>
    </Container>
  );
};

export default AddImageForm;