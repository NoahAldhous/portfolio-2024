import styles from "./styles/DecorativeLine.module.scss";

export default function DecorativeLine(){
    return <div className={styles.line}>
        <div className={styles.thickLine}/>
        <div className={styles.thinLine}/>
    </div>
}