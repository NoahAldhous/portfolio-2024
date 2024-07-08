import styles from "./page.module.scss"
import FirstPage from "@/components/pages/Home/FirstPage/FirstPage";
import SecondPage from "@/components/pages/Home/SecondPage/SecondPage";
import ThirdPage from "@/components/pages/Home/ThirdPage/ThirdPage";
import LandingPage from "@/components/pages/Home/LandingPage/LandingPage";

export default function Home() {
  return <div className={styles.home}>
    {/* <LandingPage/> */}
    <FirstPage/>
    <SecondPage/>
    <ThirdPage/>
  </div>
};
