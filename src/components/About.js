import about from "../assests/about-bg.jpg";


const About = () => {
  return (
    <div className="pt-24">
      {/* Background Image Section */}
      <div
        className="bg-cover bg-center bg-no-repeat w-full h-64 md:h-screen"
        style={{ backgroundImage: `url(${about})` }}
      ></div>

      {/* Content Section */}
      <div className="bg-slate-100 text-lg px-6 md:px-12 py-14">
        <div className="bg-white rounded-lg p-8 md:p-14 max-w-screen-lg mx-auto">
          <h3 className="text-blue-950 text-3xl md:text-4xl mb-8 text-center font-bold">
            The Journey Behind GY Overseas
          </h3>
          <p className="text-slate-800 text-lg md:text-xl leading-relaxed">
            After completing his Master's degree, <strong>Mr. Gittesh Yadav</strong> embarked on a transformative journey that took him abroad to attend seminars and conferences. During his tenure with an international college, he played a pivotal role in managing student exchange programs.
            <br /><br />
            The experience was nothing short of remarkable. Traveling to different countries, attending prestigious conferences, and engaging with global CEOs and renowned professors left a lasting impression on him. These interactions broadened his perspective, instilling in him a profound appreciation for the power of international education and cultural exchange.
            <br /><br />
            Inspired by these experiences, Mr. Gittesh envisioned a platform that could help others explore similar opportunities. This vision marked the beginning of <strong>GY Overseas</strong>, a venture dedicated to guiding aspiring students toward fulfilling their dreams of studying abroad.
            <br /><br />
            His story is a testament to the transformative power of education, global exposure, and the drive to make a difference in the lives of others.
            <br /><br />
            During his MBA journey, <strong>Mr. Gittesh Yadav</strong> had the unique opportunity to travel abroad, visiting multiple multinational companies and attending various international conferences. This global exposure became a significant inspiration for him to aim higher and explore new dimensions of life.
            <br /><br />
            Throughout his professional career, he interacted with CEOs and renowned professors from world-class universities, gaining valuable insights into global education and innovation.
            <br /><br />
            While managing student exchange programs for prestigious institutions like <strong>Macomb Business School, Imperial College London</strong>, and other top-tier universities, Mr. Yadav developed a deeper connection with the international education community. These experiences broadened his vision and fueled his passion for guiding students to pursue education at the world's best universities.
            <br /><br />
            In 2015, driven by this vision, Mr. Yadav founded <strong>GY Overseas</strong>, a global education consultancy aimed at empowering students with personalized guidance to achieve their dreams of studying abroad at premier institutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
