import React from 'react';
import styles from './../styles/PostCard.module.scss';
import Link from 'next/link';

const PostCard = ({ post }) => {
    return (
        <div className={styles.post}>
                <Link className={styles.link} href={ `/blog/${post.slug}` }>
                  <h1>{ post.frotMatter.title }</h1>
                </Link>

                <div className={styles.info}>
                  <div className={styles.date}>
                    { post.frotMatter.publicationDate }
                  </div>
                  <div className={styles.tags}>
                    {post.frotMatter.tags.map( tag =>
                        <Link href={`/blog/search-result?tags=${tag}`} key={tag}>
                          {tag}
                        </Link>
                    )}
                  </div>
                </div>

                <span className={styles.discription}>
                  { post.frotMatter.description }
                </span>
        </div>
    );
}

export default PostCard;
