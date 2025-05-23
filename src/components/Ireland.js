import React from "react";
import Accordion from "./Accordion";

const Ireland= () => {
  const data = [
    {
      title: "Why Study in Irelanad?",
      content:
        "Ireland boasts an exceptional education system, standing among the best globally. Its universities rank in the top 3% worldwide, and graduates from Irish universities are highly sought-after by employers worldwide.Irish universities belong to the top 1% of research institutions worldwide. Notably, some of the world's largest and most prestigious companies have established key strategic research facilities in Ireland. Ireland hosts numerous prominent global companies, offering abundant career opportunities, particularly in Software Development and IT, Engineering, Financial Services, Food and Agriculture, Medtech, and Pharma sectors.",
    },
    {
      title: "What Courses are the best?",
      content: "Data science,Computer Science,Cyber Security,Cloud Computing,Digital Marketing,Humanities.",
    },
    {
      title: "Tuition fees",
      content: "Studying in Ireland is significantly more affordable than in many other countries, and due to the welcoming nature of its universities, it is projected that the student population will reach several million by the year 2025. Tuition fee is between UKP 9,000 to UKP 25,000.",
    },
    {
      title: "Cost of Living for Students",
      content: "On average, you should plan to allocate around 1,000 - 1,400 EUR per month to cover various expenses, including accommodation, food, transportation, supplies, and leisure activities in Ireland.",
    },
    {
      title: "Work Study for Students",
      content: "Ireland also offers international students the opportunity to work part-time while studying. As per Irish immigration rules, international students can work up to 20 hours per week during the academic term and up to 40 hours during holidays. Per hour rate for students is UKP 10 and UKP 12 per hour.",
    },
    {
      title: "Important Data",
      content:  `Capital City - Dublin
      Indian Students - 4,000 per year
      Currency - Pound
      Continent - Europe
      Research Grant - UKP952.4 Million
      Population - 5,059,512
      GDP - USD529.24 billion
      Official Language - English
      Climate - Ireland enjoys a mild, temperate climate with warm summers and mild winters.
      Area - 70,273 sq.km
      Wages(Avg) - UKP45,000 per Year`
    },
  ];

  return <Accordion items={data} />;
};

export default Ireland;
