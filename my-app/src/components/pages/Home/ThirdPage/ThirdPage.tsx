"use client";
import PageContainer from "@/components/PageContainer/PageContainer";
import styles from "./styles/ThirdPage.module.scss";
import DecorativeLine from "@/components/DecorativeLine/DecorativeLine";
import Button from "@/components/Button/Button";
import { useState } from "react";

export default function ThirdPage(){

    
    function selectExperience(title:string, index: number){
        setActiveExperience(title);
        setActiveProjectArray(dataArray[index].projects);
        setActiveProject(dataArray[index].projects[0].title)
    }

    function selectProject(title:string){
        setActiveProject(title)
    }
    
    const dataArray = [
        {
            title: "adomuka",
            projects: [
                {
                    title: "Infinita Productions",
                },
                {
                    title: "Matt's App",
                },
            ]
        },
        {
            title: "freelance developer",
            projects: [
                {
                    title: "Mobile Mysteries",
                },
                {
                    title: "Ruby Parker Photography",
                },
            ]
        },
        {
            title: "school of code",
            projects: [
                {
                    title: "Just My Type",
                },
                {
                    title: "Jungle Sums",
                }
            ]
        }
    ]

    const [activeExperience, setActiveExperience] = useState(dataArray[0].title)
    const [activeProjectArray, setActiveProjectArray] = useState(dataArray[0].projects)
    const [activeProject, setActiveProject] = useState(dataArray[0].projects[0].title)
    
    return (<PageContainer>
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
                    {dataArray.map((item, index) =>
                        <li key={index} className={`${styles.experienceItem} ${activeExperience ==  item.title ? styles.activeButton : ""}`} onClick={()=> selectExperience(item.title, index)}>
                            {item.title}
                        </li>
                    )}
                </ul>
            </section>
            <section className={styles.lineSpace}>
                <DecorativeLine/>  
            </section>
            <div className={styles.projectContainer}>
                <div className={styles.experienceDisplay}>
                    <div className={styles.experienceInfo}>
                        <div className={styles.experienceTitle}>
                            <p>{activeExperience}</p>
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
                            {activeProjectArray.map((item,index) =>
                                <li key={index} className={`${styles.relevantProjectItem} ${activeProject ==  item.title ? styles.activeButton : ""}`} onClick={() => selectProject(item.title)}>
                                    {item.title}
                                </li>
                            )}
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
                    <p>{activeProject}</p>
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
  </PageContainer>)
}