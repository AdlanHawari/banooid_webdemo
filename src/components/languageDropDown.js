import React, { useEffect, useState } from 'react'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next'
import UseComponentVisible from './useComponentVisible';

export default function LanguageDropDown() {
    const {t, i18n}  =useTranslation();

    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
      } = UseComponentVisible(false);

    // const [isDDActive, setIsDDActive] = useState(false);
    const [selected, setSelected] = useState("");
    // const langOptText = ["Bahasa Indonesia", "English"];
    const langOpt = [
        {
            text:"Bahasa Indonesia",
            lang: "id"
        },
        {
            text:"English",
            lang:"en"
        }
    ];

    const changeLanguage = (language) =>{
        i18n.changeLanguage(language);
    }

    useEffect(() => {
        // console.log(i18next.languages[0]);
        if(i18next.languages[0] === langOpt[0].lang){
            setSelected(langOpt[0].lang);
        }
        else{
            setSelected(langOpt[1].lang);
        }

        // recaptchaRef.current.execute();

        // console.log(captchaLang);
            
    },[langOpt])


    return (
        <div>
            {/* localization */}

            {/* <div className="flex justify-end py-8 md:px-20 xl:px-0 xl:max-w-screen-lg xl:mx-auto"> */}
            <div className="justify-end w-full">

                {/* <div className=" dropdown w-7/12 iphone7plus:w-5/12 md:w-1/4 bg-banooWhite border border-gray-300 rounded-lg shadow-sm text-sm text-gray-500 focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"> */}
                <div className=" dropdown w-20 bg-banooWhite border border-gray-300 rounded-lg shadow-sm text-sm text-gray-500 focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark">
                    {/* <div className="dropdown-btn items-center " onClick={(e) => setIsDDActive(!isDDActive)}> */}
                    <div className="dropdown-btn px-3 py-2 items-center " onClick={(e) => setIsComponentVisible(!isComponentVisible)}>   
                        {selected === "" ? `` : `${selected}`}
                        <span>
                            {isComponentVisible ?
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                            : 
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>                     
                            }
                        
                        </span>                        
                    </div>

                    <div ref={ref} className="">
                        {/* {!isComponentVisible &&(
                            <> */}
                        {isComponentVisible &&(
                            <div 
                            
                            className="bg-banooWhite dropdown-content rounded-b-lg border shadow-sm py-2">
                                {langOpt.map((option) => (
                                    <div
                                    
                                        onClick={(e) => {
                                            setSelected(option.lang);
                                            // setIsDDActive(false);
                                            changeLanguage(option.lang);
                                            setIsComponentVisible(false);
                                        }}
                                        // className="dropdown-item py-3 px-3 hover:bg-banoo font-semibold hover:text-white"
                                        className="dropdown-item py-3 px-3 hover:bg-banoo font-semibold hover:text-white"
                                    >
                                        {option.text}
                                    </div>
                                ))}
                                                                    
                            </div>
                            

                        )}
                        
                        
                    </div>

                </div>

            </div>

                {/* End of localization */}
            
        </div>
    )
}
