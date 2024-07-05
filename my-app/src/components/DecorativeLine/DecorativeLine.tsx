import styles from "./styles/DecorativeLine.module.scss";

type Props = {
    color: any
}

export default function DecorativeLine({color}: Props){
    return <div className={styles.line}>
        <div className={`${styles.thickLine} ${color == "walnut" ? styles.walnut : ""} `}/>
        <div className={`${styles.thinLine} ${color == "walnut" ? styles.walnut : ""} `}/>
    </div>
}