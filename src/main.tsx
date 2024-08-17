import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle.ts';
import theme from './styles/theme.ts';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
)
