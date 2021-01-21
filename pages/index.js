import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import WelcomePage from './welcome_page'
import React from "react";
import matter from "gray-matter";
import Link from "next/link";
  
export default function Index({ }) {

  return (
    <>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="Description" content="Caelan Anderson is a software developer and designer with a background in Physics from the University of Melbourne"></meta>
          <link rel="shortcut icon" href="/favicon.ico" />
          <title>Caelan Anderson - Software Developer</title>
        </Head>
        <WelcomePage/>
      </Layout>
    </>
  )
}
