import { useState } from 'react';
import Display from '../components/Display';
import Keypad from '../components/Keypad';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isDemente, setIsDemente] = useState(false);
  const [display, setDisplay] = useState('0');
  const [memory, setMemory] = useState(0);
  const [operator, setOperator] = useState(null);
  const [operand, setOperand] = useState(null);
  const [isNewInput, setIsNewInput] = useState(false);

  const handleInput = (value) => {
    if (isNewInput) {
      setDisplay(value);
      setIsNewInput(false);
    } else {
      setDisplay((prev) => (prev === '0' ? value : prev + value));
    }
  };

  const handleOperation = (op) => {
    let realOp = op;
    if (isDemente) {
      switch (op) {
        case '+': realOp = '*'; break;
        case '-': realOp = '+'; break;
        case '*': realOp = '/'; break;
        case '/': realOp = '-'; break;
      }
    }
    setOperand(parseFloat(display));
    setOperator(realOp);
    setIsNewInput(true);
  };

  const handleEquals = () => {
    if (operator && operand !== null) {
      const current = parseFloat(display);
      let result = 0;
      switch (operator) {
        case '+': result = operand + current; break;
        case '-': result = operand - current; break;
        case '*': result = operand * current; break;
        case '/': result = operand / current; break;
      }
      setDisplay(result.toString());
      setIsNewInput(true);
      setOperand(null);
      setOperator(null);
    }
  };

  const handleMemory = (action) => {
    const current = parseFloat(display);
    switch (action) {
      case 'MC': setMemory(0); break;
      case 'MR': setDisplay(memory.toString()); break;
      case 'M+': setMemory((prev) => prev + current); break;
      case 'M-': setMemory((prev) => prev - current); break;
    }
  };

  const handleClear = () => setDisplay('0');
  const handleCE = () => {
    setDisplay('0');
    setOperand(null);
    setOperator(null);
  };

  return (
    <div className={styles.calculator}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
        <span className={styles.neon}>clica aqui logo</span>
        <label htmlFor="modoDemente">Modo Demente</label>
        <input
          id="modoDemente"
          type="checkbox"
          checked={isDemente}
          onChange={(e) => setIsDemente(e.target.checked)}
          title="Modo Demente Ativado:
                × vira ÷
                ÷ vira −
                − vira +
                + vira ×"
        />
      </div>
      <h1 className={styles.title}>Calculadora Demente</h1>
      <Display value={display} operator={operator} operand={operand} />
      <Keypad
        onInput={handleInput}
        onOperation={handleOperation}
        onEquals={handleEquals}
        onClear={handleClear}
        onMemory={handleMemory}
        onCE={handleCE}
      />
    </div>
  );
} 
