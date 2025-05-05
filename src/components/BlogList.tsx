// src/components/BlogList.tsx
import { motion } from 'framer-motion'
import PostCard from './PostCard'

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

export default function BlogList({ posts }: Props) {
  if (!posts.length) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400 py-16">
        Aucun article pour l’instant.
      </p>
    )
  }

  return (
    <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, i) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <PostCard post={post} />
        </motion.div>
      ))}
    </div>
  )
}
