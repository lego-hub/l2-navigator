import { LiFiWidget } from '@lifi/widget';
import { useState } from 'react';

const widgetConfig = {
  integrator: 'l2-navigator',
  containerStyle: {
    border: 'none',
    borderRadius: '16px',
  },
  appearance: 'light',
  theme: {
    palette: {
      primary: { main: '#000000' },
      background: { paper: '#ffffff', default: '#ffffff' },
    },
    shape: { borderRadius: 12 },
  },
};

const Splash = ({ onClick }) => (
  <div 
    onClick={onClick}
    style={{
      position: 'fixed',
      top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'white',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      cursor: 'pointer', zIndex: 1000,
      transition: 'opacity 0.5s ease'
    }}
  >
    <div style={{ fontSize: '24px', letterSpacing: '8px', marginBottom: '20px', color: '#000' }}>
      LOGO
    </div>
    <div style={{ fontSize: '14px', color: '#666', letterSpacing: '4px' }}>
      世 界 太 吵 书 写，然 后 交 付 终 焉 在 此 刻，交 还 所 有
    </div>
  </div>
);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {showSplash && <Splash onClick={() => setShowSplash(false)} />}
      <div style={{ width: '420px', height: '600px', display: showSplash ? 'none' : 'block' }}>
        <LiFiWidget config={widgetConfig} />
      </div>
    </div>
  );
}
