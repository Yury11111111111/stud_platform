import React, { FC, useState } from "react";
import "./Calendar.css";
import CloseCalendar from "../../img/CloseCalendar";
import Footer from "../Footer/Footer";

type DayNumber = number | null;
type Week = DayNumber[];
type MonthData = {
  weeks: Week[];
  name: string;
  year: number;
  month: number;
};

interface CalendarProps {
  setCalendarOpen: (open: boolean) => void;
}

interface SelectedDay {
  day: number;
  month: number;
  year: number;
}

const Calendar: FC<CalendarProps> = (props) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  const [selectedDay, setSelectedDay] = useState<SelectedDay | null>(null); // Состояние для выделенного дня

  const monthsCount = 3;

  const generateCalendarData = (): MonthData[] => {
    return Array.from({ length: monthsCount }, (_, index) => {
      const month = (currentMonth + index) % 12;
      const year = currentYear + Math.floor((currentMonth + index) / 12);

      const firstDayOfWeek = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      const firstDay = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

      const daysArray: DayNumber[] = Array(firstDay).fill(null);
      for (let i = 1; i <= daysInMonth; i++) {
        daysArray.push(i);
      }

      const weeks: Week[] = [];
      while (daysArray.length > 0) {
        const week = daysArray.slice(0, 7);
        daysArray.splice(0, 7);
        weeks.push(
          week.length < 7
            ? [...week, ...Array(7 - week.length).fill(null)]
            : week
        );
      }

      return {
        weeks,
        name: [
          "Январь",
          "Февраль",
          "Март",
          "Апрель",
          "Май",
          "Июнь",
          "Июль",
          "Август",
          "Сентябрь",
          "Октябрь",
          "Ноябрь",
          "Декабрь",
        ][month],
        year,
        month,
      };
    });
  };

  const calendarData = generateCalendarData();

  const handleDayClick = (day: number, month: number, year: number) => {
    setSelectedDay({ day, month, year });
  };

  return (
    <>
      <div className="calendar">
        <div
          className="calendar__close"
          onClick={() => props.setCalendarOpen(false)}
        >
          <CloseCalendar />
        </div>
        {calendarData.map((monthData, monthIndex) => (
          <div key={monthIndex} className="calendar__month">
            <h2 className="calendar__month-header">
              {monthData.name} {monthData.year}
            </h2>

            <div className="calendar__weekdays-header">
              {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day, i) => (
                <div key={i} className="calendar__weekday">
                  {day}
                </div>
              ))}
            </div>

            {monthData.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="calendar__week">
                {week.map((day, dayIndex) => {
                  const isCurrent =
                    monthData.month === currentMonth &&
                    monthData.year === currentYear &&
                    day === currentDay;

                  const isSelected =
                    selectedDay &&
                    selectedDay.day === day &&
                    selectedDay.month === monthData.month &&
                    selectedDay.year === monthData.year;

                  return (
                    <div
                      key={dayIndex}
                      className={`calendar__day ${
                        !day ? "calendar__day--empty" : ""
                      } ${isCurrent ? "calendar__day--current" : ""} ${
                        isSelected ? "calendar__day--selected" : ""
                      }`}
                      onClick={() =>
                        day &&
                        handleDayClick(day, monthData.month, monthData.year)
                      }
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer currentPage={3} />
    </>
  );
};

export default Calendar;
