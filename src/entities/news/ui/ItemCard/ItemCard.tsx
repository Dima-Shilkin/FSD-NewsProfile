import { Post } from "../../model/types";
import styles from "./styles.module.css";

interface ItemNewsProps {
  item: Post;
}

export const ItemCard = ({ item }: ItemNewsProps) => {
  return (
    <li className={styles.item}>
      <h3 className={styles.title}>{item.title}</h3>
      <span className={styles.description}>{item.body}</span>
    </li>
  );
};
