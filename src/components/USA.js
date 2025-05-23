import React from "react";
import Accordion from "./Accordion";

const USA= () => {
  const data = [
    {
      title: "Why Study USA?",
      content:
        "The United States welcomes the highest number of international students globally. Its appeal lies in its top-notch education, distinctive curriculum, diverse cultural milieu, and ample prospects, making it a preferred destination for many students from around the world. Renowned for their exceptional performance in global university rankings, American universities are celebrated for upholding rigorous academic standards, ensuring quality, and receiving substantial support to provide an outstanding education to their students.",
    },
    {
      title: "What Courses are the best?",
      content: `Computer Science and Information Technology,
Business and Management.
Engineering.
Data Science and Analytics
Social Sciences and Psychology
Creative Arts and Design`,
    },
    {
      title: "Tuition fees",
      content: "International students studying in the United States can tentatively expect a cost of between $25,000 and $45,000 per year tuition and living expenses.",
    },
    {
      title: "Cost of Living for Students",
      content: "The cost of living for students in the USA is heavily influenced by individual preferences. For international students, the living expenses can be approximately estimated based on the city of residence. On average, the annual living cost in the US ranges from $10,000 to $18,000, which translates to around $1,000 to $1,500 per month.",
    },
    {
      title: "Work Study for Students",
      content: "International students enrolled full time and in valid F-1 status can generally work on-campus for up to 20 hours per week during when classes are in session, and up to 40 hours per week when classes are not. The United States has strict rules for international students who want to work during their studies.Currently, the hourly wage of the students employed in part time jobs in USA range between 9 to 17 USD (735 to 1,390 INR). The minimum wage according to the Federal government in the USA is 7.25 USD per hour.",
    },
    {
      title: "Important Data",
      content: `Capital City - Washington DC
Indian Students - 210,000 per year
Currency - Dollar($)
Continent - America
Research Grant - $101.2 billion
Population - 340,125,710
GDP - $25 trillion
Official Language - English
Climate - The climate of the United States is highly diverse, ranging from tropical conditions in south Florida and Hawaii to arctic and alpine conditions in Alaska and across the Rocky Mountains.
Area - 9.834 million sq.km
Wages(Avg) - $97,962/yr`
    },
  ];

  return <Accordion items={data} />;
};

export default USA;
