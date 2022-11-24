import { useRouter } from 'next/router';
import React from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import PostCard from '../../Components/PostCard';

const searchMethodChecker = (query) => {
    if (query == {}) return false;

    const methods = ['tags']
    const queryMethod = Object.keys(query)

    return methods.includes(queryMethod[0])
}

export default function SearchResult({ posts }) {
    return (
        <div className='container'>
          {posts?.map(post => {
          return <PostCard post={post} key={post.slug} />
        })}
        </div>
    );
}

export async function getServerSideProps(context) {
    const files = fs.readdirSync("posts")
    const { query } = context

    if (!searchMethodChecker(query)) {return {
      notFound: true,
    }}

    const queryKey = Object.keys(query)[0]

    let posts = files.map( fileName => {
      const slug = fileName.replace('.md', '')
      const readFiles = fs.readFileSync(`posts/${fileName}`)
      const {data: frotMatter} = matter(readFiles)

      return {
        slug,
        frotMatter
      }
    })

    posts = posts.filter( post => post.frotMatter[queryKey].includes(query[queryKey]))


    return {
      props: {
        posts,
      }
    }

}
