import React from "react";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material/TextField";
import styles from "./style/primaryTextField.module.css";

type PrimaryTextFieldProps = TextFieldProps & {

};

const PrimaryTextField = ({ label, placeholder, variant, value, onChange, fullWidth, margin }: PrimaryTextFieldProps) => {
    return (
        <TextField
            label={label}
            placeholder={placeholder}
            variant={variant}
            value={value}
            onChange={onChange}
            fullWidth={fullWidth}
            margin={margin}
            InputLabelProps={{
                className: styles.inputLabel,
                shrink: true
            }}
        />
    );
};

export default PrimaryTextField;