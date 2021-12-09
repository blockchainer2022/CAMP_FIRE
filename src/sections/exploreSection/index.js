import Seprator from "../../assets/images/seprator.svg";
import Image from "../../assets/images/exploreImage.png";
import Feature1 from "../../assets/images/partner.png";
import Feature2 from "../../assets/images/partner2.png";
import Feature3 from "../../assets/images/partner3.png";
const Explore = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="custom-container grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-7 text-center md:text-left">
            <h2 className="text-3xl font-bold ">Explore Utility of NFTs</h2>
            <div className="my-7">
              <img src={Seprator} alt="" className="mx-auto md:mx-0" />
            </div>
            <p className=" text-sm  text-gray-200   my-5">
              Utility NFTs are NFTs that carry some underlying utility or
              application. A very creative description indeed. Whether it's
              redeemable rewards or membership NFTs, a rising number of creators
              and developers are leveraging blockchain-backed tokens to build
              and support their communities.
            </p>
            <p className="text-sm  text-gray-200 ">
              Buy and sell scarce digital goods from the likes of POAP, Urbit
              ID, and Polyient Games.
            </p>
          </div>
          <div className="md:col-span-5">
            <img src={Image} alt="" className="mx-auto mt-10 md:mx-0 md:mt-0" />
          </div>
        </div>
        <div className="custom-container py-28">
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-12 items-center">
            <div className="col-span-4">
              <h6 className="text-4xl font-bold">Featured on</h6>
            </div>
            <div className="col-span-8">
              <p className="text-sm mb-6">
                At campfire we are excited about a brand new type of digital
                good called a non-fungible token, or NFT.
              </p>
              <div className="flex justify-between sm:pr-20 flex-wrap">
                <img src={Feature1} alt="" />
                <img src={Feature2} alt="" />
                <img src={Feature3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
