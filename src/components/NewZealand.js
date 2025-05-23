import React from "react";
import Accordion from "./Accordion";

const NewZealand= () => {
  const data = [
    {
      title: "Why Study NewZealand?",
      content:
        "New Zealand offers a safe and secure environment for international students. The country has a low crime rate and the people here are warm and friendly. International students are looked after well by New Zealand universities that are bound by a code of conduct imposed by the government.",
    },
    {
      title: "What Courses are the best?",
      content: `IT and Computer Science.
Agriculture.
Art and design.
Trades.
Business management.
Sports management.`,
    },
    {
      title: "Tuition fees",
      content: `The cost of studying in New Zealand includes both tuition fees for the course along with the living expense for the program duration. Tuition fee varies from course to course and university to university as per the choice one makes. However, the cost of living remains the same for every international student.Tuition fees range from NZ$20,500 to NZ$30,000`,
    },
    {
      title: "Cost of Living for Students",
      content: "The average cost of living for students in the UK is approximately £12,000 per year, including accommodation and food.",
    },
    {
      title: "Work Study for Students",
      content: "You may be allowed to work part-time for up to 20 hours a week, and full-time during all scheduled holidays and the Christmas and New Year holiday period. Students are paid wages ranging from NZ $14.75 per hour.",
    },
    {
      title: "Important Data",
      content: `Capital City - Wellington
Indian Students - 1,600 per year
Currency - NZ$
Continent - Oceania
Research Grant - NZ$ $55.3 million
Population - 5,231,411
GDP - US$251.97 billion
Official Language - English
Climate - New Zealand's climate is complex and varies from warm subtropical in the far north to cool temperate climates in the far south, with severe alpine conditions in the mountainous areas.
Area - 268,021 sq.km
Wages(Avg) - NZ$97,300 per Year`,
    },
  ];

  return <Accordion items={data} />;
};

export default NewZealand;
