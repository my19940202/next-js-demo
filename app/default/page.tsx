// https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts

import styles from "./page.module.css";
import {TextList, StickyIcon} from "../components";

export default function Index() {
  return (
    <main className={styles.main}>
        <TextList />
        <input type="text" name="text" />
        <StickyIcon />
    </main>
  );
}
