import styles from "./styles/PageContainer.module.scss";

type Props = {
    children: React.ReactNode;
}

export default function PageContainer({children}: Props){
    return <div className={styles.container}>
        {children}
    </div>
}