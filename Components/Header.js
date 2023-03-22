import Link from "next/link";
import { useState } from "react";
import styles from "./../styles/Header.module.scss";

export function Header() {
    const [hbg, setHbg] = useState(false);
    return (
        <nav className={styles.header}>
            <div className={`${styles.container} container`}>
                <div
                    className={styles.hbgMenu}
                    onClick={ ()=>setHbg( !hbg ) }>

                    <span className={styles.line}></span>
                    <span className={styles.line}></span>
                </div>

                <div className={`${styles.menu} ${hbg ? styles.active : ''}`}>
                    <Link href="/" >اصلی</Link>
                    <Link href="/Portfolio">فرعی</Link>
                    <Link href="/contact">تماس با من</Link>
                </div>
            </div>
        </nav>
    );
}
