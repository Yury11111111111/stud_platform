import React, { FC } from "react";
import "./Footer.css";

import Razbivki from "../../img/nav/Razbivki";
import Tasks from "../../img/nav/Tasks";
import Profile from "../../img/nav/Profile";
import Lection from "../../img/nav/Lection";
import Comands from "../../img/nav/Comands";

interface FooterProps {
  currentPage: number;
}

const Footer: FC<FooterProps> = (props) => {
  return (
    <footer>
      <nav>
        <ul>
          <li className={props.currentPage === 1 ? "nav__selected" : ""}>
            <Razbivki
              ClassName={
                props.currentPage === 1
                  ? "selected-stroke-svg"
                  : "not_selected-stroke-svg"
              }
            />{" "}
            Разбивки
          </li>
          <li className={props.currentPage === 2 ? "nav__selected" : ""}>
            <Tasks
              ClassName={
                props.currentPage === 2
                  ? "selected-stroke-svg"
                  : "not_selected-stroke-svg"
              }
            />
            Задания
          </li>
          <li className={props.currentPage === 3 ? "nav__selected" : ""}>
            <Profile
              ClassName={
                props.currentPage === 3
                  ? "selected-fill-svg"
                  : "not_selected-fill-svg"
              }
            />
            Профиль
          </li>
          <li className={props.currentPage === 4 ? "nav__selected" : ""}>
            <Lection
              ClassName={
                props.currentPage === 4
                  ? "selected-stroke-svg"
                  : "not_selected-stroke-svg"
              }
            />
            Лекции
          </li>
          <li className={props.currentPage === 5 ? "nav__selected" : ""}>
            <Comands
              ClassName={
                props.currentPage === 5
                  ? "selected-stroke-svg"
                  : "not_selected-stroke-svg"
              }
            />
            Команда
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
