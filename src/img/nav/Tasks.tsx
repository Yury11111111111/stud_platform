import React, { FC } from "react";

interface Props {
    ClassName: string
}

const Tasks: FC<Props> = ({ ClassName }) => {
    return (
        <svg className="svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={ClassName} d="M14.1714 2.7428H11.4286C4.57142 2.7428 1.82857 5.48566 1.82857 12.3428V20.5714C1.82857 27.4285 4.57142 30.1714 11.4286 30.1714H19.6571C26.5143 30.1714 29.2571 27.4285 29.2571 20.5714V17.8285" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M21.0834 4.14172L10.2766 14.9486C9.86514 15.36 9.45372 16.1691 9.37143 16.7589L8.78172 20.8869C8.56229 22.3817 9.61829 23.424 11.1131 23.2183L15.2411 22.6286C15.8171 22.5463 16.6263 22.1349 17.0514 21.7234L27.8583 10.9166C29.7234 9.05143 30.6011 6.88457 27.8583 4.14172C25.1154 1.39886 22.9486 2.27657 21.0834 4.14172Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path className={ClassName} d="M19.5337 5.69141C20.4526 8.96912 23.0172 11.5337 26.3086 12.4663" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};

export default Tasks;