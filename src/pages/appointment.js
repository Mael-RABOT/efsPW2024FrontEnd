import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PageChangerButton from '../components/pageChangerButton'
import DonationTypeSelector from "../components/donationTypeSelector";
import "../style/section.css"
import axios from "axios";

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedDonationType, setSelectedDonationType] = useState(null)

    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    const handleAppointment = () => {
        if (!selectedDate || !selectedDonationType) return
        selectedDate.setDate(selectedDate.getDate() + 1)
        axios.post("http://localhost:8080/appointment", {
            "date": selectedDate.toISOString().split('T')[0],
            "donation_type": selectedDonationType
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="section-container">
            <h1 className="section-title">Prendre Rendez-vous</h1>
            <div className="section-content">
                <div className="section-button-container">
                    <p className="mb-2">Choisir la date:</p>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                    />
                    <br />
                    <DonationTypeSelector selectedDonationType={selectedDonationType} setSelectedDonationType={setSelectedDonationType}/>
                </div>
                <button className="section-button" onClick={handleAppointment}>
                    Valider mon rendez-vous
                </button>
            </div>
            <div className="section-button-container">
                <PageChangerButton to="/" buttonText="Retourner sur la page d'accueil"/>
            </div>
        </div>
    )
}

export default Appointment
