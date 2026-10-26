import { useState } from 'react';

export default function Counter() {
  const [n, setN] = useState(0);
  return (
    <div className="demo">
      <span>Clicked {n} {n === 1 ? 'time' : 'times'}</span>
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={() => setN(n + 1)}>Increment</button>
        <button onClick={() => setN(0)}>Reset</button>
      </div>
    </div>
  );
}
