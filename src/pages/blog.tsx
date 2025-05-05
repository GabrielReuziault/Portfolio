// src/pages/blog.tsx
import { GetServerSideProps, NextPage } from 'next'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'
import Layout from '../components/Layout'
import BlogHero from '../components/BlogHero'
import BlogList from '../components/BlogList'

interface Post {
  id: string
  title: string
  date: string
  excerpt: string
  category: string
  cover: string
}

interface Props {
  posts: Post[]
}

const BlogPage: NextPage<Props> = ({ posts }) => (
  <>
    <Head>
      <title>Blog – Gabriel Reuziault</title>
      <meta
        name="description"
        content="Articles et retours d’expérience sur développement web/mobile et la cybersécurité."
      />
    </Head>
      <BlogHero />
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <BlogList posts={posts} />
        </div>
      </section>
  </>
)

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const filePath = path.join(process.cwd(), 'src', 'data', 'posts.json')
  const json = await fs.promises.readFile(filePath, 'utf8')
  const posts: Post[] = JSON.parse(json)
  return { props: { posts } }
}

export default BlogPage
