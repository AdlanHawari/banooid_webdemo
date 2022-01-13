// import React, { useState } from 'react'
// import Model3D from '../Model3D'


// export default function Section3d({t}) {

//     const [view3d, setView3d] = useState(false)  
//     return (
//         <div className="flex-col sm:flex-row sm:flex space-y-4 sm:space-y-0 sm:gap-x-14 lg:gap-x-20 py-20">
            
            
            
//             <div className="md:order-2 relative h-60 sm:h-52 sm:w-52 xl:w-80 xl:h-80 bg-blue-200">
//                 <Model3D/>
//                 {!view3d&&
//                 (
//                     <div className="absolute inset-0 bg-black bg-opacity-60 cursor-pointer rounded-lg" onClick={(e)=>{setView3d(true)}}>
//                         <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white text-sm xl:text-lg  text-center"> 
//                             {t("products.sec3d.click")}
                            

//                         </h3>
                    
//                     </div>

//                 )}


//                 {view3d&&(
//                     <div 
//                     className="fixed inset-0 z-50 bg-opacity-60 bg-black">
//                         <div className="relative text-white  h-screen">
//                             <div className="absolute top-1/2 inset-x-0   transform -translate-y-1/2">
                            
//                             <div className="block px-10">
                                
//                                 <div className="flex justify-end " >
//                                     <svg onClick={(e)=>{setView3d(false)}} 
//                                         className="w-10 h-10 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                                     </svg>
//                                 </div>
//                                 <div className="bg-blue-200 rounded-lg h-128">
//                                     <Model3D/>
//                                 </div>
//                                 <div className="">
//                                     <ul className="text-xs md:text-base text-white italic">
//                                     {t("products.sec3d.note")} :
//                                     {/* Note: */}
//                                         <li className=" pl-10">{t("products.sec3d.rotate")}</li>
//                                         <li className=" pl-10">{t("products.sec3d.move")}</li>
//                                         <li className=" pl-10">{t("products.sec3d.zoom")}</li>
//                                     </ul>
                                
//                                 </div>
                            
//                             </div>

//                             </div>
                            

//                         </div>
                      
//                     </div>
//                 )}                        
//             </div>

//             <div className="md:order-1 block space-y-2 sm:space-y-4 xl:space-y-8 max-w-prose">
//                 <h2 className="text-banooGray font-semibold">
//                     {t("products.sec3d.title")}
//                         {/* 3D View */}
//                     </h2>
//                     <h3 className="text-black font-bold text-2xl xl:text-4xl">
//                     {t("products.sec3d.subtitle")}
//                 </h3>
//                 <p>
//                 {t("products.sec3d.desc")}
//                 </p>

//             </div>
            
//         </div>
//     )
// }
