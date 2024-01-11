/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link} from "react-router-dom";
import "swiper/css/navigation";
import "swiper/scss/navigation";
import AOS from "aos";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick-theme.css"; // Import the slick-theme.css
import "slick-carousel/slick/slick-theme.css"; 
import "aos/dist/aos.css";
import { regionsData } from "../../Utils/regionsData";
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
  >

  </div>
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
  >
  </div>
);
const Regions = () => {
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
            slidesToScroll: 1
          }
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
      breakpoint: 1024,
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
  return (
    <div className="lg:px-16 px-5 gap-5 md:mt-36 mt-60">
      <div
        data-aos-duration="500"
        data-aos="fade-up"
        className="flex my-10 justify-between"
      >
        <div>
          <h1 className="text-3xl">
            EXPLORE UNIQUE PROPERTIES IN QATAR'S TOP REGIONS
          </h1>
          <p className="mt-4 text-gray-500">
            Discover Luxury Apartments, Villas, and Offices in Qatar's most
            popular areas. Get insights of the best properties in Qatar by using
            the <br /> FigTree property finding portal
          </p>
        </div>
      </div>
      <div className="">
        <Slider {...settings}>
          {regionsData?.map((item, index) => (
            <div
              data-aos-duration="600"
              data-aos="fade-up"
              key={index}
              className="h-[430px] relative "
            >
              <Link to={`/regions/${encodeURIComponent(item.area)}`}>
                <div className="w-[300px] cursor-pointer relative h-full ">
                  <img
                    className="w-full h-[430px] "
                    src={item?.image[0]}
                    alt=""
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                    }}
                  >
                    <div className="absolute flex-1 justify-center items-center text-white bottom-4 mb-4 left-[40%] right-auto">
                      <h1 className="">{item.area}</h1>
                      <p>Properties</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Regions;
