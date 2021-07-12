import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function BtnSlider({ direction, moveSlide }) {
    return (
        <div className = "cursor-pointer"
        onClick={moveSlide}
        // className = {direction ==="next" ? "right-0": "left-0"}
        >
            <FontAwesomeIcon icon={direction === "next" ? faChevronRight : faChevronLeft} size="2x" />
            
        </div>
    )
}
