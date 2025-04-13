import styles from '../styles/Home.module.css';
export default function Display({ value, operator, operand }) {
  return (
    <div className={styles.display}>
      <div className={styles.operation}>{operand !== null && operator ? `${operand} ${operator}` : ''}</div>
      <div className={styles.result}>{value}</div>
    </div>
  );
}