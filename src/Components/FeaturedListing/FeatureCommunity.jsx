/* eslint-disable react/prop-types */

import img1 from "../../assets/img9.jpg";
import img2 from "../../assets/img10.jpg";
import img3 from "../../assets/img11.jpg";
import img4 from "../../assets/img12.jpg";
import img5 from "../../assets/img13.webp";
import img6 from "../../assets/img8.jpg";
import img7 from "../../assets/img7.jpg";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css"; // Import the slick-theme.css
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 ${className}`}
    style={{
      ...style,
      right: "-20px",
      width: "40px",
      height: "40px",
      background: "#3498db",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    }}
    onClick={onClick}
  ></div>
);
const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`absolute top-1/2 transform -translate-y-1/2 ${className}`}
    style={{
      ...style,
      left: "-20px",
      width: "40px",
      height: "40px",
      background: "#3498db",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    }}
    onClick={onClick}
  ></div>
);
const FeatureCommunity = () => {
 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   swipeToSlide: true,
   slidesToShow: 4,
   slidesToScroll: 1,
   responsive: [
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
       },
     },
     {
       breakpoint: 576,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         infinite: true,
         dots: true,
       },
     },
     {
       breakpoint: 768,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         initialSlide: 2,
       },
     },
     {
       breakpoint: 992,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 2,
         initialSlide: 2,
       },
     },
     {
       breakpoint: 1200,
       settings: {
         slidesToShow: 4,
         slidesToScroll: 1,
       },
     },
   ],
   nextArrow: <NextArrow />,
   prevArrow: <PrevArrow />,
 };
  const imageData = [
    {
      src: img1,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },
    {
      src: img2,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },
    {
      src: img3,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },
    {
      src: img4,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },
    {
      src: img5,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },

    {
      src: img6,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },
    {
      src: img7,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },
  ];
  return (
    <div className="px-10 my-16">
      <div data-aos-duration="500" data-aos="fade-up">
        <div className="flex items-center my-3 gap-8">
          <h3 className="font-cinzel">Communities</h3>
          <hr className="w-[200px] text-black border border-black " />
        </div>
        <h1 className="text-4xl font-cinzel font-medium">
          FEATURED COMMUNITIES
        </h1>
      </div>
      <div className=" mt-5 gap-5">
        <Slider {...settings}>
          {imageData.map((item, index) => (
            <div
              data-aos-duration="600"
              data-aos="fade-up"
              className="overflow-hidden rounded-xl"
              key={index}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  className="rounded-xl object-contain w-[300px] h-full transition-transform duration-700 hover:scale-110 "
                  src={item.src}
                  alt=""
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl font-cinzel font-medium">
                  {" "}
                  {item.title}{" "}
                </h1>
                <h2 className="font-manrope text-xl ">
                  {" "}
                  <span> {item.title2} </span> <br />{" "}
                  <span> {item.title3} </span>{" "}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeatureCommunity;
