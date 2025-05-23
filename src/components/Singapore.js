import React from "react";
import Accordion from "./Accordion";

const Singapore= () => {
  const data = [
    {
      title: "Why Study Singapore?",
      content:
        "Singapore is renowned worldwide for its academic excellence, extending its reputation beyond Asia. The nation's education system is widely recognized as world-class, fostering highly advanced and competitive academic talent.Currently, Singapore holds a prominent position as a leading industrial hub in sectors such as aerospace, precision engineering, information technology, pharmaceuticals and biotechnology, the creative industry, and professional services.",
    },
    {
      title: "What Courses are the best?",
      content: `Marine Biology.
Business and Management.
Banking and finance.
IT and Computing.
Engineering.
Tourism and Hospitality Management.`,
    },
    {
      title: "Tuition fees",
      content: `The tuition fees for these courses for an academic year vary from S$37,000 to S$154,000. The Tuition Grant Scheme (TGS) is a commendable initiative by the Singaporean government aimed at benefiting international students pursuing higher education in the country.`,
    },
    {
      title: "Cost of Living for Students",
      content: "For both graduate and postgraduate students, the average monthly living expenses while studying in Singapore fall within the range of 2,000S$ to 12,000 S$ (SGD) (equivalent to INR 1,07,806 to INR 6,46,838). The specific accommodation costs vary depending on the type of lodging preferred.",
    },
    {
      title: "Work Study for Students",
      content: "While studying in Singapore, students can work part-time for 16 hours per week during the course and full-time during vacations, provided they are registered as full-time students in an approved institution.Students are paid wages ranging from $9 per hour.",
    },
    {
      title: "Important Data",
      content: `Capital City - Singapore
Indian Students - 3,000 per year
Currency - SGD
Continent - Asia
Research Grant - SGD 25 billion
Population - 6,017,732
GDP - $323.907 billion
Official Language - English
Climate - Singapore is situated near the equator and has a tropical climate, with relatively high and uniform temperatures, abundant rainfall, and high humidity throughout the year. The climate of Singapore is characterized by two monsoon seasons separated by inter-monsoonal periods.
Area - 728.6 sq.km
Wages(Avg) - S$69,396 per Year`,
    },
  ];

  return <Accordion items={data} />;
};

export default Singapore;
