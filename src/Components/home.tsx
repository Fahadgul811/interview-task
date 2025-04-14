import LatestBlogs from "./blogs";
import BusinessSection from "./business-section";
import ConnectingSection from "./connecting-section";
import Services from "./services";

const Home = () => {
  return (
    <div>
      <BusinessSection />
      <ConnectingSection />
      <Services />
      <LatestBlogs />
    </div>
  );
};

export default Home;
