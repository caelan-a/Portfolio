import Container from '../components/container'
import Image from 'next/image'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FaSoundcloud, } from 'react-icons/fa';
import Link from 'next/link';
import Particles from 'react-particles-js';
export default function WelcomePage({ }) {
    return (
        <>
            <Container>
                <div class="motion-safe:animate-fadeIn">
                    <div style={{ paddingTop: '10px' }}>
                        <Particles
                            style={{ position: 'absolute' }}
                            params={require('../particlesjs-config.json')}
                            width='80%'
                            height='50%'

                        >
                        </Particles>

                    </div>


                    <div class="h-96 flex flex-wrap items-center justify-center pt-24">

                        <div class="flex flex-wrap items-center justify-center">
                            <img class=" w-96 h-96 transform rotate-20" src={require('../public/assets/images/cloud.svg')} />

                            <div class="absolute rounded-full border-solid border-18 border-white" style={{ width: "250px", height: "250px" }}>
                                <Image class="absolute rounded-full mx-auto " src="/assets/images/profile.jpg" alt="me" layout="fill" />
                            </div>
                        </div>

                        <div class=" text-center w-3/4  ">
                            <p class=" text-4xl">
                                Hi there, I’m <b>Caelan!</b>
                            </p>
                            <br></br>
                            <p style={{ fontSize: '1.4em' }}>
                                I’m a creator who uses technology and design to make things.
                <br></br><br></br>
                I studied physics at university and have been programming for most of my life.
                I love to learn everything from music to science and am always looking for a new challenge.

            </p>

                            <div class="pt-2 space-x-4">
                                <Link href="/about" passHref>
                                    <button class='relative text-primary p-10 rounded text-2xl  overflow-visible  hover:bg-gray-100' style={{ width: '300px' }}>
                                        Get to know me
                </button>
                                </Link>
                                <Link href="/project_list" passHref>
                                    <button class='relative text-primary p-10 rounded text-2xl  overflow-visible  hover:bg-gray-100' style={{ width: '300px' }}>
                                        See my work
                </button>
                                </Link>
                                <Link href="/contact" passHref>
                                    <button class='relative text-primary p-10 rounded text-2xl  overflow-visible  hover:bg-gray-100' style={{ width: '300px' }}>
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
            </Container>
        </>
    );

}
