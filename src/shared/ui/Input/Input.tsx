import styles from "./styles.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  className?: string;
}

export const Input = ({ label, error, className, ...props }: InputProps) => {
  return (
    <>
      {label && <label htmlFor={props.id}>{label}</label>}
      <input
        {...props}
        className={`${className} ${error ? styles.error : ""}`}
      />
    </>
  );
};
