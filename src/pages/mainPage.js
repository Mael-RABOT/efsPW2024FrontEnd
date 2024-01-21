import React, { useEffect, useState } from "react"
import axios from "axios"

import PageChangerButton from "../modules/pageChangerButton";

const MainPage = () => {
    const [user, setUser] = useState(null)
    const [challenges, setChallenges] = useState(null)

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

    return (
        <div>
            <h1>Main Page</h1>
            <div>
                <p>Your name is {user?.first_name || "X"} {user?.last_name}</p>
                <p>Your blood group is {user?.blood_group}</p>
                <p>Currently, you are on the challenge n°{user?.current_challenge_id}</p>
            </div>
            <p>------</p>
            <div>
                <p>Your current challenge is: {challenges?.current?.title}</p>
                <p>This challenge will end on {challenges?.current?.end_date}</p>
                <p>---</p>
                <p>The next one will be: {challenges?.next?.title}</p>
                <p>This challenge will start on {challenges?.next?.start_date}</p>
            </div>
            <p>------</p>
            <div>
                <PageChangerButton to="/userQRCode" buttonText="Generate the QR code"/>
            </div>
        </div>
    )
}

export default MainPage;
