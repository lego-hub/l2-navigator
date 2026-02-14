import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { LiFiWidget } from '@lifi/widget'

const App = () => {
  const [show, setShow] = useState(false)
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {!show ? (
        <div onClick={() => setShow(true)} style={{ cursor: 'pointer', textAlign: 'center' }}>
          <div style={{ fontSize: '24px', letterSpacing: '8px', marginBottom: '20px' }}>LOGO</div>
          <div style={{ fontSize: '14px', color: '#666', letterSpacing: '4px' }}>
            世 界 太 吵 书 写，然 后 交 付<br/>终 焉 在 此 刻，交 还 所 有
          </div>
        </div>
      ) : (
        <div style={{ width: '420px', height: '640px' }}>
          <LiFiWidget config={{ 
            integrator: 'l2-navigator',
            appearance: 'light',
            theme: { palette: { primary: { main: '#000' } } }
          }} />
        </div>
      )}
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
