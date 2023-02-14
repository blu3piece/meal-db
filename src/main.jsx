import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { AppProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AppProvider>
    <App />
  </AppProvider>
  // React.Strictmode는 오류 검증을 위해 렌더링을 두번한다.
)
