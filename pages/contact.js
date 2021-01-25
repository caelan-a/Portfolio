import React, { useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Layout from '../components/layout'
import TextareaAutosize from "react-autosize-textarea"
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaSoundcloud, } from 'react-icons/fa';

export default function ContactPage({ }) {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    })
    const [inputs, setInputs] = useState({
        email: '',
        message: '',
        name: '',
    })
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            })
            setInputs({
                email: '',
                message: '',
            })
        } else {
            setStatus({
                info: { error: true, msg: msg },
            })
        }
    }
    const handleOnChange = (e) => {
        e.persist()
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        })
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/xqkgnqnp',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Thank you, your message has been submitted.'
                )
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error)
            })
    }
    return (
        <Layout>
            <Head>
                <title>Caelan Anderson - Contact</title>
            </Head>
            {/* <div class="flex flex-row h-screen">
                <div class="w-1/4 h-1/2" style={{backgroundColor:'red'}}>

                </div>
                <div class="w-3/4 h-1/2"  style={{backgroundColor: 'blue'}}>

                </div>
            </div> */}

            <div class="flex flex-col lg:flex-row items-center justify-center lg:pt-20 lg:pb-20 motion-safe:animate-fadeIn h-screen">
                <div class="md:flex flex-col md:flex-row shadow-lg  items-center justify-center h-full "style={{ backgroundColor: "#C2D6DB" }}>
                    <div class="hidden md:flex flex-col lg:w-1/4 space-y-10 items-center justify-center pt-20 h-full" >
                        <img class="inline-block w-2/5 lg:w-3/5 rounded-full ring-8 ring-white " src="/assets/images/profile.jpg" alt="" />
                        <div class="flex flex-row items-center justify-center space-x-10 space-y-0 lg:pt-5 pb-10" >
                            <a href='https://www.linkedin.com/in/caelan-anderson-539547154'>
                                <AiFillLinkedin style={{ width: '25px', height: '25px', color: "white" }} />

                            </a>

                            <a href='https://github.com/caelan-a'>
                                <AiFillGithub style={{ width: '25px', height: '25px', color: "white" }} />

                            </a>

                            <a href='https://soundcloud.com/caelan-anderson'>
                                <FaSoundcloud style={{ width: '25px', height: '25px', color: "white" }} />

                            </a>



                        </div>

                    </div>
                    <div class="flex flex-col lg:w-3/4 space-y-10 shadow-sm px-20 py-10 h-full" style={{ backgroundColor: "white" }}>
                        <div className="">
                            <div className=" space-y-4 pt-5">
                                <h1 class="text-4xl ">Contact Me</h1>
                                <p class="text-2xl ">Get in touch about work or projects!</p>
                            </div>
                        </div>
                        <div className="class">
                            <form onSubmit={handleOnSubmit} class="flex flex-col lg:w-1/2 space-y-5">

                                <div class="flex flex-col lg:flex-row">
                                    </div>

                                <div className="">
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        value={inputs.name}
                                        name="fname"
                                        style={{
                                            height: '48px',
                                            width: '100%',
                                            border: 'none',
                                            borderRadius: '0px',
                                            borderColor: 'grey',
                                            borderBottom: '1px solid grey',
                                            margin: '8px 0px',
                                            boxShadow: 'none',
                                            padding: '0px',
                                            outline: 'none',
                                        }}
                                        onChange={handleOnChange} />
                                </div>

                                <div className="">
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email"

                                        name="_replyto"
                                        onChange={handleOnChange}
                                        required
                                        value={inputs.email}
                                        style={{
                                            height: '48px',
                                            width: '100%',
                                            border: 'none',
                                            borderColor: 'grey',
                                            borderRadius: '0px',
                                            borderBottom: '1px solid grey',
                                            margin: '8px 0px',
                                            boxShadow: 'none',
                                            padding: '0px',
                                            outline: 'none',
                                        }}
                                    />
                                </div>
                                <div className="">
                                    <div className="">
                                        <TextareaAutosize
                                            id="message"
                                            placeholder="Message"
                                            onChange={handleOnChange}
                                            required
                                            value={inputs.message}
                                            class="focus:border-col-orange"
                                            style={{
                                                minHeight: "75px",
                                                maxHeight: "75px",
                                                width: "100%",
                                                border: "none",
                                                outline: 'none',
                                                borderRadius: "5px",
                                                borderWidth: "1px",
                                                borderColor: "grey",
                                                margin: "8px 0px",
                                                resize: "none",
                                                padding: "5px",
                                                paddingBottom: "14px",
                                                WebkitAppearance: "none",
                                                MozAppearance: "none"
                                            }} />

                                    </div>
                                    <div className="">
                                        <button 
                                        style={{
                                            padding: '0px 24px',
                                            height: '48px',
                                            backgroundColor: '#F83850',
                                            margin: '16px 0px',
                                            border: 'none',
                                            borderRadius: '0px',
                                            cursor: 'pointer',
                                            color: '#fff',
                                            borderRadius: '6px'
                                        }}
                                        type="submit" disabled={status.submitting}>
                                            {!status.submitting
                                                ? !status.submitted
                                                    ? 'Submit'
                                                    : 'Submitted'
                                                : 'Submitting...'}
                                        </button>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>




        </Layout>
    )
}