import React, { useContext, useState, useEffect } from "react";
import QRCode from "../GeneralComponent/qrcode";
import { PartnerDetails } from "../context";
import CustomCanvas from "../GeneralComponent/canvas"
import './index.css'

import Mumbai1 from '../images/productTemplateCity/1 – 19.png';
import Mumbai2 from '../images/productTemplateCity/1 – 2.png';
import Mumbai3 from '../images/productTemplateCity/1 – 3.png';

const imageMap = {
    'mumbai1': Mumbai1,
    'mumbai2': Mumbai2,
    'mumbai3': Mumbai3
}

const positionMap = {
    1: {
        "appLink": {
            x: 61,
            y: 612
        },
        "websiteLink": {
            x: 764,
            y: 612
        }
    },
    2: {
        "appLink": {
            x: 62,
            y: 580
        },
        "websiteLink": {
            x: 786,
            y: 580
        },
        "whatsappName": {
            x: 424,
            y: 580
        }
    },
    3: {
        "websiteLink": {
            x: 764,
            y: 612
        }
    }
}

const Card1 = () => {

    const [allCity, setAllCities] = useState([{
        label: 'mumbai',
        value: 'mumbai',
        selected: true
    },{
        label: 'delhi',
        value: 'delhi',
    }])
    const [city, setCity] = useState("mumbai")
    const [businessName, setBusinessName] = useState("");
    const [whatsappName, setWhatsappName] = useState("");
    const [appLink, setAppLink] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [updateCanvas, setUpdateCanvas] = useState(false);
    const [allQR, setAllQR] = useState({});
    const [productType, setProductType] = useState(1);

    console.log(businessName, websiteLink, "businessName website")

    const [allText, setAllText] = useState({});

    useEffect(() => {
        console.log(713 / businessName.length + 20, 'fontsize')
        const allTextTemp = allText
        allTextTemp['businessName'] = {
            text: businessName,
            color: "black",
            x: 28,
            y: 220,
            font: `${Math.min(713 / businessName.length + 20, 82)}px  Gotham`,
            maxWidth: 653,
        }

        setUpdateCanvas(!updateCanvas)
        setAllText({ ...allTextTemp })
    }, [businessName])

    useEffect(() => {
        let allQRTemp = allQR;
        let imCanvas = document.getElementById("whatsapp");
        if (imCanvas) {
            let imSrc = imCanvas.toDataURL("image/png")
            console.log(imSrc)
            allQRTemp['whatsappName'] = {
                image: imSrc,
                x: positionMap[productType]['whatsappName'].x || 0,
                y: positionMap[productType]['whatsappName'].y || 0
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
                x: positionMap[productType]['appLink'].x || 0,
                y: positionMap[productType]['appLink'].y || 0
            }
            setAllQR({ ...allQRTemp })
        }
    }, [appLink])

    useEffect(() => {
        let allQRTemp = allQR;
        let imCanvas = document.getElementById("websiteLink");
        if (imCanvas) {
            let imSrc = imCanvas.toDataURL("image/png")
            console.log(imSrc)
            allQRTemp['websiteLink'] = {
                image: imSrc,
                x: positionMap[productType]['websiteLink'].x || 0,
                y: positionMap[productType]['websiteLink'].y || 0
            }
            setAllQR({ ...allQRTemp })
        }
    }, [websiteLink])

    const getBackgroundImage = () => {
        let num = '1';
        console.log(city)
        console.log(city + productType)
        return imageMap[city + productType]
    }

    const handleSelect = (event) =>  {
        console.log(event.target)
        setCity(event.target.value)
    }

    const handleSelectProduct = (event) => {
        setProductType(event.target.value)
    }

    console.log(whatsappName,allCity, "whatsapp")
    return (<div>
        <div className="display--flex">
            <div className="form_container">
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

                <div>
                    <span>City name</span>
                    <select name="city" id="city" onChange={handleSelect}>
                        {allCity && allCity.map(cityOption => <option value={cityOption.value} selected={cityOption.selected}>{cityOption.label}</option>)}
                    </select>   
                </div>

                <div>
                    <span>Product Type</span>
                    <select name="product" id="product" onChange={handleSelectProduct}>
                        <option value={"1"} selected>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                    </select>   
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
                id={"whatsappName"}
                size={233}
            ></QRCode> : null}
            {appLink!="" ? <QRCode
                value={appLink}
                id={"appLink"}
                size={233}
            ></QRCode> : null}
            {websiteLink!="" ? <QRCode
                value={websiteLink}
                id={"whatsapp"}
                size={233}
            ></QRCode> : null}
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