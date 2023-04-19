import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    primary: '#FFC0CB',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>

  )
}
