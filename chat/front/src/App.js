import { createTheme } from '@mui/material/styles';
import SimpleBottomNavigation from "./componnents/navigateBar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelloHome } from './pages/home';
import { HelloChat } from './pages/chat';

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
        <Route path='/home' element={<HelloHome />}/> 
        <Route path='/chat' element={<HelloChat />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;