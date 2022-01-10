import React from 'react'
import ergif from '../../images/form/error1.gif'
import { ACTIONS } from '../FormIntern'

export default function FailUI({t, dispatch, currentState}) {
    const modalClicked = (e) =>{
        dispatch({ type: ACTIONS.CHANGE_FAILUI, payload: !currentState})
        // window.location.reload();

        
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50">
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-3/5 rounded-xl bg-white py-4 iphone5:py-8 px-2 iphone5:px-2 md:px-8">
                <div className=" space-y-4">
                    <img src={ergif} alt="loading" className=" mx-auto w-32 md:w-40"/>
                    
                    <div className="">
                        <p className=" text-center font-spartan text-banooGray text-base md:text-xl font-bold">
                            {/* Terimakasih atas partisipasi anda. */}
                            {/* Terjadi kesalahan */}
                            {t("internship_form.fail.title")}
                            
                        </p>
                        <p className="mx-8 md:mx-10 lg:mx-0 pt-4 text-center font-serif-6 text-banooGray text-sm md:text-base font-medium">
                        {/* Bersiaplah mengikuti petualangan bersama Kawan Banoo lainnya.  */}
                        {/* Tunggu kabar baik dari kami ya,<br/>Kawan Banoo!  */}
                            {/* Kirim ulang dan periksa koneksi internet anda */}
                            {t("internship_form.fail.desc")}
                        </p>
                    
                    </div>
                    
                    
                </div>
                <div className="text-center pt-8 px-4 md:px-0 w-full">
                    <button className="text-white font-spartan font-bold tracking-widest text-lg rounded-xl bg-banooDark hover:bg-banooDarker w-3/5 py-4" onClick={modalClicked}>
                    OK

                    </button>
                </div>
                
            </div>
            
        </div>
    )
}
