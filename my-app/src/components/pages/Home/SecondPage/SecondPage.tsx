import PageContainer from "@/components/PageContainer/PageContainer";
import styles from "./styles/Secondpage.module.scss";
import Header from "@/components/Header/Header";
import DecorativeLine from "@/components/DecorativeLine/DecorativeLine";
import Button from "@/components/Button/Button";

export default function SecondPage(){
    return <PageContainer>
    <main className={styles.main}>
      <section className={styles.contentContainer}>
        <section className={styles.textContent}>
          <section className={styles.latestProjectContainer}>
            <DecorativeLine/>
            <div className={styles.latestProjectCard}>
              <div className={styles.latestProjectTitle}>
                <p>Latest Project</p>
                <p>Infinita Productions</p>
              </div>
            </div>
          </section>
        </section>
        <section className={styles.developmentCardContent}>
            <div className={styles.developmentCardTitle}>
                <p>fullstack development</p>
            </div>
            <section className={styles.developmentCardDescription}>
                <p>Bespoke web development using
                    modern design tools and frameworks.
                    Emphasis on clean, stylish apps and websites built mobile-first,
                    with accessibility and efficiency
                    as priority.</p>
            </section>
            <section className={styles.developmentCardImage}>
                <p>image will go here</p>
            </section>
            <section className={styles.developmentCardLinks}>
                <p>links will go here</p>
            </section>
        </section>
      </section>
      <section className={styles.bottomButtonContainer}>
        <section className={styles.latestProjectButtonContainer}>
          <DecorativeLine/>
          <div className={styles.projectButton}>
            <Button text="Github Repo"/>
          </div>
          <div className={styles.projectButton}>
            <Button text="Deployed Link"/>
          </div>
          <div className={styles.projectButton}>
            <Button text="Go to Project Page"/>
          </div>
        </section>
        <section className={styles.developmentButtonContainer}>
          <button className={styles.developmentButton}>front end</button>
          <button className={styles.developmentButton}>back end</button>
          <button className={styles.developmentButton}>design</button>
        </section>
      </section>
    </main>
  </PageContainer>
}