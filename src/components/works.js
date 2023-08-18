import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: require("../assets/img2.jpg"),
    title: "Жалгыздык Жол",
    subtitle: "Веб-Дизайн",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: require("../assets/img3.jpg"),
    title: "Фотограф Кыз",
    subtitle: "Брендинг",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: require("../assets/img4.jpg"),
    title: "Айырмачылык",
    subtitle: "Веб-Дизайн",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: require("../assets/img5.jpg"),
    title: "Табигый Үлгүлөр",
    subtitle: "Брендинг",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: require("../assets/img6.jpg"),
    title: "Айырмачылык",
    subtitle: "Фотография",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: require("../assets/img7.jpg"),
    title: "Кышкы Соната",
    subtitle: "Веб-Дизайн",
  },
  {
    id: 7,
    link: "https://www.google.com",
    image: require("../assets/img8.jpg"),
    title: "Жалгыздык Жол",
    subtitle: "Брендинг",
  },
  {
    id: 8,
    link: "https://www.google.com",
    image: require("../assets/img9.jpg"),
    title: "Ыраазычылык",
    subtitle: "Фотография",
  },
  {
    id: 9,
    link: "https://www.google.com",
    image: require("../assets/img2.jpg"),
    title: "Сонун Күндөр",
    subtitle: "Веб-Дизайн",
  },
];

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container>
        <div className="title-holder">
          <h2>OKURMEN</h2>
          <div className="subtitle">Жана алардын Иштери</div>
        </div>
        <Row className="portfoliolist">
            {worksData.map((works) => {
                return (
                    <Col sm={4} key={works.id}>
                        <div className="portfolio-wrapper">
                          <a href={works.link}>
                            <Image src={works.image}/>
                            <div className="label text-center">
                              <h3>{works.title}</h3>
                              <p>{works.subtitle}</p>
                            </div>
                          </a>
                        </div>
                    </Col>
                );
            })}
        </Row>
        <Pagination>{items}</Pagination>
      </Container>
    </section>
  );
}

export default AppWorks;
