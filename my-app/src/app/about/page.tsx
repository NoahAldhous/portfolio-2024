import PageContainer from "@/components/PageContainer/PageContainer";
import styles from "./styles/page.module.scss";
import DecorativeLine from "@/components/DecorativeLine/DecorativeLine";
import MenuSelection from "@/components/MenuSelection/MenuSelection";

export default function page() {

    const dataArray = [
        {title: "About me"},
        {title: "About my work"},
        {title: "About my experience"}
    ]

    return <PageContainer>
    <main className={styles.main}>
        <section className={styles.topContent}>
            <section className={styles.lineBorder}>
                <DecorativeLine color=""/>
            </section>
            <section className={styles.selection}>
                <MenuSelection data={dataArray} menuName={""}/>
            </section>
            <section className={styles.lineSpace}>
                <DecorativeLine color="walnut"/>
            </section>
            <section className={styles.selectedContent}>

            </section>
            <section className={styles.skillsetContainer}>
                <div className={styles.skillsetCard}>

                </div>
            </section>
        </section>            
        <section className={styles.bottomContent}>
        </section>            
    </main>
  </PageContainer>
}