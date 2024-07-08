"use client";

import DecorativeLine from "../DecorativeLine/DecorativeLine"
import styles from "./styles/Navbar.module.scss"
import Link from "next/link";

export default function Navbar(){
    return <div className={styles.navbar}>
        <div className={styles.navTextContainer}>
            <DecorativeLine color=""/>
            <p className={styles.navText}>home</p>
        </div>
        <div className={styles.buttonContainer}>
            <Link href="/" className={styles.navButton}>
                Home
            </Link>
            <Link href="/about" className={styles.navButton}>
                About
            </Link>
            <Link href="/work" className={styles.navButton}>
                Work
            </Link>
            <button className={styles.navIcon}>
                Icon
            </button>
            <button className={styles.navIcon}>
                Icon
            </button>
        </div>
    </div>
}