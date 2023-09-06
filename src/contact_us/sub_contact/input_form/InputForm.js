import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './custom.css'

function InputForm() {
  return (
    <Form>
      <Form.Group className="mb-3" as={Col} controlId="formGridFullName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="First name" />
      </Form.Group>

      <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" as={Col} controlId="formGridPhoneNumber">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="tel" placeholder="Phone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
      <Button variant="outline-light" className="contact-btn" type="submit">
        Contact
      </Button>
    </Form>
  );
}

export default InputForm;