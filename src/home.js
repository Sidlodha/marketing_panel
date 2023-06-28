import React, { useContext } from "react";
import { PartnerDetails } from "./context"

const HomePage = () => {
    const {
        businessName,
        setBusinessName,
        whatsappName,
        setWhatsappName,
        appLink,
        setAppLink,
        websiteLink,
        setWebsiteLink,
        phoneNumber,
        setPhoneNumber
    } = useContext(PartnerDetails);

    console.log(businessName, "Business name")
    return (<div>
        <div className="">
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
    </div>)
}

export default HomePage;