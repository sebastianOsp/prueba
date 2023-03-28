import React, { useRef, useState } from "react";
import './ContactUS.css';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {

    const [inputText,setInputText] = useState('');
    const [savedData,setSavedData] = useState(false);

    const handleInputChange = (event) => {
        const text = event.target.value
        setInputText(text);
        console.log(inputText);

        if (text === '') {
            setSavedData(false)
        }
    }

    const saveData = () => {
        localStorage.setItem('correo', inputText);
        alert('has guardado tu correo');
        setSavedData(true);
    }

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_l5mk12c";
        const templateId = "template_6a6k24v";
        const apikey = "oF51lgRpx04WMHheR";

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
        .then( result => console.log(result.text))
        .catch( error => console.error(error) )
    }

    return (
        <form ref={refForm} action="" onSubmit={handleSubmit}>
            <div className="header-contact">
                <h2>Contact Us</h2>
                <p>Please fill this form</p>
            </div>
            <fieldset className="field-name">
                <label className="symbol-required name" htmlFor="">Name</label>
                <input name="username" type="text"  placeholder="type the name"  required/>
            </fieldset>
            <fieldset className="field-email">
                <label className="symbol-required name" name="email">Email</label>
                <input name="email" id="email" type="email" placeholder="type the email" onChange={handleInputChange} required/>
            </fieldset>
            <fieldset className="field-message">
                <label className="symbol-required name">Message</label>
                <textarea maxLength="500" placeholder="type your message" name="message" id="" cols="30" rows=""></textarea>
                </fieldset>
            <button onClick={saveData} className="btn-send">Send</button>
        </form>
    )
}