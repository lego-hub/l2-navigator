import { LiFiWidget } from '@lifi/widget';

const widgetConfig = {
  integrator: 'l2-navigator',
  appearance: 'light',
  containerStyle: {
    border: '1px solid #f0f0f0',
    borderRadius: '16px',
  }
};

export default function App() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'white' 
    }}>
      <div style={{ width: '420px', height: '640px' }}>
        <LiFiWidget config={widgetConfig} />
      </div>
    </div>
  );
}
