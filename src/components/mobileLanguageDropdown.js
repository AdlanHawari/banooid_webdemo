import React, { useEffect, useState } from 'react'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next'
import UseComponentVisible from './useComponentVisible';

export default function MobileLanguageDropDown({func}) {
    const {t, i18n}  =useTranslation();

    const clicked = () => {
        setSelected(choice);
        changeLanguage(choice.lang);
        setIsComponentVisible(false);
    }
    const a = () =>{
        clicked()
        b()
    }
    const b =()=> func

    const {
        ref,
        isComponentVisible,
        setIsComponentVisible
      } = UseComponentVisible(false);

    // const [isDDActive, setIsDDActive] = useState(false);
    const [selected, setSelected] = useState("");
    const [choice, setChoice] = useState();
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
        // console.log(i18next.languages);
        if(i18next.languages[0] === langOpt[0].lang){
            setSelected(langOpt[0].lang);
            // setChoice(langOpt[1]);
        }
        else{
            setSelected(langOpt[1].lang);
            // setChoice(langOpt[0]);
        }

        // recaptchaRef.current.execute();

        // console.log(captchaLang);
            
    // },[langOpt])
    })


    return (
        <div className="pl-2 z-50">
            {/* localization */}

            {/* <div className="flex justify-end py-8 md:px-20 xl:px-0 xl:max-w-screen-lg xl:mx-auto"> */}
            <div className="justify-end w-full">

                {/* <div className=" dropdown w-7/12 iphone7plus:w-5/12 md:w-1/4 bg-banooWhite border border-gray-300 rounded-lg shadow-sm text-sm text-gray-500 focus:outline-none focus:border-banooDark focus:ring-1 focus:ring-banooDark"> */}
                <div className=" dropdown w-20 text-sm font-bold font-spartan text-white  focus:ring-1 focus:ring-banooDark">
                    {/* <div className="dropdown-btn items-center " onClick={(e) => setIsDDActive(!isDDActive)}> */}
                    <div className="dropdown-btn py-2 items-center " onClick={(e) => setIsComponentVisible(!isComponentVisible)}>   
                        {selected === "" ? `` : `${selected}`}
                        {/* {selected&& (selected.lang)} */}
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
                            
                            // className=" dropdown-content py-2">
                            className="dropdownMobile-content py-2">
                                
                                <div
                                className="dropdown-item py-2 px-3 hover:bg-banoo font-semibold text-white"
                                // onClick={()=>{func();clicked()}}
                                onClick={()=>{
                                    let langindex = 0;
                                    if(selected===langOpt[0].lang){
                                        langindex=1;
                                    }
                                    setSelected(langOpt[langindex].lang);
                                    changeLanguage(langOpt[langindex].lang);
                                    setIsComponentVisible(false);
                                    func();
                                    
                                    
                                }}
                                 
                                >
                                    {/* {choice.text} */}
                                    {selected === langOpt[0].lang?
                                       langOpt[1].text :langOpt[0].text
                                    }

                                </div>
                                {/* {langOpt.map((option) => (
                                    <div
                                    
                                        onClick={(e) => {
                                            setSelected(option.text);
                                            changeLanguage(option.lang);
                                            setIsComponentVisible(false);
                                            
                                        }}
                                        
                                        className="dropdown-item py-3 px-3 hover:bg-banoo font-semibold hover:text-white"
                                    >
                                        {option.text}
                                        
                                    </div>
                                ))} */}
                                                                    
                            </div>
                            

                        )}
                        
                        
                    </div>

                </div>

            </div>

                {/* End of localization */}
            
        </div>
    )
}
