import React, { useState } from "react";

const SidebarWithContent = ({ items, defaultActiveTab, onTabClick }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (tab) => {
    console.log("tab1",tab)
    setActiveTab(tab);
    if (onTabClick) {
      console.log("tab1 onTabClick",tab)
      onTabClick(tab); // Call the parent's `handleTabClick` function
    }
  };

  return (
    <div className="app-container p-20">
      <div className="sidebar border-r-2 border-yellow-300 bg-transparent">
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              className={`cursor-pointer text-xl ${activeTab === item.title ? "active text-blue-950 text-bold" : "text-gray-500"}`}
              onClick={() => handleTabClick(item.title)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="content pl-20">
        <h2 className=" text-blue-950 text-4xl font-bold pb-5 ">{activeTab}</h2>
        <p className="text-lg text-gray-500">{items.find((item) => item.title === activeTab)?.content || "No content available."}</p>
      </div>
    </div>
  );
};

export default SidebarWithContent;
