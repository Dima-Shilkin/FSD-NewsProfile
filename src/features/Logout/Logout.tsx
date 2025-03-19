import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import AuthService from "../../shared/helpers/authHelpers";

export default function Logout() {
  const navigate = useNavigate();
  const handleRemove = () => {
    AuthService.removeFromLs();
    navigate("/");
  };

  return (
    <button onClick={handleRemove} className={styles.logout}>
      выйти
    </button>
  );
}
