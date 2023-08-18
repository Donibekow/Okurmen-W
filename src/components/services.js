import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
  {
    id: 1,
    icon: "fas fa-clone",
    title: "Окурмендин Иштери",
    description:
      "Бул баардык окуп жаткан окуучуларга же студенттерге ыңгайлуулукту жаратуу жана агы менен кошо бизди бизди 1 өзүнчө чөйрөгө киргизүү ",
  },
  {
    id: 2,
    icon: "fas fa-snowflake",
    title: "Окурмен Кышында",
    description:
      "Кышында бул жакта печкалары бар муздакты сезбейбиз, Ал эми Жайында пальчиктерибиз тоңуп, ооруп калган убакыттар байкалып келүүдө ",
  },
  {
    id: 3,
    icon: "fas fa-plug",
    title: "Окурмендин ВайФайы",
    description:
      "ВайФайына токтолсок, Эми бул жакта кандай деесм, Өтө мощный деп айта албайм, бирок сабак өткөнгө жарайт",
  },
  {
    id: 4,
    icon: "fas fa-desktop",
    title: "Окурмендин Ачык Зоналары",
    description:
      "Ачык зоналары Сонун, эгерде тапшырма аткарыш керек болсо, келип каалашынча аткарса болот",
  },
  {
    id: 5,
    icon: "fas fa-trophy",
    title: "Ийгиликтүү бүтүрүүчүлөрү",
    description:
      "Тырышса ар бир адам бүтүп кете алат, а андан ары өзү аркет кылса мыкты айтишник болуп кете алышат",
  },
  {
    id: 6,
    icon: "fas fa-life-ring",
    title: "Актерлук Чеберчиликтери",
    description:
      "Күнүгө жок дегенде 1 кызыктуу видео тартышат, Кызыктуу дегенде ал жакта юмор, веселье болот",
  },
];

function AppServices() {
  return (
    <section className="block services-block" id="services">
      <Container>
        <div className="title-holder">
          <h2>Окурменден эмнелерди байкаса болот? </h2>
          <div className="subtitle">Төмөнкүлөрдөн караңыз</div>
        </div>
        <Row>
          {servicesData.map((services) => {
            return (
              <Col sm={4} className="holder" key={services.id}>
                <div className="icon">
                  <i className={services.icon}></i>
                </div>
                <h3>{services.title}</h3>
                <p>{services.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;
