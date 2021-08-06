import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Loading() {
    return (
        <div className="text-center">
            {/* <FontAwesomeIcon icon={faSpinner} className="animate-spin" size="6x"/> */}
            <h1 className="animate-bounce">Loading Content. . . .</h1>
        </div>
    )
}
