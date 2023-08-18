import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

var testimonialsData = [
  {
    id: 1,
    name: "Тазабекова Арууке",
    description:
      "Окурмен - өнүктүрүүчү чөйрө деп айта алам",
    designation: "Front-end Developer",
  },
  {
    id: 2,
    name: "Баланчаев Баланча",
    description:
      "Окурмен акылды гана өстүрбөй, көз караштарды дагы өзгөрткөнгө жардам берет экен",
    designation: "Өзгөчө",
  },
  {
    id: 3,
    name: "Максатова Айгерим",
    description:
      "Менин балам Окурменди окуп бүтүп азыркы учурда Гений болуп жүрөт , эмне мынча катуу окутуп салгансыздар? Бирок рахмат, келечекке пайдасы тийсе керек",
    designation: "Модель",
  },
];

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Клиенттердин айткандары</h2>
          <div className="subtitle">клиенттер OKURMEN жөнүндө эмне дешти </div>
        </div>
        <Carousel controls={false}>
          {testimonialsData.map((testimonials) => {
            return (
              <Carousel.Item key={testimonials.id}>
                <blockquote>
                  <p>{testimonials.description}</p>
                  <cite>
                    <span className="name">{testimonials.name}</span>
                    <span className="designation">
                      {testimonials.designation}
                    </span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;
