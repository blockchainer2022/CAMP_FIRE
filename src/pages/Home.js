import { Layout } from "../componenets";
import Banner from "../sections/bannerSection";
import About from "../sections/aboutSection";
import Gallary from "../sections/gallarySection";
import Treanding from "../sections/trendingSection";
import Explore from "../sections/exploreSection";
import Member from "../sections/memberSection";
import NewsLetter from "../sections/newsLetterSection";
const Home = () => {
  return (
    <Layout>
      <Banner />
      <About />
      <Gallary />
      <Treanding />
      <Explore />
      <Member />
      <NewsLetter />
    </Layout>
  );
};

export default Home;
