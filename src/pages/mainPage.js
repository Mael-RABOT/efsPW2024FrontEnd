import React, { useEffect, useState } from "react";
import axios from "axios";
import PageChangerButton from "../components/pageChangerButton";
import "../style/mainPage.css";
import "../style/section.css"

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
        <div className="section-container">
            <h1 className="page-title">Don de Sang</h1>
            <div className="user-info">
                <p>
                    {user?.first_name || "X"} {user?.last_name || "X"}<br/>
                    Mon groupe sanguin : {user?.blood_group || "X"}<br/>
                    Je suis actuellement au challenge n°{user?.current_challenge_id || "X"}<br/><br/>
                    Mon objectif actuel: {challenges?.current?.title || "No current challenge"}<br/>
                    Il termine le {normalizeDate(challenges?.current?.end_date)}<br/><br/>
                    Mon prochain objectif: {challenges?.next?.title || "No upcoming challenge"}<br/>
                    Il commence le {normalizeDate(challenges?.next?.start_date)}
                </p>
            </div>
            <div className="section-button-container">
                <PageChangerButton to="/certification" buttonText="Voir ma certification" className="rounded-button"/>
                <PageChangerButton to="/userQRCode" buttonText="Générer mon QR code" className="rounded-button"/>
                <PageChangerButton to="/appointment" buttonText="Prendre rendez-vous" className="rounded-button"/>
            </div>
        </div>
    );
};

export default MainPage;
