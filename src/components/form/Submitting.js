import React from 'react'
import loading from '../../images/form/loading.gif'
import interwind from '../../images/form/interwind.gif'
import { useTranslation } from 'react-i18next'

export default function Submitting() {
    const {t, i18n}  =useTranslation();
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50">
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-3/5 lg:w-1/2 rounded-xl bg-white iphone5:p-10 pb-6 iphone5:pb-14">
                <div className="">
                    <img src={interwind} alt="loading" className=" mx-auto w-60"/>
                    
                    <h3 className="text-center font-spartan text-banooGray text-sm iphone5:text-base font-semibold">
                    {t("internship_form.sending")}
                    </h3>
                    
                </div>
                
            </div>
            
        </div>
    )
}
