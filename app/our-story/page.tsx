import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'

export const metadata = {
  title: 'Our Story — Fam Damily Cares',
}

export default function OurStoryPage() {
  const filePath = path.join(process.cwd(), 'content', 'our-story.mdx')
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return (
    <div className="max-w-2xl mx-auto px-5 py-14">
      <h1 className="text-3xl font-bold text-stone-800 mb-2">{data.title}</h1>
      {data.subtitle && (
        <p className="text-stone-400 text-sm mb-10">{data.subtitle}</p>
      )}
      <div className="prose prose-stone prose-lg max-w-none">
        <MDXRemote source={content} />
      </div>
      {data.updated && (
        <p className="text-stone-300 text-xs mt-12">Last updated {data.updated}</p>
      )}
    </div>
  )
}
