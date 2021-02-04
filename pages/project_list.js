import Container from '../components/container'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout'

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Link from 'next/link';
import {  AiFillGithub } from 'react-icons/ai';

import MarkdownTimline from '../components/markdown_timeline'

export default function ProjectListPage({ project_list_data }) {
    const projectList = project_list_data.map((data_element) => matter(data_element));

    return (
        <>
            <Layout>
                <Head>
                    <title>Caelan Anderson - Projects</title>
                </Head>
                <div class="flex flex-wrap items-center justify-center pt-16 motion-safe:animate-fadeIn">
                    <div class="w-3/4">
                        <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:lg:grid-cols-1 gap-5">
                            {projectList.map((p, i) => (

                                <Link key={i} href={p.data.redirect_url}>
                                    <div if={"tile-" + i} class="rounded-lg shadow-lg transition transform hover:-translate-y-1 motion-reduce:transition-none "> 
                                        <div class="group relative content-center items-center justify-center " style={{ cursor: 'pointer' }}>
                                            <Image src={p.data.tile_cover_uri} class=" transition duration-500 ease-in-out hover:opacity-80 opacity-100 rounded-lg" width={200} height={200} layout="responsive" priority={true} />
                                            <div class={"absolute left-5 top-3 font-bold text-4xl transition duration-500 ease-in-out md:opacity-0 " + (p.data.professional ? ' opacity-0' : ' group-hover:opacity-100 opacity-100') } style={{ color: p.data.text_color }}>{p.data.title}</div>
                                            <div class="absolute bottom-3 left-5 text-2xl group-hover:opacity-100 opacity-100 md:opacity-0 transition duration-500 ease-in-out" style={{ color: p.data.text_color }}> {p.data.professional ? 'Professional' : 'Personal'}</div>
                                            {/* <div class="absolute bottom-5 right-5  text-xl transition duration-500 ease-in-out group-hover:opacity-100 opacity-100 md:opacity-0" style={{ color: p.data.text_color }}>{p.data.date}</div> */}
                                            <AiFillGithub class={"absolute bottom-3 right-5 " + (!p.data.professional ? '' : 'hidden')}style={{color: 'white'}}/>

                                        </div>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>

            </Layout>
        </>
    );

}


export async function getStaticProps() {
    const siteData = await import(`../config.json`);
    const fs = require("fs");

    const files = fs.readdirSync(`${process.cwd()}/content/projects`, "utf-8");
    const list_projects = files.filter((fn) => fn.endsWith(".md"));
    const project_list_data = list_projects.map((project) => {
        const path = `${process.cwd()}/content/projects/${project}`;
        const rawContent = fs.readFileSync(path, {
            encoding: "utf-8",
        });

        return rawContent;
    });

    return {
        props: {
            project_list_data: project_list_data,
        },
    };
}

