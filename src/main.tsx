import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle.ts';
import App from './App.tsx'
import theme from './styles/theme.ts';

createRoot(document.getElementById('root')!).render(
  <>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </>
)
