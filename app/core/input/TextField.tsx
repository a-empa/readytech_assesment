import React from 'react';
import TextField from '@mui/material/TextField';

interface TextFieldProps {
    label: string;
    variant: "outlined" | "filled" | "standard";
}

const TextFieldComponent = ({ label, variant }: TextFieldProps) => {
    return (
        <TextField label={label} variant={variant} />
    );
};

export default TextFieldComponent;