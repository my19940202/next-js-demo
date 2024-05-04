// use client
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <Link href="/default"><h1>default-普通页面-无虚拟键盘API调用</h1></Link>
                <Link href="/about"><h1>about-普通页面-无虚拟键盘API调用</h1></Link>
                <Link href="/inputmode"><h1>inputmode-普通页面-无虚拟键盘API调用</h1></Link>
            </div>
        </main>
    );
}
