import { useState } from "react";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const AccordItem = ({ details, ifOpen, handleFunction }) => {
  return (
    <div className="border border-bottom">
      <div
        className="p-[10px] bg-sky-600 cursor-pointer flex justify-between"
        onClick={handleFunction}
      >
        <span>{details.quest}</span>

        {ifOpen ? <FaMinus /> : <FaPlus />}
      </div>
      <div className={`px-[10px] bg-sky-200 ${ifOpen ? "block" : "hidden"}`}>
        {details.answer}
      </div>
    </div>
  );
};

export default AccordItem;
