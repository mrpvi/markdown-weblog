import style from '../../styles/singlePost.module.scss';
import fs from 'fs';
import md from 'markdown-it';
import matter from 'gray-matter';

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

// function createMarkup() {
//     return {__html: };
// }

const singlePost = ({ frontMatter, content }) => {

    console.log(frontMatter, content);
    return (
        <div className={style.singlePost}>
            <div className="container">
                <h1 className={style.title}>{ frontMatter.title }</h1>
                <div className={style.info}>
                    <div className={style.date}>
                        ۲ مهر ۱۴۰۱
                    </div>
                    <div className={style.tags}>
                        <span className={style.tag}>تگ اول</span>
                        <span className={style.tag}>تگ دوم</span>
                        <span className={style.tag}>تگ سوم</span>
                    </div>
                </div>
            </div>
            <img src="/s.jpg" alt="" className={style.postImage}/>
            <div className="container">
                <div className={style.content}>
                    <span
                        className={style.text}
                        dangerouslySetInnerHTML={ { __html: content } }
                    />
               </div>
            </div>
        </div>
    );
}

export default singlePost;
