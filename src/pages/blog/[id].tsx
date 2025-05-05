// src/pages/blog/[id].tsx
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Layout from '../../components/Layout'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import Link from 'next/link'
import 'highlight.js/styles/github.css'

interface Post {
  id: string
  title: string
  date: string
  category: string
  cover: string
  excerpt: string
  content: string
}

interface Props {
  post: Post
}

const PostPage: NextPage<Props> = ({ post }) => (
  <>
    <Head>
      <title>{post.title} – Blog</title>
      <meta name="description" content={post.excerpt} />
    </Head>
      {/* Hero dégradé */}
    <section className="bg-gradient-to-br from-secondary to-primary text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <Link href="/blog" className="inline-block mb-6 text-sm underline">
          ← Retour au Blog
        </Link>
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
          {post.title}
        </h1>
        <p className="text-sm md:text-base opacity-90">
          {new Date(post.date).toLocaleDateString('fr-FR')} — {post.category}
        </p>
      </div>
    </section>

    {/* Contenu de l’article */}
    <section className="container mx-auto px-6 py-20">
      <div className="bg-white rounded-xl shadow-lg p-12">
        <article className="prose prose-lg dark:prose-invert lg:prose-xl space-y-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
            {post.content}
          </ReactMarkdown>
        </article>
      </div>
    </section>
  </>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'posts.json')
  const file = await fs.promises.readFile(filePath, 'utf8')
  const posts: Post[] = JSON.parse(file)
  const paths = posts.map(p => ({ params: { id: p.id } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'posts.json')
  const file = await fs.promises.readFile(filePath, 'utf8')
  const posts: Post[] = JSON.parse(file)
  const post = posts.find(p => p.id === params?.id)
  if (!post) {
    return { notFound: true }
  }
  return {
    props: { post }
  }
}

export default PostPage
