import styles from '../styles/Home.module.scss'
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

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

export default function Home({ posts }) {
  return (
    <div className={styles.home}>
      <div className="container">

        {posts?.map(post => {
          return (
            <div className={styles.post} key={`${post.slug}`}>
                <Link className={styles.link} href={ `/blog/${post.slug}` }>
                  <h1>{ post.frotMatter.title }</h1>
                </Link>

                <div className={styles.info}>
                  <div className={styles.date}>
                    ۲ مهر ۱۴۰۱
                  </div>
                  <div className={styles.tags}>
                    <a href="#">تگ اول</a>
                    <a href="#">تگ دوم</a>
                    <a href="#">تگ سوم</a>
                  </div>
                </div>

                <span className={styles.discription}>
                  { post.frotMatter.description }
                </span>
            </div>
          )
        })}

      </div>
    </div>
  )
}
