import React from "react";
import Accordion from "./Accordion";

const Germany= () => {
  const data = [
    {
      title: "Why Study Germany?",
      content:
        "Germany provides remarkable study and research infrastructure that enjoys widespread global recognition. The country boasts well-equipped research facilities situated in various institutions, including universities, universities of applied sciences, research institutes, companies, as well as federal and state establishments. Added advantage of Shengen Visa which has 28 countries free movement.",
    },
    {
      title: "What Courses are the best?",
      content: `Industrial Engineering.
Mathematics and Computer Science.
Natural Sciences.
Business and economics.
Architecture.`,
    },
    {
      title: "Tuition fees",
      content: `In Germany, education is offered free of charge to all students in Public Universities, regardless of their nationality. The only requirement is a nominal administration fee. However, students should budget for additional expenses, such as accommodation, travel costs, food, and other essential necessities required to support themselves during their stay in Germany.`,
    },
    {
      title: "Cost of Living for Students",
      content: "The cost of living for students in Germany is around 10,200-12,000 EUR per year for Indian students. However, the specific expenses can vary based on the location of the university. Cities like Berlin and Munich, for instance, tend to be slightly pricier compared to other areas in Germany.",
    },
    {
      title: "Work Study for Students",
      content: "Individuals from non-EU countries have the opportunity to work for up to 120 full days or 240 half-days without requiring approval from the Federal Employment Agency (BA). Typically, international students have the option to pursue internships or engage in self-employment during their academic studies. The per hour cost is EUR12.00 per hour",
    },
    {
      title: "Important Data",
      content: `Capital City - Berlin
Indian Students - 66,000 per year
Currency - Euro
Continent - Europe
Research Grant - ???55.7 billion
Population - 83,291,283
GDP - $280 Billion
Official Language - German
Climate - Germany's climate is temperate and marine in the west and humid continental in the east. It has cool winters in the west and cold winters in the east.
Area - 357,588 km??
Wages(Avg) - $53,390 per Year`,
    },
  ];

  return <Accordion items={data} />;
};

export default Germany;
