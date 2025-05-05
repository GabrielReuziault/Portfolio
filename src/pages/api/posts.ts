import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'
import { v4 as uuid } from 'uuid'

type Post = {
  id: string
  title: string
  date: string
  excerpt: string
  category: string
  cover: string
  content?: string
}

const dataPath = path.join(process.cwd(), 'src', 'data', 'posts.json')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | { error: string }>
) {
  try {
    const file = await fs.promises.readFile(dataPath, 'utf-8')
    const posts: Post[] = JSON.parse(file)

    if (req.method === 'GET') {
      return res.status(200).json(posts.sort((a,b)=>b.date.localeCompare(a.date)))
    }

    if (req.method === 'POST') {
      const { title, category, content } = req.body as {
        title: string
        category: string
        content: string
      }
      const now = new Date().toISOString().split('T')[0]
      const excerpt = content.slice(0, 120).replace(/\n/g, ' ') + '…'
      const newPost: Post = {
        id: uuid(),
        title,
        date: now,
        category,
        cover: '/images/blog/default.jpg',
        content,
        excerpt,
      }
      const updated = [newPost, ...posts]
      await fs.promises.writeFile(dataPath, JSON.stringify(updated, null, 2))
      return res.status(201).json(updated)
    }

    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Erreur serveur' })
  }
}
