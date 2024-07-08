"ue client";

import Link from "next/link";
import styles from "./styles/NavButton.module.scss";
import { usePathname } from "next/navigation";

type Props = {
    name: string,
    link: string
}

export default function NavButton({name, link}: Props){

    const getPathname = usePathname()

    return <Link className={`${styles.navButton} ${getPathname == link ? styles.activeButton : ""}`} href={link}>
        {name}
    </Link>
}