import Container from '../components/container'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Link from 'react';

import MarkdownTimline from '../components/markdown_timeline'

export default function WelcomePage({ experience_data, education_data }) {
    const educationList = education_data.map((data_element) => matter(data_element));

    const renderers = {
        paragraph: 'h3',
    };


    return (
        <>
            <Layout>
                <Head>
                    <title>Caelan.</title>
                </Head>
                <div class="w-full flex h-full items-center justify-center">

                    <div class="pt-32 flex-wrap h-full items-center justify-center text-lg" style={{width: '75%'}}>
                        <div class="  flex flex-row items-center justify-center">
                            <div class=" relative w-48 h-48 object-contain rounded-full border-solid border-18 border-white float-left ">
                                <Image class="relative w-64 h-64 rounded-full mx-auto object-cover" src="/assets/images/profile.jpg" alt="me" layout="fill"></Image>
                            </div>
                            <p class="font-sans text-primary w-2/3 pl-12">
                                Hi! My name’s Caelan. I’m 22 years old based out of Melbourne, Australia
                            <br />
                                <br />
                            I’ve been making software, music and things in general since I was young and have a passion for maths and physics that led me to a degree from the University of Melbourne
                        </p>
                        </div>

                        <div class="  flex flex-row items-center justify-center">
                            <p class="font-sans text-primary w-2/3 pl-12">
                                Since 2018 I’ve been creating apps and websites for businesses and institutions under the name <b>Apollo App Development</b>. In doing so, I’ve been priveleged to do work for companies across Europe and Australia including <a href="https://www.unimelb.edu.au/"><b>The University of Melbourne</b></a>, <a href="https://robaws.be/"><b>ROBAWS</b></a>, <a href="https://www.mtr.co.uk/"><b>MTR Ltd</b></a> and <a href="https://www.luxewatches.co.uk/"><b>Luxe Watches</b></a>
                            </p>
                            <img class=" w-1/6 transform rotate-11 animate-wiggle float-right " src={require('../public/assets/images/phone.svg')} />
                        </div>

                        <div class="  flex flex-row items-center justify-center">
                            <img class=" w-1/5 transform rotate-11 animate-wiggle float-right " src={require('../public/assets/images/laptop.svg')} />

                            <p class="font-sans text-primary w-2/3 pl-12">
                                In my spare time I work on tech and startup projects from 3D graphics engines to a <a href="https://github.com/caelan-a/StudyNow"><b>ML-driven free seat finder</b></a> for university students</p>
                        </div>


                        <div class="  flex flex-row items-center justify-center">

                            <p class="font-sans text-primary w-2/3 pl-12">
                                I also love to play jazz whether it be on keys, strings or saxophone.  Take a <a href="https://soundcloud.com/caelan-anderson"><b>listen!</b></a></p>
                            <img class=" w-1/5 transform rotate-11 animate-wiggle float-right " src={require('../public/assets/images/saxophone.svg')} />

                        </div>
                    </div>
                </div>
                <MarkdownTimline data={experience_data} highlightFirst={false}  title="Experience" ></MarkdownTimline>
                <br/>
                <br/>
                <MarkdownTimline data={education_data} highlightFirst={false}  title="Education" ></MarkdownTimline>


            
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