import React, { FC } from "react";

interface Props {
    ClassName: string
}

const Razbivki: FC<Props> = ({ ClassName }) => {
    return (
        <svg className="svg" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={ClassName} d="M2.83333 12.375V8.9375C2.83333 5.51375 5.68083 2.75 9.20833 2.75H12.75" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M21.25 2.75H24.7917C28.3192 2.75 31.1667 5.51375 31.1667 8.9375V12.375" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M31.1667 22V24.0625C31.1667 27.4863 28.3192 30.25 24.7917 30.25H22.6667" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M12.75 30.25H9.20833C5.68083 30.25 2.83333 27.4863 2.83333 24.0625V20.625" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M14.875 9.625V12.375C14.875 13.75 14.1667 14.4375 12.75 14.4375H9.91667C8.5 14.4375 7.79167 13.75 7.79167 12.375V9.625C7.79167 8.25 8.5 7.5625 9.91667 7.5625H12.75C14.1667 7.5625 14.875 8.25 14.875 9.625Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M26.2083 9.625V12.375C26.2083 13.75 25.5 14.4375 24.0833 14.4375H21.25C19.8333 14.4375 19.125 13.75 19.125 12.375V9.625C19.125 8.25 19.8333 7.5625 21.25 7.5625H24.0833C25.5 7.5625 26.2083 8.25 26.2083 9.625Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M14.875 20.625V23.375C14.875 24.75 14.1667 25.4375 12.75 25.4375H9.91667C8.5 25.4375 7.79167 24.75 7.79167 23.375V20.625C7.79167 19.25 8.5 18.5625 9.91667 18.5625H12.75C14.1667 18.5625 14.875 19.25 14.875 20.625Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M26.2083 20.625V23.375C26.2083 24.75 25.5 25.4375 24.0833 25.4375H21.25C19.8333 25.4375 19.125 24.75 19.125 23.375V20.625C19.125 19.25 19.8333 18.5625 21.25 18.5625H24.0833C25.5 18.5625 26.2083 19.25 26.2083 20.625Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};

export default Razbivki;