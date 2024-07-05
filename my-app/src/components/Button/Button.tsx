import styles from "./styles/Button.module.scss";

type Props = {
    text: string
}

export default function Button({ text }: Props){

    return <button className={styles.button}>
        <div className={styles.line}>
            <div className={styles.thickLine}/>
            <div className={styles.thinLine}>
                <div className={styles.upperThinLine}/>
                <div className={styles.lowerThinLine}/>
            </div>
        </div>
        { text }
    </button>
}