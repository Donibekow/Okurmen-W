import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const blogData = [
  {
    id: 1,
    image: require("../assets/blog1.jpg"),
    time: "15.02.2018",
    title: "Кофенин сүйүүчүлөрү",
    description:
      "Биз Окурменди жаңы ачканыбызга сүйүнүп, ырахаттанып, Кофе ичип отурган кезибиз",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assets/blog2.jpg"),
    time: "24.05.2020",
    title: "Дизайн тууралуу сүйлөшүү",
    description:
      "Ал эми, бул жакта UX/UI дизайны боюнча проффилер менен сүйлөшүп аткан кезибиз",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assets/blog3.jpg"),
    time: "9.07.2022",
    title: "Жакшы аба ыырайында эс Алуу",
    description:
      "Жайында жайдоодо таза аба жутуп, сүйлөшүп, булбулдун үнүн ушгуп отурган кезибиз",
    link: "https://www.twitter.com",
  },
];

function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container>
        <div className="title-holder">
          <h2>Окурменде сакталып калган Сүрөттөр</h2>
          <div className="subtitle">төмөнкүдө Окурмендин кыскача окуялары бар</div>
        </div>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                        <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>
                        {blog.description}
                      </Card.Text>
                      <a href={blog.link} className="btn btn-primary">
                        Кененирээк <i className="fas fa-chevron-right"></i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppBlog;
