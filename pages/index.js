import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import PostCard from '../Components/PostCard';
import style from '../styles/Home.module.scss'
import About from './about';

export default function Home({ posts }) {
  return (
    <div className={style.home}>
      <div className="container">

        <About />

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