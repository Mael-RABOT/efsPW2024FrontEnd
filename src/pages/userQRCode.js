import React from 'react'
import QRCode from 'qrcode.react'
import PageChangerButton from "../modules/pageChangerButton";

const UserQRCode = () => {
  const userId = 1 // Demo User

  return (
    <div>
        <h1>User QR Code</h1>
        <QRCode value={userId} />
        <div>
            <PageChangerButton to="/" buttonText="Go back to your profile"/>
        </div>
    </div>
  )
}

export default UserQRCode
