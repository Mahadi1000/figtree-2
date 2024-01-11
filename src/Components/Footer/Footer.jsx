/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
import app from "../../assets/app.png";
import {
  FaApple,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <section className=" bg-[#1a1a1a] py-10 border-b-[1px] border-white mt-20">
        <div className="container">
          <div className="send flex justify-between">
            <div className="text px-6">
              <h1 className="font-cinzel text-xl text-white md:text-3xl">
                Do You Have Questions ?
              </h1>
              <p className="font-manrope text-white my-1 ">
                We'll help you to grow your career and growth.
              </p>
            </div>
            <Link to={"/contact"}>
              {" "}
              <button className="px-6 py-2 rounded-md font-semibold text-white border hover:bg-black ">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>
      <footer className="bg-[#1a1a1a] h-full flex md:flex-col items-center justify-around text-white ">
        <div className="">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* 1st col */}
            <div className="flex flex-col">
              <div>
                <img className="w-[150px] h-[150px] " src={logo} alt="" />
              </div>
              <div>
                <p className="py-4">
                  Founded in 2012 to provide impended <br /> brokerages with a
                  powerful marketing and <br /> referral program for luxury
                  listings, the <br />
                  FGREALTY’s network was designed to <br /> connect the finest
                  independent real estate <br /> developers and landlords with
                  its most <br />
                  prestigious international clients.
                </p>
              </div>
              <div className="flex py-5 gap-6">
                {/* icons */}
                <a
                  href="  https://www.facebook.com/figtreepropertyqatar
"
                >
                  <FaFacebookF></FaFacebookF>
                </a>
                <a href="">
                  {" "}
                  <FaXTwitter></FaXTwitter>
                </a>
                <a
                  href="https://www.instagram.com/figtreeproperty/
"
                >
                  {" "}
                  <FaInstagram></FaInstagram>
                </a>
                <a href=" https://www.linkedin.com/company/figtree-property">
                  <FaLinkedin></FaLinkedin>
                </a>
                <a
                  href="https://www.tiktok.com/@figtreeproperty?lang=en
"
                >
                  {" "}
                  <FaTiktok></FaTiktok>
                </a>
                <a href="">
                  {" "}
                  <FaYoutube></FaYoutube>
                </a>
              </div>
            </div>
            {/* 2nd col*/}
            <div className="col-span-2 gap-10 flex">
              <div className="flex px-5 gap-3 list-none flex-col">
                <h2 className="font-cinzel text-xl py-3">About</h2>
                <li>Company</li>
                <li>Careers</li>
                <li>International</li>
                <li>Magazine</li>
                <li>Blog</li>
                <li>Info Guide</li>
                <li>Newsletter</li>
                <li>Contact Us</li>
              </div>
              <div className="flex gap-3 px-5 list-none flex-col">
                <h2 className="font-cinzel text-xl py-3">Discover</h2>
                <li>New Developments</li>
                <li>Investment Opportunities</li>
                <li>Exclusive Properties</li>
                <li>Find Your Agent</li>
                <li>LIST YOUR PROPERTY IN QATAR</li>
                <li>Become an Agent</li>
                <li>Concierge Service</li>
                <li>Investors Guide</li>
              </div>
            </div>
            {/* col-3 */}
            <div className="flex px-5  flex-col">
              <h3 className="font-cinzel text-xl py-3">
                Download Our App to Get <br /> Exclusive Offers & More
              </h3>
              <div className="flex">
                <div>
                  <img src={app} alt="" />
                </div>
                <div className="flex gap-2 items-center flex-col">
                  <button className="flex py-1 px-1 justify-center items-center gap-2 border rounded-md">
                    <FaApple className="text-2xl"></FaApple>{" "}
                    <span>
                      <span className="text-sm">Available on the</span> <br />{" "}
                      <span>Appstore</span>
                    </span>
                  </button>
                  <button className="flex py-1 px-1 justify-center items-center gap-2 border rounded-md">
                    <FaApple className="text-2xl"></FaApple>{" "}
                    <span>
                      <span className="text-sm">Available on the</span> <br />{" "}
                      <span>Appstore</span>
                    </span>
                  </button>
                  <button className="flex py-1 px-1 justify-center items-center gap-2 border rounded-md">
                    <FaApple className="text-2xl"></FaApple>{" "}
                    <span>
                      <span className="text-sm">Available on the</span> <br />{" "}
                      <span>Appstore</span>
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                <h2 className="text-xl font-cinzel py-3">
                  Get the Latest News
                </h2>
                <input
                  className="rounded-md"
                  type="text"
                  placeholder="Type Your Email Address.."
                  name=""
                  id=""
                />
                <button className="px-5 border hover:bg-black hover:text-white mt-3 py-3 rounded-md ">
                  Subscribe to Our NewsLetter
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex py-2 bg-[#1a1a1a]  justify-center items-center">
        <span className="text-gray-300">
          © 2023 FigTree. Designd By{" "}
          <strong className="text-white">Mahadi Hasan.</strong>
        </span>
      </div>
    </>
  );
};

export default Footer;

{
  /*
 <footer>
        <div className="container flex flex-row-reverse">
          <div className="box">
            <div className="logo px-7">
              <img src={logo} alt="" />
              <h2 className="font-manrope">Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>

              <div className="gap-3  flex">
                <input
                  className="rounded-xl"
                  type="text"
                  placeholder="Email Address"
                />
                <button className="btn btn-outline btn-secondary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div key={index} className="box">
              <h3 className="font-manrope">{val.title}</h3>
              <ul>
                {val.text.map((items, index) => (
                  <li key={index}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>  
*/
}