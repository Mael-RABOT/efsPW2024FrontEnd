import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/section.css';

const PageChangerButton = ({ to, buttonText }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(to)
    }

    return (
        <button onClick={handleClick} className="section-button">
            {buttonText}
        </button>
    )
}

export default PageChangerButton
