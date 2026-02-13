import React, { useState, useEffect } from 'react';
import { LiFiWidget } from '@lifi/widget';

// 先行者极简配置 - 保持 v1.3 预测面板样式
const widgetConfig = {
  containerStyle: {
    border: '1px solid rgb(234, 234, 234)',
    borderRadius: '20px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
  },
  theme: {
    palette: {
      primary: { main: '#000000' },
      secondary: { main: '#F5F5F5' },
    },
    shape: {
      borderRadius: 12,
      borderRadiusSecondary: 24,
    },
    typography: {
      fontFamily: 'Inter, system-ui, sans-serif',
    },
  },
  appearance: 'light',
  variant: 'compact', // 保持 v1.3 预测面板的紧凑感
  subvariant: 'default',
  sdkConfig: {
    slippage: 0.005, // 安全滑点 0.5%
  },
};

const App = () => {
  const [loading, setLoading] = useState(true);

  // 模拟交付前的终焉时刻 (Splash Screen)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5秒展示标语
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        color: '#000',
        fontFamily: 'serif',
      }}>
        {/* Logo 占位 - 仅在启动页出现 */}
        <div style={{ 
          width: '60px', 
          height: '60px', 
          backgroundColor: '#000', 
          borderRadius: '50%',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          fontSize: '24px',
          fontWeight: 'bold'
        }}>L2</div>
        
        <h2 style={{ letterSpacing: '0.2em', fontWeight: '300', fontSize: '1.2rem' }}>
          世 界 太 吵 书 写，然 后 交 付
        </h2>
        <h2 style={{ letterSpacing: '0.2em', fontWeight: '300', fontSize: '1.2rem', marginTop: '10px' }}>
          终 焉 在 此 刻，交 还 所 有
        </h2>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: 'white', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '5vh' 
    }}>
      {/* 导航头 - 极简主义 */}
      <nav style={{ 
        width: '100%', 
        maxWidth: '420px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '40px',
        padding: '0 20px'
      }}>
        <span style={{ fontWeight: '800', fontSize: '1.2rem', letterSpacing: '-0.05em' }}>NAVIGATOR.</span>
        <div style={{ width: '8px', height: '8px', backgroundColor: '#000', borderRadius: '50%' }}></div>
      </nav>

      {/* LIFI 交互组件 - 核心逻辑 */}
      <main style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <LiFiWidget config={widgetConfig} />
      </main>

      {/* 页脚 - 先行者声明 */}
      <footer style={{ 
        marginTop: 'auto', 
        paddingBottom: '30px', 
        color: '#AAA', 
        fontSize: '0.7rem',
        textAlign: 'center',
        letterSpacing: '0.1em'
      }}>
        &copy; 2026 L2 NAVIGATOR. 交付终焉.
      </footer>
    </div>
  );
};

export default App;
