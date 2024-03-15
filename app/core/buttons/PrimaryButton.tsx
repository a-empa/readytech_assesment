import React from 'react';
import Button from '@mui/material/Button';
import PrimaryTypography from '../text/PrimaryTypography';
import { ButtonProps } from '@mui/material/Button';
import styles from "./style/primaryButton.module.css";

interface PrimaryButtonProps extends ButtonProps {
    onClick: () => void;
    text: string;
}

const PrimaryButton = ({ onClick, disabled, text, variant, fullWidth }: PrimaryButtonProps) => {
    return (
        <Button
            variant={variant}
            onClick={onClick}
            disabled={disabled}
            classes={{ contained: styles.contained, outlined: styles.outlined }}
            sx={{ textTransform: "none" }}
            fullWidth={fullWidth}
        >
            <PrimaryTypography variant="button" component="div">
                {text}
            </PrimaryTypography>
        </Button>
    );
}

export default PrimaryButton;