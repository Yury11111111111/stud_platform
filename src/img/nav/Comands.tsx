import React, { FC } from "react";

interface Props {
    ClassName: string
}

const Comands: FC<Props> = ({ ClassName }) => {
    return (
        <svg className="svg" width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={ClassName} d="M21.75 12.4584C21.6875 12.448 21.6146 12.448 21.5521 12.4584C20.1146 12.4063 18.9688 11.2292 18.9688 9.77088C18.9688 8.28129 20.1667 7.08337 21.6562 7.08337C23.1458 7.08337 24.3437 8.29171 24.3437 9.77088C24.3333 11.2292 23.1875 12.4063 21.75 12.4584Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M20.6771 20.0416C22.1042 20.2812 23.6771 20.0312 24.7813 19.2916C26.25 18.3125 26.25 16.7083 24.7813 15.7291C23.6667 14.9895 22.0729 14.7395 20.6458 14.9895" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M9.21875 12.4584C9.28125 12.448 9.35417 12.448 9.41667 12.4584C10.8542 12.4063 12 11.2292 12 9.77088C12 8.28129 10.8021 7.08337 9.3125 7.08337C7.82292 7.08337 6.625 8.29171 6.625 9.77088C6.63542 11.2292 7.78125 12.4063 9.21875 12.4584Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M10.2917 20.0416C8.86458 20.2812 7.29167 20.0312 6.1875 19.2916C4.71875 18.3125 4.71875 16.7083 6.1875 15.7291C7.30208 14.9895 8.89583 14.7395 10.3229 14.9895" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M15.5 20.2396C15.4375 20.2292 15.3646 20.2292 15.3021 20.2396C13.8646 20.1875 12.7188 19.0105 12.7188 17.5521C12.7188 16.0625 13.9167 14.8646 15.4062 14.8646C16.8958 14.8646 18.0938 16.073 18.0938 17.5521C18.0833 19.0105 16.9375 20.198 15.5 20.2396Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M12.4687 23.5209C11 24.5 11 26.1042 12.4687 27.0834C14.1354 28.198 16.8646 28.198 18.5312 27.0834C20 26.1042 20 24.5 18.5312 23.5209C16.875 22.4167 14.1354 22.4167 12.4687 23.5209Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M1 11V8.14286C1 3.85714 3.9 1 8.25 1H22.75C27.1 1 30 3.85714 30 8.14286V11" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M1 21V23.8571C1 28.1429 3.9 31 8.25 31H22.75C27.1 31 30 28.1429 30 23.8571V21" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};

export default Comands;