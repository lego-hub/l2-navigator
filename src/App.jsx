import { LiFiWidget } from '@lifi/widget';
import { useState } from 'react';

const widgetConfig = {
  integrator: 'l2-navigator',
  appearance: 'light',
  theme: {
    palette: {
      primary: { main: '#000000' },
    },
  },
};

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      {showSplash ? (
        <div onClick={() => setShowSplash(false)} style={{ textAlign: 'center', cursor: 'pointer' }}>
          <h1 style={{ letterSpacing: '8px' }}>LOGO</h1>
          <p style={{ color: '#666', letterSpacing: '2px' }}>点 击 进 入 终 焉 之 刻</p>
        </div>
      ) : (
        <div style={{ width: '420px', height: '640px' }}>
          <LiFiWidget config={widgetConfig} />
        </div>
      )}
    </div>
  );
}
