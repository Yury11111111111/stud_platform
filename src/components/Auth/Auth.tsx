import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Button, Input, message } from 'antd';
import { AuthContext } from '../../context/AuthContext';
import './Auth.css';
import logo from '../../img/logo.png';
import red_paper from '../../img/red_paper.png';
import white_paper from '../../img/white_paper.png';

const { Content } = Layout;

interface User {
  password: string;
}

const mockUsers: Record<string, User> = {
  user1: { password: 'password1' },
  user2: { password: 'password2' },
  admin1: { password: 'admin123' }
};

export default function Auth() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login: authLogin } = useContext(AuthContext);

  const handleSubmit = () => {
    setLoading(true);
    
    // Имитация асинхронного запроса
    setTimeout(() => {
      if (login in mockUsers && mockUsers[login].password === password) {
        authLogin('auth-token'); // Сохраняем токен авторизации
        message.success('Вход выполнен успешно!');
        navigate('/account');
      } else {
        message.error('Неверный логин или пароль');
      }
      setLoading(false);
    }, 0);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="auth-container">
      <header className="auth-header">
        <img className='header__white-paper header-paper' src={white_paper} alt="" />
        <img className='header__red-paper header-paper' src={red_paper} alt="" />
        <img className='header__logo' src={logo} alt="Логотип компании" />
      </header>

      <Content className="auth-content">
        <h3 className='content__title'>Личный кабинет</h3>
        
        <div className='content__inputs' onKeyDown={handleKeyPress}>
          <Input
            className='content__inputs-login red-border'
            placeholder='Логин'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            disabled={loading}
          />
          <Input.Password
            className='content__inputs-password red-border'
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className='content__buttons'>
          <Button
            className='content__buttons-enter'
            id='red-button'
            type="primary"
            size="large"
            onClick={handleSubmit}
            loading={loading}
          >
            Войти
          </Button>
          <Button
            className='content__buttons-go-to-main'
            id='red-border'
            size="large"
            onClick={() => navigate('/main')}
            disabled={loading}
          >
            На главную
          </Button>
        </div>
      </Content>

      <footer className="auth-footer">
        <img className='footer__white-paper footer-paper' src={white_paper} alt="" />
        <img className='footer__red-paper footer-paper' src={red_paper} alt="" />
      </footer>
    </div>
  );
}