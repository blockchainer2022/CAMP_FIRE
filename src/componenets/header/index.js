/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/images/logo.png";
import { ButtonOutline } from "../button";

const listData = [
  {
    text: "Cozy That",
  },
  {
    text: "Whitepaper",
  },
  {
    text: "Chart",
  },
  {
    text: "Faq",
  },
  {
    text: "Contacts",
  },
  {
    text: "Docs",
  },
];

const Index = () => {
  return (
    <header>
      <div className="container py-10 md:py-16 flex justify-between  ">
        <div className="w-44">
          <img src={Logo} alt="" className="w-full" />
        </div>
        <div className="md:flex items-center hidden">
          <ul className="flex items-center ">
            {listData.map((item, i) => (
              <li className="mr-6 font-bold justify-between text-xs" key={i}>
                <a href="#">{item.text}</a>
              </li>
            ))}
          </ul>
          <ButtonOutline>Buy Now 🔥</ButtonOutline>
        </div>
        <button className="md:hidden cursor-pointer text-2xl">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Index;
