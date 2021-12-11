import React from 'react'

const Content = () => {
    return (
        <div className=' flex   justify-center     bg-secondary text-white'>
        
        <div className=" w-2/4 mt-8 px-2   " >
        <img className="  "  src="./images/girl.png " alt=""/> 
        </div>
        
        <div className=" flex flex-row   text-5xl ml-10    " >
        <div className=" flex  flex-col justify-center         "  >
        <p className=" text-blue-600 text-4xl py-2 italic   " >60% discount</p> 
        <p className=" text-black font-bold text-8xl  " >Winter</p> 
        <p className=" text-black font-bold text-8xl   "   >Collection</p> 
        
        <p className=" text-black text-lg italic py-2  pb-6   "   > Best Both Collection By 2021!</p> 
        <p className="  bg-blue-500 rounded-full  text-white  py-3 w-36  text-center  text-xl hover:bg-red-500  "   >Shop Now</p> 
      
        </div>
        </div>
      </div>
     
    )
}

export default Content