import PageContainer from "@/components/PageContainer/PageContainer";
import styles from "./page.module.scss"
import Header from "@/components/Header/Header";
import DecorativeLine from "@/components/DecorativeLine/DecorativeLine";
import FirstPage from "@/components/pages/Home/FirstPage/FirstPage";
import SecondPage from "@/components/pages/Home/SecondPage/SecondPage";

export default function Home() {
  return <div className={styles.home}>
    <FirstPage/>
    <SecondPage/>
    {/* <PageContainer>
      <main className={styles.main}>
        <section className={styles.contentContainer}>
          <section className={styles.textContent}>
            <Header text="noah aldhous"/>
            <section className={styles.subHeaderContainer}>
              <h2 className={styles.subHeader}>
                full stack developer
              </h2>
            </section>
            <section className={styles.introTextContainer}>
              <DecorativeLine/>
              <p className={styles.introText}>
                intro text
              </p>
            </section>
          </section>
          <section className={styles.cardContent}>

          </section>
        </section>
        <section className={styles.bottomButtonContainer}>
          <section className={styles.currentTextBar}>
            <DecorativeLine/>
            <p className={styles.currentText}>
              Noah is currently...
            </p>
          </section>
          <section className={styles.contactButtonContainer}>
            <button className={styles.contactButton}> contact me</button>
          </section>
        </section>
      </main>
    </PageContainer> */}
    {/* <PageContainer>
      <main className={styles.main}>
        <section className={styles.contentContainer}>
          <section className={styles.textContent}>
            <Header text="noah aldhous"/>
            <section className={styles.subHeaderContainer}>
              <h2 className={styles.subHeader}>
                full stack developer
              </h2>
            </section>
            <section className={styles.introTextContainer}>
              <DecorativeLine/>
              <p className={styles.introText}>
                intro text
              </p>
            </section>
          </section>
          <section className={styles.cardContent}>

          </section>
        </section>
        <section className={styles.bottomButtonContainer}>
          <section className={styles.currentTextBar}>
            <DecorativeLine/>
            <p className={styles.currentText}>
              Noah is currently...
            </p>
          </section>
          <section className={styles.contactButtonContainer}>
            <button className={styles.contactButton}> contact me</button>
          </section>
        </section>
      </main>
    </PageContainer> */}
    </div>
};
