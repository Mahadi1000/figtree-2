import img1 from "../../assets/360.jpg"
import img2 from "../../assets/international.jpg"
import img3 from "../../assets/blog.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();
const New = () => {
  return (
    <div className="my-10 lg:py-10  px-2  lg:px-10">
      <div className="flex  items-center">
        <h2 className="text-lg text-gray-500 my-5">NEW</h2>
        <hr className="w-[150px]  ml-4 " />
      </div>
      <div
        data-aos-duration="500"
        data-aos="fade-up"
        className="flex justify-around lg:flex-row flex-col lg:px-5 gap-5 px-0 "
      >
        <div>
          <Link to={"/community360"}>
            {" "}
            <div className="md:w-[387px] w-[300px] md:h-[338px]">
              <img src={img1} alt="" />
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-3xl font-cinzel my-5 text-center">
              Communities 360° Tour
            </h1>
            <p>
              Experience Dubai Hills Estate communities and <br /> amenities
              from the comfort of your home.
            </p>
            <Link to={"/community360"}>
              {" "}
              <button className="uppercase mt-5 px-10 py-4 text-white  bg-[#071C35]">
                Try it now
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Link to={"/international"}>
            {" "}
            <div className="md:w-[387px] w-[300px] md:h-[338px]">
              <img src={img2} alt="" />
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-3xl font-cinzel my-5 text-center">
              International Projects
            </h1>
            <p>Explore our portfolio of international projects.</p>
            <Link to={"/international"}>
              {" "}
              <button className="uppercase mt-5  px-10 py-4 text-white  bg-[#071C35]">
                Read more
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Link to={"/blog"}>
            {" "}
            <div className="md:w-[387px] w-[300px] md:h-[338px]">
              <img src={img3} alt="" />
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-3xl font-cinzel my-5 text-center">
              Discover our Blogs
            </h1>
            <p>
              Click to read our top tips and tricks for property <br />{" "}
              management, home decoration and more.
            </p>
            <Link to={"https://www.figtreeproperty.com/blog/"}>
              {" "}
              <button className="uppercase mt-5 px-10 py-4 text-white  bg-[#071C35]">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New
