import React from 'react';
import { Radio, FormControlLabel } from '@mui/material';

interface RadioButtonProps {
    value: string;
    label: string;
    checked: boolean;
    onChange: (value: string) => void;
}

const RadioButton = ({
    value,
    label,
    checked,
    onChange,
}: RadioButtonProps) => {
    const handleChange = () => {
        onChange(value);
    };

    return (
        <FormControlLabel
            value={value}
            control={<Radio checked={checked} onChange={handleChange} />}
            label={label}
        />
    );
}

export default RadioButton;