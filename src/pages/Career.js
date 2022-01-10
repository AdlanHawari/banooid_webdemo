import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// import Footer from '../components/footer'
// import { Link } from 'react-router-dom'

export default function Mainpage() {
    const {t, i18n}  =useTranslation();
    document.title="Banoo - Career";

    const refdest = useRef()
    const btnScroll = () => 
    {
        window.scrollTo({
        // top: refdest.current.offsetTop - 180,
        top: refdest.current.offsetTop -40,
        behavior:"smooth"

    });
    }
    return (
        <section className="pt-20">
            <section className="py-20 px-6 lg:px-20 bg-banooWhite">

            
            <h1 className=" font-spartan text-center font-bold text-banooDark text-2xl iphone7plus:text-3xl ">
                {t("career.title")}
            </h1>
            <h2 className="pt-10 lg:px-10 font-serif-6 font-bold text-lg md:text-xl text-banooGray text-center tracking-wide lg:leading-relaxed">
            {t("career.subtitle")}
            </h2>
            <h2 className="font-serif-6 font-semibold text-banooGray text-center text-base pt-4">
            {t("career.desc_0")} &nbsp;
            <strong>{t("career.desc_1")}</strong> {t("career.desc_conn")} <strong>{t("career.desc_2")}</strong> 
            {/* <strong>Project Design &amp; Numerical Simulation, Project Riset &amp; Pemasaran Bidang Akuakultur, Finance,</strong> dan <strong>Human Resources Generalist.</strong>  */}

            </h2>

            {/* kualifikasi */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-0 lg:gap-x-8 xl:gap-x-14 pt-20">
            <div className="rounded-lg bg-yellow-100 py-14 px-8 shadow-lg">
                <h2 className="text-lg font-spartan font-bold text-banoo pb-4">
                    {t("career.qualification.title")}
                </h2>
                <ul className="list-disc font-serif-6 text-base pl-6 space-y-2 text-banoo">
                    <li>
                        <p className=" text-gray-600">
                            {t("career.qualification.desc_00")}<strong> {t("career.qualification.desc_01")}</strong>
                        </p>
                    </li>
                    
                    <li>
                    <p className=" text-gray-600">
                        {t("career.qualification.desc_10")}<strong> {t("career.qualification.desc_11")}</strong> {t("career.qualification.desc_12")} <strong>{t("career.qualification.desc_13")}</strong> 
                        </p>
                    </li>
                    <li>
                    <p className=" text-gray-600">
                        {t("career.qualification.desc_2")}
                        </p>
                    </li>
                </ul>
            </div>

            {/* prosedur */}
            <div className="rounded-lg bg-yellow-100 py-14 px-8 shadow-lg">
                <h2 className="text-lg font-spartan font-bold text-banoo pb-4">
                    {t("career.procedure.title")}
                </h2>
                <ul className="list-disc font-serif-6 text-base pl-6 space-y-2 text-banoo">
                    <li className="">
                        <p className=" text-gray-600">
                        {t("career.procedure.desc_00")}&nbsp;
                        <strong className="underline cursor-pointer text-yellow-600 hover:text-banoo" onClick={btnScroll}>{t("career.procedure.desc_01")}</strong>
                        </p>
                    </li>
                    
                    <li>
                    <p className=" text-gray-600">
                        {t("career.procedure.desc_10")} <strong> {t("career.procedure.desc_11")}</strong> {t("career.procedure.desc_12")} <strong> {t("career.procedure.desc_13")} </strong> {t("career.procedure.desc_14")} <strong className="italic">{t("career.procedure.desc_15")} </strong>
                        </p>
                    </li>
                    <li>
                    <p className=" text-gray-600">
                        <strong>{t("career.procedure.desc_20")} <i>{t("career.procedure.desc_21")} </i>{t("career.procedure.desc_22")}</strong> {t("career.procedure.desc_23")} <strong>{t("career.procedure.desc_24")} </strong>{t("career.procedure.desc_25")} <strong> {t("career.procedure.desc_26")}</strong> {t("career.procedure.desc_23")} <strong>{t("career.procedure.desc_27")}</strong>
                        </p>
                    </li>
                    <li>
                    <p className=" text-gray-600">
                    {t("career.procedure.desc_30")}
                        </p>
                    </li>
                </ul>
            </div>


            </div>

            <div ref={refdest} className="text-center pt-20 pb-10">
                <h2 className="text-3xl pb-10 font-spartan text-banooDark font-bold">
                    Are you ready?
                </h2>
                <Link to="/internship" className="">
                    <button className="font-spartan font-bold tracking-wide bg-yellow-600 w-full md:w-4/5 lg:w-3/5 xl:w-1/2 py-8 rounded-full shadow-xl text-white hover:bg-banooDarker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-banooDark">
                    {t("career.button_apply")}

                    </button>
                
                </Link>

            </div>
            
            {/* catatan */}
            <div className="text-gray-500 font-serif-6 py-10">
                <h2 className="italic pb-4 font-bold text-base font-spartan">
                    {t("career.notes.title")}
                </h2>
                <ul className="list-disc pl-6 text-sm md:text-base">
                    <li>
                        <p>
                            {t("career.notes.desc_0")}
                        
                        </p>
                        
                    </li>
                    <li>
                        <p>
                        {t("career.notes.desc_1")}
                        </p>
                        
                    </li>
                    <li>
                        <p>
                        {t("career.notes.desc_20")} <i>{t("career.notes.desc_21")} </i>{t("career.notes.desc_22")} <i>{t("career.notes.desc_23")} </i>{t("career.notes.desc_24")}
                        </p>
                        
                    </li>
                    
                    <li>
                        <p>
                        {t("career.notes.desc_30")} <ins>{t("career.notes.desc_31")}</ins> {t("career.notes.desc_32")} 
                        </p>
                        
                    </li>
                </ul>
            </div>

            
            
            </section>
            {/* <Footer/> */}
        </section>
    )
}
