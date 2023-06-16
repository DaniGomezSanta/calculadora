import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App'


const theme = createTheme({
  palette:{
    primary:{
      main: '#212121'
    },
    secondary:{
      main: '#eeeeee'
    }
  }
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
