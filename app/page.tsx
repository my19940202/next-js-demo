import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div>
                <h1>this is main page</h1>
                <p>
                    <Link href="/about">About</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link href="/list">List</Link>
                </p>
            </div>
        </main>
    );
}
