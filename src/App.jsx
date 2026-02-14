import { LiFiWidget } from '@lifi/widget';
import { useState, useEffect } from 'react';

const widgetConfig = {
  integrator: 'l2-navigator',
  containerStyle: {
    border: '1px solid #f0f0f0',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
  },
  appearance: 'light',
  theme: {
    palette: {
      primary: { main: '#000000' },
      background: { paper: '#ffffff', default: '#ffffff' },
    },
  },
};

const Splash = ({ onClick }) => (
  <div 
    onClick={onClick}
    style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      backgroundColor: 'white', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', cursor: 'pointer', zIndex: 9999
    }}
  >
    <div style={{ fontSize: '24px', letterSpacing: '8px', marginBottom: '20px', color: '#000' }}>LOGO</div>
    <div style={{ fontSize: '14px', color: '#666', letterSpacing: '4px', textAlign: 'center', padding: '0 20px' }}>
      世 界 太 吵 书 写，然 后 交 付<br/>终 焉 在 此 刻，交 还 所 有
    </div>
  </div>
);

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: 'white', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {showSplash ? (
        <Splash onClick={() => setShowSplash(false)} />
      ) : (
        <div style={{ 
          width: '100%', 
          maxWidth: '420px', 
          height: '640px', 
          animation: 'fadeIn 0.5s ease' 
        }}>
          <LiFiWidget config={widgetConfig} />
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
