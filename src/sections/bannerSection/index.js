import "../style.css";
import Seprator from "../../assets/images/seprator.svg";
import Bannergif1 from "../../assets/images/banner-right1.gif";
import Bannergif2 from "../../assets/images/banner-right2.gif";
import BnbChain from "../../assets/images/bnbchain.png";
import { ButtonPrimary, ButtonWhite } from "../../componenets/button";
const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="custom-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 my-20">
            <div className="text-center lg:text-left">
              <h1 className="font-bold text-4xl mt-5 mb-7">
                Discover, find, & sell extraordinary NFTs 🔥
              </h1>
              <p className="font-normal  leading-6 text-base">
                The world’s first and largest digital marketplace for crypto
                collectibles and non- fungible tokens (NFTs).
              </p>
              <div className="my-10 ">
                <img src={Seprator} alt="" className="mx-auto lg:mx-0" />
              </div>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start btn-group">
                <ButtonPrimary>Explore</ButtonPrimary>

                <ButtonWhite>Create</ButtonWhite>
              </div>
              <div className="mt-10">
                <p className="mb-4">Exclusive On</p>
                <img
                  src={BnbChain}
                  className="w-48 opacity-50 mx-auto lg:mx-0"
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <div className="flex gif-holder">
                <img src={Bannergif1} className="gif1 " alt="" />
                <img src={Bannergif2} className="gif2" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
