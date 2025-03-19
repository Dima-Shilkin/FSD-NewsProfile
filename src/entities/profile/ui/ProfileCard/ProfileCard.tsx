import styles from "./styles.module.css";

interface ProfileCardProps {
  name: string;
  email: string;
  phone: string;
  city: string;
  street: string;
}

export const ProfileCard = ({
  name,
  email,
  phone,
  city,
  street,
}: ProfileCardProps) => {
  return (
    <article className={styles.list}>
      <p>Имя: {name}</p>
      <p>Email: {email}</p>
      <p>Телефон: {phone}</p>
      <p>Город: {city}</p>
      <p>Улица: {street}</p>
    </article>
  );
};
