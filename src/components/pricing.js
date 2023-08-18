import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
  {
    id: 1,
    plan: "Сайттын Базалык баасы",
    price: "£49",
    features: [
      "Аз эле кооздолгон",
      "Дизайны аз",
      "5 эле бет",
      "Акысыз хостинг, бирок жаңылыгы бар",
      "Okurmen-kids"
    ],
    link: "https://www.google.com",
  },
  {
    id: 2,
    plan: "Сайттын Премиумдук баасы",
    price: "£149",
    features: [
      "Ыңгайлуу",
      "Дизайны жетишээрлик",
      "15 бет",
      "Акысыз хостинг жана реклама жок",
      "Okurmen-IT"
    ],
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    plan: "Сайттын Профессионалдык баасы",
    price: "£349",
    features: [
      "Колдонгонго ӨтӨ Ыңгайлуу",
      "Дизайны аябагандай кооз",
      "Көптөгөн БЕТТЕР болот",
      "Акысыз Хостинг жана Вирустардан корголгон",
      "Кооздолгон сонун кылынып & Мыкты деңгээлдеги сайт", "Okurmen"
    ],
    link: "https://www.twitter.com",
  },
];

function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Сайттын &amp; Баасы</h2>
          <div className="subtitle">Төмөнкүлөрдөн карап көрүңүз</div>
        </div>
        <Row>
            {pricingData.map((pricing) => {
                return (
                    <Col sm={4} key={pricing.id}>
                        <div className="heading">
                            <h3>{pricing.plan}</h3>
                            <span className="price">{pricing.price}</span>
                        </div>
                        <div className="content">
                            <ListGroup>
                                {
                                    pricing.features.map((features, index) => {
                                        return (
                                            <ListGroup.Item key={index}>
                                                {features}
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                        </div>
                        <div className="btn-holder">
                            <a href={pricing.link} className="btn btn-primary">
                                Сүйлөшүү
                            </a>
                        </div>
                    </Col>
                );
            })}
        </Row>
      </Container>
    </section>
  );
}

export default AppPricing;
