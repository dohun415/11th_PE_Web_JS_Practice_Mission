import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import './index.css'

// src/routes 파일로부터 자동 생성된 routeTree로 라우터를 만든다.
const router = createRouter({ routeTree })

// 라우터 타입을 등록하면 Link, useParams 등에서 경로 자동완성과 타입 검사를 받을 수 있다.
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// React 앱을 HTML의 root 요소에 연결하는 시작점이다.
// StrictMode는 개발 중 잠재적인 문제를 확인하는 데 도움을 준다.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
