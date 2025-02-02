import './Account.css';
import home from "../../img/home.svg";
import calendar from "../../img/calendar.svg";
import foto from "./acakiy.jpg";

import razbivki from "../../img/razbivki.svg";
import tasks from "../../img/tasks.svg";
import profile from "../../img/profile.svg";
import lection from "../../img/lection.svg";
import comands from "../../img/comands.svg";

import { Layout } from "antd";
import { useState } from 'react';

const { Content } = Layout;

interface Student {
    name: string;
    foto: string;
    faculty: string;
    strikes: number;
}

interface Event {
    time: string;
    title: string;
}

const student: Student = {
    name: "Акакий Акакиевич",
    foto: foto,
    faculty: "ВШКМиС",
    strikes: 3
};

const eventsToday: Event[] = [
    { time: "09:00", title: "Утреннее собрание" },
    { time: "11:30", title: "Лекция по математике" },
    { time: "14:00", title: "Обеденный перерыв" },
    { time: "15:00", title: "Программироване" },
    { time: "20:00", title: "бегит, прес качат" },
];

const today: Date = new Date();
const dayOfWeek: number = today.getDay();
const month: number = today.getMonth();

const currentDay: number = dayOfWeek === 0 ? 6 : dayOfWeek - 1

const startOfWeek: Date = new Date(today);
startOfWeek.setDate(today.getDate() - (currentDay));

const weekNumbers: number[] = [];

for (let i = 0; i < 7; i++) {
    weekNumbers.push(startOfWeek.getDate());
    startOfWeek.setDate(startOfWeek.getDate() + 1);
}

const monthNames: string[] = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
];


const currentDayStyle: React.CSSProperties = {
    backgroundColor: '#860000',
    borderRadius: '9px',
    color: 'white',
};

const highlightedButtonStyle: React.CSSProperties = {
    border: '1px #860000 solid',
    borderRadius: '9px',
    color: '#860000',
}

const colors: string[] = [
    'color1',
    'color2',
    'color3',
    'color4',
    'color5'
];


export default function Account(): JSX.Element {
    const [highlightedButton, setHighlightedButton] = useState<number>(currentDay)

    const getRandomStyle = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };


    return (
        <div>
            <header>
                <h6 className='header__title'>
                    ЛИЧНЫЙ КАБИНЕТ
                </h6>
                <img className='header__home' src={home} alt="home" />
            </header>
            <Content className='account-content'>
                <div className='content__top'>
                    <img className='content__top-foto' src={student.foto} alt="foto" />
                    <div className='content__top__info'>
                        <p className='content__top__info-name'>{student.name}</p>
                        <p className='content__top__info-faculty'>{student.faculty}</p>
                        <p className='content__top__info-strikes'>Количество страйков: {student.strikes}</p>
                    </div>
                </div>
                <div className='content__bottom'>
                    <h4 className='content__bottom-title'>Календарь событий</h4>
                    <div className='content__bottom-inline'>
                        <p className='content__bottom-date'>
                            {weekNumbers[currentDay]} {monthNames[month]}, ?? неделя
                        </p>
                        <img className='content__bottom-calendar-icon' src={calendar} alt="calendar" />
                    </div>
                    <div className='content__bottom-weekday'>
                        {weekNumbers.map((date, index) => (
                            <div key={index} className='content__bottom-weekday-day'
                                style={
                                    currentDay === index
                                        ?
                                        currentDayStyle
                                        :
                                        highlightedButton === index
                                            ?
                                            highlightedButtonStyle
                                            :
                                            {}
                                }
                                onClick={() => setHighlightedButton(index)}
                            >
                                {date}
                                <div className='content__bottom-weeksday-weekday'>
                                    {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'][index]}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='content__bottom-events'>
                        {eventsToday.map((event) => (
                            <div className={`content__bottom-events-event ${getRandomStyle()}`}>
                                <div className='content__bottom-events-event-time'>
                                    {event.time}
                                </div>
                                <div className='content__bottom-events-event-title'>
                                    {event.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Content>
            <footer>
                <nav>
                    <ul>
                        <li><img src={razbivki} alt="razbivki" /> Разбивки</li>
                        <li><img src={tasks} alt="tasks" />Задания</li>
                        <li className='nav__selected'><img src={profile} alt="profile" />Профиль</li>
                        <li><img src={lection} alt="lection" />Лекции</li>
                        <li><img src={comands} alt="comands" />Команда</li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
