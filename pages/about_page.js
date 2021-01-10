import Container from '../components/container'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'

import ExperienceTimeline from '../components/experience_timeline'

export default function WelcomePage({ }) {
    return (
        <>
            <Layout>
                <Head>
                    <title>Caelan.</title>
                </Head>
                <div class="w-full flex h-full items-center justify-center">
                    <div class="pt-32 flex-wrap w-3/4 h-full items-center justify-center text-1xl">

                        <div class="  flex flex-row items-center justify-center">
                            <div class=" relative w-48 h-48 object-contain rounded-full border-solid border-18 border-white float-left ">
                                <Image class="relative w-64 h-64 rounded-full mx-auto object-cover" src="/assets/images/profile.jpg" alt="me" layout="fill"></Image>
                            </div>
                            <p class="font-sans text-primary  w-2/3 pl-12">
                                Hi! My name’s Caelan. I’m 22 years old based out of Melbourne, Australia
                            <br />
                                <br />
                            I’ve been making software, music and things in general since I was young and have a passion for maths and physics that led me to a degree from the University of Melbourne
                        </p>
                        </div>

                        <div class="  flex flex-row items-center justify-center">
                            <p class="font-sans text-primary w-2/3 pl-12">
                                Since 2018 I’ve been creating apps and websites for businesses and institutions under the name <b>Apollo App Development</b>. In doing so, I’ve been priveleged to do work for companies across Europe and Australia including <b>The University of Melbourne</b>, <b>ROBAWS</b>, <b>MTR Ltd</b> and <b>Luxe Watches</b>
                            </p>
                            <img class=" w-1/6 transform rotate-11 animate-wiggle float-right " src={require('../public/assets/images/phone.svg')} />
                        </div>

                        <div class="  flex flex-row items-center justify-center">
                            <img class=" w-1/5 transform rotate-11 animate-wiggle float-right " src={require('../public/assets/images/laptop.svg')} />

                            <p class="font-sans text-primary w-2/3 pl-12">
                                In my spare time I work on tech and startup projects from 3D graphics engines to a <b>ML-driven free seat finder</b> for university students</p>
                        </div>


                        <div class="  flex flex-row items-center justify-center">

                            <p class="font-sans text-primary w-2/3 pl-12">
                                I also love to play jazz whether it be on keys, strings or saxophone.  Take a <b>listen!</b></p>
                            <img class=" w-1/5 transform rotate-11 animate-wiggle float-right " src={require('../public/assets/images/saxophone.svg')} />

                        </div>



                        <br/>
                        <br/>
                        <p class="font-sans text-primary text-6xl items-center justify-center text-center">
                            Experience</p>
                        <br/>
                        <br/>

                    </div>

                </div>

                <ExperienceTimeline />

            </Layout>
        </>
    );

}
