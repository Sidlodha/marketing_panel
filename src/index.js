import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PartnerDetails } from './context';

function Final(){
  const [businessName, setBusinessName] = useState("");
  const [whatsappName, setWhatsappName] = useState("");
  const [appLink, setAppLink] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <PartnerDetails.Provider value={{
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
    }}>
      <App />
    </PartnerDetails.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Final />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
