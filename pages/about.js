import Container from '../components/container'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Link from 'react';

import MarkdownTimline from '../components/markdown_timeline'
import Skills from '../components/skills';
import { FaCode, FaPaintBrush, FaReact, FaWordpress } from 'react-icons/fa';


const programmingSkills = [
    {
        name: 'Python',
        level: 'Expert',
        color: '#c38d9e',
        percentage: 100,
    },
    {
        name: 'SQL',
        level: 'Intermediate',
        color: '#c38d9e',
        percentage: 50,
    },
    {
        name: 'Dart',
        level: 'Expert',
        percentage: 100,
        color: '#c38d9e',
    },
    {
        name: 'C / C++',
        level: 'Intermediate',
        percentage: 50,
        color: '#c38d9e',
    },
    {
        name: 'Java',
        level: 'Advanced',
        percentage: 75,
        color: '#c38d9e',
    },
    {
        name: 'HTML/CSS',
        level: 'Advanced',
        percentage: 75,
        color: '#c38d9e',
    },
    {
        name: 'JavaScript',
        level: 'Advanced',
        percentage: 75,
        color: '#c38d9e',
    },
]


const designSkills = [
    {
        name: 'Adobe Illustrator',
        level: 'Advanced',
        color: '#c38d9e',
        percentage: 75,
    },
    {
        name: 'Adobe Photoshop',
        level: 'Advanced',
        percentage: 75,
        color: '#Advanced',
    },
    {
        name: 'Figma',
        level: 'Advanced',
        percentage: 75,
        color: '#c38d9e',
    },
]


export default function AboutPage({ experience_data, education_data }) {
    const educationList = education_data.map((data_element) => matter(data_element));

    const renderers = {
        paragraph: 'h3',
    };


    return (
        <>
            <Layout>
                <Head>
                    <title>Caelan Anderson - About</title>
                </Head>
                <div class="w-full flex h-full justify-center motion-safe:animate-fadeIn">

                    <div class="pt-20 flex-wrap h-full items-center text-lg text-center md:text-left w-3/5 space-y-20">

                        <div class=" flex flex-col md:flex-row items-center justify-between md:space-x-20 space-x-0">
                            <img class="inline-block w-48 rounded-full ring-2 ring-white " src="/assets/images/profile.jpg" alt="" />
                            <p class="font-sans text-primary pt-10">
                                Hi! My name’s Caelan. I’m 22 years old based out of Melbourne, Australia
                            <br />
                                <br />
                            I’ve been making software, music and things in general since I was young and have a passion for maths and physics that led me to a degree from the University of Melbourne
                        </p>
                        </div>

                        <div class="  flex flex-col md:flex-row items-center justify-between md:space-x-20 space-x-0">

                            <p class="font-sans text-primary md:w-2/3 md:order-1 order-3">
                                Since 2018 I’ve been creating apps and websites for businesses and institutions under the name <b>Apollo App Development</b>. In doing so, I’ve been priveleged to do work for companies across Europe and Australia including <a href="https://www.unimelb.edu.au/"><b>The University of Melbourne</b></a>, <a href="https://robaws.be/"><b>ROBAWS</b></a>, <a href="https://www.mtr.co.uk/"><b>MTR Ltd</b></a> and <a href="https://www.luxewatches.co.uk/"><b>Luxe Watches</b></a>
                            </p>
                            <img class="w-60 transform rotate-11 animate-wiggle float-right order-2 pb-20 md:pb-0" src={require('../public/assets/images/phone.svg')} />

                        </div>

                        <div class="   flex flex-col md:flex-row items-center justify-between md:space-x-20 space-x-0">
                            <img class="w-72 transform rotate-11 animate-wiggle float-right " src={require('../public/assets/images/laptop.svg')} />

                            <p class="font-sans text-primary md:w-2/3 pt-20 md:pt-0">
                                In my spare time I work on tech and startup projects from 3D graphics engines to a <a href="https://github.com/caelan-a/StudyNow"><b>ML-driven free seat finder</b></a> for university students</p>
                        </div>


                        <div class=" max-w-96 flex flex-col md:flex-row items-center  justify-between md:space-x-20 space-x-0">

                            <p class="font-sans text-primary  md:order-1 order-3 pb-20 md:pb-0">
                                I also love to play jazz whether it be on keys, strings or saxophone.  Take a <a href="https://soundcloud.com/caelan-anderson"><b>listen!</b></a></p>
                            <img class="w-72 transform rotate-11 animate-wiggle float-right pb-20 md:pb-0  order-2" src={require('../public/assets/images/saxophone.svg')} />

                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <MarkdownTimline data={experience_data} highlightFirst={false} title="Experience" ></MarkdownTimline>
                    <br />
                    <br />
                    <MarkdownTimline data={education_data} highlightFirst={false} title="Education" ></MarkdownTimline>
                </div>

                <p class="font-sans text-primary text-6xl items-center justify-center text-center pt-10 pb-10 lg:pb-0">
                    Skills </p>
                <div class="flex flex-col lg:flex-row justify-between">
                    <div class="flex flex-col lg:w-1/2 items-center">
                        <FaCode style={{ width: '50px', height: '50px', color: '#555555' }} />
                        <Skills color='#ffbe2c' skillsData={programmingSkills} />
                    </div>

                    <div class="flex flex-col lg:w-1/2 items-center">
                        <FaPaintBrush style={{ width: '50px', height: '50px', color: '#555555' }} />
                        <Skills color='#c38d9e' skillsData={designSkills} />
                    </div>
                </div>

                {/* <div>
                    <div class="m-10 pb-5">
                        <p class="font-sans text-primary text-6xl items-center justify-center text-center pb-5">
                            Frameworks
                    </p>
                        <div class="flex flex-wrap space-x-5 justify-center">
                        <div>
                                <Image src="/assets/icons/flutter.png" width={50} height={50} style={{color: 'red'}} />
                            </div>
                            <FaWordpress style={{ width: '50px', height: '50px', color: '#aaaaaa' }} />
                            <FaReact style={{ width: '50px', height: '50px', color: '#aaaaaa' }} />


                            <div>
                                <Image src="/assets/icons/sql.png" width={50} height={50} style={{color: '#aaaaaa'}} />
                            </div>
                        </div>
                    </div>
                </div> */}
            </Layout>
        </>
    );

}


export async function getStaticProps() {
    const siteData = await import(`../config.json`);
    const fs = require("fs");

    const files = fs.readdirSync(`${process.cwd()}/content/experience`, "utf-8");
    const list_experience = files.filter((fn) => fn.endsWith(".md"));
    const experience_data = list_experience.map((experience) => {
        const path = `${process.cwd()}/content/experience/${experience}`;
        const rawContent = fs.readFileSync(path, {
            encoding: "utf-8",
        });

        return rawContent;
    });

    const education_files = fs.readdirSync(`${process.cwd()}/content/education`, "utf-8");
    const list_education = education_files.filter((fn) => fn.endsWith(".md"));
    const education_data = list_education.map((education) => {
        const path = `${process.cwd()}/content/education/${education}`;
        const rawContent = fs.readFileSync(path, {
            encoding: "utf-8",
        });

        return rawContent;
    });

    return {
        props: {
            experience_data: experience_data,
            education_data: education_data,
            title: siteData.default.title,
            description: siteData.default.description,
        },
    };
}