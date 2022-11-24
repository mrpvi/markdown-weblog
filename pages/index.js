import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import PostCard from '../Components/PostCard';

export default function Home({ posts }) {
  return (
    <div>
      <div className="container">

        {posts?.map(post =>

          <PostCard
            post={post}
            key={post.slug}
          />

        )}

      </div>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync("posts")

  const posts = files.map( fileName => {
    const slug = fileName.replace('.md', '')
    const readFiles = fs.readFileSync(`posts/${fileName}`)
    const {data: frotMatter} = matter(readFiles)

    return {
      slug,
      frotMatter
    }
  })

  return {
    props: {
      posts,
    }
  }

}