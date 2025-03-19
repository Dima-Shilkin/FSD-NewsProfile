import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";
import { Header } from "@/widgets/ui/header/ui/Header/Header";
import { Footer } from "@/widgets/ui/Footer/Footer";

export const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
