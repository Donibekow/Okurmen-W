import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const teamsData = [
  {
    id: 1,
    image: require("../assets/team1.JPG"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Мунарбек Мавлянов",
    designation: "Director",
    description:
      "Cатуу бөлүмүнүн башчысы, кооз сүйлөйт",
  },
  {
    id: 2,
    image: require("../assets/team2.JPG"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Хайрулла РахматАли уулу",
    designation: "Manager",
    description:
      "Менеджер",
  },
  {
    id: 3,
    image: require("../assets/team3.JPG"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Мунарбек Мавлянов",
    designation: "UX Designer",
    description:
      "Мастер класс өтүп турат бул байкебиз",
  },
  {
    id: 4,
    image: require("../assets/team4.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Кутман Акунов",
    designation: "Front-end Developer",
    description:
      "5 жылдык тажрыйбасы бар, Мыкты агай",
  },
  {
    id: 5,
    image: require("../assets/team5.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Мансурбек Кан-Назар",
    designation: "Окурмендин Директору",
    description:
      "Окурмендин негиздөөчүсү",
  },
  {
    id: 6,
    image: require("../assets/team6.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Уланбек Талибаев",
    designation: "Менеджер",
    description:
      "Элдерди Окурменге чакырып турат",
  },
];

function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container>
        <div className="title-holder">
          <h2>Окурмендин Командасы</h2>
          <div className="subtitle">Төмөнкүлөрдүн баары эксперттер</div>
        </div>
        <Row>
          {teamsData.map((teams) => {
            return (
              <Col sm={4} key={teams.id}>
                <div className="image">
                  <Image src={teams.image} />
                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        <li>
                          <a href={teams.fbLink}>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href={teams.twitterLink}>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href={teams.linkedinLink}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="content">
                    <h3>{teams.name}</h3>
                    <span className="designation"></span>
                    <p>{teams.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppTeams;
