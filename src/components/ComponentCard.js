import React from 'react'

const ComponentCard = (props) => {
    const {cardData}= props;
    const {serviceName, Position, image, text } = cardData
  return (
    // <div className="flex justify-between text-left">
        <div className="bg-white rounded-md drop-shadow-xl p-6 mx-6">
            {serviceName? <img className=" w-full" src={image}/>:  <img className=" w-48 h-48 rounded-full mx-auto" src={image}/>}

            <h2 className="text-blue-950 text-2xl my-5">{serviceName? serviceName : Position}</h2>
            <p>{text}</p>
        </div>
    // </div>
  )
}

export default ComponentCard