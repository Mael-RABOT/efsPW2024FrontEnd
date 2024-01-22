import React from 'react'
import QRCode from 'qrcode.react'
import PageChangerButton from "../modules/pageChangerButton"
import '../style/userQRCode.css'

const UserQRCode = () => {
    const userId = 1 // Demo User

    return (
        <div className="qr-code-container">
            <h1 className="qr-code-title">User QR Code</h1>
            <div className="qr-code">
                <QRCode value={userId} />
            </div>
            <br />
            <div className="button-container">
                <PageChangerButton to="/" buttonText="Go back to your profile" className="rounded-button" />
            </div>
        </div>
    )
}

export default UserQRCode
