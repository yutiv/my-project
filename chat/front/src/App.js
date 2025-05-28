import { createTheme } from '@mui/material/styles';
import SimpleBottomNavigation from "./componnents/navigateBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelloHome } from './pages/home';
import { HelloChat } from './pages/chat';
import { HelloLogin } from './pages/login';
import { HelloRegistration } from './pages/registretion';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#1976d2',
      }
    }
  })
  return (
    <BrowserRouter>
      <SimpleBottomNavigation />
      <Routes>
        <Route path='/home' element={<HelloHome />} />
        <Route path='/chat' element={<HelloChat />} />
        <Route path='/login' element={<HelloLogin />} />
        <Route path='/registration' element={<HelloRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;