import Seprator from "../../assets/images/seprator.svg";
import { ButtonPrimary } from "../../componenets/button";
const socialList = [
  {
    icon: "fab fa-twitter",
    folower: "87,105",
    title: "Twitter followers",
  },
  {
    icon: "fab fa-telegram-plane",
    folower: "44,405",
    title: "Telegram members",
  },
  {
    icon: "fab fa-discord",
    folower: "19,060",
    title: "Discord members",
  },
];

const Member = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="custom-container grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-4 text-center md:text-left">
            <h2 className="text-3xl font-bold ">
              Become part of one the fastest growing crypto communities ever
              created.
            </h2>
            <p className=" text-sm  text-gray-200   my-5">
              With tens of thousands of active users across multiple social
              platforms, Campfire aims to be a true community token.
            </p>
            <div className="my-7">
              <img src={Seprator} alt="" className="mx-auto md:mx-0" />
            </div>
          </div>
          <div className="md:col-span-8 md:pl-20">
            <div className="  grid grid-cols-3">
              {socialList.map((v, i) => (
                <div key={i} className="text-center">
                  <span className="text-6xl">
                    <i class={v.icon}></i>
                  </span>
                  <p className="my-1 text-yellow-600 font-bold text-base">
                    {v.folower}
                  </p>
                  <p className="text-xs">{v.title}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <ButtonPrimary>Become a member</ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Member;
