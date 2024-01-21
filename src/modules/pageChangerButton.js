import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageChangerButton = ({ to, buttonText }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(to)
    }

    return (
        <button onClick={handleClick}>
            {buttonText}
        </button>
    )
}

export default PageChangerButton
