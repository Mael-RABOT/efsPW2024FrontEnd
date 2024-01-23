import React from 'react'
import QRCode from 'qrcode.react'
import PageChangerButton from "../components/pageChangerButton"
import '../style/userQRCode.css'

const UserQRCode = () => {
    const userId = 1 // Demo User

    return (
        <div className="qr-code-container">
            <h1 className="qr-code-title">Mon QR code</h1>
            <div className="qr-code">
                <QRCode value={userId.toString()} />
            </div>
            <br />
            <div className="button-container">
                <PageChangerButton to="/" buttonText="Retourner sur la page d'acceuil" className="rounded-button" />
            </div>
        </div>
    )
}

export default UserQRCode
