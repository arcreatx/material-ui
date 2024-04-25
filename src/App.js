import React from 'react';
import './App.css';
import SearchAppBar from './components/SearchAppBar';
import Home from './pages/Home';
import Detail from './pages/Detail';
import {Routes, Route} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {BrowserRouter} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';


const primary = {
  main: '#ef5350',
  light: '#d32f2f',
  dark: '#c62828',
  contrastText: '#fff',
};

const theme = createTheme({
  palette: {
    primary: primary,
    mode: 'dark',
  },
});

function App() {
  return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <SearchAppBar color="grey"/>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="job/:id" element={<Detail />}/>
            <Route path="/pages/:page" element={<Home/>}/>
          </Routes>
          {/* <Outlet/> */}
        </ThemeProvider>
      </BrowserRouter>
  );
}

export default App;
