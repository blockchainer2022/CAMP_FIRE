import Title from "../../componenets/title";
import Team1 from "../../assets/images/team1.png";
import Team2 from "../../assets/images/team2.png";
import Team3 from "../../assets/images/team3.png";
import Team4 from "../../assets/images/team4.png";
import { ButtonPrimary } from "../../componenets/button";
import Seprator from "../../assets/images/seprator.svg";
import Image from "../../assets/images/aboutbtm.png";
const teamData = [
  {
    title: "Heading name",
    text: "The world’s first and largest digital marketplace for crypto collect",
    image: Team4,
  },
  {
    title: "Heading name",
    text: "The world’s first and largest digital marketplace for crypto collect",
    image: Team3,
  },
  {
    title: "Heading name",
    text: "The world’s first and largest digital marketplace for crypto collect",
    image: Team2,
  },
  {
    title: "Heading name",
    text: "The world’s first and largest digital marketplace for crypto collect",
    image: Team1,
  },
];

const About = () => {
  return (
    <section className=" pb-20 sm:py-20">
      <div className="container">
        <div className="custom-container">
          <Title
            title="We are Campfire"
            desc="The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs)."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-y-10 gap-6 mt-20">
            {teamData.map((member, i) => (
              <div className="text-center" key={i}>
                <img src={member.image} alt="" className="w-full" />
                <h4 className="font-bold  text-2xl pt-3 pb-4">
                  {member.title}
                </h4>
                <p className="text-xs">{member.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <ButtonPrimary>View all</ButtonPrimary>
          </div>
          <div className=" bg-gray mt-28">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-7 p-6">
                <p className="text-2xl mt-6 mb-4">Pyromaniac Camp's SMOKEYS</p>
                <h3 className="font-bold text-3xl md:mr-10 mb-4">
                  10,000 algorithmically generated from over 80 attributes
                </h3>
                <img src={Seprator} alt="" className="mb-4" />
                <p className="font-normal text-sm mt-16">
                  Every Smokey is Different, every one has a certain rarity and
                  skillset.
                </p>
              </div>
              <div className="md:col-span-5">
                <img src={Image} alt="" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
