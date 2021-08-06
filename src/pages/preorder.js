import React from 'react'
import Contactform from '../components/Contactform';
import Preorderform from '../components/Preorderform';

function preorder() {
    document.title="Banoo - Pre Order Form";
    return (

        <section className="bg-green-200 py-20">
            <div className="bg-blue-200 py-20 ">
                <h1 className="font-spartan font-extrabold text-3xl text-center">
                    Pre Order Form
                </h1>
                <h2>Choose Language</h2>
                <Preorderform className="max-w-screen-md min-w-screen-sm mx-auto"/>
                {/* <Contactform/> */}

            </div>
            

            
        </section>
    )
}

export default preorder
