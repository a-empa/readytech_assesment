import React from 'react';
import Typography, { TypographyProps } from '@mui/material/Typography';
import styles from './style/primaryTypography.module.css';

interface PrimaryTypographyProps extends TypographyProps {
    children: React.ReactNode;
    bodyBlack?: boolean;
}

const PrimaryTypography = ({ children, variant, color, bodyBlack }: PrimaryTypographyProps) => {
    return (
        <Typography
            variant={variant}
            color={color}
            classes={{
                root: styles.root,
                button: styles.button,
                h5: styles.h5,
                h6: styles.h6,
                body1: bodyBlack ? styles.body1 : styles.body1Black,
            }}
        >
            {children}
        </Typography>
    );
};

export default PrimaryTypography;