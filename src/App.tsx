import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import Auth from './Pages/Auth/Auth';
import Account from './Pages/Account/Account';
import NotFound from './Pages/NotFound/NotFound';
import './App.css';

function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <div className="app">
      <Routes>
        {/* Публичный маршрут */}
        <Route path="/auth" element={<Auth />} />
        
        {/* Защищённые маршруты */}
        <Route
          path="/account"
          element={isAuth ? <Account /> : <Navigate to="/auth" replace />}
        />
        
        {/* Перенаправление с корня */}
        <Route path="/" element={<Navigate to={isAuth ? "/account" : "/auth"} replace />} />
        
        {/* Обработка несуществующих маршрутов */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;