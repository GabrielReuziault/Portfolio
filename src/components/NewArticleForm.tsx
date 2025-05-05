// src/components/NewArticleForm.tsx
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'react-markdown-editor-lite/lib/index.css'
import 'highlight.js/styles/github.css'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), { ssr: false })

export default function NewArticleForm() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [cover, setCover] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, category, cover, content }),
    })
    if (res.ok) router.push('/blog')
    else alert('Erreur lors de la publication')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        type="text"
        placeholder="Titre de l’article"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
      />

      <input
        type="text"
        placeholder="Catégorie (ex. Veille, Tuto…)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
      />

      <input
        type="url"
        placeholder="URL de l’image de couverture (optionnel)"
        value={cover}
        onChange={(e) => setCover(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
      />

      <div className="prose max-w-full bg-white dark:bg-gray-800 border rounded-lg">
        <MdEditor
          style={{ height: '400px' }}
          renderHTML={(text) => (
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
              {text}
            </ReactMarkdown>
          )}
          onChange={({ text }) => setContent(text)}
          value={content}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition"
      >
        Publier l’article
      </button>
    </form>
  )
}
