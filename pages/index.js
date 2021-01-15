import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import WelcomePage from './welcome_page'
import React from "react";
import matter from "gray-matter";
import Link from "next/link";
  
export default function Index({ experience_data, title, description }) {

  return (
    <>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="Description" content={description}></meta>
          <title>{title}</title>
        </Head>
        <WelcomePage/>
      </Layout>
    </>
  )
}
