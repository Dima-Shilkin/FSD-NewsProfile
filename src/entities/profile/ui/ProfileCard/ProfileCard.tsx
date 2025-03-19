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
    <ul className={styles.list}>
      <li>Имя: {name}</li>
      <li>Email: {email}</li>
      <li>Телефон: {phone}</li>
      <li>Город: {city}</li>
      <li>Улица: {street}</li>
    </ul>
  );
};
