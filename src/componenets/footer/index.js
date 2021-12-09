/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../../assets/images/logo.png";

const linkList = [
  {
    list: [
      {
        text: "Cozy Chat",
      },
      {
        text: "Whitepaper",
      },
      {
        text: "Roadmap",
      },
      {
        text: "Chart",
      },
      {
        text: "FAQ",
      },
      {
        text: "Contact",
      },
      {
        text: "Docs",
      },
    ],
  },
  {
    list: [
      {
        text: "Antispam Policy",
      },
      {
        text: "Terms of Use",
      },
      {
        text: "Cookie Policy",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="container border-t-2 border-dark-400 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 lg:grid-cols-4 mr-10">
          <div className="w-48">
            <img src={Logo} alt="" className="w-full" />
          </div>
          <div>
            <h6 className="font-bold text-sm leading-7 mb-2">Campfire</h6>
            <ul className="footer-list">
              {linkList[0].list.map((item, i) => (
                <li className="" key={i}>
                  <a href="#">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-sm leading-7 mb-2">Campfire</h6>
            <ul className="footer-list">
              {linkList[1].list.map((item, i) => (
                <li className="" key={i}>
                  <a href="#">{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-sm mb-4">Stay up to date </h6>
            <p className=" font-normal text-xs text-gray-300">
              Follow us on social media
            </p>
            <div className="footer-social">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            <strong>Campfire Token</strong> © All Rights Reserved.
          </p>
          <p>
            {" "}
            The information provided on Campfire Token website does not
            constitute investment advice, financial advice, trading advice, or
            any other sort of advice and you should not treat any of the
            website’s content as such. Campfire Token team does not recommend
            that any cryptocurrency should be bought, sold, or held by you. Do
            conduct your own due diligence and consult your financial advisor
            before making any investment decisions. By purchasing Campfire
            Token, you agree that you are not purchasing a security or
            investment and you agree to hold the team harmless and not liable
            for any losses or taxes you may incur. You also agree that the team
            is presenting the token “as is” and is not required to provide any
            support or services. You should have no expectation of any form from
            Campfire Token and its team. Although Campfire is a community driven
            token for social networking and not a registered digital currency,
            the team strongly recommends that citizens in areas with government
            bans on Crypto do not purchase it because the team cannot ensure
            compliance with your territory’s regulations. Always make sure that
            you are in compliance with your local laws and regulations before
            you make any purchase.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
