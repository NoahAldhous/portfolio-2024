import PageContainer from "@/components/PageContainer/PageContainer";
import styles from "./styles/ThirdPage.module.scss";
import DecorativeLine from "@/components/DecorativeLine/DecorativeLine";
import Button from "@/components/Button/Button";

export default function ThirdPage(){
    return <PageContainer>
    <main className={styles.main}>
      <section className={styles.contentContainer}>
        <div className={styles.lineContainer}>
            <DecorativeLine/>
        </div>
        <section className={styles.experienceContainer}>
            <section className={styles.experienceListContainer}>
                <ul className={styles.experienceList}>
                    <div className={styles.experienceListTitle}>
                        <p>Experience</p>
                    </div>
                    <li className={styles.experienceItem}>
                        Adomuka
                    </li>
                    <li className={styles.experienceItem}>
                        Freelance Developer
                    </li>
                    <li className={styles.experienceItem}>
                        School of Code
                    </li>
                </ul>
            </section>
            <section className={styles.lineSpace}>
                <DecorativeLine/>  
            </section>
            <div className={styles.projectContainer}>
                <div className={styles.experienceDisplay}>
                    <div className={styles.experienceInfo}>
                        <div className={styles.experienceTitle}>
                            <p>Freelance Developer</p>
                            <p className={styles.experienceDate}>24.03.2023</p>
                        </div>
                        <p className={styles.experienceText}>
                            worked to train my skills, completing various
                            projects to learn new frameworks and refine
                            my working principles.
                        </p>
                    </div>
                    <section className={styles.relevantProjects}>
                        <div className={styles.relevantProjectsTitle}>
                            Projects
                        </div>
                        <ul className={styles.relevantProjectsList}>
                            <li className={styles.relevantProjectItem}>
                                Infinita Productions
                            </li>
                            <li className={styles.relevantProjectItem}>
                                Infinita Productions
                            </li>
                            <li className={styles.relevantProjectItem}>
                                Infinita Productions
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <section className={styles.lineSpace}>
                <DecorativeLine/>  
            </section>
            <section  className={styles.projectCardContainer}>
                <div className={styles.projectCard}>
                    <div className={styles.projectTitle}>
                    <p>Infinita Productions</p>
                    </div>
                </div>
            </section>
        </section>
      </section>
      <section className={styles.bottomButtonContainer}>
        <section className={styles.latestProjectButtonContainer}>
          <DecorativeLine/>
          <section className={styles.projectButtonContainer}>
            <div className={styles.projectButton}>
                <Button text="Github Repo"/>
            </div>
            <div className={styles.projectButton}>
                <Button text="Deployed Link"/>
            </div>
          </section>
        </section>
      </section>
    </main>
  </PageContainer>
}