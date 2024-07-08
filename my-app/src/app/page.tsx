import PageContainer from "@/components/PageContainer/PageContainer";
import styles from "./page.module.scss"
import Header from "@/components/Header/Header";
import DecorativeLine from "@/components/DecorativeLine/DecorativeLine";
import FirstPage from "@/components/pages/Home/FirstPage/FirstPage";
import SecondPage from "@/components/pages/Home/SecondPage/SecondPage";
import ThirdPage from "@/components/pages/Home/ThirdPage/ThirdPage";

export default function Home() {
  return <div className={styles.home}>
    <FirstPage/>
    <SecondPage/>
    <ThirdPage/>
  </div>
};
