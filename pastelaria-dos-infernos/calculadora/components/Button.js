import styles from '../styles/Home.module.css';

export default function Button({ label, onClick, className = '' }) {
  return (
    <button className={`${styles.button} ${className}`} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}
