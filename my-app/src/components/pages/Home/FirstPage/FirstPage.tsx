import PageContainer from "@/components/PageContainer/PageContainer";
import styles from "./styles/FirstPage.module.scss";
import Header from "@/components/Header/Header";
import DecorativeLine from "@/components/DecorativeLine/DecorativeLine";

export default function FirstPage(){

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
              <section className={styles.introTextContainer}>
                <DecorativeLine/>
                <p className={styles.introText}>
                  intro text
                </p>
              </section>
            </section>
            <section className={styles.cardContent}>
              <section className={styles.cardTitle}>
  
              </section>
              <section className={styles.cardImage}>
  
              </section>
              <section className={styles.cardText}>
                <p>
                  this is example text. this is an example of how the text looks. the text is an example of how it will look. this look is an example.
                </p>
              </section>
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
      </PageContainer>
}