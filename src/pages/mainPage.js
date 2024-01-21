import React, { useEffect, useState } from "react"
import axios from "axios"

import PageChangerButton from "../modules/pageChangerButton"

const MainPage = () => {
    const [user, setUser] = useState(null)
    const [challenges, setChallenges] = useState(null)

    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/user")
                setUser(response.data)
            } catch (err) {
                console.error("Error fetching data:", err.message)
            }
        }

        const fetchChallengesData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/challenges")
                setChallenges(response.data)
            } catch (err) {
                console.error("Error fetching data:", err.message)
            }
        }

        fetchUserData().then()
        fetchChallengesData().then()
    }, [])

    const normalizeDate = (inputDate) => {
        const date = new Date(inputDate)
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const day = String(date.getDate()).padStart(2, '0')
        const year = date.getFullYear()

        return `${month}/${day}/${year}`
    }

    return (
        <div>
            <h1 style={centerStyle}>Main Page</h1>
            <div style={centerStyle}>
                <p>
                    Your name is {user?.first_name || "X"} {user?.last_name}<br/>
                    Your blood group is {user?.blood_group}<br/>
                    Currently, you are on the challenge n°{user?.current_challenge_id}<br/><br/>
                    Your current challenge is: {challenges?.current?.title}<br/>
                    This challenge will end on {normalizeDate(challenges?.current?.end_date)}<br/><br/>
                    The next one will be: {challenges?.next?.title}<br/>
                    This challenge will start on {normalizeDate(challenges?.next?.start_date)}
                </p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <PageChangerButton to="/certification" buttonText="See my last certification"/>
                <PageChangerButton to="/userQRCode" buttonText="Generate the QR code"/>
            </div>
        </div>
    )
}

export default MainPage
