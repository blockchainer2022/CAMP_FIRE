import Title from "../../componenets/title";
import Scroll1 from "../../assets/images/scroll1.png";
import Scroll2 from "../../assets/images/scroll2.png";
import Egg from "../../assets/images/egg.png";
import Slider, { SliderTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
import { ButtonPrimary } from "../../componenets/button";
const Gallary = () => {
  const { Handle } = Slider;

  const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;

    return (
      <SliderTooltip
        prefixCls="rc-slider-tooltip"
        overlay={`${value}`}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </SliderTooltip>
    );
  };
  return (
    <section className="py-20">
      <div className="container">
        <Title
          title="We are Campfire"
          desc="The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs)."
        />
      </div>
      <div className="mt-20">
        <div className="gallary-image-holder">
          <img src={Scroll1} alt="" />
        </div>
        <div className="gallary-image-holder">
          <img src={Scroll2} alt="" />
        </div>
      </div>

      <div className="container mt-28">
        <img src={Egg} alt="" className="mx-auto" />
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary">Mint Price</span> is 0.05 B CAMPFIRE
          </h2>
          <p className="text-sm">
            Turning digital files into non-fungible tokens is simple. Here's how
            to get started with minting your first B CAMPFIRE NFT
          </p>
          <div className="max-w-sm mx-auto mt-20 flex items-center ">
            <Slider min={0} max={20} defaultValue={0} handle={handle} />
            <p className="ml-4 flex-shrink-0">0.5 B CAMPFIRE</p>
          </div>
          <div className="mt-10">
            <ButtonPrimary>Mint NFT</ButtonPrimary>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallary;
