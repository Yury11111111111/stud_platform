import React, { FC } from "react";

interface Props {
    ClassName: string
}

const Lection: FC<Props> = ({ ClassName }) => {
    return (
        <svg className="svg" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={ClassName} d="M30.625 10.2083V24.7916C30.625 29.1666 28.4375 32.0833 23.3333 32.0833H11.6667C6.5625 32.0833 4.375 29.1666 4.375 24.7916V10.2083C4.375 5.83329 6.5625 2.91663 11.6667 2.91663H23.3333C28.4375 2.91663 30.625 5.83329 30.625 10.2083Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M21.1458 6.5625V9.47917C21.1458 11.0833 22.4583 12.3958 24.0625 12.3958H26.9792" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M11.6667 18.9584H17.5" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M11.6667 24.7916H23.3333" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};

export default Lection;