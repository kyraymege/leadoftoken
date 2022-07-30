import '../styles/globals.css'
import { persistor, store } from '../redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from "next-themes"

function MyApp({ Component, pageProps }) {
  return (

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
