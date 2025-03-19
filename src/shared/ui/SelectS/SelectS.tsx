import styles from "./styles.module.css";

interface SelectSProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  currencies: string[] | null;
}

export const SelectS = ({ label, currencies, ...props }: SelectSProps) => {
  return (
    <>
      <label htmlFor={props.id}>{label}</label>
      <select className={styles.select} {...props}>
        {currencies &&
          currencies.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
          ))}
      </select>
    </>
  );
};
