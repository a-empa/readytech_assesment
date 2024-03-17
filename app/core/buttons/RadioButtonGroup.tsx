import React, { useState } from 'react';
import { Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from '@mui/material';
import styles from './style/radioButtonGroup.module.css';
interface RadioButtonGroupProps {
    options: string[];
    defaultValue?: string;
    title?: string;
    row?: boolean;
    onChange?: (value: string) => void;
}

const RadioButtonGroup = ({
    options,
    defaultValue,
    title,
    onChange,
    row
}: RadioButtonGroupProps) => {
    const [value, setValue] = useState<string>(defaultValue || '');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <FormControl>
            <FormLabel component="legend">{title}</FormLabel>
            <RadioGroup value={value} onChange={handleChange} row={row}>
                {options.map((option) => (
                    <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio sx={{
                            "&.Mui-checked": { color: "#51bf88" },
                            "&.MuiRadio-root:hover": { backgroundColor: "#baead2" }
                        }} />}
                        label={option}
                        className={styles.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}

export default RadioButtonGroup;