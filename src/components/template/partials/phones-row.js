import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMobile } from '@fortawesome/free-solid-svg-icons'

const PhonesRow = () => {
    return (
        <span className="d-flex align-items-center justify-content-center my-1" >
            <FontAwesomeIcon icon={faPhone} className="mr-1" />
            <a className="text-secondary" href="tel:+551434861376">(14) 3486-1376</a>
            <FontAwesomeIcon icon={faMobile} className="ml-3 mr-1" />
            <a className="text-secondary" href="tel:+5514997210771">(14) 99721-0771</a>
        </span>
    )
}
export default PhonesRow