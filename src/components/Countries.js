import React,{useState} from 'react'
import SidebarWithContent from '../components/SidebarWithContent';
import UK from './Uk';
import Ireland from './Ireland';
import USA from './USA';
import Canada from './Canada';
import Australia from "./Australia";
import NewZealand from "./NewZealand"
import Singapore from './Singapore';
import Dubai from './Dubai';
import Germany from './Germany';
import singaporeuniversity from "../assests/Singaporeuniversity.jpg";
import SingaporeRank from "../assests/SingaporeRank.jpg"
import UAERank from "../assests/UAERank.jpg"
import UAEuniversity from "../assests/UAEuniversity.jpg"
import NzRank from "../assests/NZRank.jpg"
import NZuniversity from "../assests/NZuniversity.jpg"
import Germanyuniversity from "../assests/Germanyuniversity.jpg"
import GermanyRank from "../assests/GermanyRank.jpg"
import uni from "../assests/uni.jpg";
import Australiauniversity from "../assests/Australiauniversity.jpg"
import AustraliaRank from "../assests/AustraliaRank.jpg"
import USAuniversity from "../assests/USAuniversity.jpg"
import USARank from "../assests/USRank.jpg"
import canadauniversity from "../assests/Canadauniversity.jpg"
import canadaRank from "../assests/CanadaRank.png"
import Irelanduniversity from "../assests/Irelanduniversity.jpg"
import IrelandRank from "../assests/IrelandRank.jpg"
import UKuniversity from "../assests/UKuniversity.jpg"
import UKRank from "../assests/UKRank.jpg"
const servicesItems = [
  { 

    title: "UK", 
    content: (
      <div>
        <UK />
        <div className="mt-4 flex flex-wrap">
          <img 
            src={UKuniversity} 
            alt="UKuniversity" 
            className="w-screen"
          />
          <img 
            src={UKRank} 
            alt="UKuniversityRank" 
            className="w-screen"
          />
        </div>
      </div>
    ),
  },
  { title: "Ireland",  content: (
    <div>
      <Ireland />
      <div className="mt-4 flex flex-wrap">
        <img 
          src={Irelanduniversity} 
          alt="Irelanduniversity" 
          className="w-screen"
        />
        <img 
          src={IrelandRank} 
          alt="IrelanduniversityRank" 
          className="w-screen"
        />
      </div>
    </div>) },
  { title: "USA", content: (
    <div>
      <USA />
      <div className="mt-4 flex flex-wrap">
        <img 
          src={USAuniversity}
          alt="USAuniversity" 
          className="w-screen"
        />
        <img 
          src={USARank} 
          alt="USAuniversityRank" 
          className="w-screen"
        />
      </div>
    </div>)},
  { title: "Canada", content: (
    <div>
      <Canada />
      <div className="mt-4 flex flex-wrap">
        <img 
          src={canadauniversity}  
          alt="Canadauniversity" 
          className="w-screen"
        />
        <img 
          src={canadaRank} 
          alt="CanadauniversityRank" 
          className="w-screen"
        />
      </div>
    </div>) },
  { title: "Australia", content: (
    <div>
      <Australia/>
      <div className="mt-4 flex flex-wrap">
        <img 
          src={Australiauniversity}
          alt="Australiauniversity" 
          className="w-screen"
        />
        <img 
          src={AustraliaRank}
          alt="AustraliauniversityRank" 
          className="w-screen"
        />
      </div>
    </div>)},{
      title: "NewZealand", content: (
        <div>
          <NewZealand/>
          <div className="mt-4 flex flex-wrap">
            <img 
              src={NZuniversity}land
              alt="Newzelanduniversity" 
              className="w-screen"
            />
            <img 
              src={NzRank} 
              alt="NewzelanduniversityRank" 
              className="w-screen"
            />
          </div>
        </div>)
    },
    { title: "Singapore", content: (
      <div>
        <Singapore/>
        <div className="mt-4 flex flex-wrap">
          <img 
            src={singaporeuniversity}
            alt="Singaporeuniversity" 
            className="w-screen"
          />
          <img 
            src={SingaporeRank}
            alt="SingaporeuniversityRank" 
            className="w-screen"
          />
        </div>
      </div>)},
      { title: "Dubai", content: (
        <div>
          <Dubai/>
          <div className="mt-4 flex flex-wrap">
            <img 
              src={UAEuniversity}
              alt="Dubaiuniversity" 
              className="w-screen"
            />
            <img 
              src={UAERank} 
              alt="DubaiuniversityRank" 
              className="w-screen"
            />
          </div>
        </div>)},
         { title: "Germany", content: (
          <div>
            <Germany/>
            <div className="mt-4 flex flex-wrap">
              <img 
                src={Germanyuniversity}
                alt="Germanyuniversity" 
                className="w-screen"
              />
              <img 
                src={GermanyRank} 
                alt="GermanyuniversityRank" 
                className="w-screen"
              />
            </div>
          </div>)},
];
const Countries = () => {
  const [activeTab, setActiveTab] = useState("UK");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
    {/* Banner Section */}
    <div
  className="relative w-full h-96  flex items-center justify-center md:h-screen"
>
  {/* Background Image with Blur */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat  filter blur-md  "
    style={{ backgroundImage: `url(${uni})` }}
  ></div>

  {/* Overlay for Better Contrast */}
  <div className="absolute inset-0 bg-black bg-opacity-5"></div>

  {/* Content on Top */}
  <div className="relative p-4 md:p-8 rounded-lg text-center">
    <p className="text-2xl md:text-4xl font-extrabold text-white">{activeTab}</p>
    <p className="text-lg md:text-2xl text-yellow-300 mt-2">
      Countries / <span className="font-semibold">{activeTab}</span>
    </p>
  </div>
</div>


    {/* Sidebar and Content */}
    <div className="container mx-auto px-4 py-8 ">
      <SidebarWithContent
        items={servicesItems}
        defaultActiveTab={activeTab}
        onTabClick={handleTabClick}
      />
    </div>
  </div>
  )
}

export default Countries;