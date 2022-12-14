import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import banner4 from "../../assets/images/banner4.png";
import banner5 from "../../assets/images/banner5.png";
import banner6 from "../../assets/images/banner6.png";
import banner7 from "../../assets/images/banner7.png";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: "none" }}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  let { slider1, slider2 } = props;
  const [nav, setNav] = useState({ nav1: null, nav2: null });

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const settings = {
    loop: true,
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const next = () => {
    slider1.slickNext();
  };
  const previous = () => {
    slider2.slickPrev();
  };

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider
              asNavFor={nav.nav2}
              ref={(slider) => (slider1 = slider)}
              {...settings}
            >
              <div key={1}>
                <img src={banner1} alt=""></img>
              </div>
              <div key={2}>
                <img src={banner2} alt=""></img>
              </div>
              <div key={3}>
                <img src={banner3} alt=""></img>
              </div>
              <div key={4}>
                <img src={banner4} alt=""></img>
              </div>
            </Slider>
            <div className="carousel-left-move" onClick={() => previous()}>
              <div className="prev">
                <LeftOutlined></LeftOutlined>
              </div>
              <div className="next" onClick={() => next()}>
                <RightOutlined></RightOutlined>
              </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider
              asNavFor={nav.nav1}
              ref={(slider) => (slider2 = slider)}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div>
                TR??? GI?? M??A WORLD CUP <br></br> ??u ????i v?? ?????ch
              </div>
              <div>
                M???NG KHAI TR????NG <br></br> Gi???m ?????n ?????n 49%
              </div>
              <div>
                X??? KHO H??NG C?? <br></br> Ti???t ki???m ?????n 63%
              </div>
              <div>
                60 N??M MARSHALL <br></br> Gi???m s???c qu?? ngon
              </div>
            </Slider>
          </div>
        </div>
        <div className="carousel-right">
          <div className="carousel-right-item">
            <img src={banner5} alt=""></img>
          </div>
          <div className="carousel-right-item">
            <img src={banner6} alt=""></img>
          </div>
          <div className="carousel-right-item">
            <img src={banner7} alt=""></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
