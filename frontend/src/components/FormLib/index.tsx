import { useField } from "formik";
import { ErrorMsg, FormTextInput } from "./formLib.styles";
import React from "react";

interface FormInputProps {
    name: string;
    [key: string]: any;
}

export const FormInput: React.FC<FormInputProps> = ({ name, ...props }) => {
    const [field, meta] = useField({ name, ...props });

    return (
        <>
            <FormTextInput
                {...field}
                {...props}
            />
            {
                meta.touched && meta.error ? (
                    <ErrorMsg>{meta.error}</ErrorMsg>
                ) : (
                    <ErrorMsg style={{ visibility: "hidden" }}>.</ErrorMsg>
                )
            }
        </>
    );
}