import React from "react";
import Accordion from "./Accordion";

const Canada= () => {
  const data = [
    {
      title: "Why Study Canada?",
      content:
        "International students benefit from the same rights and freedoms that protect all Canadians: respect for human rights, equality, diversity and a stable, peaceful society.Canada is known for offering high quality education and research opportunities. You’ll also have the flexibility to transfer between types and levels of education without running into roadblocks common in other parts of the world.In Canada you can access scholarships and work opportunities to help pay for your education. Many programs also offer co-op work placements or internships to get hands-on experience while you study. Most international students are eligible to work during their studies and can get a Post-Graduation Work Permit after their studies.",
    },
    {
      title: "What Courses are the best?",
      content: `Business Administration.
Hospitality Management.
Data Analytics and Business Intelligence.
Data Science and Big Data.
Engineering.`,
    },
    {
      title: "Tuition fees",
      content: `The cost of studying in Canada varies based on the type of qualification pursued and the chosen educational institution. On average, students can expect to spend around CAD 7,500 to CAD 35,500 per year. For Indian students, this would translate to an approximate range of INR 4,00,000 to 20,00,000 per year.`,
    },
    {
      title: "Cost of Living for Students",
      content: "Including rent, room, and board, transportation etc. On average they are approximately US$10,700/year",
    },
    {
      title: "Work Study for Students",
      content: "You can work up to 20 hours per week. Working more than 20 hours per week is a violation of your study permit conditions. You can lose your student status for doing this, and may not be approved for a study or work permit in the future. The hourly pay for foreign students in Canada typically varies from $13 to $25.",
    },
    {
      title: "Important Data",
      content: `Capital City - Ottawa
Indian Students - 122,000 per year
Currency - CAD
Continent - America
Research Grant - $42.6 billion
Population - 38,781,291
GDP - $2.178 Trillion
Official Language - French / English
Climate - Canada's Pacific coast is relatively mild year-round, while the Prairie Provinces (in the central western portion of the country) have greater extremes (cold winters and warm summers).
Area - 9.985 million km²
Wages(Avg) - CAD60,000 per Year`,
    },
  ];

  return <Accordion items={data} />;
};

export default Canada;
