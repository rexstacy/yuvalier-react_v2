import { Field } from "formik";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css// 
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Datefield(props: fieldProps) {

    const [fieldDate, setFieldDate] = useState(new Date());
    return (
        <>
            <label htmlFor={props.fieldname}>{props.displayname}</label>
            {/* <Field name={props.fieldname} id={props.fieldname} className="form-control"></Field> */}
            <DatePicker className="form-control"
                selected={fieldDate}
                onChange={(date) => setFieldDate(date!)}
                dateFormat={props.dateformat || "dd.MM.yyyy"}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              
                minDate={new Date(2015,1,1)}
            />
        </>
    )



}

interface fieldProps {
    fieldname: string;
    displayname: string;
    dateformat?: string;
}