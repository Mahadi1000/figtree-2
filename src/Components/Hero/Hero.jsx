import { motion } from "framer-motion";
import "./Hero.css";
import Form from "../Form/Form";

const Hero = () => {
  return (
    <>
      <section className="flex w-full mb-16 justify-center items-center">
        <div className="hero">
          <div className="container text-center">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "ease-in",
              }}
              className="font-cinzel font-semibold text-white text-xl md:text-2xl uppercase lg:text-3xl"
            >
              Welcome To FigTree Property
            </motion.h1>
            <motion.p
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className=" text-white text-md hidden my-4 lg:text-center"
              transition={{
                duration: 1.5,

                type: "ease-in",
              }}
            >
              <span className="text-2xl "> We manage Better Living. </span>
              <br /> Exceptional service for your real estate journey. <br />{" "}
              Rent or buy in Doha-Qatar. Find your dream home today!
            </motion.p>
          </div>
        </div>
 <Form></Form>
      </section>
    </>
  );
};

export default Hero;
