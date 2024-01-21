import React from 'react'
import QRCode from 'qrcode.react'
import PageChangerButton from "../modules/pageChangerButton";

const UserQRCode = () => {
    const userId = 1 // Demo User

    const centerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
    }

    return (
        <div>
            <h1 style={centerStyle}>User QR Code</h1>
            <div style={centerStyle}>
                <QRCode value={userId} />
            </div>
            <br />
            <div style={centerStyle}>
                <PageChangerButton to="/" buttonText="Go back to your profil"/>
            </div>
        </div>
    )
}

export default UserQRCode
