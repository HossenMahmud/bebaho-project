import { ThemeProvider } from '@mui/material';
import '../styles/globals.css'
import { theme } from "../theme/index";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
