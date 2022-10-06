import { render } from '@testing-library/react';
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import './interviewPage.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';



function InterviewPage() {

    // const Dropdown = ({ placeholder, options }) => {
    //     const getDisplay = () => {
    //         return placeholder;
    //     }
    // }

    const [startDate, setStartDate] = useState(new Date());
    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-suucess" : "text-error";
    }
    return (
        <div className='dropdown-container'>
            <form>
                {/* <div className='dropdown-input'>
                <div className='dropdown-selcted-value'>
                    {getDisplay()}
                    <div className='dropdown-menu'>
                        {options.map((option) => (
                            <div key={option.value} className='dropdown-item'>
                                {options.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}

                <DatePicker
                    controls={['calendar', 'time']}
                    showTimeSelect
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    timeClassName={handleColor}
                />
            </form>
        </div>
    )
}

export default InterviewPage