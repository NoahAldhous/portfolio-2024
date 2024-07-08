"use client";

import DecorativeLine from "../DecorativeLine/DecorativeLine"
import styles from "./styles/Navbar.module.scss"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import NavButton from "./NavButton";

export default function Navbar(){

    const getPathname = usePathname()

    const buttonArray = [
        {
            name: "Home",
            link: "/", 
        },
        {
            name: "About",
            link: "/about", 
        },
        {
            name: "Work",
            link: "/work", 
        },
    ]

    return (<div className={styles.navbar}>
        <div className={styles.navTextContainer}>
            <DecorativeLine color=""/>
            <p className={styles.navText}>{getPathname == "/" ? "Home" : getPathname.substring(1)}</p>
        </div>
        <div className={styles.buttonContainer}>
            {buttonArray.map((item,index) =>
                <NavButton key={index} name={item.name} link={item.link}/>
            )}
            {/* <Link href="/" className={styles.navButton}>
                Home
            </Link>
            <Link href="/about" className={styles.navButton}>
                About
            </Link>
            <Link href="/work" className={styles.navButton}>
                Work
            </Link> */}
            <button className={styles.navIcon}>
                Icon
            </button>
            <button className={styles.navIcon}>
                Icon
            </button>
        </div>
    </div>)
}