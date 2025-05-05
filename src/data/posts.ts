// src/pages/api/posts.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import { v4 as uuid } from 'uuid'

type Post = {
  id: string
  title: string
  date: string
  excerpt: string
  category: string
  cover: string
  content: string
}

const filePath = path.join(process.cwd(), 'src', 'data', 'posts.json')

function getDefaultCover(category: string) {
  const file = `/images/defaults/${category.toLowerCase()}.jpg`
  // Si le fichier n’existe pas, fallback générique
  const exists = fs.existsSync(path.join(process.cwd(),'public',file))
  return exists ? file : '/images/defaults/generic.jpg'
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const json = await fs.promises.readFile(filePath, 'utf8')
  const posts: Post[] = JSON.parse(json)

  if (req.method === 'GET') {
    return res.status(200).json(posts)
  }

  if (req.method === 'POST') {
    const { title, category, cover, content } = req.body as {
      title: string
      category: string
      cover?: string
      content: string
    }
    const now = new Date().toISOString().split('T')[0]
    const excerpt = content.slice(0, 120).replace(/\n/g, ' ') + '…'
    const newPost: Post = {
      id: uuid(),
      title,
      date: now,
      category,
      cover: cover || getDefaultCover(category),
      content,
      excerpt,
    }
    const updated = [newPost, ...posts]
    await fs.promises.writeFile(filePath, JSON.stringify(updated, null, 2))
    return res.status(201).json(newPost)
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(405).end(`Method ${req.method} Not Allowed`)
}
