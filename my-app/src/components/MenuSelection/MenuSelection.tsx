"use client";

import styles from "./styles/MenuSelection.module.scss";
import { useState } from "react";

type Props = {
    data: {
        title: string
    }[],
    menuName: string | null;
}

export default function MenuSelection ({data, menuName}: Props) {

    const [selection, setSelection] = useState(data[0].title)

    function handleSelection(title:string, index:number){
        setSelection(title);
    }

    return <section className={styles.menuContainer}>
        <ul className={styles.menuList}>
            <div className={styles.menuTitle}>
                <p>{menuName}</p>
            </div>
            {data.map((item, index) =>
                <li 
                    key={index} 
                    className={`${styles.menuItem} ${selection ==  item.title ? styles.activeButton : ""}`} 
                    onClick={()=> handleSelection(item.title, index)}>
                    {item.title}
                </li>
            )}
        </ul>
    </section>
}