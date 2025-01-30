import './Auth.css';

import logo from '../../img/logo.png';
import red_paper from '../../img/red_paper.png';
import white_paper from '../../img/white_paper.png';

import { Layout, Button, Input } from "antd";
import { useState } from 'react';

const { Content } = Layout;

interface User {
    password: string;
}

const mockUsers: Record<string, User> = {
    user1: {
        password: 'password1'
    },
    user2: {
        password: 'password2'
    },
    admin1: {
        password: 'admin123'
    }
};

export default function Auth() {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isWrongPassword, setIsWrongPassword] = useState<boolean>(false);

    const Enter = () => {
        if (login in mockUsers && mockUsers[login].password === password) {
            // todo
        } else {
            setIsWrongPassword(true)
        }
    };

    return (
        <div>
            <header>
                <img className='header__white-paper header-paper' src={white_paper} alt="White Paper" />
                <img className='header__red-paper header-paper' src={red_paper} alt="Red Paper" />
                <img className='header__logo' src={logo} alt="Logo" />
            </header>
            <Content className="content">
                <h3 className='content__title'>Личный кабинет</h3>
                <div className='content__inputs'>
                    <Input
                        className='content__inputs-login'
                        id='red-border'
                        placeholder='Введите логин'
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input
                        className='content__inputs-password'
                        id='red-border'
                        placeholder='Введите пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                </div>
                <div
                    className='content__wrong_password'
                    style={{ visibility: isWrongPassword ? 'visible' : 'hidden' }}
                >
                    Неверный логин или пароль
                </div>
                <div className='content__buttons'>
                    <Button
                        className='content__buttons-enter'
                        id='red-button'
                        size={"large"}
                        onClick={Enter}
                    >
                        Войти
                    </Button>
                    <Button
                        className='content__buttons-go-to-main'
                        id='red-border'
                        size={"large"}
                    >
                        На главную
                    </Button>
                </div>
            </Content>
            <footer>
                <img className='footer__white-paper footer-paper' src={white_paper} alt="White Paper" />
                <img className='footer__red-paper footer-paper' src={red_paper} alt="Red Paper" />
            </footer>
        </div>
    );
}
