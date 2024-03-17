import React from "react";
import TextField from "@mui/material/TextField";
import { TextFieldProps } from "@mui/material/TextField";
import styles from "./style/primaryTextField.module.css";
import { Typography } from "@mui/material";

type PrimaryTextFieldProps = TextFieldProps & {
    errorMessage?: string;
    optional?: boolean;
};

const PrimaryTextField = ({ label, placeholder, variant, value, onChange, multiline, errorMessage, optional }: PrimaryTextFieldProps) => {

    return (
        <>
            <TextField
                multiline={multiline}
                label={label}
                placeholder={placeholder}
                variant={variant}
                value={value}
                onChange={onChange}
                fullWidth
                margin="normal"
                InputLabelProps={{
                    className: styles.inputLabel,
                    classes: {
                        focused: errorMessage ? styles.error : styles.focused,
                    },
                    shrink: true
                }}
                InputProps={{
                    classes: {
                        notchedOutline: errorMessage ? styles.error : styles.notchedOutline,
                    },
                }}
                rows={multiline ? 8 : 1}
            />
            {errorMessage &&
                <Typography variant="caption" component="div" className={styles.error} >
                    {errorMessage}
                </Typography>
            }
            {optional && <Typography variant="caption" component="div" className={styles.optional} >
                Optional
            </Typography>}
        </>
    );
};

export default PrimaryTextField;