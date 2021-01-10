import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import WelcomePage from './welcome_page'
import React from "react";
import matter from "gray-matter";
import Link from "next/link";
import ExperienceList from "../components/experience_list"

export default function Index({ experience_data, title, description }) {
  // const RealData = experience_data.map((experience) => matter(experience));
  // const ListItems = RealData.map((listItem) => listItem.data);
  return (
    <>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="Description" content={description}></meta>
          <title>{title}</title>
        </Head>
        <ExperienceList/>
        {/* <WelcomePage /> */}
        {/* <div>
          <ul>
            {ListItems.map((blog, i) => (
              <li key={i}>
                <p class="text-lg">
                  {blog.title}
                </p>
                <p>
                  {blog.subtitle}
                </p>
                <ReactMarkdown escapeHtml={true} source={content} />

                <p class="text-xs">
                  {blog.date}
                </p>
                <br />
              </li>
            ))}
          </ul>
        </div> */}
      </Layout>
    </>
  )
}

// export async function getStaticProps() {
//   const siteData = await import(`../config.json`);
//   const fs = require("fs");

//   const files = fs.readdirSync(`${process.cwd()}/content/experience`, "utf-8");

//   const list_experience = files.filter((fn) => fn.endsWith(".md"));

//   const experience_data = list_experience.map((experience) => {
//     const path = `${process.cwd()}/content/experience/${experience}`;
//     const rawContent = fs.readFileSync(path, {
//       encoding: "utf-8",
//     });

//     return rawContent;
//   });

//   return {
//     props: {
//       experience_data: experience_data,
//       title: siteData.default.title,
//       description: siteData.default.description,
//     },
//   };
// }