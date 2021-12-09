import React from "react";
import Seprator from "../../assets/images/seprator.svg";
const Title = ({ title, desc }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold ">{title}</h2>
      <p className=" text-sm  text-gray-200 leading-9  my-5">{desc}</p>
      <div>
        <img src={Seprator} alt="" className="mx-auto" />
      </div>
    </div>
  );
};

export default Title;
