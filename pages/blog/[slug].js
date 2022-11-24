import style from '../../styles/singlePost.module.scss';
import fs from 'fs';
import md from 'markdown-it';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';
import Link from 'next/link';

export async function getStaticPaths ( ) {
    const files = fs.readdirSync("posts")
    const paths = files.map( fileName => ({
        params: {
            slug: fileName.replace('.md', '')
        }
    }) )

    return {
        paths,
        fallback: false,
    }

}


export async function getStaticProps({ params: {slug} }) {
    const mdFile = fs.readFileSync(`posts/${slug}.md`);
    const {data: frontMatter, content} = matter(mdFile);

    return {
        props: {
            frontMatter,
            content
        }
    }
}

function createMarkup(content) {
    let md = new MarkdownIt();
    let result = md.render(content);

    return result;
}

const singlePost = ({ frontMatter, content }) => {
    const htmlContent = createMarkup(content);

    return (
        <div className={style.singlePost}>
            <div className="container">
                <h1 className={style.title}>{ frontMatter.title }</h1>
                <div className={style.info}>
                    <div className={style.date}>
                        { frontMatter.publicationDate }
                    </div>
                    <div className={style.tags}>
                        {frontMatter.tags.map((tag, index) =>
                            <Link href={`/blog/search-result?tags=${tag}`} key={index}>
                                {tag}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <img src={frontMatter.image} alt="" className={style.postImage}/>
            <div className="container">
                <div className={style.content}>
                    <span
                        className={style.text}
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    ></span>
               </div>
            </div>
        </div>
    );
}

export default singlePost;
