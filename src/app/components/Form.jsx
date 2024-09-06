"use client"
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ReactDOM from 'react-dom'
import Map from "./Map"
import "../../../public/css/form.css"
import { infos, links } from "../../../public/text/info"
// npm i @emailjs/browser

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_pb5eyfz",
                "template_s9zo46c",
                form.current,
                "gGYV5Q7s15LO3_4F_"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <div className="hidden lg:block"><div className="formTable">
                <div className="formContainer">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-cont">
                            <h1 className="form-h1 text-black font-bold">İletişime Geçin</h1>
                        </div>
                        <label className="text-black">Name</label>
                        <input className="bg-white text-black" type="text" name="user_name" />
                        <label className="text-black">Email</label>
                        <input className="bg-white text-black" type="email" name="user_email" />
                        <label className="text-black">Mesaj</label>
                        <textarea className="bg-white text-black" name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </div>
                <div className="infoContainer">
                    <h1 className="inf-h1 text-black font-bold">Konum</h1>
                    <div className="inf-cont">
                        <div className="inf-logo mr-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                        </div>
                        <div className="inf-k">
                            <h1 className="inf-h2 text-black">Adresimiz:</h1>
                            <p className="inf-p text-black">{infos.location}</p>
                        </div>
                    </div>
                    <div className="inf-cont">
                        <div className="inf-logo mr-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                        </div>
                        <div className="inf-k">
                            <h1 className="inf-h2 text-black">Numaramız:</h1>
                            <p className="inf-p text-black">{infos.telNumber}</p>
                        </div>
                    </div>
                    <div className="inf-cont">
                        <div className="inf-logo mr-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
                        </div>
                        <div className="inf-k">
                            <h1 className="inf-h2 text-black">Mail:</h1>
                            <p className="inf-p text-black">{infos.mail}</p>
                        </div>
                    </div>
                    <div className="mapContainer">
                        <Map />
                    </div>


                </div>

            </div>

            </div>
            <div className="block lg:hidden"><div className="formTable ">
                <div className="formContainer wid">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="form-cont">
                            <h1 className="form-h1 text-black font-bold">İletişime Geçin</h1>
                        </div>
                        <label className="text-black">Name</label>
                        <input className="bg-white text-black" type="text" name="user_name" />
                        <label className="text-black">Email</label>
                        <input className="bg-white text-black" type="email" name="user_email" />
                        <label className="text-black">Mesaj</label>
                        <textarea className="bg-white text-black" name="message" />
                        <input type="submit" value="Send" />
                    </form>
                </div>
                <div className="infoContainer wid">
                    <h1 className="inf-h1 text-black font-bold">Konum</h1>
                    <div className="inf-cont">
                        <div className="inf-logo mr-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                            </svg>
                        </div>
                        <div className="inf-k">
                            <h1 className="inf-h2 text-black">Adresimiz:</h1>
                            <p className="inf-p text-black">{infos.location}</p>
                        </div>
                    </div>
                    <div className="inf-cont">
                        <div className="inf-logo mr-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                        </div>
                        <div className="inf-k">
                            <h1 className="inf-h2 text-black">Numaramız:</h1>
                            <p className="inf-p text-black">{infos.telNumber}</p>
                        </div>
                    </div>
                    <div className="inf-cont">
                        <div className="inf-logo mr-8">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg>
                        </div>
                        <div className="inf-k">
                            <h1 className="inf-h2 text-black">Mail:</h1>
                            <p className="inf-p text-black">{infos.mail}</p>
                        </div>
                    </div>
                    <div className="mapContainer">
                        <Map />
                    </div>


                </div>

            </div>

            </div>
        </div>

    );
};

export default Contact;

// Styles
