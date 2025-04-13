import Button from './Button';
import styles from '../styles/Home.module.css';

export default function Keypad({ onInput, onOperation, onEquals, onClear, onMemory, onCE }) {
  return (
    <div className={styles.keypad}>
      <Button label="MC" onClick={onMemory} />
      <Button label="MR" onClick={onMemory} />
      <Button label="M+" onClick={onMemory} />
      <Button label="M-" onClick={onMemory} />

      <Button label="7" onClick={onInput} />
      <Button label="8" onClick={onInput} />
      <Button label="9" onClick={onInput} />
      <Button label="/" onClick={onOperation} />

      <Button label="4" onClick={onInput} />
      <Button label="5" onClick={onInput} />
      <Button label="6" onClick={onInput} />
      <Button label="*" onClick={onOperation} />

      <Button label="1" onClick={onInput} />
      <Button label="2" onClick={onInput} />
      <Button label="3" onClick={onInput} />
      <Button label="-" onClick={onOperation} />

      <Button label="0" onClick={onInput} />
      <Button label="." onClick={onInput} />
      <Button label="=" onClick={onEquals} className={styles.equals} />
      <Button label="+" onClick={onOperation} />

      <Button label="C" onClick={onClear} className={styles.clears} />
      <Button label="CE" onClick={onCE} className={styles.clears} />
    </div>
  );
}
