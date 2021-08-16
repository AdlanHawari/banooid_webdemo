import React from 'react'
import Feature from '../components/products/feature';
import Spec from '../components/products/Spec';
import Top from '../components/products/top';
import Section3d from '../components/products/section3d';
import DescriptionSection from '../components/products/descriptionSection';
import TechSpec from '../components/products/techSpec';
import { useTranslation } from 'react-i18next';




function Products() {

    
    const {t, i18n}  =useTranslation();

    document.title= "Banoo - Products";
    return (
        <section>
            
            
            <div className="pt-20 bg-banooWhite">

                {/* Gambar */}
                <Top t={t}/>

                {/* Feature */}
                <div className="px-10 lg:px-40 py-8 lg:py-10">
                    <Feature t={t}/>

                </div>
                

              
                {/* Deskripsi */}
                
                <DescriptionSection t={t}/>
                

               
                  {/* 3D model */}
               

                <div className="px-10 lg:px-40">
                    <Section3d t={t}/>
                </div>
                {/* end of 3D model */}


                {/* Spesifikasi */}
                <div className="block py-10 sm:py-20 px-10 lg:px-40 items-center justify-center">
                    <div className="text-center text-black font-bold text-xl iphone7:text-3xl  sm:text-4xl py-14">
                        Mycrofish Technical Specification
                    </div>
                    {/* <Spec/> */}
                    <TechSpec t={t}/>
                </div>

                {/* FAQ */}
                
                
            </div>

        </section>
     
        
    )
}

export default Products
