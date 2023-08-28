import React from 'react';
import {Field, useField} from "formik";

function InputValidation({label,...props}) {
    const [field,meta , helpers] = useField(props)
    return (
        <>
            <label className="w-full flex flex-wrap">
                <Field
                    {...field}
                    {...props}
                    className="w-full flex p-2 rounded focus:outline-none border focus:border-orange-300 bg-orange-100 caret-amber-700 text-gray-700 placeholder:text-end placeholder:text-sm placeholder-amber-900"
                />
                {meta.touched && meta.error ? (
                    <div dir="rtl" className="border anime-show border-red-500 bg-red-300 p-2 rounded w-full text-gray-700 text-sm text-start mt-3 ">{meta.error}</div>
                ) : null}
            </label>
        </>
    );
}

export default InputValidation;