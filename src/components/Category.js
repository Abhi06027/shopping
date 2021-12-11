const Category = () => {
    return ( 
        
  
        <div >

        <div className=" text-black flex justify-center   gap-8  mb-10 " >
        
        <div className="bg-gray-100 h-64 w-1/4 rounded-md mt-11 flex justify-center items-center  " > 
        
        <div className=" cursor-pointer "  > <img className="w-64 mt-2  "  src=" ./images/ssfv.png " alt=""/> 
            
        </div>
        <div className="flex flex-col items-center text-center  px-1 " >
           <p className=" text-black italic text-3xl pb-2 font-bold " >Women'S</p> 
        <p className=" text-black bg-yellow-400 font-bold text-xs rounded-full  cursor-pointer py-3 w-32  " >Best New Deals </p> 
        <p className=" text-blue-500  font-bold text-lg italic rounded-xl " >New Collection</p>
        </div>
        </div>
        <div className="bg-gridsecond  h-64 w-1/4  rounded-md mt-11 flex justify-center items-center  " > 
        <div className=" cursor-pointer "  > <img className="w-36  mt-6  "  src=" ./images/shocked.png " alt=""/> 
</div>
       
       <div className=" flex flex-col items-center text-center pl-2  " >
        <p className=" text-blue-500  italic text-2xl font-bold ">Discount! </p> 
        <p className=" text-black font-bold text-3xl    cursor-pointer   " >Winter Clothing</p> 
        <p className=" text-black pb-4 font-bold text-base rounded-xl " >New Collection</p> 
        </div>
        </div>
        
        <div className=" bg-gray-100 h-64 w-1/4  rounded-md mt-11 flex justify-center items-center   " >
        <div className="cursor-pointer   "  > <img className="w-36  mt-8  "  src=" ./images/mens.png" alt=""/> 
        </div>

        <div className=" flex flex-col items-center text-center" >
        <p className=" text-black italic text-3xl pb-2 font-bold  " >Men's Clothing </p> 
        <p className=" text-black bg-yellow-400 font-bold text-xs rounded-full  px-3 cursor-pointer py-3 w-32  " >Best New Deals </p> 
        <p className=" text-blue-500  font-bold text-lg italic rounded-xl " >New Collection</p>
        </div>
        </div>
        
        </div>
        
        </div>

    );
}
 
export default Category ;