import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// React 앱을 HTML의 root 요소에 연결하는 시작점이다.
// StrictMode는 개발 중 잠재적인 문제를 확인하는 데 도움을 준다.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
