import React, { useState } from 'react';
import { LiFiWidget } from '@lifi/widget';

export default function App() {
  const [active, setActive] = useState(false);
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {!active ? (
        <div onClick={() => setActive(true)} style={{ textAlign: 'center', cursor: 'pointer' }}>
          <h1 style={{ letterSpacing: '12px', fontWeight: '300' }}>LOGO</h1>
          <p style={{ color: '#666', letterSpacing: '2px', lineHeight: '2.2' }}>
            世 界 太 吵 书 写，然 后 交 付<br />终 焉 在 此 刻，交 还 所 有
          </p>
          <p style={{ color: '#CCC', fontSize: '12px', marginTop: '40px' }}>[ 点击进入 ]</p>
        </div>
      ) : (
        <div style={{ width: '420px', height: '640px' }}>
          <LiFiWidget config={{ integrator: 'l2-navigator', appearance: 'light' }} />
        </div>
      )}
    </div>
  );
}
