import React, { useContext, useState, useEffect } from "react";
import QRCode from "../GeneralComponent/qrcode";
import { PartnerDetails } from "../context";
import Sticker1 from "./sticker – 1.png";
import Sticker2 from './sticker – 24.png';
import Sticker3 from './sticker – 3.png';
import CustomCanvas from "../GeneralComponent/canvas"
import './index.css'

const imageMap = {
    '1': Sticker1,
    '2': Sticker2,
    '3': Sticker3
}

const Card1 = () => {

    const [businessName, setBusinessName] = useState("");
    const [whatsappName, setWhatsappName] = useState("");
    const [appLink, setAppLink] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [updateCanvas, setUpdateCanvas] = useState(false);
    const [allQR, setAllQR] = useState({});

    const [allSvg, setAllSvg] = useState([]);

    console.log(businessName, websiteLink, "businessName website")

    const [allText, setAllText] = useState({});
    const [productType, setProductType] = useState(1);

    useEffect(() => {
        console.log(713 / businessName.length + 20, 'fontsize')
        const allTextTemp = allText
        allTextTemp['businessName'] = {
            text: businessName,
            color: "black",
            x: 28,
            y: 230,
            font: `${Math.min(713 / businessName.length + 20, 1000)}px  Gotham`,
            // font: 'normal normal 900 90 Gotham',
            // maxWidth: 700,
        }

        allTextTemp['websiteLink'] = {
            text: websiteLink,
            color: '#FFE84D',
            x: 225,
            y: productType!=3 ? 390: 420,
            font: `${Math.min(264 / websiteLink.length + 17, 1000)}px  Gotham`,
            // font: 'normal normal 900 90 Gotham',
            // maxWidth: 700,
        } 

        setUpdateCanvas(!updateCanvas)
        setAllText({ ...allTextTemp })

    }, [businessName, websiteLink])

    useEffect(() => {
        console.log(713 / businessName.length + 20, 'fontsize')
        const allTextTemp = allText
        allTextTemp['phoneNumber'] = {
            text: phoneNumber,
            color: "white",
            x: productType!=3 ? 230: 230,
            y: productType!=3 ? 343: 353,
            font: `normal normal bold ${Math.min(100, 50)}px Gotham`,
            // font: 'normal normal 900 50 Gotham',
            // maxWidth: 1000,
        }

        setUpdateCanvas(!updateCanvas)
        setAllText({ ...allTextTemp })
    }, [phoneNumber])


    useEffect(() => {
        let allSvgTemp = allSvg;
        console.log(businessName)
        allSvgTemp['businessName'] = {}
    },  [])

    useEffect(() => {
        let allQRTemp = allQR;
        let imCanvas = document.getElementById("whatsapp");
        if (imCanvas) {
            let imSrc = imCanvas.toDataURL("image/png")
            console.log(imSrc)
            allQRTemp['whatsappName'] = {
                image: imSrc,
                x: 529,
                y: 310,
                value: whatsappName
            }
            setAllQR({ ...allQRTemp })
        }
    }, [whatsappName])

    useEffect(() => {
        let allQRTemp = allQR;
        let imCanvas = document.getElementById("appLink");
        if (imCanvas) {
            let imSrc = imCanvas.toDataURL("image/png")
            console.log(imSrc)
            allQRTemp['appLink'] = {
                image: imSrc,
                x: 31,
                y: 310,
                value: appLink
            }
            setAllQR({ ...allQRTemp })
        }
    }, [appLink])

    useEffect(() => {
        console.log(websiteLink, "websiteLink in temp")
        let allQRTemp = allQR;
        let imCanvas = document.getElementById("websiteLink");
        if (imCanvas) {
            let imSrc = imCanvas.toDataURL("image/png")
            console.log(imSrc)
            allQRTemp['websiteLink'] = {
                image: imSrc,
                x: productType==3 ? 31: productType==2 ? 529: 1000,
                y: 310,
                value: websiteLink
            }
            setAllQR({ ...allQRTemp })
        }
    }, [websiteLink])

    const handleSelectProduct = (event) => {
        setProductType(event.target.value)
    }

    const getBackgroundImage = () => {
        let num = '1';
        return imageMap[`${productType}`]
    }

    console.log(whatsappName, "whatsapp")
    return (<div className="font">
        <div className="display--flex">
            <div className="form_container">
            <div>
                    <span>Product Type</span>
                    <select name="product" id="product" onChange={handleSelectProduct}>
                        <option value={"1"} selected>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                    </select>   
                </div>
                <div>
                    <span>Business Name</span>
                    <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
                </div>
                <div>
                    <span>Phone Number</span>
                    <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div>
                    <span>Website Link</span>
                    <input type="text" value={websiteLink} onChange={(e) => setWebsiteLink(e.target.value)} />
                </div>
                <div>
                    <span>App Link</span>
                    <input type="text" value={appLink} onChange={(e) => setAppLink(e.target.value)} />
                </div>
                <div>
                    <span>Whatsapp Number</span>
                    <input type="text" value={whatsappName} onChange={(e) => setWhatsappName(e.target.value)} />
                </div>



            </div>

        </div>
        <div>
            {/* <img src={Sticker1} /> */}
            {getBackgroundImage() && <CustomCanvas
                backgroundImage={getBackgroundImage()}
                allText={allText}
                update={updateCanvas}
                allQR={allQR}
            />}

            {whatsappName!="" ? <QRCode
                value={whatsappName}
                id={"whatsapp"}
                size={155}
                src="whatsapp"
            ></QRCode> : null}

            {appLink!="" ? <QRCode
                value={appLink}
                id={"appLink"}
                size={155}
                src="playstore"
            ></QRCode> : null}

            {productType!=="1" && websiteLink && <QRCode
                value={websiteLink}
                id={"websiteLink"}
                size={155}
                src="website"
            ></QRCode>}

            <div>{businessName}</div>
        </div>
    </div>)
}

export default Card1;

// last - global api key 178517768f6cb1fffabddde353eabdf5ee8cd
// first - link
// second - project  name
// ("yellowplatecab.com","ypcab","de75982b30c9fc40cea8f28fff2022ca","d4loUnHmdPYnsC3ztV2yIstLmEvlTjyaQZADIEBH","HhZr3cbms7Jw46hitU7LqrgQaf1cspP1xGmQ27b1","b6d91413052d210801290335a937ce9a"),
// ("website", )
// ("onlinecabs.in", "com-onlinecab-custom-consumerapp", , "178517768f6cb1fffabddde353eabdf5ee8cd")

{/* <div style="text-decoration:none; overflow:hidden;max-width:100%;width:500px;height:500px;"><div id="canvas-for-googlemap" style="height:100%; width:100%;max-width:100%;">
    
    <iframe style="height:100%;width:100%;border:0;" frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Maharaja+Bhog+Premium+Veg+Thali,+Senapati+Bapat+Road,+Laxmi+Society,+Chattushringi,+Shivajinagar,+Pune,+Maharashtra,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
    
</div><a class="google-map-code-enabler" href="https://www.bootstrapskins.com/themes" id="get-data-for-map">premium bootstrap themes</a><style>#canvas-for-googlemap img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}</style></div> */}