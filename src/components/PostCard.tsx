// src/components/ProjectCard.tsx  → rename to PostCard.tsx
import Image from 'next/image'
import Link from 'next/link'

interface Post {
  id: string
  title: string
  category: string
  date: string
  cover: string
}

interface Props {
  post: Post
}

export default function PostCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.id}`}
      className="group block overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition"
    >
      <div className="relative h-48 w-full">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-4 bg-white">
        <time className="text-xs text-gray-500">{post.date}</time>
        <h3 className="mt-1 text-lg font-semibold">{post.title}</h3>
        <span className="inline-block mt-2 px-2 py-1 bg-primary text-white text-xs rounded-full">
          {post.category}
        </span>
      </div>
    </Link>
  )
}
