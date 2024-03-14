import React from 'react';
import Button from '@mui/material/Button';

interface PrimaryButtonProps {
    onClick: () => void;
    disabled?: boolean;
    text: string;
}

const PrimaryButton = ({ onClick, disabled, text }: PrimaryButtonProps) => {
    return (
        <Button variant="contained" color="primary" onClick={onClick} disabled={disabled} >
            {text}
        </Button>
    );
}

export default PrimaryButton;