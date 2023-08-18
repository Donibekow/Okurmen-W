import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Сиздердин Номерлер</h2>
          <div className="subtitle">Биз менен байланышуу үчүн</div>
        </div>
        <Form className="contact-form">
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Сиздин толук аты-жөнүңүз"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Сиздин Email Адрессиңиз"
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Сиздин телефон Номериңиз"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                placeholder="Сиздин Whatsapp номериңиз"
                required
              />
            </Col>
          </Row>
          <div className="btn-holder">
            <Button type="submit">Жиберүү</Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14048.211570060965!2d-0.1228208876550775!3d51.505942908931324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1481805868782"
        ></iframe>
      </div>
      <Container fluid>
        <div className="contact-info">
            <ul>
                <li>
                    <i className="fas fa-envelope"></i>
                    OkurmenIT@gmail.com
                </li>
                <li>
                    <i className="fas fa-phone"></i>
                    +996777778278
                </li>
                <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Bishkek, Kyrgyzstan, Maximum Business Center
                </li>
            </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;
