import React from 'react'

function Dots({slideIndex, onclick, dataSlider}) {
    return (
        // <div className="absolute flex justify-center lg:justify-start space-x-2 -bottom-6 inset-x-0 pl-0 lg:pl-6">
        <div className="absolute flex justify-center lg:justify-start space-x-2 pl-0 lg:pl-6">
            {/* <h1>mantap</h1> */}
            

            
            {dataSlider.map((obj, index) => (
                <span
                key={index}
                className={index === slideIndex ? 
                " cursor-pointer h-2 w-2 lg:h-2 lg:w-2 bg-banooDarker my-0 mx-px rounded-full":
                " cursor-pointer h-2 w-2 lg:h-2 lg:w-2 bg-gray-200 my-0 mx-px rounded-full"}
                onClick={() => onclick(index)}
                ></span>
            ))}
            
            
        </div>
    )
}

export default Dots
