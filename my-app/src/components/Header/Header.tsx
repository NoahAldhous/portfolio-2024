import styles from "./styles/Header.module.scss"

type Props = {
    text: string
}

export default function Header( {text}: Props){
    return <h1 className={styles.header}>
        { text }
    </h1>
}