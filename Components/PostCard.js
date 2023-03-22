import React from 'react';
import styles from './../styles/PostCard.module.scss';
import Link from 'next/link';
import Image from 'next/image'

const PostCard = ({ post }) => {
    return (
        <div className={styles.post}>
                <img src={post.frotMatter.image} alt={post.frotMatter.title} srcset="" />
                <div className={styles.info}>
                <div className={styles.tags}>
                  <div className={styles.date}>
                    { post.frotMatter.publicationDate }
                  </div>
                  {post.frotMatter.tags.map( tag =>
                        <Link href={`/blog/search-result?tags=${tag}`} key={tag}>
                          {tag}
                        </Link>
                    )}
                  </div>
                </div>

                <Link className={styles.link} href={ `/blog/${post.slug}` }>
                  <h1>{ post.frotMatter.title }</h1>
                </Link>

                <span className={styles.discription}>
                  { post.frotMatter.description }
                </span>
        </div>
    );
}

export default PostCard;
