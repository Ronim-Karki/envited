import './App.css';
import BirthdayBash from './Component/BirthdayBash';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Create from './Component/Create';
import { AppProvider } from './context';
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="event" element={<BirthdayBash />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
