import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';

import PageChangerButton from '../components/pageChangerButton';
import '../style/section.css';

const Certification = () => {
    const [user, setUser] = useState(null);
    const [challenges, setChallenges] = useState(null);
    const templateRef = useRef(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user');
                setUser(response.data);
            } catch (err) {
                console.error('Error fetching data:', err.message);
            }
        };

        const fetchChallengesData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/challenges');
                setChallenges(response.data);
            } catch (err) {
                console.error('Error fetching data:', err.message);
            }
        };

        fetchUserData().then();
        fetchChallengesData().then();
    }, []);

    const generateAndDownloadImage = () => {
        const template = templateRef.current;

        html2canvas(template).then((canvas) => {
            const dataURL = canvas.toDataURL();
            const downloadLink = document.createElement('a');
            downloadLink.href = dataURL;
            downloadLink.download = 'generated_image.png';
            downloadLink.click();
        });
    };

    const generateAndOpenInInstagram = () => {
        alert("Trust me, it'll work.");
    };

    return (
        <div>
            <div className="section-container">
                <h1 className="section-title">Ma dernière certification</h1>
                <div ref={templateRef}>
                    <div style={{textAlign: 'center', padding: '20px'}}>
                        <h1>Certificat de Don du Sang</h1>
                        <p>Cette certification est délivrée par l'Etablissement Français du Sang et remercie</p>
                        <h2 style={{color: 'blue'}}>{user?.first_name} {user?.last_name}</h2>
                        <p>pour avoir relevé le challenge suivant:</p>
                        <p>"{challenges?.current?.title}"</p>
                    </div>
                    <div style={{padding: '20px', lineHeight: '1.6'}}>
                        <p>
                            En contribuant au don du sang, {user?.first_name} {user?.last_name} a apporté un soutien
                            précieux à la communauté.
                            Le geste altruiste de donner son sang permet de sauver des vies et de faire une différence
                            significative
                            dans le monde.
                        </p>
                        <p>
                            Nous vous encourageons tous à suivre l'exemple de {user?.first_name} et à participer
                            activement
                            au don du sang.
                            Chaque don compte et peut avoir un impact positif sur la vie d'une personne dans le besoin.
                        </p>
                        <p>
                            Le don du sang est une expérience gratifiante qui contribue à promouvoir la santé et le
                            bien-être de la
                            société.
                            Merci à tous les donneurs qui font partie de cette noble cause.
                        </p>
                    </div>

                    <div style={{backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center'}}>
                        <p>
                            <strong>Etablissement Français du Sang</strong>
                            <br/>
                            Fait la promotion de l'application mobile:
                            <br/>
                            <strong>Don de sang</strong>
                            <br/>
                            Suivez-nous sur Instagram: <strong>@efs_officiel</strong>
                        </p>
                    </div>
                </div>
                <div>
                    <div className="section-button-container">
                        <button className="section-button" onClick={generateAndDownloadImage}>
                            Télécharger mon certificat
                        </button>
                        <button className="section-button" onClick={generateAndOpenInInstagram}>
                            Partager sur instagram
                        </button>
                        <PageChangerButton to="/" buttonText="Go back to profile"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certification;
