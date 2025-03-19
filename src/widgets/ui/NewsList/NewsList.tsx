import { ItemCard, Post } from "@/entities/news";
import styles from "./styles.module.css";

interface Props {
  newsData: Post[];
}

export const NewsList = ({ newsData }: Props) => {
  return (
    <ul className={styles.newsList}>
      {newsData.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </ul>
  );
};
