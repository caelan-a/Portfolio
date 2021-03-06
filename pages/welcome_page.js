import Container from '../components/container'
import Image from 'next/image'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaSoundcloud, } from 'react-icons/fa';
import Link from 'next/link';
import Particles from 'react-particles-js';

import styles from './welcome_page.module.css';

export default function WelcomePage({ }) {
    return (
        <>

            <div class="motion-safe:animate-fadeIn h-screen" >
                <div class={"flex items-center justify-center " + styles.headerBox}>

                    <div class="">
                        <Particles
                            style={{ position: 'absolute', top: '0', left: '0', paddingRight: '10%', paddingLeft: '10%' }}
                            params={require('../particlesjs-config.json')}
                            width='100%'
                            height='50%'
                        >
                        </Particles>

                    </div>

                    <div class={"relative flex items-center justify-center  " + styles.header}>
                        <img class="absolute w-full transform rotate-20" src={require('../public/assets/images/cloud.svg')} />
                        <img class="absolute w-3/5 rounded-full ring-8 ring-white " src="/assets/images/profile.jpg" alt="" />
                    </div>

                </div>


                <div class="h-96 flex flex-wrap  items-center justify-center ">

                    <div class=" text-center lg:w-3/5 px-5  ">

                        <p class={"text-3xl md:text-4xl " + styles.name}>
                            Hi there, I’m <b>Caelan!</b>
                        </p>
                        <br></br>
                        <p class={"text-lg md:text-xl lg:text-2xl  " + styles.about}>
                            I’m a creator who uses technology and design to make things.
                <br></br><br></br>
                I studied physics at university and have been programming for most of my life.
                I love to learn everything from music to science and am always looking for a new challenge.

            </p>

                        <div class="flex flex-col md:flex-row items-center justify-center  pt-2 md:space-x-4 my-5">
                            <Link href="/about" passHref>
                                <button class='relative text-primary p-5 rounded text-2xl  overflow-visible  hover:bg-gray-100 w-60 ' >
                                    Get to know me
                </button>
                            </Link>
                            <Link href="/project_list" passHref>
                                <button class='relative text-primary p-5 rounded text-2xl  overflow-visible  hover:bg-gray-100 w-60 ' >
                                    See my work
                </button>
                            </Link>
                            <Link href="/contact" passHref>
                                <button class='relative text-primary p-5 rounded text-2xl  overflow-visible  hover:bg-gray-100 w-60 ' >
                                    Contact me
                </button>
                            </Link>
                        </div>
                        <div class="flex flex-row items-center justify-center space-x-10 pt-5 pb-10" style={{ color: "#555555" }}>
                            <a href='https://www.linkedin.com/in/caelan-anderson-539547154'>
                                <AiFillLinkedin style={{ width: '25px', height: '25px' }} />

                            </a>

                            <a href='https://github.com/caelan-a'>
                                <AiFillGithub style={{ width: '25px', height: '25px' }} />

                            </a>

                            <a href='https://soundcloud.com/caelan-anderson'>
                                <FaSoundcloud style={{ width: '25px', height: '25px' }} />

                            </a>



                        </div>





                    </div>

                </div>
            </div>
        </>
    );

}
