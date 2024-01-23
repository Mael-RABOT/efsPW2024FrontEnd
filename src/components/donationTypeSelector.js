import React, { useState } from 'react'

const DonationTypeSelector = (props) => {
    const { selectedDonationType, setSelectedDonationType } = props

    const handleDonationTypeChange = (event) => {
        setSelectedDonationType(event.target.value)
    }

    return (
        <div>
            <label>
                <input
                    type="radio"
                    value="sang"
                    checked={selectedDonationType === 'sang'}
                    onChange={handleDonationTypeChange}
                />
                Don de sang<br/>
            </label>
            <label>
                <input
                    type="radio"
                    value="plaquette"
                    checked={selectedDonationType === 'plaquette'}
                    onChange={handleDonationTypeChange}
                />
                Don de plaquette<br />
            </label>
            <label>
                <input
                    type="radio"
                    value="plasma"
                    checked={selectedDonationType === 'plasma'}
                    onChange={handleDonationTypeChange}
                />
                Don de plasma<br/>
            </label>
        </div>
    )
}

export default DonationTypeSelector
