import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/img1.jpg";

function AppAbout() {
  const react = 95;
  const html = 65;
  const redux = 78;
  return (
    <section className="block about-block" id="about">
      <Container>
        <div className="title-holder">
          <h2>Окурмен Жөнүндө</h2>
          <div className="subtitle">Окурмен Жөнүндө Кененирээк</div>
        </div>
        <Row>
          <Col smd={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
              Окурмен - Жаштарды азыртадан заманбап технологиялар менен бирге ар
              кандай өнүкүрүү иштерин жүргүзүп, ар бирибизди мыкты программист
              кылып келүүдө. Ошондуктан баарыңыздарды Окурмен окуу боорборуна
              чакырабыз!
            </p>
            <p>
              Окурмендин негизги максаттарынын бири бул - 2035-жылга чейин
              100000 айти адистерин даярдап чыгуу ! Бирок аны окуш үчүн ар бир
              адам 1 нече программалоо тилдерин билүүсү зарыл! Алардын азыркы
              күндө колдонулушун төмөнкүлөрдөн карап көрсөңүздөр БОЛОТ: 
            </p>
            <div className="progress-block">
              <h4>REACT</h4>
              <ProgressBar now={react} label={`${react}%`} />
            </div>
            <div className="progress-block">
              <h4>HTML / CSS / JavaScript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>REDUX</h4>
              <ProgressBar now={redux} label={`${redux}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
