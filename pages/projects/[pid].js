import { useRouter } from 'next/router'
import markdownToHtml from '../../lib/markdownToHtml'
import markdownStyles from '../../components/markdown_styles.module.css'
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import NavBar from '../../components/navbar'
import Head from 'next/head'
const Project = ({ post }) => {
  const router = useRouter()
  const { pid } = router.query

  const renderers = {
    image: image => {
      return <Image src={image.url} alt={image.alt} width='400px' height='200px' layout='responsive' />;
    },
    paragraph: (paragraph) => {
      const { node } = paragraph;
      if (node.children[0].type === "image") {
        const image = node.children[0];
        return <Image src={image.url} alt={image.alt} width='400px' height='200px' layout='responsive' />;
      }

      return <p>{paragraph.children}</p>;
    },
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content="Caelan Anderson is a software developer and designer with a background in Physics from the University of Melbourne"></meta>
        <title>Caelan's Projects - {post.title}</title>
      </Head>
      <NavBar />
      <div className="max-w-screen-lg mx-auto pt-5 motion-safe:animate-fadeIn markdown">
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </>)
}

export default Project;

export async function getStaticProps({ params }) {
  const post_api = require("../../pages/api");
  // 

  const post = post_api.getPostBySlug('projects', params.pid, [
    'title',
    'content'
  ])
  // const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post
    },
  }
}

export async function getStaticPaths() {
  const post_api = require("../../pages/api");
  const posts = post_api.getAllPostsBySubdir('projects', ['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          pid: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
