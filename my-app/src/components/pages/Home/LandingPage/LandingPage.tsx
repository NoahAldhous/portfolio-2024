import PageContainer from "@/components/PageContainer/PageContainer";
import styles from "./styles/LandingPage.module.scss";
import Header from "@/components/Header/Header";
import DecorativeLine from "@/components/DecorativeLine/DecorativeLine";

export default function LandingPage() {

    return <PageContainer>
    <main className={styles.main}>
        <section className={styles.contentContainer}>
            <section className={styles.textContent}>
                <Header text="noah aldhous"/>
                <section className={styles.subHeaderContainer}>
                    <h2 className={styles.subHeader}>
                        full stack developer
                    </h2>
                </section>
            </section>
        </section>
    </main>
  </PageContainer>
}