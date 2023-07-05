import { CssBaseline } from '@mui/material';
import './App.css'
import Home from './pages/Home'
import theme from './themes/themes'
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import CarDetail from './pages/CarDetail';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<CarDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App