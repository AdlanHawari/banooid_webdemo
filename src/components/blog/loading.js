
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Loading() {
    const {t, i18n}  =useTranslation();
    return (
        <div className="text-center">
            {/* <FontAwesomeIcon icon={faSpinner} className="animate-spin" size="6x"/> */}
            <h1 className="animate-bounce">{t("blog.loading")}. . . .</h1>
        </div>
    )
}
