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
            <div class="flex flex-col items-center">
                <br />
                <br />
                <br />
                <br />
                <div class="flex flex-row  shadow-lg w-1/2">
                    <div class="flex flex-col w-1/4 space-y-10 items-center justify-center" style={{ backgroundColor: "#C2D6DB" }}>
                        <img class="inline-block w-3/5 rounded-full ring-8 ring-white " src="/assets/images/profile.jpg" alt="" />
                        <div class="flex flex-row items-center justify-center space-x-10 pt-5 pb-10" style={{ color: "#555555" }}>
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
                    <div class="flex flex-col w-3/4 space-y-10 shadow-sm p-20">
                        <div className="">
                            <div className=" space-y-4">
                                <h1 class="text-4xl ">Contact Me</h1>
                                <p class="text-2xl ">Get in touch about work or projects!</p>
                            </div>
                        </div>
                        <div className="class">
                            <form onSubmit={handleOnSubmit} class="flex flex-col w-1/2 space-y-5">



                                <div className="">
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        value={inputs.name}
                                        name="fname"
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
                                                minHeight: "100px",
                                                maxHeight: "100px",

                                                width: "100%",
                                                border: "none",
                                                outline: "none",
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
                                        <button type="submit" disabled={status.submitting}>
                                            {!status.submitting
                                                ? !status.submitted
                                                    ? 'Submit'
                                                    : 'Submitted'
                                                : 'Submitting...'}
                                        </button>
                                    </div>

                                </div>
                                {/* {status.info.error && (
                                    <div className="error">Error: {status.info.msg}</div>
                                )}
                                {!status.info.error && status.info.msg && <p>{status.info.msg}</p>} */}

                            </form>
                        </div>
                    </div>

                    <style jsx>{`

                    .grid {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        max-width: 1280px;
                        margin-right: auto;
                        margin-left: auto;
                        padding-right: 12px;
                    }

                    .col-4,
                    .col-8 {
                        padding: 8px 12px;
                        box-sizing: border-box;
                    }
                    .col-4 {
                        flex-basis: 50%;
                        max-width: 100%;
                    }
                    .col-8 {
                        flex-basis: 100%;
                        max-width: 100%;
                    }
                    @media only screen and (max-width: 768px) {
                        .grid {
                            flex-direction: column;
                            padding-left: 0px;
                            padding-right: 0px;
                        }
                        .col-4,
                        .col-8 {
                            flex-basis: 100%;
                            max-width: 100%;
                        }
                    }
                    input[type=text], input[type=email] {
                        height: 48px;
                        width: 100%;
                        border: none;
                        border-radius: 0px;
                        border-bottom: 1px solid #121212;
                        margin: 8px 0px;
                        box-shadow: none;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        padding: 0px;
                        outline: none;
                    }

                    ::placeholder {
                        color: #C8CBCE;
                    }

                    ::-ms-input-placeholder {
                        color: #C8CBCE;
                    }

                    button {
                        padding: 0px 24px;
                        height: 48px;
                        background-color: #F83850;
                        margin: 16px 0px;
                        border: none;
                        border-radius: 0px;
                        cursor: pointer;
                        color: #fff;
                    }

                    .disabled {
                        background-color: #fff;
                        color: #121212;
                        cursor: auto;
                        padding-left: 0px;
                    }
                `}</style>
                </div>
            </div>




        </Layout>
    )
}