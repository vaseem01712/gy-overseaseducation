import React from "react";
import Accordion from "./Accordion";

const Australia= () => {
  const data = [
    {
      title: "Why Study in Australia?",
      content:
        "Australia hosts six universities that rank among the top 100 globally. With over 40 universities in total, there is a diverse array of academic programs to select from. Additionally, some institutions offer internships and paid employment opportunities. Notably, Australian universities have produced over 15 Nobel laureates, highlighting their academic excellence and contributions to research and innovation.",
    },
    {
      title: "What Courses are the best?",
      content: `Business Administration.
Hospitality Management.
Engineering and Architecture/ Construction and Urban Planning.
Social Work and Education.
Accounting and Finance.`,
    },
    {
      title: "Tuition fees",
      content: "Tuition fees vary depending on the discipline you choose to study, the degree level, and the university in which you enrol. Tuition for international students: Bachelor's degrees: between 20,000 and 45,000 AUD/year. Master's and PhD degrees: between 22,000 and 50,000 AUD/year.",
    },
  
    {
      title: "Work Study for Students",
      content: "You can work up to 20 hours per week. Working more than 20 hours per week is a violation of your study permit conditions. You can lose your student status for doing this, and may not be approved for a study or work permit in the future. The hourly pay for foreign students in Canada typically varies from $13 to $25.",
    },
    {
      title: "Important Data",
      content: `Capital City - Canberra
Indian Students - 226,450 per year
Currency - AUD
Continent - Oceania
Research Grant - USD12.1 billion
Population - 26,439,111
GDP - USD1.98 trillion
Official Language - English
Climate - The northern part of the country has a tropical climate, varying between grasslands and desert. Australia holds many heat-related records: the continent has the hottest extended region year-round, the areas with the hottest summer climate, and the highest sunshine duration.
Area - 8.56 million Sq.Km.
Wages(Avg) - AUD68,900 per Year`,
    },
  ];

  return <Accordion items={data} />;
};

export default Australia;
