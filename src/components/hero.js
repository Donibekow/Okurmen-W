import Carousel from "react-bootstrap/Carousel";

let heroData = [
  {
    id: 1,
    image: require("../assets/img-hero1.jpg"),
    title: "Кызыгуу болсо-Ар Бир адамдын колунан келет",
    description:
      "Жашоо-бул велосипед айдаган сыяктуу. Балансыңызды сактоо үчүн КЫЙМЫЛДАШыңыз керек!",
    link: "https://www.instagram.com/okurmen_it/",
  },
  {
    id: 2,
    image: require("../assets/img-hero2.jpg"),
    title: "Келечектеги каржылык планыңызды баштаңыз",
    description:
      "Сизде дүйнөдөгү эң чоң талант болушу мүмкүн, бирок план боюнча даярданбасаңыз, баары текке кетет!",
    link: "https://www.tiktok.com/@okurmen_it",
  },
  {
    id: 3,
    image: require("../assets/img-hero3.jpg"),
    title: "Окурмен-келечек бизден башталат",
    description:
      "Хакерлик - бул искусство. Сүрөтчүнүн идеясы, боёктору, жана щеткалары бар. А Окурменде компьютер жана программалоо тилдери бар!",
    link: "https://www.instagram.com/okurmen_/",
  },
];

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img src={hero.image} al={"slide" + hero.id} />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                  Кийинкиге Өтүү
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default AppHero;
