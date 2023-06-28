import React, { useState, useEffect } from "react";
import QRCodeCanvas from "qrcode.react";
import Whatsapp from "../images/whatsapp.png"
import Playstore from "../images/playstore.png";
import Website from "../images/website.png"

const QR = (props) => {
    return (
        <QRCodeCanvas
        id={props.id}
        value={props.value}
        size={props.size}
        level={"H"}
        includeMargin={false}
        imageSettings={{
          src: props.src=="whatsapp" ? Whatsapp: props.src=="playstore"? Playstore : Website,
          // src: props.src || ",
          x: undefined,
          y: undefined,
          height: 24,
          width: 24,
          excavate: true,
        }}
      />
    )
}

export default QR;