import DecorativeLine from "../DecorativeLine/DecorativeLine"
import styles from "./styles/Navbar.module.scss"

export default function Navbar(){
    return <div className={styles.navbar}>
        <DecorativeLine/>
        <div className={styles.buttonContainer}>
            <button className={styles.navButton}>
                Button
            </button>
            <button className={styles.navButton}>
                Button
            </button>
            <button className={styles.navButton}>
                Button
            </button>
            <button className={styles.navIcon}>
                Icon
            </button>
            <button className={styles.navIcon}>
                Icon
            </button>

        </div>
    </div>
}