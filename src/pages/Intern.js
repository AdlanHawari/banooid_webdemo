import React from 'react'
import FormIntern from '../components/FormIntern'
import { useTranslation } from 'react-i18next'

export default function Intern() {
    document.title="Banoo - Internship Form";
    const {t, i18n}  =useTranslation();
    return (
        <div className="pt-20 pb-60 px-6 md:px-20">
            <h2 className="pt-20 font-spartan font-bold text-2xl md:text-4xl text-center text-banooGray">{t("internship_form.title")}</h2>
            <FormIntern t={t}/>
            
        </div>
    )
}
