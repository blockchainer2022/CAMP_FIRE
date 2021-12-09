import Title from "../../componenets/title";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Slide1 from "../../assets/images/slider1.png";
import Slide2 from "../../assets/images/slider2.png";
import Slide3 from "../../assets/images/slider3.png";
import Slide4 from "../../assets/images/slider4.png";
import Tick from "../../assets/images/tick.png";
const slideData = [
  {
    image: Slide1,
    title: "SuperRare",
    desc: "SuperRare makes it easy to create, sell, and collect rare digital art. SuperRare's smart contract ",
  },
  {
    image: Slide2,
    title: "SuperRare",
    desc: "SuperRare makes it easy to create, sell, and collect rare digital art. SuperRare's smart contract ",
  },
  {
    image: Slide3,
    title: "SuperRare",
    desc: "SuperRare makes it easy to create, sell, and collect rare digital art. SuperRare's smart contract ",
  },
  {
    image: Slide4,
    title: "SuperRare",
    desc: "SuperRare makes it easy to create, sell, and collect rare digital art. SuperRare's smart contract ",
  },
  {
    image: Slide4,
    title: "SuperRare",
    desc: "SuperRare makes it easy to create, sell, and collect rare digital art. SuperRare's smart contract ",
  },
  {
    image: Slide4,
    title: "SuperRare",
    desc: "SuperRare makes it easy to create, sell, and collect rare digital art. SuperRare's smart contract ",
  },
  {
    image: Slide4,
    title: "SuperRare",
    desc: "SuperRare makes it easy to create, sell, and collect rare digital art. SuperRare's smart contract ",
  },
  {
    image: Slide4,
    title: "SuperRare",
    desc: "SuperRare makes it easy to create, sell, and collect rare digital art. SuperRare's smart contract ",
  },
  {
    image: Slide4,
    title: "SuperRare",
    desc: "SuperRare makes it easy to create, sell, and collect rare digital art. SuperRare's smart contract ",
  },
];

const options = {
  margin: 50,
  responsiveClass: true,
  nav: true,
  dots: true,
  autoplay: false,
  rewind: true,
  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    700: {
      items: 2,
    },
    800: {
      items: 3,
    },
  },
};
const Treanding = () => {
  return (
    <section className="py-20 trending">
      <div className="container">
        <Title
          title="Trending in all categories"
          desc="Top list of the week."
        />
        <div className="custom-container" style={{ marginTop: 50 }}>
          <OwlCarousel className=" owl-theme" {...options}>
            {slideData.map((slide, i) => (
              <div className="rare-card" key={i}>
                <div>
                  <img src={slide.image} alt="" />
                </div>
                <div className="body ">
                  <h6 className="text-center text-xl font-bold">
                    {slide.title}{" "}
                    <span className="w-4">
                      <img src={Tick} alt="" />
                    </span>
                  </h6>
                  <p className="text-xs mt-2 pl-2">{slide.desc}</p>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Treanding;
