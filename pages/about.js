import style from '../styles/Home.module.scss';
const About = () => {
    return (
        <div className="container">
            <img src="./images/me.jpg" alt="me" className={style.homeImage} />
            <h1 className={style.homeTitle}>علی پرویزی</h1>
            <p className={style.homeText}>یه وبسایت کوچیک که قراره خلاصه‌ای از فعالیت‌هام باشه و احتمالا از چیزای جدیدی که یاد میگیرم یا دوست‌دارم بنویسم، <b>شاید روزی بدرد بخوره</b>.</p>
        </div>
    );
}

export default About;
