import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border border-yellow-500 rounded-md">
      {items.map((item, index) => (
        <div key={index} className="border-b border-yellow-500">
          <div
            className={`flex justify-between items-center p-4 cursor-pointer ${
              openIndex === index ? "bg-blue-100" : "bg-white"
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <h2
              className={`text-lg font-bold ${
                openIndex === index ? "text-blue-500" : "text-blue-950"
              }`}
            >
              {item.title}
            </h2>
            <span className="text-xl">
              {openIndex === index ? "▲" : "▼"}
            </span>
          </div>
          {openIndex === index && (
            <div className="p-4 text-blue-950">
              {/* Fix: Render multi-line content properly */}
              {item.content.split("\n").map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
