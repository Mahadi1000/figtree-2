
import { Helmet } from "react-helmet-async";
import Feature from "../../Components/Feature/Feature";
import Hero from "../../Components/Hero/Hero";
import Regions from "../../Components/Regions/Regions";
import New from "../../Components/New/New";

import Leading from "../../Components/Leading/Leading";
import FeatureCommunity from "../../Components/FeaturedListing/FeatureCommunity";
const Home = () => {
  return (
    <div className="h-full">
      <Helmet>
        <title>FigTree Property | Home</title>
        <meta
          name="Find Your Dream Property in FigTree Property!"
          content="We manage Better Living. Exceptional service for your real estate journey. Rent or buy in Doha-Qatar. Find your dream home today"
        />
      </Helmet>
      <Hero></Hero>
      <Regions></Regions>
      <Feature></Feature>
      <Leading></Leading>
      <New></New>
      <FeatureCommunity></FeatureCommunity>
    </div>
  );
};

export default Home;
