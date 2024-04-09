import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <h1>虚拟键盘测试页面</h1>
                <ul>
                    <li><Link href="/default">普通页面-无虚拟键盘API调用</Link></li>
                    <li><Link href="/about">普通页面-无虚拟键盘API调用</Link></li>
                    <li><Link href="/list">普通页面-无虚拟键盘API调用</Link></li>
                </ul>
            </div>
        </main>
    );
}
