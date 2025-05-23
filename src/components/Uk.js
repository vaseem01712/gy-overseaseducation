import React from "react";
import Accordion from "./Accordion";

const UK= () => {
  const data = [
    {
      title: "Why Study UK?",
      content:
        "Internationally recognised academic excellence and quality of teaching; Promising employability and career opportunities; Enjoy geographical mobility and stay in the UK after graduation; Secure post-study work opportunities; short and flexible courses that are tailored to support you.",
    },
    {
      title: "What Courses are the best?",
      content: "Explore the wide range of courses offered in UK universities, including Business, Engineering, Medicine, and Arts.",
    },
    {
      title: "Tuition fees",
      content: "The tuition fees in the UK vary depending on the course and university, ranging from £10,000 to £25,000 per year.",
    },
    {
      title: "Cost of Living for Students",
      content: "The average cost of living for students in the UK is approximately £12,000 per year, including accommodation and food.",
    },
    {
      title: "Work Study for Students",
      content: "International students can work up to 20 hours per week during term time and full-time during vacations.",
    },
    {
      title: "Important Data",
      content: "The UK is home to some of the world's top universities, offering excellent career prospects for international students.",
    },
  ];

  return <Accordion items={data} />;
};

export default UK;
