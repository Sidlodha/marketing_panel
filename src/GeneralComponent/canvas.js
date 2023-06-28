import React, { useContext, useEffect, useRef } from "react";

const CustomCanvas = (props) => {

    const {backgroundImage,  allText, updateCanvas, allQR} = props;
    const canvasRef = useRef(null)

    useEffect(() => {
        const ctx = canvasRef.current.getContext("2d");
        const backgroundImageObj = new Image();
        backgroundImageObj.src = backgroundImage;
        backgroundImageObj.onload = () => {
            canvasRef.current.width = backgroundImageObj.naturalWidth;
            canvasRef.current.height = backgroundImageObj.naturalHeight;
            console.log(backgroundImageObj.naturalHeight, backgroundImageObj.naturalWidth)
            ctx.drawImage(backgroundImageObj, 0, 0, backgroundImageObj.naturalWidth,  backgroundImageObj.naturalHeight);
            Object.keys(allText).map((text) => {
                ctx.font = allText[text].font;
                ctx.fillStyle = allText[text].color || "white";
                ctx.textAlign = "start";
                ctx.fillText(allText[text].text,  allText[text].x, allText[text].y)
            })

            Object.keys(allQR).map(key => {
                if(allQR[key] && allQR[key].value){
                    console.log(allQR[key], key)
                    // if(allQR[key].value){
                    const qrImage = allQR[key]['image']
                    let qrImageObj = new Image();
                    qrImageObj.src = qrImage;
                    if(qrImage){
                        qrImageObj.onload = () => {
                            ctx.drawImage(qrImageObj, allQR[key]['x'], allQR[key]['y'], qrImageObj.naturalWidth, qrImageObj.naturalHeight)   
                        }
                    }
                }
            })

            let data = `<svg viewBox="0 0 74 18">
            <text x="0" y="15">Fit in it</text>
          </svg>`

          var DOMURL = window.URL || window.webkitURL || window;
          var img1 = new Image();
          var svg = new Blob([data], {type: 'image/svg+xml'});
          var url = DOMURL.createObjectURL(svg);
          console.log(url);
          img1.onload = function() {
            ctx.drawImage(img1, 25, 70);
            DOMURL.revokeObjectURL(url);
         }
        }
    },  [backgroundImage, allText, updateCanvas, allQR])

    return <div>
        <canvas className="" ref={canvasRef}/>
    </div>
}

export default CustomCanvas;