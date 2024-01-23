import React, { useEffect, useState } from "react";
import axios from "axios";
import PageChangerButton from "../components/pageChangerButton";
import "../style/mainPage.css";

const MainPage = () => {
    const [user, setUser] = useState(null);
    const [challenges, setChallenges] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/user");
                setUser(response.data);
            } catch (err) {
                console.error("Error fetching user data:", err.message);
            }
        };

        const fetchChallengesData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/challenges");
                setChallenges(response.data);
            } catch (err) {
                console.error("Error fetching challenges data:", err.message);
            }
        };

        fetchUserData();
        fetchChallengesData();
    }, []);

    const normalizeDate = (inputDate) => {
        const date = new Date(inputDate);
        const formattedDate = `${(date.getMonth() + 1)
            .toString()
            .padStart(2, "0")}/${date.getDate().toString().padStart(2, "0")}/${date.getFullYear()}`;
        return formattedDate;
    };

    return (
        <div className="main-page-container">
            <h1 className="page-title">Main Page</h1>
            <div className="user-info">
                <p>
                    Your name is {user?.first_name || "X"} {user?.last_name || "X"}<br />
                    Your blood group is {user?.blood_group || "X"}<br />
                    Currently, you are on challenge n°{user?.current_challenge_id || "X"}<br /><br />
                    Your current challenge is: {challenges?.current?.title || "No current challenge"}<br />
                    This challenge will end on {normalizeDate(challenges?.current?.end_date)}<br /><br />
                    The next one will be: {challenges?.next?.title || "No upcoming challenge"}<br />
                    This challenge will start on {normalizeDate(challenges?.next?.start_date)}
                </p>
            </div>
            <div className="button-container">
                <PageChangerButton to="/certification" buttonText="See my last certification" className="rounded-button" />
            </div>
            <div className="button-container">
                <PageChangerButton to="/userQRCode" buttonText="Generate the QR code" className="rounded-button" />
            </div>
        </div>
    );
};

export default MainPage;
